<!-- vscode-markdown-toc -->
* 1. [Links](#Links)
* 2. [Intro](#Intro)
* 3. [viewof](#viewof)
* 4. [Importing other notebooks](#Importingothernotebooks)
* 5. [Viewing a html svg notebook](#Viewingahtmlsvgnotebook)
* 6. [Keyboard Shortcuts](#KeyboardShortcuts)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->


# Observablehq

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


##  4. <a name='Importingothernotebooks'></a>Importing other notebooks

This imports from a different notebook

```
import {viewof selection as cars} from "@d3/brushable-scatterplot"
```

##  5. <a name='Viewingahtmlsvgnotebook'></a>Viewing a html svg notebook

- Make sure to hit the ... and `edit` to see the entire cell

```js
viewof selection = {
  const svg = d3.create("svg")
      .attr("viewBox", [0, 0, width, height])
      .property("value", []);

  const brush = d3.brush()
      .on("start brush end", brushed);

  svg.append("g")
      .call(xAxis);

  svg.append("g")
      .call(yAxis);

  const dot = svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(data)
    .join("circle")
      .attr("transform", d => `translate(${x(d.x)},${y(d.y)})`)
      .attr("r", 3);

  svg.call(brush);

  function brushed({selection}) {
    let value = [];
    if (selection) {
      const [[x0, y0], [x1, y1]] = selection;
      value = dot
        .style("stroke", "gray")
        .filter(d => x0 <= x(d.x) && x(d.x) < x1 && y0 <= y(d.y) && y(d.y) < y1)
        .style("stroke", "steelblue")
        .data();
    } else {
      dot.style("stroke", "steelblue");
    }
    svg.property("value", value).dispatch("input");
  }

  return svg.node();
}
```


##  6. <a name='KeyboardShortcuts'></a>Keyboard Shortcuts
- [https://observablehq.com/@observablehq/keyboard-shortcuts](https://observablehq.com/@observablehq/keyboard-shortcuts)
- Alt (Option) + del to delete cell
- Shift Cmd + Enter = Insert before cell