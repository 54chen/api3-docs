(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{953:function(e,t,s){"use strict";s.r(t);var a=s(9),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("TitleSpan",[e._v("Quick Deploy AWS")]),e._v(" "),s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("VersionWarning"),e._v(" "),s("TocHeader"),e._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,4]}}),e._v(" "),s("p",[e._v("This demo is a simple Airnode deployment, using a hands-on approach, to better\nunderstand the overall deployment process of the Airnode\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/docker/deployer-image.html"}},[e._v("deployer image")]),e._v(" which deploys\nthe off-chain component of Airnode (a.k.a., the node) to AWS. It uses an API\nendpoint ("),s("code",[e._v("GET /simple/price")]),e._v(") from\n"),s("a",{attrs:{href:"https://www.coingecko.com/en/api/documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoinGecko"),s("OutboundLink")],1),e._v(" which returns the\ncurrent value of a coin. This demo does not detail the overall configuration of\nan Airnode, it is just a quick start.")],1),e._v(" "),s("p",[e._v("An Airnode cloud provider deployment uses a Docker image (called\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/docker/deployer-image.html"}},[e._v("deployer image")]),e._v(") which in turn\nrequires three files as input.")],1),e._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/tutorial/quick-deploy-aws/config-json.html"}},[e._v("config.json")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/tutorial/quick-deploy-aws/secrets-env.html"}},[e._v("secrets.env")])],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/tutorial/quick-deploy-aws/aws-env.html"}},[e._v("aws.env")])],1)]),e._v(" "),s("p",[e._v("For the purpose of this demo these files have been created and only require a\nfew minor changes on your part to make the deployment of the demo Airnode\nsuccessful. These changes are needed to supply AWS credentials, a chain provider\nurl, a mnemonic and a self-defined apiKey for the HTTP testing gateway.")]),e._v(" "),s("h2",{attrs:{id:"install-prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-prerequisites"}},[e._v("#")]),e._v(" Install Prerequisites")]),e._v(" "),s("p",[e._v("Install the "),s("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Desktop"),s("OutboundLink")],1),e._v(" and launch it.")]),e._v(" "),s("h2",{attrs:{id:"project-folder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-folder"}},[e._v("#")]),e._v(" Project Folder")]),e._v(" "),s("p",[e._v("A project folder is needed for this demo. You can create it manually or download\na zip file ready to go.")]),e._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Create Manually"}},[s("p",[e._v("Create a folder called "),s("code",[e._v("/quick-deploy-aws")]),e._v(" with two more internal folders named\n"),s("code",[e._v("/config")]),e._v(" and "),s("code",[e._v("/output")]),e._v(". Place the contents of the files provided\n("),s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/tutorial/quick-deploy-aws/config-json.html"}},[e._v("config.json")]),e._v(", "),s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/tutorial/quick-deploy-aws/secrets-env.html"}},[e._v("secrets.env")]),e._v(" and\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/tutorial/quick-deploy-aws/aws-env.html"}},[e._v("aws.env")]),e._v(") into the locations show below.")],1),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("quick-deploy-aws\n├── aws.env\n├── config\n│   ├── config.json\n│   └── secrets.env\n└── output\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])]),e._v(" "),s("Tab",{attrs:{label:"Download"}},[s("p",[e._v("Download the "),s("a",{attrs:{href:"/zip-files/quick-deploy-aws-v0.5.zip",download:""}},[e._v("\nquick-deploy-aws")]),e._v(" project folder.")])])],1),e._v(" "),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),s("p",[e._v("Prepare the three configuration files. By default, the Airnode deployer image\nlooks for "),s("code",[e._v("config.json")]),e._v(" and "),s("code",[e._v("secrets.env")]),e._v(" in "),s("code",[e._v("/config")]),e._v(", for "),s("code",[e._v("aws.env")]),e._v(" in the\nproject root and writes "),s("code",[e._v("receipt.json")]),e._v(" to the "),s("code",[e._v("/output")]),e._v(" folder.")]),e._v(" "),s("h3",{attrs:{id:"config-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#config-json"}},[e._v("#")]),e._v(" config.json")]),e._v(" "),s("p",[e._v("This file requires no changes on your part. It has been created with just one\nAPI endpoint. It will instruct the Airnode to attach to the Rinkeby test\nnetwork. There are three variables this file will extract (interpolation) from\n"),s("code",[e._v("secrets.env")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"secrets-env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#secrets-env"}},[e._v("#")]),e._v(" secrets.env")]),e._v(" "),s("p",[e._v("Add values for each of the these fields.")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("CHAIN_PROVIDER_URL")]),e._v(": A chain provider url from a provider such as\n"),s("a",{attrs:{href:"https://infura.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infura"),s("OutboundLink")],1),e._v(". Make sure the provider url you use is for the\nRinkeby test network. Using another chain provider other than Infura is\nacceptable.")]),e._v(" "),s("ul",[s("li",[e._v("Sign-up or login to Infura.")]),e._v(" "),s("li",[e._v("Create a new project, select the "),s("strong",[e._v("Settings")]),e._v(" tab in the project.")]),e._v(" "),s("li",[e._v("Copy the URL (https) for Rinkeby under the Endpoints pick list.")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("AIRNODE_WALLET_MNEMONIC")]),e._v(": Provide the seed phrase (mnemonic) to a digital\nwallet. For the purpose of this demo it does not need eth in it for the\nRinkeby test network. If you don't have one use the Admin CLI command\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/reference/packages/admin-cli.html#generate-mnemonic"}},[e._v("generate-mnemonic")]),e._v("\nto create one or another method you prefer.")],1)]),e._v(" "),s("li",[s("p",[s("code",[e._v("HTTP_GATEWAY_API_KEY")]),e._v(": Make up an apiKey to authenticate calls to the HTTP\nGateway. Used to test your Airnode with CURL later. The expected length is\n30 - 128 characters.")])])]),e._v(" "),s("h3",{attrs:{id:"aws-env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-env"}},[e._v("#")]),e._v(" aws.env")]),e._v(" "),s("p",[e._v("Add the access credentials to your AWS account. The deployer image will use them\nto install the Airnode functions to Lambda under your account's control. If you\ndo not have an account watch this\n"),s("a",{attrs:{href:"https://www.youtube.com/watch?v=KngM5bfpttA",target:"_blank",rel:"noopener noreferrer"}},[e._v("video"),s("OutboundLink")],1),e._v(" to create one. Unlike\n"),s("code",[e._v("secrets.env")]),e._v(', you cannot surround values with double quotes (").')]),e._v(" "),s("ul",[s("li",[s("code",[e._v("AWS_ACCESS_KEY_ID")]),e._v(": Is ACCESS_KEY_ID in IAM.")]),e._v(" "),s("li",[s("code",[e._v("AWS_SECRET_ACCESS_KEY")]),e._v(": Is SECRET_ACCESS_KEY in IAM.")])]),e._v(" "),s("h2",{attrs:{id:"deploy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[e._v("#")]),e._v(" Deploy")]),e._v(" "),s("p",[e._v("Make sure Docker is running and then execute the deployer image from the root of\nthe "),s("code",[e._v("quick-deploy-aws")]),e._v(" folder. A "),s("code",[e._v("receipt.json")]),e._v(" file will be created upon\ncompletion. It contains some deployment information and is used to remove the\nAirnode.")]),e._v(" "),s("airnode-WarningSimultaneousDeployments",{attrs:{removeLink:"../../docker/deployer-image.html#manual-removal"}}),e._v(" "),s("p",[e._v("Run the following command to deploy the demo Airnode. Note that the version of\n"),s("code",[e._v("api3/airnode-deployer")]),e._v(" matches the "),s("code",[e._v("nodeVersion")]),e._v(" in the config.json file.\n"),s("airnode-DeployerPermissionsWarning")],1),e._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("docker run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env-file aws.env "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("USER_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" -u"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GROUP_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" -g"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('/config:/app/config"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('/output:/app/output"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:0.5.0 deploy\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])]),e._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("p",[e._v("For Windows, use CMD (and not PowerShell).")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("docker run -it --rm ^\n  --env-file aws.env ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%/config:/app/config"')]),e._v(" ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%/output:/app/output"')]),e._v(" ^\n  api3/airnode-deployer:0.5.0 deploy\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])])])],1),e._v(" "),s("h2",{attrs:{id:"test-the-airnode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#test-the-airnode"}},[e._v("#")]),e._v(" Test the Airnode")]),e._v(" "),s("p",[e._v("After a successful deployment the Airnode can be tested directly using the\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/guides/build-an-airnode/http-gateways.html"}},[e._v("HTTP Gateways")]),e._v(" without\naccessing the blockchain. You provide endpoint parameters to get a response from\nan integrated API.")],1),e._v(" "),s("h3",{attrs:{id:"http-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-gateway"}},[e._v("#")]),e._v(" HTTP Gateway")]),e._v(" "),s("p",[e._v("Looking at the "),s("RouterLink",{attrs:{to:"/airnode/v0.5/grp-providers/tutorial/quick-deploy-aws/config-json.html"}},[e._v("config.json")]),e._v(" code snippet below shows the HTTP\ngateway was activated for the Airnode. Furthermore the endpoint for\n"),s("code",[e._v("/simple/price")]),e._v(" (with an "),s("code",[e._v("endpointId")]),e._v(" of "),s("code",[e._v("0xf...53c")]),e._v(") has been added to\n"),s("code",[e._v("triggers.http[n]")]),e._v(". Only those endpoints added to the "),s("code",[e._v("http")]),e._v(" array can be\ntested.")],1),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"nodeSettings"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  ...\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"httpGateway"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The gateway is activated for this Airnode")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"apiKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${HTTP_GATEWAY_API_KEY}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Gateway apiKey")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"maxConcurrency"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"triggers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"rrp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"endpointId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0x6db9e3e3d073ad12b66d28dd85bcf49f58577270b1cc2d48a43c7025f5c27af6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"oisTitle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CoinGecko Basic Request"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"endpointName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"coinMarketData"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"http"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"endpointId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0x6db9e3e3d073ad12b66d28dd85bcf49f58577270b1cc2d48a43c7025f5c27af6"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"oisTitle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"CoinGecko Basic Request"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"endpointName"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"coinMarketData"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  ...\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br")])]),s("h3",{attrs:{id:"execute-endpoint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execute-endpoint"}},[e._v("#")]),e._v(" Execute Endpoint")]),e._v(" "),s("p",[e._v("Use CURL to execute the Airnode and get the results from the CoinGecko endpoint\n"),s("code",[e._v("/simple/price")]),e._v(" bypassing the Rinkeby test network that Airnode was deployed\nfor. As an alternative to CURL try an app such as\n"),s("a",{attrs:{href:"https://insomnia.rest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Insomnia"),s("OutboundLink")],1),e._v(" or\n"),s("a",{attrs:{href:"https://www.postman.com/product/rest-client/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postman"),s("OutboundLink")],1),e._v(". Windows users can also\nuse\n"),s("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Subsystem for Linux"),s("OutboundLink")],1),e._v("\n(WSL2) to run CURL for Linux.")]),e._v(" "),s("p",[e._v("In order to test an endpoint make a HTTP POST request with the "),s("code",[e._v("endpointId")]),e._v(" as a\npath parameter, the "),s("code",[e._v("Content-Type")]),e._v(" header set to "),s("code",[e._v("application/json")]),e._v(", the\n"),s("code",[e._v("x-api-key")]),e._v(" header set to the key and place the endpoint parameter in the\nrequest body as a key/value pair.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("-X")]),e._v(": POST")]),e._v(" "),s("li",[s("code",[e._v("-H")]),e._v(": The "),s("code",[e._v("Content-Type")]),e._v(" using the value of "),s("code",[e._v("application/json")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("-H")]),e._v(": The "),s("code",[e._v("x-api-key")]),e._v(" using the value of "),s("code",[e._v("HTTP_GATEWAY_API_KEY")]),e._v(" from\n"),s("code",[e._v("secrets.env")]),e._v(" file.")]),e._v(" "),s("li",[s("code",[e._v("-d")]),e._v(": Use request body data to pass the endpoint parameter key/value pair.")])]),e._v(" "),s("p",[e._v("URL:")]),e._v(" "),s("p",[s("code",{staticStyle:{"overflow-wrap":"break-word"}},[e._v("<httpGatewayUrl>/0xf466b8feec41e9e50815e0c9dca4db1ff959637e564bb13fefa99e9f9f90453c")])]),e._v(" "),s("ul",[s("li",[s("code",[e._v("<httpGatewayUrl>")]),e._v(": The base URL to the gateway, found in the "),s("code",[e._v("receipts.json")]),e._v("\nfile. Update the placeholder in the CURL example below with its value.")]),e._v(" "),s("li",[s("code",{staticStyle:{"overflow-wrap":"break-word"}},[e._v("0xf466b8feec41e9e50815e0c9dca4db1ff959637e564bb13fefa99e9f9f90453c")]),e._v(":\nPassed as a path parameter, the endpointId to call, see\n"),s("code",[e._v("triggers.rrp[0].endpointId")]),e._v(" in the "),s("code",[e._v("config.json")]),e._v(" file.")])]),e._v(" "),s("h4",{attrs:{id:"request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[e._v("#")]),e._v(" Request")]),e._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -v "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-X POST "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type: application/json'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'x-api-key: 123-my-key-must-be-30-characters-min'")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{"parameters": {"coinIds": "api3", "coinVs_currencies": "usd"}}\'')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<httpGatewayUrl>/0x6db9e3e3d073ad12b66d28dd85bcf49f58577270b1cc2d48a43c7025f5c27af6'")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])]),e._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -v ^\n-X POST ^\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Content-Type: application/json"')]),e._v(" ^\n-H "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"x-api-key: 123-my-key-must-be-30-characters-min"')]),e._v(" ^\n-d "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v("parameters"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v(": {"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v("coinIds"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v("api3"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v(", "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v("coinVs_currencies"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v(": "),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v("usd"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v('}}"')]),e._v(" ^\n"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<httpGatewayUrl>/0x6db9e3e3d073ad12b66d28dd85bcf49f58577270b1cc2d48a43c7025f5c27af6"')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])])])],1),e._v(" "),s("h4",{attrs:{id:"response"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[e._v("#")]),e._v(" Response")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"encodedValue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0x0000000000000000000000000000000000000000000000000000000000362b30"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"rawValue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"api3"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"usd"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.55")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"values"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"3550000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("airnode-tutorials-TutorialResponse"),e._v(" "),s("h2",{attrs:{id:"remove-the-airnode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-the-airnode"}},[e._v("#")]),e._v(" Remove the Airnode")]),e._v(" "),s("p",[e._v("When you are done with this demo you can remove it. When the Airnode was\ndeployed a "),s("code",[e._v("receipt.json")]),e._v(" file was created in the "),s("code",[e._v("/output")]),e._v(" folder. This file is\nneeded to remove an Airnode.")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("--env-file")]),e._v(": Location of the "),s("code",[e._v("aws.env")]),e._v(" file.")]),e._v(" "),s("li",[s("code",[e._v("-v")]),e._v(": Location of the "),s("code",[e._v("receipt.json")]),e._v(" file.")])]),e._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("docker run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env-file aws.env "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('/output:/app/output"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:0.5.0 remove -r output/receipt.json\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])]),e._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("p",[e._v("For Windows, use CMD (and not PowerShell).")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("docker run -it --rm ^\n  --env-file aws.env ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%/output:/app/output"')]),e._v(" ^\n  api3/airnode-deployer:0.5.0 remove -r output/receipt.json\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])])],1),e._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),s("p",[e._v("You have deployed an Airnode on AWS and tested it using the HTTP gateway that\nwas enabled as part of the Airnode deployment. The Airnode, upon deployment,\nstarted contacting the AirnodeRrp contract on the Rinkeby testnet to gather any\nrequests made by requesters to this Airnode. This tutorial did not address\nmaking a request as its purpose was simply to quickly deploy a functional\nAirnode.")]),e._v(" "),s("p",[e._v("Learn more about AWS resources that Airnode uses in the\n"),s("RouterLink",{attrs:{to:"/airnode/v0.5/reference/cloud-resources.html"}},[e._v("Cloud Resources")]),e._v(" doc.")],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);