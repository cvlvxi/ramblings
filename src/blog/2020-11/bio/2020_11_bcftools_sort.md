<!-- vscode-markdown-toc -->
* 1. [Prereqs](#Prereqs)
* 2. [Getting compile_commands.json](#Gettingcompile_commands.json)
* 3. [Structure](#Structure)
	* 3.1. [Compiling and running](#Compilingandrunning)
* 4. [Sort Tests?](#SortTests)
* 5. [Can I lldb this?](#CanIlldbthis)
	* 5.1. [Set break in main](#Setbreakinmain)
	* 5.2. [Run](#Run)
	* 5.3. [Intergration with Clion](#IntergrationwithClion)
* 6. [How does sort_main work?](#Howdoessort_mainwork)
	* 6.1. [sort_blocks](#sort_blocks)
	* 6.2. [buf_push](#buf_push)
	* 6.3. [args_t *args](#args_targs)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


# Understanding bcftools sort

All of the stuff I do will be in my own fork: [here](https://github.com/cvlvxi/bcftools)

##  1. <a name='Prereqs'></a>Prereqs

- Installed htslib (make installed)
- Built bcftools
- See [here](http://samtools.github.io/bcftools/howtos/install.html) for details

##  2. <a name='Gettingcompile_commands.json'></a>Getting compile_commands.json

I'm using compiledb to actually generate the missing `compile_commands.json` file for clangd

See [here](https://github.com/nickdiego/compiledb)

Make sure to run this first: `autoreconf`

Just run make with this wrapped which will target all

`compiledb make`

##  3. <a name='Structure'></a>Structure

Clearly we can see from the code `vcfsort.c` and it has a section in it called `main_sort`

Testing this works I added

```c
int main_sort(int argc, char *argv[])
{
    printf("I am here");
    int c;
    args_t *args  = (args_t*) calloc(1,sizeof(args_t));
    args->argc    = argc; args->argv = argv;
    args->max_mem = 768*1000*1000;
```

###  3.1. <a name='Compilingandrunning'></a>Compiling and running

```bash
./bcftools sort

About:   Sort VCF/BCF file.
Usage:   bcftools sort [OPTIONS] <FILE.vcf>

Options:
    -m, --max-mem <float>[kMG]    maximum memory to use [768M]
    -o, --output <file>           output file name [stdout]
    -O, --output-type <b|u|z|v>   b: compressed BCF, u: uncompressed BCF, z: compressed VCF, v: uncompressed VCF [v]
    -T, --temp-dir <dir>          temporary files [/tmp/bcftools-sort.XXXXXX]

I am here%
```

Sweet.

##  4. <a name='SortTests'></a>Sort Tests? 

- Can't find any? Might have to write some of my own I guess..

Test 

```bash
./bcftools sort -o mytest/sorted.vcf mytest/unsorted.vcf 
Writing to /tmp/bcftools-sort.JRSJGT
Merging 1 temporary files
Cleaning
Done
I am here%   
```

##  5. <a name='CanIlldbthis'></a>Can I lldb this?


###  5.1. <a name='Setbreakinmain'></a>Set break in main

```
➜  bcftools git:(develop) ✗ lldb bcftools 
Voltron loaded.
(lldb) target create "bcftools"
Current executable set to '/path/to/bcftools' (x86_64).
(lldb) run sort -o mytest/sorted.vcf mytest/unsorted.vcf 
Process 17544 launched: '/path/to/bcftools' (x86_64)
Writing to /tmp/bcftools-sort.PvWZtG
Merging 1 temporary files
Cleaning
Done
I am hereProcess 17544 exited with status = 0 (0x00000000) 
(lldb) b vcfsort.c:318
Breakpoint 1: where = bcftools`main_sort + 33 at vcfsort.c:319:31, address = 0x00000001000ae7a1
(lldb) 
```

###  5.2. <a name='Run'></a>Run 

```bash
(lldb) run sort -o mytest/sorted.vcf mytest/unsorted.vcf
Process 17589 launched: '/path/to/bcftools' (x86_64)
bcftools was compiled with optimization - stepping may behave oddly; variables may not be available.
Process 17589 stopped
* thread #1, queue = 'com.apple.main-thread', stop reason = breakpoint 1.1
    frame #0: 0x00000001000ae7a1 bcftools`main_sort(argc=4, argv=0x00007ffeefbfecd8) at vcfsort.c:319:31 [opt]
   316  {
   317      printf("I am here");
   318      int c;
-> 319      args_t *args  = (args_t*) calloc(1,sizeof(args_t));
   320      args->argc    = argc; args->argv = argv;
   321      args->max_mem = 768*1000*1000;
   322      args->output_fname = "-";
Target 0: (bcftools) stopped.
(lldb) 

```

NICE!

###  5.3. <a name='IntergrationwithClion'></a>Intergration with Clion

1. Create a Custom build target (make cmd)

<img src="https://imgur.com/MnkE9w2.png"/>

2. Link the built executable and add the program args

<img src="https://imgur.com/7H1Ud5N.png"/>

3. Now try debug!

<img src="https://imgur.com/zbxQnr1.png"/>

NICE!!!!


##  6. <a name='Howdoessort_mainwork'></a>How does sort_main work?

1. init(args)
2. sort_blocks(args)
    - Reads the file with hts_open

###  6.1. <a name='sort_blocks'></a>sort_blocks


```c
void sort_blocks(args_t *args) 
{
    htsFile *in = hts_open(args->fname, "r");
    if ( !in ) clean_files_and_throw(args, "Could not read %s\n", args->fname);
    args->hdr = bcf_hdr_read(in);
    if ( !args->hdr) clean_files_and_throw(args, "Could not read VCF/BCF headers from %s\n", args->fname);

    while ( 1 )
    {
        bcf1_t *rec = bcf_init();
        int ret = bcf_read1(in, args->hdr, rec);
        if ( ret < -1 ) clean_files_and_throw(args,"Error encountered while parsing the input\n");
        if ( ret == -1 )
        {
            bcf_destroy(rec);
            break;
        }
        if ( rec->errcode ) clean_files_and_throw(args,"Error encountered while parsing the input at %s:%d\n",bcf_seqname(args->hdr,rec),rec->pos+1);
        buf_push(args, rec);
    }
    buf_flush(args);
    free(args->buf);
```

- Note key htslib functions called
- `bcf_hdr_read` reading the vcf header and storing in args->hdr
- Creates a new rec in the while loop for each row 
    - When ret is 0 we keep going otherwise we break or destroy

Here we're getting to the meat of the sort

```c
buf_push(args, rec);
```

###  6.2. <a name='buf_push'></a>buf_push

```c
void buf_push(args_t *args, bcf1_t *rec)
{
    int delta = sizeof(bcf1_t) + rec->shared.l + rec->indiv.l + sizeof(bcf1_t*);
    if ( args->mem + delta > args->max_mem ) buf_flush(args);
    args->nbuf++;
    args->mem += delta;
    hts_expand(bcf1_t*, args->nbuf, args->mbuf, args->buf);
    args->buf[args->nbuf-1] = rec;
}

```

- Noticing at certain breakpoints can't get the full evaluation context..
- `CFLAGS=-g -O2`
- Let's turn Optimisation to `CFLAGS = -g - Wall -O0` in makefile

OK NOW THIS WORKS NICE

###  6.3. <a name='args_targs'></a>args_t *args

This is passed all over the place ... what is it?

```c
 args_t *args  = (args_t*) calloc(1,sizeof(args_t));
```

where

```c
typedef struct _args_t
{
    bcf_hdr_t *hdr;
    char **argv, *fname, *output_fname, *tmp_dir;
    int argc, output_type;
    size_t max_mem, mem;
    bcf1_t **buf;
    size_t nbuf, mbuf, nblk;
    blk_t *blk;
}
args_t;
```
