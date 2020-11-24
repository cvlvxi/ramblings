<!-- vscode-markdown-toc -->
* 1. [Links](#Links)
* 2. [Intro](#Intro)
* 3. [viewof](#viewof)
* 4. [Keyboard Shortcuts](#KeyboardShortcuts)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


# Observable

Observable is javascript notebooks framed around d3

##  1. <a name='Links'></a>Links
- [cvlvxi@Observable](https://observablehq.com/@cvlvxi)
- [Five minute introduction](https://observablehq.com/@observablehq/five-minute-introduction?collection=@observablehq/notebook-fundamentals)
- [Javascript in Observable](https://observablehq.com/@observablehq/observables-not-javascript)
- [Keyboard Shortcuts](https://observablehq.com/@observablehq/keyboard-shortcuts)

##  2. <a name='Intro'></a>Intro
1. HTML Compliance

```
html`<span style="background:yellow;">
  My favorite language is <i>HTML</i>.
</span>`
```

2. Implicit async

```
d3 = require("d3-fetch@1")
```

Seems to await it!

3. Html input!


```
bob = html`<input type="text">`
bobVal = Generators.input(bob)
```

##  3. <a name='viewof'></a>viewof

See use here:

```
viewof bob = html`<input type="text">`
bob  // Value is whatever you put in the input
```

- Instead of using Generator.input(bob) the `viewof` primitive yields access to the current input


##  4. <a name='KeyboardShortcuts'></a>Keyboard Shortcuts
- [https://observablehq.com/@observablehq/keyboard-shortcuts](https://observablehq.com/@observablehq/keyboard-shortcuts)
- Alt (Option) + del to delete cell