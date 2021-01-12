(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e8ba0"],{"8b00":function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[s._m(0),a("h1",[s._v("VueJS + D3")]),s._m(1),s._m(2),s._m(3),s._m(4),s._m(5),s._m(6),a("ul",[a("li",[s._v('svg "g" '),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g"}},[s._v("https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g")]),a("ul",[a("li",[s._v("The "),a("g",[s._v(" SVG element is a container used to group other SVG elements.")])])])])]),a("p",[s._v("What do we get with just this?")]),s._m(7),a("p",[s._v("And the following in the html")]),s._m(8),a("img",{attrs:{src:"https://imgur.com/SuFHWNT.png"}}),a("p",[s._v("Where sortedGDP is the sorted version of")]),s._m(9),s._m(10),s._m(11),s._m(12),s._m(13),s._m(14),s._m(15),s._m(16),s._m(17),s._m(18),s._m(19),s._m(20),s._m(21),s._m(22),s._m(23),s._m(24),s._m(25)])},e=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("ol",[a("li",[a("a",{attrs:{href:"#Links"}},[s._v("Links")])])])]),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[a("a",{attrs:{href:"#Abasicexample"}},[s._v("A basic example")])])])]),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[a("a",{attrs:{href:"#ColorInterpolation"}},[s._v("Color Interpolation")])])]),a("ul",[a("li",[s._v("3.1. "),a("a",{attrs:{href:"#Anotherexample"}},[s._v("Another example")])])])]),a("li",[a("ol",{attrs:{start:"4"}},[a("li",[a("a",{attrs:{href:"#WebpackTSVCSVloader"}},[s._v("Webpack TSV / CSV loader")])])]),a("ul",[a("li",[s._v("4.1. "),a("a",{attrs:{href:"#Alternatively:raw-loader"}},[s._v("Alternatively: raw-loader")])]),a("li",[s._v("4.2. "),a("a",{attrs:{href:"#Withd3parsers"}},[s._v("With d3 parsers")])])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",[s._v("1. "),a("a",{attrs:{name:"Links"}}),s._v("Links")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cvlvxi/d3init"}},[s._v("My Github d3+vue project")])]),a("li",[a("a",{attrs:{href:"https://alligator.io/vuejs/visualization-vue-d3/"}},[s._v("https://alligator.io/vuejs/visualization-vue-d3/")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",[s._v("2. "),a("a",{attrs:{name:"Abasicexample"}}),s._v("A basic example")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("<template>\n  "),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"arc"')]),s._v(" />")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")])]),s._v("\n<"),a("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v('/template>\n\n<script>\nimport * as d3 from "d3";\nexport default {\n  data() {\n    return {\n      gdp: [\n        { country: "USA", value: 20.5 },\n        { country: "China", value: 13.4 },\n        { country: "Germany", value: 4.0 },\n        { country: "Japan", value: 4.9 },\n        { country: "France", value: 2.8 },\n      ],\n    };\n  },\n  mounted() {\n    this.generateArc();\n  },\n  methods: {\n    generateArc() {\n      const w = 1000;\n      const h = 1000;\n\n      const svg = d3\n        .select("#arc")\n        .append("svg")\n        .attr("width", w)\n        .attr("height", h);\n\n      const sortedGDP = this.gdp.sort((a, b) => (a.value > b.value ? 1 : -1));\n      const color = d3.scaleOrdinal(d3.schemeDark2);\n\n      const max_gdp = d3.max(sortedGDP, (o) => o.value);\n\n      const angleScale = d3\n        .scaleLinear()\n        .domain([0, max_gdp])\n        .range([0, 1.5 * Math.PI]);\n\n      const arc = d3\n        .arc()\n        .innerRadius((d, i) => (i + 1) * 25)\n        .outerRadius((d, i) => (i + 2) * 25)\n        .startAngle(angleScale(0))\n        .endAngle((d) => angleScale(d.value));\n\n      const g = svg.append("g");\n\n      g.selectAll("path")\n        .data(sortedGDP)\n        .enter()\n        .append("path")\n        .attr("d", arc)\n        .attr("fill", (d, i) => color(i))\n        .attr("stroke", "#FFF")\n        .attr("stroke-width", "1px")\n        .on("mouseenter", function () {\n          d3.select(this).transition().duration(200).attr("opacity", 0.5);\n        })\n        .on("mouseout", function () {\n          d3.select(this).transition().duration(200).attr("opacity", 1);\n        });\n\n      g.selectAll("text")\n        .data(this.gdp)\n        .enter()\n        .append("text")\n        .text((d) => `${d.country} -  ${d.value} Trillion`)\n        .attr("x", -150)\n        .attr("dy", -8)\n        .attr("y", (d, i) => -(i + 1) * 25);\n\n      g.attr("transform", "translate(200,300)");\n    },\n  },\n};\n</')]),s._v("script>\n\n"),a("span",{pre:!0,attrs:{class:"xml"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lang")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"scss"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("scoped")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("style")]),s._v(">")])]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ol",[a("li",[s._v("Const Vars: svg sizes "),a("code",{pre:!0},[s._v("w, h")])]),a("li",[s._v("Create and attach svg via "),a("code",{pre:!0},[s._v("d3.svg")])]),a("li",[a("code",{pre:!0},[s._v("const color = d3.scaleOrdinal(d3.schemeDark2);")]),s._v(" -- "),a("a",{attrs:{href:"https://observablehq.com/@d3/d3-scaleordinal"}},[s._v("https://observablehq.com/@d3/d3-scaleordinal")])]),a("li",[a("a",{attrs:{href:"https://github.com/d3/d3-shape#arcs"}},[s._v("d3.arc")]),a("ul",[a("li",[s._v("Generate the arc (generator)")]),a("li",[s._v("If the arc generator has a context, then the arc is rendered to this context as a sequence of path method calls and this function returns void. Otherwise, a path data string is returned.")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" arc = d3\n        .arc()\n        .innerRadius("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d, i")]),s._v(") =>")]),s._v(" (i + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(") * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(")\n        .outerRadius("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d, i")]),s._v(") =>")]),s._v(" (i + "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(") * "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("25")]),s._v(")\n        .startAngle(angleScale("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("))\n        .endAngle("),a("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("d")]),s._v(") =>")]),s._v(" angleScale(d.value));\n\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" g = svg.append("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"g"')]),s._v(");\n\n      g.selectAll("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"path"')]),s._v(")\n        .data(sortedGDP)\n        .enter()\n        .append("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"path"')]),s._v(")\n        .attr("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"d"')]),s._v(", arc)\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" g = svg.append("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"g"')]),s._v(");\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(g);\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(color);\n      "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(arc);\n\n      g.selectAll("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"path"')]),s._v(")\n        .data(sortedGDP)\n        .enter()\n        .append("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"path"')]),s._v(")\n        .attr("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"d"')]),s._v(", arc)\n        .attr("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"fill"')]),s._v(", (d, i) => color(i))\n        .attr("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stroke"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#FFF"')]),s._v(")\n        .attr("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stroke-width"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1px"')]),s._v(")\n        .on("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mouseenter"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n          d3.select("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(").transition().duration("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(").attr("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"opacity"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(");\n        })\n        .on("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"mouseout"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("function")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-params"}}),s._v(") ")]),s._v("{\n          d3.select("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(").transition().duration("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("200")]),s._v(").attr("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"opacity"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(");\n\t\t});\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("svg")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1000"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("height")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1000"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("g")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("d")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"M3.061616997868383e-15,-50A50,50,0,0,1,30.00569026188683,-39.99573167111348L15.002845130943415,-19.99786583555674A25,25,0,0,0,1.5308084989341915e-15,-25Z"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fill")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#1b9e77"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stroke")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#FFF"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stroke-width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1px"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("path")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("d")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"M4.592425496802574e-15,-75A75,75,0,0,1,59.64696534550699,-45.46690582249785L39.76464356367133,-30.311270548331898A50,50,0,0,0,3.061616997868383e-15,-50Z"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fill")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#d95f02"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stroke")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#FFF"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stroke-width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1px"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("path")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("d")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"M6.123233995736766e-15,-100A100,100,0,0,1,90.28599967698531,-42.993467670419534L67.71449975773898,-32.24510075281465A75,75,0,0,0,4.592425496802574e-15,-75Z"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fill")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#7570b3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stroke")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#FFF"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stroke-width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1px"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("path")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("d")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"M7.654042494670958e-15,-125A125,125,0,0,1,7.657623272781903,124.76522274180473L6.126098618225522,99.81217819344378A100,100,0,0,0,6.123233995736766e-15,-100Z"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fill")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#e7298a"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stroke")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#FFF"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stroke-width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1px"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("path")]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("d")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"M9.184850993605149e-15,-150A150,150,0,1,1,-150,1.8369701987210297e-14L-125,1.5308084989341916e-14A125,125,0,1,0,7.654042494670958e-15,-125Z"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fill")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#66a61e"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stroke")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"#FFF"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("stroke-width")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1px"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("path")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("g")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("svg")]),s._v(">")]),s._v(">\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v(" [\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"USA"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20.5")]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"China"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13.4")]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Germany"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.0")]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Japan"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4.9")]),s._v(" },\n        { "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("country")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"France"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2.8")]),s._v(" },\n\t  ],\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",[s._v("3. "),a("a",{attrs:{name:"ColorInterpolation"}}),s._v("Color Interpolation")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("var")]),s._v(" color = d3.scaleLinear().domain(["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("10")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("]).range(["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brown"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"steelblue"')]),s._v("]);\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(color("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("20")]),s._v("));\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(color("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30")]),s._v("));\n---\nrgb("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("154")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("52")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("57")]),s._v(")\nrgb("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("144")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("62")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("73")]),s._v(")\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/d3/d3-scale-chromatic/blob/master/README.md#schemeCategory10"}},[s._v("Color Schemes")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h3",[s._v("3.1. "),a("a",{attrs:{name:"Anotherexample"}}),s._v("Another example")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("let")]),s._v(" color = d3.scaleOrdinal(d3.schemeCategory10);\ncolor.domain("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"A list of ten words to explore this scale’s domain"')]),s._v(".split("),a("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/ /")]),s._v("));\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(color("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"A"')]),s._v("));\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(color("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"list"')]),s._v("));\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(color("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"dog"')]),s._v("));\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(color("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ten"')]),s._v("));\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(color("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"words"')]),s._v("));\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h2",[s._v("4. "),a("a",{attrs:{name:"WebpackTSVCSVloader"}}),s._v("Webpack TSV / CSV loader")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/theplatapi/csv-loader"}},[s._v("https://github.com/theplatapi/csv-loader")])]),a("li",[a("a",{attrs:{href:"https://cli.vuejs.org/guide/webpack.html#adding-a-new-loader"}},[s._v("Adding a new loader with vue.config.js")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[a("code",{pre:!0},[s._v("yarn add csv-loader")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("in "),a("code",{pre:!0},[s._v("vue.config.js")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[s._v("  chainWebpack(config) {\n    config.module\n      .rule("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"csv"')]),s._v(")\n      .test("),a("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/\\.(c|d|t)sv$/")]),s._v(")\n      .use("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"csv-loader"')]),s._v(")\n      .loader("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"csv-loader"')]),s._v(")\n      .options({\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("dynamicTyping")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("header")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("skipEmptyLines")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        },\n      })\n      .end();\n  },\n};\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":""}},[s._v('temp1\n Treemap.vue?fc31:10 (53) [Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),        Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),    Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),    Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4), Array(4),    Array(4), Array(4), Array(4), Array(1)]0: (4) ["State", "State Code", "Region", "Division"]1: (4) ["Alaska", "AK", "West",           "Pacific"]2: (4) ["Alabama", "AL", "South", "East South Central"]3: (4) ["Arkansas", "AR", "South", "West South Central"]4:          (4) ["Arizona", "AZ", "West", "Mountain"]5: (4) ["California", "CA", "West", "Pacific"]6: (4) ["Colorado", "CO", "West",             "Mountain"]7: (4) ["Connecticut", "CT", "Northeast", "New England"]8: (4) ["District of Columbia", "DC", "South", "South             Atlantic"]9: (4) ["Delaware", "DE", "South", "South Atlantic"]10: (4) ["Florida", "FL", "South", "South Atlantic"]11:                (4) ["Georgia", "GA", "South", "South Atlantic"]12: (4) ["Hawaii", "HI", "West", "Pacific"]13: (4) ["Iowa", "IA", "Midwest", "West   North Central"]14: (4) ["Idaho", "ID", "West", "Mountain"]15: (4) ["Illinois", "IL", "Midwest", "East North Central"]16:             (4) ["Indiana", "IN", "Midwest", "East North Central"]17: (4) ["Kansas", "KS", "Midwest", "West North Central"]18: (4) ["Kentucky",  "KY", "South", "East South Central"]19: (4) ["Louisiana", "LA", "South", "West South Central"]20: (4) ["Massachusetts", "MA",        "Northeast", "New England"]21: (4) ["Maryland", "MD", "South", "South Atlantic"]22: (4) ["Maine", "ME", "Northeast", "New            England"]23: (4) ["Michigan", "MI", "Midwest", "East North Central"]24: (4) ["Minnesota", "MN", "Midwest", "West North Central"]25:  (4) ["Missouri", "MO", "Midwest", "West North Central"]26: (4) ["Mississippi", "MS", "South", "East South Central"]27:               (4) ["Montana", "MT", "West", "Mountain"]28: (4) ["North Carolina", "NC", "South", "South Atlantic"]29: (4) ["North Dakota", "ND",   "Midwest", "West North Central"]30: (4) ["Nebraska", "NE", "Midwest", "West North Central"]31: (4) ["New Hampshire", "NH",           "Northeast", "New England"]32: (4) ["New Jersey", "NJ", "Northeast", "Middle Atlantic"]33: (4) ["New Mexico", "NM", "West",          "Mountain"]34: (4) ["Nevada", "NV", "West", "Mountain"]35: (4) ["New York", "NY", "Northeast", "Middle Atlantic"]36: (4) ["Ohio",    "OH", "Midwest", "East North Central"]37: (4) ["Oklahoma", "OK", "South", "West South Central"]38: (4) ["Oregon", "OR", "West",      "Pacific"]39: (4) ["Pennsylvania", "PA", "Northeast", "Middle Atlantic"]40: (4) ["Rhode Island", "RI", "Northeast", "New             England"]41: (4) ["South Carolina", "SC", "South", "South Atlantic"]42: (4) ["South Dakota", "SD", "Midwest", "West North            Central"]43: (4) ["Tennessee", "TN", "South", "East South Central"]44: (4) ["Texas", "TX", "South", "West South Central"]45:         (4) ["Utah", "UT", "West", "Mountain"]46: (4) ["Virginia", "VA", "South", "South Atlantic"]47: (4) ["Vermont", "VT", "Northeast",    "New England"]48: (4) ["Washington", "WA", "West", "Pacific"]49: (4) ["Wisconsin", "WI", "Midwest", "East North Central"]50:                                 \n')])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h3",[s._v("4.1. "),a("a",{attrs:{name:"Alternatively:raw-loader"}}),s._v("Alternatively: raw-loader")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("We might just need the text as a string in order to use d3's methods")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":""}},[s._v(' yarn add raw-loader\n\n...\n\n  chainWebpack(config) {\n    config.module\n      .rule("raw")\n      .test(/\\.(c|d|t)sv$/)\n      .use("raw-loader")\n      .loader("raw-loader")\n      // .options({\n      //   options: {\n      //     dynamicTyping: true,\n      //     header: true,\n      //     skipEmptyLines: true,\n      //   },\n      // })\n      .end();\n  },\n')])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("h3",[s._v("4.2. "),a("a",{attrs:{name:"Withd3parsers"}}),s._v("With d3 parsers")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" dog "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./data/census-regions.csv"')]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" cat "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"./data/population.tsv"')]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" * "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("as")]),s._v(" d3 "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"d3"')]),s._v(";\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(d3.csvParse(dog));\n"),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(d3.tsvParse(cat));\n\n...\n Treemap.vue?fc31:"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("11")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("51")]),s._v(") [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},   {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…},    {…}, {…}, {…}, {…}, "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("columns")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Array")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(")]"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("State")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Alaska"')]),s._v(", State Code: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"AK"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Region")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"West"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Division")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Pacific"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("State")]),s._v(":          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Alabama"')]),s._v(", State Code: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"AL"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Region")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"South"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Division")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"East South Central"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("State")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Arkansas"')]),s._v(", State Code: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"AR"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Region")]),s._v(":        "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"South"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Division")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"West South Central"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("State")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Arizona"')]),s._v(", State Code: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"AZ"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Region")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"West"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Division")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Mountain"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("4")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("State")]),s._v(":      "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"California"')]),s._v(", State Code: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"CA"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Region")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"West"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Division")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Pacific"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("State")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Colorado"')]),s._v(", State Code: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"CO"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Region")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"West"')]),s._v(",         "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Division")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Mountain"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("State")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Connecticut"')]),s._v(", State Code: "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"CT"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Region")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Northeast"')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("Division")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"New England"')]),s._v("}"),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("7")]),s._v(": {"),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("State")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Dist\n')])])])}],n=a("2877"),l={},p=Object(n["a"])(l,r,e,!1,null,null,null);t["default"]=p.exports}}]);