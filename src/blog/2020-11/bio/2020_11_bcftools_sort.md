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
	* 6.3. [Debugging not working?](#Debuggingnotworking)
	* 6.4. [args_t *args](#args_targs)
	* 6.5. [bcf1_t record struct](#bcf1_trecordstruct)
	* 6.6. [0-based vs 1-based](#basedvs1-based)
	* 6.7. [Buff Capacity?](#BuffCapacity)
	* 6.8. [buf_flush](#buf_flush)
	* 6.9. [cmp_bcf_pos](#cmp_bcf_pos)
* 7. [Checkpoint: qsort](#Checkpoint:qsort)
	* 7.1. [Potential Algorithms](#PotentialAlgorithms)
	* 7.2. [Where even is qsort?](#Whereevenisqsort)

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

So it will calculate the amount of memory to add in delta which is size of a record + the shared and indiv size_t + size of record ptr 

args->nbuf increments (amount of records)

args->mem total memory 

Add to args->buf the record 

###  6.3. <a name='Debuggingnotworking'></a>Debugging not working? 

- Noticing at certain breakpoints can't get the full evaluation context..
- `CFLAGS=-g -O2`
- Let's turn Optimisation to `CFLAGS = -g - Wall -O0` in makefile

OK NOW THIS WORKS NICE

###  6.4. <a name='args_targs'></a>args_t *args

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

Let's not forget what `bcf1_t` is for a record

###  6.5. <a name='bcf1_trecordstruct'></a>bcf1_t record struct

```c
typedef struct bcf1_t {
    hts_pos_t pos;  // POS
    hts_pos_t rlen; // length of REF
    int32_t rid;  // CHROM
    float qual;   // QUAL
    uint32_t n_info:16, n_allele:16;
    uint32_t n_fmt:8, n_sample:24;
    kstring_t shared, indiv;
    bcf_dec_t d; // lazy evaluation: $d is not generated by bcf_read(), but by explicitly calling bcf_unpack()
    int max_unpack;         // Set to BCF_UN_STR, BCF_UN_FLT, or BCF_UN_INFO to boost performance of vcf_parse when some of the fields won't be needed
    int unpacked;           // remember what has been unpacked to allow calling bcf_unpack() repeatedly without redoing the work
    int unpack_size[3];     // the original block size of ID, REF+ALT and FILTER
    int errcode;    // one of BCF_ERR_* codes
} bcf1_t;
```


###  6.6. <a name='basedvs1-based'></a>0-based vs 1-based

<img src="https://imgur.com/btv2ZNS.png"/>

This may be entirely obvious but you can see that the VCF file displays 1 based counting vs bcftools / htslib has the position at 0 based counting

Interestingly this also applies to rid aka CHROM

<img src="https://imgur.com/iei4WDz.png"/>


###  6.7. <a name='BuffCapacity'></a>Buff Capacity?

Look here

<img src="https://imgur.com/oAkXjEv.png"/>

You can see buf has 14 elements.. but we've passed the number since there are > 14 variants so what's going on???

Ok I figured out why... lldb in `clion only shows a limited amount` to actually see more you can do this in the lldb console..

```bash
(lldb) v *args->buf[20]
(bcf1_t) *args->buf[20] = {
  pos = 219418536
  rlen = 1
  rid = 1
  qual = 1065.77002
  n_info = 17
  n_allele = 2
  n_fmt = 5
  n_sample = 1
  shared = (l = 114, m = 151, s = "\x97rs1318299\x17A\x17G")
  indiv = (l = 27, m = 40, s = "\x11\x05!\x04\x04\x11\x02!")
  d = {
    m_fmt = 0
```

which does correspond to a variant further down the list... Phew

###  6.8. <a name='buf_flush'></a>buf_flush

- After processing all variants calls this

```c
void buf_flush(args_t *args)
{
    if ( !args->nbuf ) return;

    qsort(args->buf, args->nbuf, sizeof(*args->buf), cmp_bcf_pos);

    args->nblk++;
    args->blk = (blk_t*) realloc(args->blk, sizeof(blk_t)*args->nblk);
    blk_t *blk = args->blk + args->nblk - 1;

    kstring_t str = {0,0,0};
    ksprintf(&str, "%s/%05d.bcf", args->tmp_dir, (int)args->nblk);
    blk->fname = str.s;
    blk->rec   = NULL;
    blk->fh    = NULL;

    htsFile *fh = hts_open(blk->fname, "wbu");
    if ( fh == NULL ) clean_files_and_throw(args, "Cannot write %s: %s\n", blk->fname, strerror(errno));
    if ( bcf_hdr_write(fh, args->hdr)!=0 ) clean_files_and_throw(args, "[%s] Error: cannot write to %s\n", __func__,blk->fname);
    
    int i;
    for (i=0; i<args->nbuf; i++)
    {
        if ( bcf_write(fh, args->hdr, args->buf[i])!=0 ) clean_files_and_throw(args, "[%s] Error: cannot write to %s\n", __func__,blk->fname);
        bcf_destroy(args->buf[i]);
    }
    if ( hts_close(fh)!=0 ) clean_files_and_throw(args, "[%s] Error: close failed .. %s\n", __func__,blk->fname);

    args->nbuf = 0;
    args->mem  = 0;
}
```

- qsort see here [https://www.tutorialspoint.com/c_standard_library/c_function_qsort.htm](https://www.tutorialspoint.com/c_standard_library/c_function_qsort.htm)

`void qsort(void *base, size_t nitems, size_t size, int (*compar)(const void *, const void*))`

- base − This is the pointer to the first element of the array to be sorted.
- nitems − This is the number of elements in the array pointed by base.
- size − This is the size in bytes of each element in the array.
- compar − This is the function that compares two elements.

COOL

and our callsite?

```c
qsort(args->buf, args->nbuf, sizeof(*args->buf), cmp_bcf_pos);
```

###  6.9. <a name='cmp_bcf_pos'></a>cmp_bcf_pos

We've hit the place where some sorting is happening boiz!!

```c
int cmp_bcf_pos(const void *aptr, const void *bptr)
{
    bcf1_t *a = *((bcf1_t**)aptr);
    bcf1_t *b = *((bcf1_t**)bptr);
    if ( a->rid < b->rid ) return -1;
    if ( a->rid > b->rid ) return 1;
    if ( a->pos < b->pos ) return -1;
    if ( a->pos > b->pos ) return 1;

    // Sort the same chr:pos records lexicographically by ref,alt.
    // This will be called rarely so should not slow the sorting down
    // noticeably.

    if ( !a->unpacked ) bcf_unpack(a, BCF_UN_STR);
    if ( !b->unpacked ) bcf_unpack(b, BCF_UN_STR);
    int i;
    for (i=0; i<a->n_allele; i++)
    { 
        if ( i >= b->n_allele ) return 1;
        int ret = strcasecmp(a->d.allele[i],b->d.allele[i]);
        if ( ret ) return ret;
    }
    if ( a->n_allele < b->n_allele ) return -1;
    return 0;
}
```

How it chooses which records is unclear as it's most probably left to qsort...

HOWEVER

we can see the comparison it does iternally...

1. CHROM CHECK
    - CHROM LEFT < RIGHT? return -1 
    - CHROM LEFT > RIGHT? return 1
2. CHECK POSITION
    - POSITION LEFT < RIGHT? return -1
    - POSITION LEFT > RIGHT? return 1
3. CHECK ALLELE..


##  7. <a name='Checkpoint:qsort'></a>Checkpoint: qsort

- Ok so we can see at this point that we're doing quick sort..
- Now comes the fun part.. what if we used a different algorithm? 

###  7.1. <a name='PotentialAlgorithms'></a>Potential Algorithms

- Timsort
- Quadsort

###  7.2. <a name='Whereevenisqsort'></a>Where even is qsort?

Looks like it's part of stdlib.h

See here: [stdlib.h](https://www.tutorialspoint.com/c_standard_library/stdlib_h.htm)