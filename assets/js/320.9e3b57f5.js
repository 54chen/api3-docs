(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{950:function(e,t,n){"use strict";n.r(t);var s=n(9),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("TitleSpan",[e._v("Build an Airnode")]),e._v(" "),n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),n("VersionWarning"),e._v(" "),n("TocHeader"),e._v(" "),n("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("TODO:")]),e._v(" "),n("p",[e._v("This is a difficult concept so it should be documented in a separate section.")])]),e._v(" "),n("p",[e._v('The signed relayed triggers can be used to make an HTTP request to Airnode,\nwhich will call the API endpoint specified in the triggers section. After the\nAPI call is made, Airnode will not submit the response on chain - instead, you\nneed to provide a "relayer" which can be any address and this relayer can use\nthe API response and submit it onchain. The response of the HTTP request is the\nAPI response data and a signature which can be verified on chain. This signature\nguarantees the integrity and authenticity of the data. You need to pass two\nrequired properties when making an HTTP request to get the signed relayed data:')]),e._v(" "),n("ul",[n("li",[n("code",[e._v("_id")]),e._v(" - The id of the request. (This should be the "),n("code",[e._v("requestId")]),e._v(" in case of RRP\nor "),n("code",[e._v("subscriptionId")]),e._v(" in case of PSP).")]),e._v(" "),n("li",[n("code",[e._v("_relayer")]),e._v(" - The address of the account that will submit the response\ntransaction on chain.")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);