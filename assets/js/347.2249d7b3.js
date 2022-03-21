(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{981:function(e,n,t){"use strict";t.r(n);var a=t(9),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("TitleSpan",[e._v("Packages")]),e._v(" "),t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),t("VersionWarning"),e._v(" "),t("TocHeader"),e._v(" "),t("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),t("p",[e._v("The\n"),t("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.5/packages/airnode-deployer",target:"_blank",rel:"noopener noreferrer"}},[e._v("airnode-deployer"),t("OutboundLink")],1),e._v("\npackage is used primarily by the "),t("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/docker/"}},[e._v("Docker Images")]),e._v(".\nThis CLI tool provides the underlying commands used by the Docker images when\ndeploying an Airnode.")],1),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Deploying an Airnode")]),e._v(" "),t("p",[e._v("API providers are strongly encouraged to use the\n"),t("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/docker/"}},[e._v("Docker Images")]),e._v(" when deploying an Airnode and not\nthe deployer CLI commands.")],1)]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("The deployer's commands can be run using\n"),t("a",{attrs:{href:"https://nodejs.dev/learn/the-npx-nodejs-package-runner",target:"_blank",rel:"noopener noreferrer"}},[e._v("npx"),t("OutboundLink")],1),e._v(", installing a\nglobal npm package or by manually building the airnode-deployer package. Using\nnpx is the simplest method to interact with the deployer manually if you do not\nwish to use the Docker images.")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/reference/packages/deployer.html#using-npx"}},[e._v("Using npx")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/reference/packages/deployer.html#global-package"}},[e._v("Global Package")])],1),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.5/packages/airnode-deployer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Build Manually"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"using-npx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-npx"}},[e._v("#")]),e._v(" Using npx")]),e._v(" "),t("p",[e._v("The airnode-deployer package can be run as an npm package using npx. This allows\nyou to run deployer commands without installing the deployer npm package or\nhaving to manually build the airnode-deployer package yourself.")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("npx @api3/airnode-deployer deploy --config pathTo/config.json --secrets pathTo/secrets.env --receipt myOutput/receipt.json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h3",{attrs:{id:"global-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-package"}},[e._v("#")]),e._v(" Global Package")]),e._v(" "),t("p",[e._v("The airnode-deployer package can be installed globally with yarn or npm. If\ninstalled using yarn make sure yarn bin is added to "),t("code",[e._v("PATH")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" global "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" @api3/airnode-deployer\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @api3/airnode-deployer -g\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Executing the deployer.")]),e._v("\nairnode-deployer deploy --config pathTo/config.json --secrets pathTo/secrets.env --receipt myOutput/receipt.json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("The deployer has two commands. To re-deploy an existing Airnode run the "),t("code",[e._v("deploy")]),e._v("\ncommand again.")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/reference/packages/deployer.html#deploy"}},[e._v("deploy")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/airnode/v0.5/reference/packages/deployer.html#remove"}},[e._v("remove")])],1)]),e._v(" "),t("h3",{attrs:{id:"workflows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workflows"}},[e._v("#")]),e._v(" Workflows")]),e._v(" "),t("ol",[t("li",[e._v("Make sure you have "),t("code",[e._v("config.json")]),e._v(" and "),t("code",[e._v("secrets.env")]),e._v(" ready. Then, use the\n"),t("code",[e._v("deploy")]),e._v(" command to trigger your first deployment.")]),e._v(" "),t("li",[e._v("In order to update the Airnode configuration:\n"),t("ul",[t("li",[e._v("Update the "),t("code",[e._v("config.json")]),e._v(" and "),t("code",[e._v("secrets.env")]),e._v(" files as needed.")]),e._v(" "),t("li",[e._v("Run the "),t("code",[e._v("deploy")]),e._v(" command again.")])])]),e._v(" "),t("li",[e._v("Use the "),t("code",[e._v("remove")]),e._v(" command to remove the Airnode deployment. Use the "),t("code",[e._v("-r")]),e._v("\noption to provide the receipt file from the latest deployment or manually add\nthe required arguments.")])]),e._v(" "),t("h3",{attrs:{id:"deploy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[e._v("#")]),e._v(" deploy")]),e._v(" "),t("p",[e._v("When creating or updating an Airnode the "),t("code",[e._v("config.json")]),e._v(" and "),t("code",[e._v("secrets.env")]),e._v(" files\nare needed. You can use the provided example\n"),t("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.5/packages/airnode-deployer/config/config.example.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("config.json"),t("OutboundLink")],1),e._v("\nand\n"),t("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/v0.5/packages/airnode-deployer/config/secrets.example.env",target:"_blank",rel:"noopener noreferrer"}},[e._v("secrets.env"),t("OutboundLink")],1),e._v("\ntemplates to get started quickly, but you will need to edit these with your own\nAPI details and secrets.")]),e._v(" "),t("airnode-WarningSimultaneousDeployments",{attrs:{removeLink:"../../grp-providers/docker/deployer-image.html#manual-removal"}}),e._v(" "),t("p",[e._v("Make sure "),t("code",[e._v("config.json")]),e._v(" and "),t("code",[e._v("secrets.env")]),e._v(" are available in the path for the\n"),t("code",[e._v("--configuration")]),e._v(" argument.")]),e._v(" "),t("p",[e._v("When completed the "),t("code",[e._v("deploy")]),e._v(" command creates a receipt using the path and name\nfrom the "),t("code",[e._v("--receipt")]),e._v(" argument. The receipt contains metadata about the\ndeployment and can be used to remove the Airnode.")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Deploys an Airnode instance using the `config.json` and `secrets.env` files.")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This can be used for a new deployment or to update an existing deployment.")]),e._v("\n\nOptions:\n      --version                          Show version number                                                   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      --debug                            Run "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" debug mode                                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("default: false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      --help                             Show "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v("                                                             "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  -c, --configuration, --config, --conf  Path to configuration "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v("             "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("default: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"config/config.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  -s, --secrets                          Path to secrets "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v("                   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("default: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"config/secrets.env"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  -r, --receipt                          Output path "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" receipt "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v("          "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("default: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"output/receipt.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example")]),e._v("\nairnode-deployer deploy --config pathTo/config.json --secrets pathTo/secrets.env --receipt myOutput/receipt.json\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("h3",{attrs:{id:"remove"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[e._v("#")]),e._v(" remove")]),e._v(" "),t("p",[e._v("An Airnode can be removed using the remove command two different ways.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Best:")]),e._v(" With a deployment receipt created when the Airnode was deployed.")]),e._v(" "),t("li",[t("strong",[e._v("Alternate:")]),e._v(" With the Airnode short address and cloud provider\nspecifications. The "),t("code",[e._v("airnodeShortAddress")]),e._v(" is used in the cloud console within\nthe names of the serverless functions. The other values can be found in\n"),t("code",[e._v("config.json")]),e._v(".\n"),t("ul",[t("li",[t("code",[e._v("nodeSetting.cloudProvider.type")])]),e._v(" "),t("li",[t("code",[e._v("nodeSetting.cloudProvider.region")])]),e._v(" "),t("li",[t("code",{staticStyle:{"overflow-wrap":"break-word"}},[e._v("nodeSetting.cloudProvider.projectId")]),e._v("\n(GCP only)")]),e._v(" "),t("li",[t("code",[e._v("nodeSetting.stage")])])])])]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Removes a deployed Airnode instance.")]),e._v("\n\nOptions:\n      --version                Show version number                                                             "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      --debug                  Run "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" debug mode                                              "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("default: false"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      --help                   Show "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("help")]),e._v("                                                                       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("boolean"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  -r, --receipt                Path to receipt "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v("                                                             "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  -a, --airnode-address-short  Airnode Address "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("short version"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("                                                  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  -s, --stage                  Stage "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("environment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("                                                              "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  -c, --cloud-provider         Cloud provider                                                    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("choices: "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"aws"')]),e._v(", "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"gcp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  -e, --region                 Region                                                                           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  -p, --project-id             Project ID "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("GCP only"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("                                                            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Examples")]),e._v("\nairnode-deployer remove --receipt myOutput/receipt.json\nairnode-deployer remove --airnode-address-short abd9eaa --stage dev --cloud-provider aws --region us-east-1\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br")])])],1)}),[],!1,null,null,null);n.default=s.exports}}]);