<!-- vscode-markdown-toc -->
* [Links](#Links)
* [Problem: How to annotate an existing VCF](#Problem:HowtoannotateanexistingVCF)

<!-- vscode-markdown-toc-config
	numbering=false
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Exploring Mastermind's API

<img src="https://alexlgriffiths.files.wordpress.com/2016/02/wp-1455661152502.jpg"/>

Mastermind is a genomic search engine wher eyou can search:

- Suggestions (disease, gene or variant)
- Counts (number of articles for given query)
- Articles (List of articles, ranked by relevance for given query)
- Diseases (Returns the top 5 diseases, ranked by number of matched articles, for the given query.)
- Phenotypes (Returns the top 5 phenotypes, ranked by number of matched articles, for the given query.)
- Therapies (Returns the top 5 therapies, ranked by number of matched articles, for the given query)
- Genes (Returns the top 5 genes, ranked by number of matched articles, for the given query.)
- Variants (Returns the top 5 variants, ranked by number of matched articles, for the given query.)
- Article Info (Returns the matched diseases, genes, variants, and article meta-data for the given article PMID.)
- File Annotation Counts

```
Returns an annotated VCF from an input VCF file containing multiple variants as genomic coordinates with each variant in the output file annotated with the number of articles and Mastermind URL for each variant.

Easily integrate evidence from Mastermind into your existing genomics pipeline. Use the API to upload a VCF file, and get automatic annotations from Mastermind.

Mastermind VCF Annotations add annotations to variants containing the nubmer of publications which cite evidence for the variant, along with a URL to investigate the evidence.

Two annotations are added to each variant within the VCF file which contains evidence found by Mastermind in the medical literature:

MMCNT: The number of articles found for this variant.
MMURI: The Mastermind URL to view and investigate the matched articles.
```


## <a name='Links'></a>Links
- [Getting Started API](https://mastermind.genomenon.com/api)
- [PDF Documentation](https://ss-usa.s3.amazonaws.com/c/308466541/media/149745f74e37d8892253531143959025/MM%20Integration%20-%20Technical%20Documentation%20-%202020%2008%2022.pdf)


## <a name='Problem:HowtoannotateanexistingVCF'></a>Problem: How to annotate an existing VCF

```
/file_annotations/counts 

Returns an annotated VCF from an input VCF file containing multiple variants as
genomic coordinates with each variant in the output file annotated with the number of
articles and Mastermind URL for each variant.
```

