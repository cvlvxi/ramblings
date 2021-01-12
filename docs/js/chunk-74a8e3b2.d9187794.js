(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74a8e3b2"],{"6eeb4":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("ul",[i("li",[i("a",{attrs:{href:"#Links"}},[e._v("Links")])]),i("li",[i("a",{attrs:{href:"#Nimble"}},[e._v("Nimble")])]),i("li",[i("a",{attrs:{href:"#ProjectStructure"}},[e._v("Project Structure")]),i("ul",[i("li",[i("a",{attrs:{href:"#Creatingabinary"}},[e._v("Creating a binary")])]),i("li",[i("a",{attrs:{href:"#Importingfromanotherfilemodule"}},[e._v("Importing from another file (module)")])])])]),i("li",[i("a",{attrs:{href:"#NimCfg:Debugging"}},[e._v("Nim Cfg: Debugging")])])]),i("h1",[e._v("Nim")]),i("p",[e._v("Yet another programming language like python that has C like performance (apparently!)")]),i("img",{attrs:{src:"https://nim-lang.org/assets/img/twitter_banner.png"}}),i("p",[e._v("Let's explore what it can offer as there seems to be quite a few projects related to bioinformatics and nim!")]),i("h2",[i("a",{attrs:{name:"Links"}}),e._v("Links")]),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/cvlvxi/nimplayground"}},[e._v("My Playground")])]),i("li",[i("a",{attrs:{href:"https://nim-lang.org/learn.html"}},[e._v("Official - Learn Nim")])]),i("li",[i("a",{attrs:{href:"https://github.com/nim-lang/nimble"}},[e._v("Nimble")])]),i("li",[i("a",{attrs:{href:"https://github.com/moigagoo/norm"}},[e._v("Norm: Nimble ORM")])]),i("li",[i("a",{attrs:{href:"https://github.com/mratsim/Arraymancer/blob/master/nim.cfg"}},[e._v("Advanced nim.cfg file")])]),i("li",[i("a",{attrs:{href:"https://nim-lang.org/docs/nims.html"}},[e._v("Nimscript")])])]),i("h2",[i("a",{attrs:{name:"Nimble"}}),e._v("Nimble")]),i("ul",[i("li",[e._v("Nimble is like cargo for nim")]),i("li",[e._v("Can specify build and test configuration")]),i("li",[e._v("See "),i("a",{attrs:{href:"https://github.com/nim-lang/nimble"}},[e._v("Nimble Github")])])]),i("h2",[i("a",{attrs:{name:"ProjectStructure"}}),e._v("Project Structure")]),i("ul",[i("li",[e._v("How do I setup my nim prjoects like a cmake / meson project wiht multiple binaries")]),i("li",[e._v("Multiple .nimble files?")]),i("li",[e._v("Let's take a look at "),i("a",{attrs:{href:"https://github.com/nim-lang/nimble#project-structure"}},[e._v("Project Structure")])]),i("li",[e._v("src dir")])]),i("p",[i("code",{pre:!0},[e._v('Warning: When source files are placed in a src directory, the .nimble file must contain a srcDir = "src" directive. The nimble init command takes care of that for you.')])]),i("h3",[i("a",{attrs:{name:"Creatingabinary"}}),e._v("Creating a binary")]),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/nim-lang/nimble#binary-packages"}},[e._v("Binary Packages")])])]),i("p",[e._v("Add to the .nimble file by setting a value for the "),i("code",{pre:!0},[e._v("bin")]),e._v(" directive")]),i("p",[e._v("e.g.")]),i("p",[e._v("bin = "),i("strong",[e._v("at")]),e._v('["main"]')]),i("ul",[i("li",[e._v("This looks for the file "),i("code",{pre:!0},[e._v("main.nim")]),e._v(" in the srcDir which you can set")])]),i("h3",[i("a",{attrs:{name:"Importingfromanotherfilemodule"}}),e._v("Importing from another file (module)")]),i("p",[e._v("If you have another file "),i("code",{pre:!0},[e._v("utils.nim")])]),i("p",[e._v("which defines the following")]),i("pre",{pre:!0},[i("code",{pre:!0,attrs:{"v-pre":"",class:"language-nim"}},[i("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("proc")]),e._v(" dog*() =\n  echo "),i("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"I am doing something"')]),e._v("\n")])]),i("p",[e._v("NOTE: That the proc has * after the name which allows it to be exported!")]),i("p",[e._v("Then in another file you include it via:")]),i("pre",{pre:!0},[i("code",{pre:!0,attrs:{"v-pre":"",class:"language-nim"}},[i("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("import")]),e._v(" "),i("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"foobar/utils"')]),e._v("\n\necho "),i("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"HelloWorld"')]),e._v("\n\ndog()\n")])]),i("h2",[i("a",{attrs:{name:"NimCfg:Debugging"}}),e._v("Nim Cfg: Debugging")]),i("p",[e._v("For extra configuration e.g. for debugging we want to specify some configuration stuff in a "),i("code",{pre:!0},[e._v("nim.cfg")]),e._v(" file")]),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/nim-lang/Nim/blob/devel/config/nim.cfg"}},[e._v("Example nim.cfg")])])]),i("p",[e._v("This is so the nim c compiler can be targetted to use lines like "),i("code",{pre:!0},[e._v("debugger:on")])]),i("p",[e._v("I added the following to my nim.cfg file")]),i("pre",{pre:!0},[i("code",{pre:!0,attrs:{"v-pre":""}},[e._v("--debuginfo:on\n--lineDir:on\n")])]),i("p",[e._v("nim.cfg uses nimscript to parse it which is a "),i("code",{pre:!0},[e._v("subset of nim")]),e._v(". See "),i("a",{attrs:{href:"https://nim-lang.org/docs/nims.html"}},[e._v("nimscript")])]),i("p",[e._v("Then running something like lldb:")]),i("pre",{pre:!0},[i("code",{pre:!0,attrs:{"v-pre":""}},[e._v("lldb bin/ngip\n\n(lldb) l\n   2181\n   2182 when not defined(js):\n   2183   proc cmp(x, y: string): int =\n   2184     when nimvm:\n   2185       if x < y: result = -1\n   2186       elif x > y: result = 1\n   2187       else: result = 0\n   2188     else:\n   2189       when not defined(nimscript): # avoid semantic checking\n   2190         let minlen = min(x.len, y.len)\n(lldb) \n")])])])}],a=i("2877"),l={},s=Object(a["a"])(l,n,r,!1,null,null,null);t["default"]=s.exports}}]);