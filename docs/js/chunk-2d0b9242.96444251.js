(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9242"],{"324a":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("ul",[s("li",[s("a",{attrs:{href:"#Jetbrains"}},[e._v("Jetbrains")]),s("ul",[s("li",[s("a",{attrs:{href:"#FileSearch"}},[e._v("File Search")])]),s("li",[s("a",{attrs:{href:"#ReconfigureGoBackGoForward"}},[e._v("Reconfigure Go Back + Go Forward")])]),s("li",[s("a",{attrs:{href:"#Isthereahotkeytoseeallsymbolsinaclass"}},[e._v("Is there a hotkey to see all symbols in a class?")])])])]),s("li",[s("a",{attrs:{href:"#VisualCode"}},[e._v("Visual Code")]),s("ul",[s("li",[s("a",{attrs:{href:"#Layout"}},[e._v("Layout")])]),s("li",[s("a",{attrs:{href:"#PythonPathstuff"}},[e._v("Python Path stuff")])]),s("li",[s("a",{attrs:{href:"#VscodeVariables"}},[e._v("Vscode Variables")])]),s("li",[s("a",{attrs:{href:"#Simplevscodedebugginglldb"}},[e._v("Simple vscode debugging (lldb)")])]),s("li",[s("a",{attrs:{href:"#QuickFindandreplaceinfile"}},[e._v("Quick Find and replace in file")])]),s("li",[s("a",{attrs:{href:"#Selectjustthewordthathasunderscores"}},[e._v("Select just the word that has underscores")])])])])]),s("h1",[e._v("Utimate IDE Zombie Mode")]),s("h2",[s("a",{attrs:{name:"Jetbrains"}}),e._v("Jetbrains")]),s("h3",[s("a",{attrs:{name:"FileSearch"}}),e._v("File Search")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v("cmd + e\n")])]),s("h3",[s("a",{attrs:{name:"ReconfigureGoBackGoForward"}}),e._v("Reconfigure Go Back + Go Forward")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v("f11 - Go back\nf12 - Go forward\n")])]),s("h3",[s("a",{attrs:{name:"Isthereahotkeytoseeallsymbolsinaclass"}}),e._v("Is there a hotkey to see all symbols in a class?")]),s("p",[e._v("I can't seem to find any hotkey but there's a "),s("code",{pre:!0},[e._v("structure")]),e._v(" tab which is the same view as Project")]),s("p",[e._v("Best to move that to the top right")]),s("hr"),s("h2",[s("a",{attrs:{name:"VisualCode"}}),e._v("Visual Code")]),s("h3",[s("a",{attrs:{name:"Layout"}}),e._v("Layout")]),s("img",{attrs:{src:"https://imgur.com/v97IO0e.png"}}),s("h3",[s("a",{attrs:{name:"PythonPathstuff"}}),e._v("Python Path stuff")]),s("ul",[s("li",[e._v("Add to .vscode/settings.json")])]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v('    "python.autoComplete.extraPaths": [\n        "/path/to/src",\n    ],\n    "python.linting.pylintEnabled": true,\n    "python.analysis.extraPaths": [\n        "/path/to/src"\n    ],\n')])]),s("h3",[s("a",{attrs:{name:"VscodeVariables"}}),e._v("Vscode Variables")]),s("ul",[s("li",[s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/variables-reference"}},[e._v("Variable Documentation")])])]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":""}},[e._v("${workspaceFolder} - the path of the folder opened in VS Code\n${workspaceFolderBasename} - the name of the folder opened in VS Code without any slashes (/)\n${file} - the current opened file\n${relativeFile} - the current opened file relative to workspaceFolder\n${relativeFileDirname} - the current opened file's dirname relative to workspaceFolder\n${fileBasename} - the current opened file's basename\n${fileBasenameNoExtension} - the current opened file's basename with no file extension\n${fileDirname} - the current opened file's dirname\n${fileExtname} - the current opened file's extension\n${cwd} - the task runner's current working directory on startup\n${lineNumber} - the current selected line number in the active file\n${selectedText} - the current selected text in the active file\n${execPath} - the path to the running VS Code executable\n${defaultBuildTask} - the name of the default build task\n")])]),s("h3",[s("a",{attrs:{name:"Simplevscodedebugginglldb"}}),e._v("Simple vscode debugging (lldb)")]),s("ul",[s("li",[e._v("Install CodeLLDB Extension")]),s("li",[e._v(".vscode/launch.json")])]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[e._v("{\n  "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"configurations"')]),e._v(": [\n    {\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"name"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Launch Example Debug"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"type"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"lldb"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"request"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"launch"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"program"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"${workspaceFolder}/build/src/example/example"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"args"')]),e._v(": [],\n    },\n    {\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"name"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Launch Example2 Debug"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"type"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"lldb"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"request"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"launch"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"program"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"${workspaceFolder}/build/src/example2/example2"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"args"')]),e._v(": [],\n    },\n    {\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"name"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"Launch Sdoku Debug"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"type"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"lldb"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"request"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"launch"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"program"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"${workspaceFolder}/build/src/sdoku/sdoku"')]),e._v(",\n      "),s("span",{pre:!0,attrs:{class:"hljs-attr"}},[e._v('"args"')]),e._v(": [],\n    }\n  ]\n}\n")])]),s("h3",[s("a",{attrs:{name:"QuickFindandreplaceinfile"}}),e._v("Quick Find and replace in file")]),s("ul",[s("li",[e._v("Keybind : Select All Occurences Find Match")]),s("li",[e._v("I use ctrl + 2")])]),s("video",{attrs:{controls:""}},[s("source",{attrs:{src:"https://imgur.com/ZwbPOH8.mp4",type:"video/mp4"}}),e._v(" Your browser does not support the video tag. ")]),s("h3",[s("a",{attrs:{name:"Selectjustthewordthathasunderscores"}}),e._v("Select just the word that has underscores")]),s("ul",[s("li",[e._v("settings.json")])]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-json"}},[e._v("    "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"editor.wordSeparators"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"hljs-string"}},[e._v('"`~!@#$%^&*()-=+[{]}\\\\|;:\'\\",.<>/?_"')]),e._v(",\n")])]),s("ul",[s("li",[e._v("Now when you select the word it will not include these")])])])}],n=s("2877"),l={},o=Object(n["a"])(l,a,r,!1,null,null,null);t["default"]=o.exports}}]);