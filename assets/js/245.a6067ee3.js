(window.webpackJsonp=window.webpackJsonp||[]).push([[245],{844:function(a,s,t){"use strict";t.r(s);var e=t(9),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[a._v("#")]),a._v(" "+a._s(a.$frontmatter.title))]),a._v(" "),t("VersionWarning"),a._v(" "),t("TocHeader"),a._v(" "),t("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),a._v(" "),t("p",[a._v("The\n"),t("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.3/packages/airnode-validator",target:"_blank",rel:"noopener noreferrer"}},[a._v("airnode-validator"),t("OutboundLink")],1),a._v("\npackage, known as the validator, is used by the\n"),t("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/docker/"}},[a._v("Docker Images")]),a._v(" to validate the\n"),t("RouterLink",{attrs:{to:"/airnode/v0.3/grp-providers/guides/build-an-airnode/configuring-airnode.html"}},[a._v("configuration files")]),a._v("\nyou provide when deploying an Airnode. You can also use the validator to check\nthe configuration files for correct formatting and other issues while creating\nthem.")],1),a._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[a._v("#")]),a._v(" Usage")]),a._v(" "),t("p",[a._v("The validator's commands can be run using\n"),t("a",{attrs:{href:"https://nodejs.dev/learn/the-npx-nodejs-package-runner",target:"_blank",rel:"noopener noreferrer"}},[a._v("npx"),t("OutboundLink")],1),a._v(", installing a\nglobal npm package, the validator SDK or by manually building the validator\npackage. Using npx is the simplest method to interact with the validator.")]),a._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/packages/validator.html#using-npx"}},[a._v("Using npx")])],1),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/packages/validator.html#global-package"}},[a._v("Global Package")])],1),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/packages/validator.html#use-the-sdk"}},[a._v("Use the SDK")])],1),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/packages/validator.html#build-manually"}},[a._v("Build Manually")])],1)]),a._v(" "),t("h3",{attrs:{id:"using-npx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-npx"}},[a._v("#")]),a._v(" Using npx")]),a._v(" "),t("p",[a._v("The validator package can be run as an npm package using npx. This allows you to\nrun validator commands without installing the validator npm package or having to\nmanually build the validator package yourself.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("npx @api3/airnode-validator api3-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"global-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-package"}},[a._v("#")]),a._v(" Global Package")]),a._v(" "),t("p",[a._v("The validator package can be installed globally with yarn or npm. If installed\nusing yarn make sure yarn bin is added to "),t("code",[a._v("PATH")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" @api3/airnode-validator\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# OR")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("npm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" @api3/airnode-validator -g\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Executing the validator.")]),a._v("\napi3-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("h3",{attrs:{id:"use-the-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-the-sdk"}},[a._v("#")]),a._v(" Use the SDK")]),a._v(" "),t("p",[a._v("The validator package exports useful functions for validation. In the output\n"),t("code",[a._v("valid")]),a._v(" is set to "),t("code",[a._v("true")]),a._v(" when there are no errors, however there could be\nwarnings in the "),t("code",[a._v("messages")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" validator "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'@api3/airnode-validator'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  validator"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("validateWithTemplate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'exampleSpecs/config.specs.json'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'config'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n# Outputs json\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  valid"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  messages"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" level"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"error"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"warning"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" message"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" string "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("h3",{attrs:{id:"build-manually"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-manually"}},[a._v("#")]),a._v(" Build Manually")]),a._v(" "),t("p",[a._v("You can clone and build the Airnode monorepo then run the validator as a yarn\nscript from inside the "),t("code",[a._v("packages/airnode-validator")]),a._v(" directory.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# download and build the airnode monorepo")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone git@github.com:api3dao/airnode.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" airnode\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" run bootstrap\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" run build\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" packages/airnode-validator\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# execute the validator")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" run cli:validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"exampleSpecs/config.json"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# validator output")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"valid"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" true,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"messages"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br")])]),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("p",[a._v("The validator is based on two primary arguments to function. The "),t("code",[a._v("--template")]),a._v("\nargument describes the content type to validate. Secondly the "),t("code",[a._v("--specs")]),a._v(" argument\nwhich requires a file containing the content to validate.")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("npx @api3/airnode-validator --help\n\nOptions:\n      --help                    Show help                              [boolean]\n      --version                 Show version number                    [boolean]\n  -t, --template                Path to validator template file or name of\n                                airnode specification format           [string] [required]\n  -s, --specification, --specs  Path to specification file that will be\n                                validated                              [string] [required]\n  -i, --secrets                 Path to .env file that will be interpolated with\n                                specification                          [string]\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("p",[a._v("For the "),t("code",[a._v("--template")]),a._v(" argument use one of the following values which are\ncase-insensitive.")]),a._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/packages/validator.html#config"}},[a._v("config")])],1),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/packages/validator.html#ois"}},[a._v("OIS")])],1),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/packages/validator.html#apispecifications"}},[a._v("apiSpecifications")]),a._v(" "),t("em",[a._v("or")]),a._v(" apiSpecs")],1),a._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/packages/validator.html#endpoints"}},[a._v("endpoints")])],1)]),a._v(" "),t("p",[a._v("The validator will automatically validate the latest available version of a\ntemplate when the template does not contain a specific version (i.e.,\n"),t("code",[a._v('--template="config"')]),a._v("). If a specific version is needed it can be appended to\ntemplate argument (i.e., "),t("code",[a._v('--template="config@0.3"')]),a._v(").")]),a._v(" "),t("h3",{attrs:{id:"config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[a._v("#")]),a._v(" config")]),a._v(" "),t("p",[a._v("The following code example validates a config.json file. This is the most common\nvalidation use case. The other templates ("),t("code",[a._v("apiSpecifications, endpoints, OIS")]),a._v(")\nsupport fields within the config.json and must be in separate files to be\nvalidated.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Validates a completed config.json file.")]),a._v("\nnpx @api3/airnode-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myProject/config/config.json"')]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Here (optionally) the OIS object from config.json is in a separate file.")]),a._v("\nnpx @api3/airnode-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OIS"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myProject/config/OIS-spec.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("You will most likely keep secrets in a file separate from the "),t("code",[a._v("config.json")]),a._v("\nfile. Using interpolation with an env file is supported using the "),t("code",[a._v("--secrets")]),a._v("\nargument.")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("npx @api3/airnode-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"config"')]),a._v(" --secrets"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"secrets.env"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myProject/config/config.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"ois"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ois"}},[a._v("#")]),a._v(" OIS")]),a._v(" "),t("p",[a._v("The following code example validates an "),t("code",[a._v("ois")]),a._v(" field that has been placed in a\nfile separate from its config.json file. The\n"),t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/specifications/ois.html"}},[a._v("ois field")]),a._v(" contains the mapping between an API and\nAirnode endpoints. "),t("em",[a._v("(interpolation with an env file is supported)")])],1),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("npx @api3/airnode-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"OIS"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myProject/config/ois.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"apispecifications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apispecifications"}},[a._v("#")]),a._v(" apiSpecifications")]),a._v(" "),t("p",[a._v("The following code example validates an "),t("code",[a._v("ois.apiSpecifications")]),a._v(" field that has\nbeen placed in a file separate from its config.json file. The\n"),t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/specifications/ois.html#_4-apispecifications"}},[a._v("ois.apiSpecifications field")]),a._v("\ndefines/specifies the API Airnode will call. "),t("em",[a._v("(interpolation with an env file is\nsupported)")])],1),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("npx @api3/airnode-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"endpoints"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myProject/config/apiSpecifications.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"endpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#endpoints"}},[a._v("#")]),a._v(" endpoints")]),a._v(" "),t("p",[a._v("The following code example validates an "),t("code",[a._v("ois.endpoints")]),a._v(" field that has been\nplaced in a file separate from its config.json file. The\n"),t("RouterLink",{attrs:{to:"/airnode/v0.3/reference/specifications/ois.html#_5-endpoints"}},[a._v("ois.endpoints field")]),a._v(" are Airnode\nendpoints that map to the "),t("code",[a._v("ois.apiSpecifications")]),a._v(" field in config.json.\n"),t("em",[a._v("(interpolation with an env file is supported)")])],1),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("npx @api3/airnode-validator --template"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"apiSpecifications"')]),a._v(" --specs"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"myProject/config/endpoints.json"')]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),a._v(" "),t("h2",{attrs:{id:"output"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[a._v("#")]),a._v(" Output")]),a._v(" "),t("p",[a._v("The validator provides the following output.")]),a._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Default output")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"valid"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"messages"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"level"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"error"')]),a._v(" | "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"warning"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"message"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" string\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"output"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" object\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);