(window.webpackJsonp=window.webpackJsonp||[]).push([[408],{1052:function(t,s,e){"use strict";e.r(s);var a=e(9),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("Deprecated")]),t._v(" "),e("p",[t._v("As of v0.4 the zip-files.js Nodejs library has been deprecated in favor of a\nsimple manual zip file build.")])]),t._v(" "),e("h2",{attrs:{id:"v0-3-only"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-3-only"}},[t._v("#")]),t._v(" v0.3 Only")]),t._v(" "),e("p",[t._v("Some tutorials ask the reader to create project folders to run the tutorial.\nRather than creating them manually the reader can download a zip file of the\nproject ready to go. This is done with the "),e("code",[t._v("/libs/zip-files.js")]),t._v(" nodejs script\nfor "),e("code",[t._v("v0.3")]),t._v(" only of the docs.")]),t._v(" "),e("p",[t._v("Each time the script is executed all zip files for the "),e("code",[t._v("v0.3")]),t._v(" tutorials are\nupdated and will show up in "),e("code",[t._v("git status")]),t._v(" as changed. This is due to the header\nchanges to the zip files regardless if the contents of the zip file changes.")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v0.3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quick-deploy-aws'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aws'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v0.3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quick-deploy-gcp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gcp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v0.3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quick-deploy-container'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'local'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("See the code comments in "),e("code",[t._v("zip-files.js")]),t._v(" for details on the parameters in the\nabove code.")]),t._v(" "),e("p",[t._v("Run the script from the root of the "),e("code",[t._v("api3-docs")]),t._v(" project.")]),t._v(" "),e("div",{staticClass:"language-nodejs line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("node ./libs/zip-files.js;\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"after-v0-3-use-manual-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#after-v0-3-use-manual-method"}},[t._v("#")]),t._v(" After v0.3 use Manual Method")]),t._v(" "),e("p",[t._v("The directory structure for the tutorial "),e("code",[t._v("/src")]),t._v(" folders have been changed to\nmimic the actual project the reader will download. Therefore it is easier to\ncompress the project folders (e.g., "),e("code",[t._v("/quick-deploy-aws")]),t._v(") in place, rename the\nzip files and move them to "),e("code",[t._v("/docs/.vuepress/public/assets/zip-files/...")]),t._v(". Using\nthis method also allows for an individual zip file to be updated.")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("public\n└── zip-files\n    └── quick-deploy-aws\n        ├── quick-deploy-aws-v0.3.zip\n        ├── quick-deploy-aws-v0.4.zip\n        ├── quick-deploy-container-v0.3.zip\n        ├── quick-deploy-container-v0.4.zip\n        ├── quick-deploy-gcp-v0.3.zip\n        └── quick-deploy-gcp-v0.4.zip\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);