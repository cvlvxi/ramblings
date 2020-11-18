<!-- vscode-markdown-toc -->
* 1. [Prereqs](#Prereqs)
* 2. [Getting compile_commands.json](#Gettingcompile_commands.json)
* 3. [Structure](#Structure)
	* 3.1. [Compiling and running](#Compilingandrunning)
* 4. [Sort Tests?](#SortTests)
* 5. [Can I lldb this?](#CanIlldbthis)
	* 5.1. [Set break in main](#Setbreakinmain)
	* 5.2. [Run](#Run)
* 6. [How does sort_main work?](#Howdoessort_mainwork)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


# Understanding bcftools sort

##  1. <a name='Prereqs'></a>Prereqs

- Installed htslib (make installed)
- Built bcftools
- See [here](http://samtools.github.io/bcftools/howtos/install.html) for details

##  2. <a name='Gettingcompile_commands.json'></a>Getting compile_commands.json

I'm using compiledb to actually generate the missing `compile_commands.json` file for clangd

See [here](https://github.com/nickdiego/compiledb)

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


##  6. <a name='Howdoessort_mainwork'></a>How does sort_main work?


```c
int main_sort(int argc, char *argv[])
{
    printf("I am here");
    int c;
    args_t *args  = (args_t*) calloc(1,sizeof(args_t));
    args->argc    = argc; args->argv = argv;
    args->max_mem = 768*1000*1000;
    args->output_fname = "-";

    static struct option loptions[] =
    {
        {"max-mem",required_argument,NULL,'m'},
        {"temp-dir",required_argument,NULL,'T'},
        {"output-type",required_argument,NULL,'O'},
        {"output-file",required_argument,NULL,'o'},
        {"output",required_argument,NULL,'o'},
        {"help",no_argument,NULL,'h'},
        {0,0,0,0}
    };
    while ((c = getopt_long(argc, argv, "m:T:O:o:h?",loptions,NULL)) >= 0)
    {
        switch (c)
        {
            case 'm': args->max_mem = parse_mem_string(optarg); break;
            case 'T': args->tmp_dir = optarg; break;
            case 'o': args->output_fname = optarg; break;
            case 'O':
                      switch (optarg[0]) {
                          case 'b': args->output_type = FT_BCF_GZ; break;
                          case 'u': args->output_type = FT_BCF; break;
                          case 'z': args->output_type = FT_VCF_GZ; break;
                          case 'v': args->output_type = FT_VCF; break;
                          default: error("The output type \"%s\" not recognised\n", optarg);
                      };
                      break;
            case 'h':
            case '?': usage(args); break;
            default: error("Unknown argument: %s\n", optarg);
        }
    }

    if ( optind>=argc )
    {
        if ( !isatty(fileno((FILE *)stdin)) ) args->fname = "-";  // reading from stdin
        else usage(args);
    }
    else args->fname = argv[optind];

    init(args);
    sort_blocks(args);
    merge_blocks(args);
    destroy(args);

    return 0;
```