(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{881:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("TitleSpan",[t._v("Build an Airnode")]),t._v(" "),s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),s("VersionWarning"),t._v(" "),s("TocHeader"),t._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),s("p",[t._v("After integrating your API ("),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/api-integration.html"}},[t._v("API Integration")]),t._v(") and creating\nthe configuration files ("),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/configuring-airnode.html"}},[t._v("Configuring Airnode")]),t._v("), the\nnext step is to deploy the Airnode.")],1),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("Complete the following before deploying your Airnode.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/api-integration.html"}},[t._v("API Integration")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/api-security.html"}},[t._v("API Security")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/configuring-airnode.html"}},[t._v("Configuring Airnode")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/apply-auth.html"}},[t._v("Using Authorizers")]),t._v(" optional")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/heartbeat.html"}},[t._v("Heartbeat")]),t._v(" optional")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/http-gateway.html"}},[t._v("HTTP Gateway")]),t._v(" optional")],1)])]),t._v(" "),s("h2",{attrs:{id:"deploy-with-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploy-with-docker"}},[t._v("#")]),t._v(" Deploy with Docker")]),t._v(" "),s("p",[t._v("The recommended way to deploy Airnode is by using the Docker\n"),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/docker/deployer-image.html"}},[t._v("deployer image")]),t._v(". This image is simply a wrapper\naround the\n"),s("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/v0.4/packages/airnode-deployer",target:"_blank",rel:"noopener noreferrer"}},[t._v("deployer CLI"),s("OutboundLink")],1),t._v(".\nTry out the "),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/tutorial/"}},[t._v("Quick Deploy")]),t._v(" tutorial if you wish to become\nfamiliar with the deployer image first.")],1),t._v(" "),s("p",[t._v("The deployer interacts with a cloud provider to deploy Airnode programmatically,\nwithout requiring you to click through a lot of ever-changing graphical\ninterfaces. For it to do so, a cloud project setup and credentials are required\nand was discussed in\n"),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/configuring-airnode.html#aws-setup-aws-deployment-only"}},[t._v("Configuring an Airnode")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"install-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install-docker"}},[t._v("#")]),t._v(" Install Docker")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/docker/deployer-image.html"}},[t._v("deployer image")]),t._v(" is containerized as a\nDocker image. This will deploy the Airnode to the cloud provider without the\nworry of installing dependencies and is the recommended way to do a deployment.\nIf you do not already have docker installed go to the\n"),s("a",{attrs:{href:"https://docs.docker.com/get-docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker website"),s("OutboundLink")],1),t._v(" and install it.")],1),t._v(" "),s("h2",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[t._v("#")]),t._v(" Deployment")]),t._v(" "),s("p",[t._v("At this point your project should resemble the following. The "),s("code",[t._v("config.json")]),t._v(",\n"),s("code",[t._v("secrets.env")]),t._v(", "),s("code",[t._v("aws.env")]),t._v(" (if deploying to AWS) and "),s("code",[t._v("gcp.json")]),t._v(" (if deploying to\nGCP) files should be ready to go. Other files you may have added are expected\nbut not used by the deployer image.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("my-airnode\n├── aws.env\n├── gcp.json\n├── config\n│   ├── config.json\n│   └── secrets.env\n└── output\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("From the root of the project directory run the Docker\n"),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/docker/deployer-image.html"}},[t._v("deployer image")]),t._v(" which will deploy the Airnode.\nWhen the deployment has completed a "),s("code",[t._v("receipt.json")]),t._v(" file will be written to the\n"),s("code",[t._v("/output")]),t._v(" folder. This file contains important configuration information about\nthe Airnode and is needed to remove the Airnode should the need arise.")],1),t._v(" "),s("airnode-WarningSimultaneousDeployments",{attrs:{removeLink:"../../docker/deployer-image.html#manual-removal"}}),t._v(" "),s("p",[s("airnode-DeployerPermissionsWarning")],1),t._v(" "),s("h3",{attrs:{id:"aws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws"}},[t._v("#")]),t._v(" AWS")]),t._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('docker run -it --rm \\\n  --env-file aws.env \\\n  -e USER_ID=$(id -u) -e GROUP_ID=$(id -g) \\\n  -v "$(pwd)/config:/app/config" \\\n  -v "$(pwd)/output:/app/output" \\\n  api3/airnode-deployer:0.4.1 deploy\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("p",[t._v("For Windows, use CMD (and not PowerShell).")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker run -it --rm ^\n  --env-file aws.env ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%cd%/config:/app/config"')]),t._v(" ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%cd%/output:/app/output"')]),t._v(" ^\n  api3/airnode-deployer:0.4.1 deploy\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])],1),t._v(" "),s("h3",{attrs:{id:"gcp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcp"}},[t._v("#")]),t._v(" GCP")]),t._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("USER_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" -e "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GROUP_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -g"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/gcp.json:/app/gcp.json"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/config:/app/config"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/output:/app/output"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api3/airnode-deployer:0.4.1 deploy\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])]),t._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("p",[t._v("For Windows, use CMD (and not PowerShell).")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker run -it --rm ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%cd%/gcp.json:/app/gcp.json"')]),t._v(" ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%cd%/config:/app/config"')]),t._v(" ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%cd%/output:/app/output"')]),t._v(" ^\n  api3/airnode-deployer:0.4.1 deploy\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])])],1),t._v(" "),s("p",[t._v("When the deployment is complete a "),s("code",[t._v("receipt.json")]),t._v(" file is placed into the\n"),s("code",[t._v("/output")]),t._v(" folder.")]),t._v(" "),s("h3",{attrs:{id:"receipt-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receipt-json"}},[t._v("#")]),t._v(" receipt.json")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("receipt.json")]),t._v(" file is a product of a successful deployment. It contains\nconfiguration information for the Airnode and must be used to remove the Airnode\nshould you choose.")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"airnodeWallet"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"airnodeAddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0xaBd9daAdf32fCd96eE4607bf3d5B31e19a244Cac"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"airnodeAddressShort"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abd9daa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"xpub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xpub661MyMwAqRbcGHp9uC7...vbeziJwFHuNs"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"deployment"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"airnodeAddressShort"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abd9daa"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cloudProvider"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aws"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"region"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"us-east-1"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stage"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nodeVersion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0.4.1"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"httpGatewayUrl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://6vmx3xp8tj.execute-api.us-east-1.amazonaws.com/v1/test"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br")])]),s("h2",{attrs:{id:"testing-with-http-gateway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testing-with-http-gateway"}},[t._v("#")]),t._v(" Testing with HTTP Gateway")]),t._v(" "),s("p",[t._v("If you opted to enable the HTTP Gateway it can be used to test the Airnode while\nbypassing the chain it was deployed to. There are three examples in other docs\nthat detail how to do this.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/guides/build-an-airnode/http-gateway.html#using-curl"}},[t._v("HTTP Gateway")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/tutorial/quick-deploy-aws/#test-the-airnode"}},[t._v("Quick Deploy AWS")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-providers/tutorial/quick-deploy-gcp/#test-the-airnode"}},[t._v("Quick Deploy GCP")])],1)]),t._v(" "),s("h2",{attrs:{id:"removing-the-airnode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#removing-the-airnode"}},[t._v("#")]),t._v(" Removing the Airnode")]),t._v(" "),s("p",[t._v("When the Airnode was deployed a "),s("code",[t._v("receipt.json")]),t._v(" file was created in the "),s("code",[t._v("/output")]),t._v("\nfolder. This file is needed to remove an Airnode.")]),t._v(" "),s("h3",{attrs:{id:"aws-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aws-2"}},[t._v("#")]),t._v(" AWS")]),t._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --env-file aws.env "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/output:/app/output"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api3/airnode-deployer:0.4.1 remove -r output/receipt.json\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),t._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("p",[t._v("For Windows, use CMD (and not PowerShell).")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker run -it --rm ^\n  --env-file aws.env ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%cd%/output:/app/output"')]),t._v(" ^\n  api3/airnode-deployer:0.4.1 remove -r output/receipt.json\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])],1),t._v(" "),s("h3",{attrs:{id:"gcp-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gcp-2"}},[t._v("#")]),t._v(" GCP")]),t._v(" "),s("Tabs",{attrs:{type:"border-card"}},[s("Tab",{attrs:{label:"Linux/Mac/WSL2"}},[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker run -it --rm "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/gcp.json:/app/gcp.json"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("pwd")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('/output:/app/output"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  api3/airnode-deployer:0.4.1 remove -r output/receipt.json\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),t._v(" "),s("Tab",{attrs:{label:"Windows"}},[s("p",[t._v("For Windows, use CMD (and not PowerShell).")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("docker run -it --rm ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%cd%/gcp.json:/app/gcp.json"')]),t._v(" ^\n  -v "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%cd%/output:/app/output"')]),t._v(" ^\n  api3/airnode-deployer:0.4.1 remove -r output/receipt.json\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])])],1),t._v(" "),s("h2",{attrs:{id:"calling-the-airnode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#calling-the-airnode"}},[t._v("#")]),t._v(" Calling the Airnode")]),t._v(" "),s("p",[t._v("Once the Airnode is deployed, see\n"),s("RouterLink",{attrs:{to:"/airnode/v0.4/grp-developers/call-an-airnode.html"}},[t._v("Calling an Airnode")]),t._v(" to learn how\nrequests are made to it.")],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);