(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da932"],{"6bd4":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("h1",[e._v("This is your Life!(time)")]),s("p",[e._v("Remember that show with that old man interviewing another old person?")]),s("img",{attrs:{src:"https://i.ytimg.com/vi/CRTArZ2nnI8/hqdefault.jpg"}}),s("p",[e._v("Well mate, just like that show C++ has a way of confusing the hell out of someone.")]),s("p",[e._v("How? By forcing them to think about the concept of lifetimes with very little help unlike a language like "),s("code",{pre:!0},[e._v("rust")]),e._v(" which has these concepts baked into the compiler and will give you nice warnings.")]),s("p",[e._v("Something to be super careful of is when dealing with ref or pointers and assigning them to something is be aware of when that something will be destroyed.")]),s("p",[e._v("Look at this code:")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-c++"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("char")]),e._v("& head_b = string_b["),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v("]; "),s("span",{pre:!0,attrs:{class:"hljs-comment"}},[e._v("// string_b is a std::string")]),e._v("\n")])]),s("p",[e._v("Given that we are using a "),s("code",{pre:!0},[e._v("const char&")]),e._v(" we need to be sure that the "),s("code",{pre:!0},[e._v("operator []")]),e._v(" for whatever type string_b is will give you something that will not be deallocated.")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-c++"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("char")]),e._v(" head_b = string_b["),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("0")]),e._v("]; \n")])]),s("p",[e._v("This actually may be better given its just a char and no need to go indirectly via addresses")]),s("p",[e._v("Okay. If we look at this method "),s("code",{pre:!0},[e._v(".substr()")])]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-c++"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("string")]),e._v("& tail_b = string_b.substr("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(", string_b.length());\n")])]),s("p",[e._v("We're assinging it to a "),s("code",{pre:!0},[e._v("const string&")]),e._v(" but we know that .substr will return an rvalue copy of type string however if we think about the scope of that function call this may cause the "),s("code",{pre:!0},[e._v("const string&")]),e._v(" to point to something that has been deallocated")]),s("pre",{pre:!0},[s("code",{pre:!0,attrs:{"v-pre":"",class:"language-c++"}},[s("span",{pre:!0,attrs:{class:"hljs-keyword"}},[e._v("const")]),e._v(" "),s("span",{pre:!0,attrs:{class:"hljs-built_in"}},[e._v("string")]),e._v(" tail_b = string_b.substr("),s("span",{pre:!0,attrs:{class:"hljs-number"}},[e._v("1")]),e._v(", string_b.length());\n")])]),s("p",[e._v("This however will cause the default constructor for string to be used for "),s("code",{pre:!0},[e._v("string")]),e._v(" and it may have implemented a move from the rvalue return from .substr of copy it it.")]),s("p",[e._v("Something to be aware of and will avoid the use of the following:")]),s("img",{attrs:{src:"https://i.pinimg.com/originals/83/5b/2b/835b2b1227522dc6467761fb904d1a34.jpg"}}),s("p",[e._v("And when you've got your code working bug free and running at the speed of bare metal....")]),s("p",[e._v("You'll look in the mirror at the age of 99 and say to yourself..")]),s("p",[e._v("This")]),s("p",[e._v("IS")]),s("p",[e._v("YOUR")]),s("p",[e._v("LIFE")]),s("img",{attrs:{src:"https://media.giphy.com/media/g9582DNuQppxC/source.gif"}}),s("p",[e._v("RIP")])])}],n=s("2877"),o={},i=Object(n["a"])(o,r,a,!1,null,null,null);t["default"]=i.exports}}]);