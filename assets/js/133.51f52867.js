(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{702:function(e,a,s){"use strict";s.r(a);var t=s(9),n=Object(t.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("VersionWarning"),e._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),s("ol",[s("li",[s("p",[e._v("Build the Docker image (you can skip this step and fetch the pre-built image).")]),e._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" Dockerfile Dockerfile-deployer "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" Dockerfile-client Dockerfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\ndocker build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -t api3/airnode-client:0.1.0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" Dockerfile Dockerfile-client "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" Dockerfile-deployer Dockerfile\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])]),e._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" Dockerfile Dockerfile-deployer "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" ^\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" Dockerfile-client Dockerfile "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" ^\ndocker build "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" -t api3/airnode-client:0.1.0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" ^\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" Dockerfile Dockerfile-client "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" ^\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" Dockerfile-deployer Dockerfile\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])])],1)],1),e._v(" "),s("li",[s("p",[e._v("Ensure that your "),s("code",[e._v(".env")]),e._v(" file looks like "),s("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/pre-alpha/packages/node/__dev__/.env.example",target:"_blank",rel:"noopener noreferrer"}},[e._v(".env.example"),s("OutboundLink")],1),e._v(" and is the current working directory.")])]),e._v(" "),s("li",[s("p",[e._v("Also ensure that "),s("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/pre-alpha/packages/node/__dev__/config.json.example",target:"_blank",rel:"noopener noreferrer"}},[e._v("config.json"),s("OutboundLink")],1),e._v(" is also in the current working directory. Note that "),s("code",[e._v("nodeSettings.cloudProvider")]),e._v(" should be "),s("code",[e._v("local")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("The following command runs an airnode client that is invoked every minute.")]),e._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("docker run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    --env-file .env "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    -v "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(':/airnode/out"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n    api3/airnode-client:pre-alpha\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])]),e._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("docker run -it --rm ^\n    --env-file .env ^\n    -v "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%:/airnode/out"')]),e._v(" ^\n    api3/airnode-client:pre-alpha\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])])],1)],1)])],1)}),[],!1,null,null,null);a.default=n.exports}}]);