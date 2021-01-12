(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f026c"],{"9ac1":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("ul",[n("li",[n("ol",[n("li",[n("a",{attrs:{href:"#Links"}},[e._v("Links")])])])]),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[n("a",{attrs:{href:"#Problem:HowtoannotateanexistingVCF"}},[e._v("Problem: How to annotate an existing VCF")])])])]),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[n("a",{attrs:{href:"#Problem:TrysimpleAPIrequest"}},[e._v("Problem: Try simple API request")])])])]),n("li",[n("ol",{attrs:{start:"4"}},[n("li",[n("a",{attrs:{href:"#MastermindAPICookbookExamples"}},[e._v("Mastermind API Cookbook Examples")])])])]),n("li",[n("ol",{attrs:{start:"5"}},[n("li",[n("a",{attrs:{href:"#Errorsfromtheirside"}},[e._v("Errors from their side?")])])])])]),n("h1",[e._v("Exploring Mastermind's API")]),n("img",{attrs:{src:"https://alexlgriffiths.files.wordpress.com/2016/02/wp-1455661152502.jpg"}}),n("p",[e._v("Mastermind is a genomic search engine wher eyou can search:")]),n("ul",[n("li",[e._v("Suggestions (disease, gene or variant)")]),n("li",[e._v("Counts (number of articles for given query)")]),n("li",[e._v("Articles (List of articles, ranked by relevance for given query)")]),n("li",[e._v("Diseases (Returns the top 5 diseases, ranked by number of matched articles, for the given query.)")]),n("li",[e._v("Phenotypes (Returns the top 5 phenotypes, ranked by number of matched articles, for the given query.)")]),n("li",[e._v("Therapies (Returns the top 5 therapies, ranked by number of matched articles, for the given query)")]),n("li",[e._v("Genes (Returns the top 5 genes, ranked by number of matched articles, for the given query.)")]),n("li",[e._v("Variants (Returns the top 5 variants, ranked by number of matched articles, for the given query.)")]),n("li",[e._v("Article Info (Returns the matched diseases, genes, variants, and article meta-data for the given article PMID.)")]),n("li",[e._v("File Annotation Counts")])]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("Returns an annotated VCF from an input VCF file containing multiple variants as genomic coordinates with each variant in the output file annotated with the number of articles and Mastermind URL for each variant.\n\nEasily integrate evidence from Mastermind into your existing genomics pipeline. Use the API to upload a VCF file, and get automatic annotations from Mastermind.\n\nMastermind VCF Annotations add annotations to variants containing the nubmer of publications which cite evidence for the variant, along with a URL to investigate the evidence.\n\nTwo annotations are added to each variant within the VCF file which contains evidence found by Mastermind in the medical literature:\n\nMMCNT: The number of articles found for this variant.\nMMURI: The Mastermind URL to view and investigate the matched articles.\n")])]),n("h2",[e._v("1. "),n("a",{attrs:{name:"Links"}}),e._v("Links")]),n("ul",[n("li",[n("a",{attrs:{href:"https://mastermind.genomenon.com/api"}},[e._v("Getting Started API")])]),n("li",[n("a",{attrs:{href:"https://ss-usa.s3.amazonaws.com/c/308466541/media/149745f74e37d8892253531143959025/MM%20Integration%20-%20Technical%20Documentation%20-%202020%2008%2022.pdf"}},[e._v("PDF Documentation")])]),n("li",[n("a",{attrs:{href:"https://github.com/Genomenon/mastermind-api-cookbook"}},[e._v("MM Api Cookbook")])])]),n("h2",[e._v("2. "),n("a",{attrs:{name:"Problem:HowtoannotateanexistingVCF"}}),e._v("Problem: How to annotate an existing VCF")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v("/file_annotations/counts \n\nReturns an annotated VCF from an input VCF file containing multiple variants as\ngenomic coordinates with each variant in the output file annotated with the number of\narticles and Mastermind URL for each variant.\n")])]),n("h2",[e._v("3. "),n("a",{attrs:{name:"Problem:TrysimpleAPIrequest"}}),e._v("Problem: Try simple API request")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":""}},[e._v('curl -H "Content-type: application/json" -H "X-API-TOKEN: [[your API token here]]" -X GET\n"https://mastermind.genomenon.com/api/v2/counts?&disease=melanoma&gene=braf&variant=braf:v600e"\n')])]),n("p",[e._v("Setup with POSTMAN")]),n("h2",[e._v("4. "),n("a",{attrs:{name:"MastermindAPICookbookExamples"}}),e._v("Mastermind API Cookbook Examples")]),n("ul",[n("li",[e._v("Found this online which is pretty useful "),n("a",{attrs:{href:"https://github.com/Genomenon/mastermind-api-cookbook"}},[e._v("MMAPI Cookbook")])])]),n("p",[e._v("These were pretty useful! I made some small changes to their code base as I was experimenting")]),n("p",[e._v("See "),n("a",{attrs:{href:"https://github.com/cvlvxi/mastermind-api-cookbook"}},[e._v("https://github.com/cvlvxi/mastermind-api-cookbook")])]),n("h2",[e._v("5. "),n("a",{attrs:{name:"Errorsfromtheirside"}}),e._v("Errors from their side?")]),n("p",[e._v('One thing that I did find lacking was an error response that said when things went wrong when state == "failed"')])])}],r=n("2877"),o={},s=Object(r["a"])(o,a,i,!1,null,null,null);t["default"]=s.exports}}]);