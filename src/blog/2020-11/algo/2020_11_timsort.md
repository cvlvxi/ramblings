<!-- vscode-markdown-toc -->
* 1. [Links](#Links)
* 2. [What is Tim Sort?](#WhatisTimSort)
* 3. [Where is it used?](#Whereisitused)
* 4. [Complexity?](#Complexity)
	* 4.1. [Tim Sort complexity](#TimSortcomplexity)
	* 4.2. [Insertion Sort complexity](#InsertionSortcomplexity)
	* 4.3. [Mergesort](#Mergesort)
* 5. [FIXME](#FIXME)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

# Tim Sort

But who is Tim?

<img src="https://i.ytimg.com/vi/1wAOy88WxmY/hqdefault.jpg"/>

*This is Tim Peters*

##  1. <a name='Links'></a>Links

- [Article on Timsort](https://dev.to/jennieji/tim-sort-the-fastest-sort-used-in-v8-and-python-5e76)

##  2. <a name='WhatisTimSort'></a>What is Tim Sort?

Hybrid algorithm: Insertion Sort + Merge Sort with heuristics

##  3. <a name='Whereisitused'></a>Where is it used?

Rust, Python, V8, Java  for its sorting algorithm 

##  4. <a name='Complexity'></a>Complexity?

###  4.1. <a name='TimSortcomplexity'></a>Tim Sort complexity 

Worst: nlogn

Best: n 

Average: nlogn


###  4.2. <a name='InsertionSortcomplexity'></a>Insertion Sort complexity

Worst: n^2

Best: n

Average:  n^2

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--xted_fT3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/lvsvw4gn3eytl7jvka2g.gif"/>

*Insertion sort visualisation*

###  4.3. <a name='Mergesort'></a>Mergesort

Worst: nlogn

Best: nlogn

Average: nlogn

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--T4wKuT2f--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/dp61xcspsu0wuoqopwub.gif"/>

*Merge sort visualisation*

##  5. <a name='FIXME'></a>FIXME
Unfinished