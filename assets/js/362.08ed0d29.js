(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{1004:function(e,t,a){"use strict";a.r(t);var s=a(9),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("TitleSpan",[e._v("Functions")]),e._v(" "),a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),a("VersionWarning"),e._v(" "),a("TocHeader"),e._v(" "),a("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),a("p",[e._v("Anyone can trigger an update to a Beacon however doing so will incur gas costs.\nNormally the Airnode that is paired with the Beacon triggers an update when the\ntolerance of the Beacon's value is out of range.")]),e._v(" "),a("p",[e._v("To trigger an update to a Beacon's value call the function\n"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/requesters/RrpBeaconServer.sol#L184-L232",target:"_blank",rel:"noopener noreferrer"}},[e._v("requestBeaconUpdate()"),a("OutboundLink")],1),e._v(".\nTriggering a Beacon update does not require that the caller be whitelisted. This\nis because the caller will be paying the gas costs.")]),e._v(" "),a("p",[e._v("There are two requirements for "),a("code",[e._v("requestBeaconUpdate()")]),e._v(" to be called:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/airnode/v0.5/concepts/sponsor.html"}},[e._v("sponsor")]),e._v(" must call\n"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/AirnodeRrp.sol#L36-L58",target:"_blank",rel:"noopener noreferrer"}},[e._v("setSponsorshipStatus()"),a("OutboundLink")],1),e._v("\nof the AirnodeRrp contract to sponsor the RrpBeaconServer contract.")],1)]),e._v(" "),a("li",[a("p",[e._v("The sponsor must call\n"),a("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/master/packages/airnode-protocol/contracts/rrp/requesters/RrpBeaconServer.sol#L169-L182",target:"_blank",rel:"noopener noreferrer"}},[e._v("setUpdatePermissionStatus()"),a("OutboundLink")],1),e._v("\nof the RrpBeaconServer contract to give request update permission to the user\nof this method. The template and additional parameters used here must specify\na single point of data of type "),a("code",[e._v("int256")]),e._v(" and an additional timestamp of type\n"),a("code",[e._v("uint256")]),e._v(" to be returned because this is what "),a("code",[e._v("fulfill()")]),e._v(" expects. This point\nof data must be castable to "),a("code",[e._v("int224")]),e._v(" and the timestamp must be castable to\n"),a("code",[e._v("uint32")]),e._v(".")])])]),e._v(" "),a("h2",{attrs:{id:"example-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-code"}},[e._v("#")]),e._v(" Example Code")]),e._v(" "),a("div",{staticClass:"language-solidity line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-solidity"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// SPDX-License-Identifier: MIT")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("pragma")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("solidity")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("^")]),a("span",{pre:!0,attrs:{class:"token version number"}},[e._v("0.8.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@api3/airnode-protocol/contracts/rrp/requesters/interfaces/IRrpBeaconServer.sol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("contract")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("mySmartContract")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("myRequestUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" _beaconContractAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes32")]),e._v(" _templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" _sponsor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("address")]),e._v(" _sponsorWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("bytes")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("calldata")]),e._v(" _parameters\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("external")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Calling the BeaconServer to update a Beacon.")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("RrpBeaconServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("_beaconContractAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("requestBeaconUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n         _templateId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n         _sponsor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n         _sponsorWallet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n         _parameters\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br")])]),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("p",[a("code",[e._v("requestBeaconUpdate( bytes32 _templateId, address _sponsor, address _sponsorWallet, bytes calldata _parameters )")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("bytes32 templateId")]),e._v(" - Template ID of the beacon to be updated.")]),e._v(" "),a("li",[a("code",[e._v("address sponsor")]),e._v(" - Sponsor whose wallet will be used to fulfill this request.")]),e._v(" "),a("li",[a("code",[e._v("address sponsorWallet")]),e._v(" - Sponsor wallet that will be used to fulfill this\nrequest.")]),e._v(" "),a("li",[a("code",[e._v("bytes calldata parameters")]),e._v(" - Parameters provided by the requester in addition\nto the parameters in the template.")])]),e._v(" "),a("h2",{attrs:{id:"returns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),a("p",[e._v("Nothing")]),e._v(" "),a("p",[e._v("It may be important to the caller of "),a("code",[e._v("requestBeaconUpdate()")]),e._v(" to determine if the\nrequested update failed. There are three probable methods to check.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The caller should check the "),a("code",[e._v("timestamp")]),e._v(" returned by "),a("code",[e._v("readBeacon()")]),e._v(" function\nto be sure it is fresh enough.")])]),e._v(" "),a("li",[a("p",[e._v("If a more accurate determination is required, call "),a("code",[e._v("readBeacon()")]),e._v(" and acquire\nthe "),a("code",[e._v("timestamnp")]),e._v(", then call "),a("code",[e._v("requestBeaconUpdate()")]),e._v(". The next call to\n"),a("code",[e._v("readBeacon()")]),e._v(" should have a newer "),a("code",[e._v("timestamp")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Use an off-chain app that subscribes to events of "),a("code",[e._v("RrpBeaconServer.sol")]),e._v(".")])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);