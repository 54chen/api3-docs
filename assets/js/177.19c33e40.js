(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{759:function(e,t,a){"use strict";a.r(t);var s=a(9),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("TitleSpan",[e._v("Quick Deploy Demo")]),e._v(" "),a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("VersionWarning"),e._v(" "),a("TocHeader"),e._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),a("p",[e._v("This demo is a simple Airnode deployment, using a hands-on approach, to better\nunderstand the overall deployment process of the\n"),a("RouterLink",{attrs:{to:"/airnode/v0.2/grp-providers/docker/deployer-image.html"}},[e._v("deployer image")]),e._v(". It uses an API\nendpoint ("),a("code",[e._v("GET /coins/{id}")]),e._v(") from\n"),a("a",{attrs:{href:"https://www.coingecko.com/en/api/documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("CoinGecko"),a("OutboundLink")],1),e._v(" which returns the\ncurrent value of a coin. This demo does not detail the overall configuration of\nan Airnode, it is just a quick start.")],1),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Additional Examples")]),e._v(" "),a("p",[e._v("There are additional examples of Airnode deployments in the\n"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.2/packages/airnode-examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("examples package"),a("OutboundLink")],1),e._v("\nof the Airnode repo.")]),e._v(" "),a("ul",[a("li",[e._v("Run Airnode as a docker container locally while connected to Rinkeby network.")]),e._v(" "),a("li",[e._v("Run Airnode as a docker container locally, but connected to the hardhat\n(local) network.")]),e._v(" "),a("li",[e._v("Deploy Airnode on AWS and use the Rinkeby network.")])])]),e._v(" "),a("p",[e._v("An Airnode deployment uses a Docker image (called\n"),a("RouterLink",{attrs:{to:"/airnode/v0.2/grp-providers/docker/deployer-image.html"}},[e._v("deployer image")]),e._v(") which in turn\nrequires three files as input.")],1),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.2/grp-providers/tutorial/config-json.html"}},[e._v("config.json")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.2/grp-providers/tutorial/secrets-env.html"}},[e._v("secrets.env")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/airnode/v0.2/grp-providers/tutorial/aws-env.html"}},[e._v("aws.env")])],1)]),e._v(" "),a("p",[e._v("For the purpose of this demo these files have been created and only require a\nfew minor changes on your part to make the deployment of the demo Airnode\nsuccessful. These change are needed to supply AWS credentials, a chain provider\nurl, a mnemonic and an apiKey.")]),e._v(" "),a("h2",{attrs:{id:"install-prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-prerequisites"}},[e._v("#")]),e._v(" Install Prerequisites")]),e._v(" "),a("p",[e._v("Install "),a("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),a("OutboundLink")],1),e._v(" if it is not present on\nyour system and launch it.")]),e._v(" "),a("h2",{attrs:{id:"project-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-folder"}},[e._v("#")]),e._v(" Project Folder")]),e._v(" "),a("p",[e._v("Create a folder called "),a("code",[e._v("/quick-deploy-demo")]),e._v(" with two more internal folders named\n"),a("code",[e._v("/config")]),e._v(" and "),a("code",[e._v("/output")]),e._v(". Place the contents of the files provided\n("),a("RouterLink",{attrs:{to:"/airnode/v0.2/grp-providers/tutorial/config-json.html"}},[e._v("config.json")]),e._v(", "),a("RouterLink",{attrs:{to:"/airnode/v0.2/grp-providers/tutorial/secrets-env.html"}},[e._v("secrets.env")]),e._v(" and\n"),a("RouterLink",{attrs:{to:"/airnode/v0.2/grp-providers/tutorial/aws-env.html"}},[e._v("aws.env")]),e._v(") into the locations show below.")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("quick-deploy-demo\n├── aws.env\n├── config\n│   ├── config.json\n│   └── secrets.env\n└── output\n    ├── receipt.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("By default, the deployer image looks for "),a("code",[e._v("config.json")]),e._v(" and "),a("code",[e._v("secrets.env")]),e._v(" in\n"),a("code",[e._v("/config")]),e._v(", "),a("code",[e._v("aws.env")]),e._v(" in "),a("code",[e._v("/quick-deploy-demo")]),e._v(" and writes "),a("code",[e._v("receipt.json")]),e._v(" to the\n"),a("code",[e._v("/output")]),e._v(" folder.")]),e._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("Prepare the three configuration files.")]),e._v(" "),a("h3",{attrs:{id:"config-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-json"}},[e._v("#")]),e._v(" config.json")]),e._v(" "),a("p",[e._v("This file requires no changes on your part. It has been created with just one\nAPI endpoint and will use the Rinkeby test network. There are three variables\nthis file will extract (interpolation) from "),a("code",[e._v("secrets.env")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"secrets-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secrets-env"}},[e._v("#")]),e._v(" secrets.env")]),e._v(" "),a("p",[e._v("Add values for each of the these fields.")]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("CHAIN_PROVIDER_URL")]),e._v(": A chain provider url from a provider such as\n"),a("a",{attrs:{href:"https://infura.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Infura"),a("OutboundLink")],1),e._v(". Make sure the provider url you use is for the\nRinkeby test network. Using another chain provider other than Infura is\nacceptable.")]),e._v(" "),a("ul",[a("li",[e._v("Sign-up or login to Infura.")]),e._v(" "),a("li",[e._v("Create a new project, select the "),a("strong",[e._v("Settings")]),e._v(" tab in the project.")]),e._v(" "),a("li",[e._v("Copy the URL (https) for Rinkeby under the Endpoints pick list.")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("AIRNODE_WALLET_MNEMONIC")]),e._v(": Provide the seed phrase (mnemonic) to a digital\nwallet. For the purpose of this demo it does not need eth in it for the\nRinkeby test network.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("HTTP_GATEWAY_API_KEY")]),e._v(": Make up an apiKey to authenticate calls to the HTTP\nGateway. Used to test your Airnode with CURL later. The expected length is\n30 - 128 characters.")])])]),e._v(" "),a("h3",{attrs:{id:"aws-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-env"}},[e._v("#")]),e._v(" aws.env")]),e._v(" "),a("p",[e._v("Add the access credentials to your AWS account. The deployer image will use them\nto install the Airnode functions to Lambda under your account's control. If you\ndo not have an account watch this\n"),a("a",{attrs:{href:"https://www.youtube.com/watch?v=KngM5bfpttA",target:"_blank",rel:"noopener noreferrer"}},[e._v("video"),a("OutboundLink")],1),e._v(" to create one. Unlike\n"),a("code",[e._v("secrets.env")]),e._v(', you cannot surround values with double quotes (").')]),e._v(" "),a("ul",[a("li",[a("code",[e._v("AWS_ACCESS_KEY_ID")]),e._v(": Is ACCESS_KEY_ID in IAM.")]),e._v(" "),a("li",[a("code",[e._v("AWS_SECRET_ACCESS_KEY")]),e._v(": Is SECRET_ACCESS_KEY in IAM.")])]),e._v(" "),a("h2",{attrs:{id:"deploy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deploy"}},[e._v("#")]),e._v(" Deploy")]),e._v(" "),a("p",[e._v("Make sure Docker is running and then execute the deployer image from the root of\nthe "),a("code",[e._v("quick-deploy-demo")]),e._v(" folder. A "),a("code",[e._v("receipt.json")]),e._v(" file will be created upon\ncompletion. It contains some deployment information and is used to remove the\nAirnode.")]),e._v(" "),a("p",[e._v("Run the following command to deploy the demo Airnode. Note that the version of\n"),a("code",[e._v("api3/airnode-deployer")]),e._v(" matches the "),a("code",[e._v("nodeVersion")]),e._v(" in the config.json file.\n"),a("airnode-DeployerPermissionsWarning")],1),e._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env-file aws.env "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("USER_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" -u"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GROUP_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" -g"),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('/config:/app/config"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('/output:/app/output"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:0.2.2 deploy\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])])]),e._v(" "),a("Tab",{attrs:{label:"Windows"}},[a("p",[e._v("For Windows, use CMD (and not PowerShell).")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker run -it --rm ^\n  --env-file aws.env ^\n  -v "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%/config:/app/config"')]),e._v(" ^\n  -v "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%/output:/app/output"')]),e._v(" ^\n  api3/airnode-deployer:0.2.2 deploy\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])],1),e._v(" "),a("h2",{attrs:{id:"test-the-airnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-the-airnode"}},[e._v("#")]),e._v(" Test the Airnode")]),e._v(" "),a("p",[e._v("After a successful deployment the Airnode can be tested directly using the\n"),a("RouterLink",{attrs:{to:"/airnode/v0.2/grp-providers/guides/build-an-airnode/http-gateway.html"}},[e._v("HTTP Gateway")]),e._v(" without accessing the\nblockchain. You provide endpoint parameters to get a response from an integrated\nAPI.")],1),e._v(" "),a("h3",{attrs:{id:"http-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-gateway"}},[e._v("#")]),e._v(" HTTP Gateway")]),e._v(" "),a("p",[e._v("Looking at the config.json shows that the HTTP Gateway was activated for our\nAirnode. Furthermore the endpoint for "),a("code",[e._v("/coins/{id}")]),e._v(" is set to be testable, see\n"),a("code",[e._v("endpoints[0]")]),e._v(". While the Airnode is enabled for the gateway, each individual\nendpoint must be marked as "),a("code",[e._v("testable")]),e._v(" to allow access.")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"nodeSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n ...\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"httpGateway"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"enabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The gateway is activated for this Airnode")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"apiKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"${HTTP_GATEWAY_API_KEY}"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Gateway apiKey")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n...\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"endpoints"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"coinMarketData"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"operation"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"get"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/coins/{id}"')]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"testable"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// This endpoint can be tested by the gateway")]),e._v("\n      ...\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br")])]),a("h3",{attrs:{id:"execute-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execute-endpoint"}},[e._v("#")]),e._v(" Execute Endpoint")]),e._v(" "),a("p",[e._v("Use CURL to execute the Airnode and get the results from the CoinGecko endpoint\n"),a("code",[e._v("/coins/{id}")]),e._v(" bypassing the Rinkeby test network that Airnode was deployed for.\nAs an alternative to CURL try an app such as "),a("a",{attrs:{href:"https://insomnia.rest/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Insomnia"),a("OutboundLink")],1),e._v("\nor "),a("a",{attrs:{href:"https://www.postman.com/product/rest-client/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Postman"),a("OutboundLink")],1),e._v(". Windows users can\nalso use\n"),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows Subsystem for Linux"),a("OutboundLink")],1),e._v("\n(WSL2) to run CURL for Linux.")]),e._v(" "),a("p",[e._v("In order to test the endpoint make an HTTP POST request with the "),a("code",[e._v("endpointId")]),e._v(" as\na path parameter, the "),a("code",[e._v("x-api-key")]),e._v(" in the header and endpoint parameters in the\nrequest body as a key/value pairs.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-v")]),e._v(": Verbose output is optional.")]),e._v(" "),a("li",[a("code",[e._v("-H")]),e._v(": The "),a("code",[e._v("x-api-key")]),e._v(" using the value of "),a("code",[e._v("HTTP_GATEWAY_API_KEY")]),e._v(" from\n"),a("code",[e._v("secrets.env")]),e._v(" file.")]),e._v(" "),a("li",[a("code",[e._v("-d")]),e._v(": Use request body data to pass all endpoint parameters.")])]),e._v(" "),a("p",[e._v("Breaking down the URL in the CURL command below:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("<httpGatewayUrl>")]),e._v(": The base URL to the gateway, found in the "),a("code",[e._v("receipts.json")]),e._v("\nfile. Update the placeholder in the CURL example below with its value.")]),e._v(" "),a("li",[a("code",[e._v("0xf466b8feec41e9e50815e0c9dca4db1ff959637e564bb13fefa99e9f9f90453c")]),e._v(": Passed\nas a path parameter, the endpointId to call, see "),a("code",[e._v("triggers.rrp[0].endpointId")]),e._v("\nin the "),a("code",[e._v("config.json")]),e._v(" file.")])]),e._v(" "),a("p",[e._v("Request:")]),e._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -v -H "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'x-api-key: 123-my-key-must-be-30-characters-min'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n-d "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('\'{"parameters": {"coinId": "api3"}}\'')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<httpGatewayUrl>/0xf466b8feec41e9e50815e0c9dca4db1ff959637e564bb13fefa99e9f9f90453c'")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])]),e._v(" "),a("Tab",{attrs:{label:"Windows"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -v -H "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"x-api-key: 123-my-key-must-be-30-characters-min"')]),e._v(" ^\n-d "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"{'),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v("parameters"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v(": {"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v("coinId"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v(": "),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v("api3"),a("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[e._v('\\"')]),e._v('}}"')]),e._v(" ^\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("httpGatewayUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/0xf466b8feec41e9e50815e0c9dca4db1ff959637e564bb13fefa99e9f9f90453c\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])])])],1),e._v(" "),a("p",[e._v("Response:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"4060000"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"remove-the-airnode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remove-the-airnode"}},[e._v("#")]),e._v(" Remove the Airnode")]),e._v(" "),a("p",[e._v("When you are done with this demo you can remove it. When the Airnode was\ndeployed a "),a("code",[e._v("receipt.json")]),e._v(" file was created in the "),a("code",[e._v("/output")]),e._v(" folder. This file is\nneeded to remove an Airnode.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--env-file")]),e._v(": Location of the "),a("code",[e._v("aws.env")]),e._v(" file.")]),e._v(" "),a("li",[a("code",[e._v("-v")]),e._v(": Location of the "),a("code",[e._v("receipt.json")]),e._v(" file.")])]),e._v(" "),a("Tabs",{attrs:{type:"border-card"}},[a("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --env-file aws.env "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("pwd")]),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v('/output:/app/output"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  api3/airnode-deployer:0.2.2 remove -r output/receipt.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])]),e._v(" "),a("Tab",{attrs:{label:"Windows"}},[a("p",[e._v("For Windows, use CMD (and not PowerShell).")]),e._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("docker run -it --rm ^\n  --env-file aws.env ^\n  -v "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"%cd%/output:/app/output"')]),e._v(" ^\n  api3/airnode-deployer:0.2.2 remove -r output/receipt.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])])],1)],1)}),[],!1,null,null,null);t.default=n.exports}}]);