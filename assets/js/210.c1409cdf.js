(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{804:function(e,t,n){"use strict";n.r(t);var a=n(9),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),n("VersionWarning"),e._v(" "),n("TocHeader"),e._v(" "),n("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),n("p",[n("em",[e._v("See our article,\n"),n("a",{attrs:{href:"https://medium.com/api3/getting-to-know-airnode-162e50ea243e",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting to know Airnode"),n("OutboundLink")],1),e._v("\nfor a technical overview of the software.")])]),e._v(" "),n("h2",{attrs:{id:"statelessness"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#statelessness"}},[e._v("#")]),e._v(" Statelessness")]),e._v(" "),n("p",[e._v("Oracle nodes typically keep persistent track of the blockchain and the state of\nthe requests they receive (i.e., at what stage of fulfillment they are at),\neither in-memory or in a database. In systems terminology, they are not\nmemoryless. Doing so comes with many disadvantages:")]),e._v(" "),n("ol",[n("li",[e._v("The database becomes a single point of failure. Orchestrating redundancy is\ncostly and not trivial.")]),e._v(" "),n("li",[e._v("Any anomaly that happens on the blockchain (block reorgs, ommer blocks, etc.)\nresults in the oracle node state to fall out of sync with the chain, which is\nnot trivial to correct.")]),e._v(" "),n("li",[e._v("A highly stateful application has many edge cases. These are difficult to\ncover with tests completely and are likely to result in bugs that\nincapacitate the node.")])]),e._v(" "),n("p",[e._v("These disadvantages result in an unstable oracle node, which is the essential\nreason why traditional oracle nodes require "),n("em",[e._v("professional node operators")]),e._v(" that\nneed to be ready to respond to incidents 24/7. Since this is not a realistic\nrequirement for first-party oracles, an oracle node that is designed for\nfirst-party oracles has to be stateless.")]),e._v(" "),n("p",[e._v("Another way to look at keeping oracle node state is this: The blockchain (e.g.,\nEthereum) node that the oracle node uses already keeps the state on behalf of\nthe oracle node. The duplication of this responsibility also duplicates the\npoints of failure (where failure in either of them results in total failure).\nThen, the oracle node should depend on the blockchain node to keep its state,\nwhich requires the protocol to be designed to fit this scheme.")]),e._v(" "),n("h3",{attrs:{id:"non-idempotent-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#non-idempotent-operations"}},[e._v("#")]),e._v(" Non-idempotent operations")]),e._v(" "),n("p",[e._v("An API operation is idempotent if calling it multiple times has the same effect\nas calling it once. For example, using a GET operation of an exchange API to get\nthe ETH/USD price data is typically an idempotent operation. Calling it once or\nmore will not make any difference at the API server-side. In contrast, using a\nPOST operation of a remittance service provider API to send $100 to another\nparty would be a non-idempotent operation. Each call would send an additional\n$100, and thus using the operation multiple times would have a different effect\nthan using it once.")]),e._v(" "),n("p",[e._v('The oracle node being stateless means that it would not be able to "remember" if\nit has made an API call associated with a request, and may repeat it under\ncertain conditions. This is not an issue at the moment, because presently,\noracles are only used for idempotent operations. The aim is for Airnode to\nsupport non-idempotent operations as well. There is research into alternative\nmethods to achieve this while protecting the resiliency that statelessness\nprovides.')]),e._v(" "),n("h2",{attrs:{id:"fully-serverless-stack"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fully-serverless-stack"}},[e._v("#")]),e._v(" Fully-serverless stack")]),e._v(" "),n("p",[e._v("Although serverless functions are better known for scaling automatically even\nwith extreme concurrent usage (which may also come in handy in a bright future),\nAirnode uses it for different reasons:")]),e._v(" "),n("ul",[n("li",[e._v("Serverless functions are stateless. This means that whatever problem occurs in\nan invocation, the next invocation will start with a clean slate. This\nprovides great resiliency against internal (from Airnode itself) or external\n(from the API, Ethereum node) bugs. In other words, the oracle node "),n("em",[e._v("turns\nitself off and on again")]),e._v(" very frequently, which automatically fixes the\nmajority of the potential problems.")]),e._v(" "),n("li",[e._v("Serverless functions are fully managed. They provide the closest experience to\n"),n("em",[e._v("set-and-forget")]),e._v(" possible.")]),e._v(" "),n("li",[e._v("Serverless functions are priced on-demand. Especially considering that Airnode\nwill not require major concurrent usage, this will result in great\ncost-efficiency (and even let the user stay below free tier\n("),n("a",{attrs:{href:"https://aws.amazon.com/free",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://cloud.google.com/free",target:"_blank",rel:"noopener noreferrer"}},[e._v("GCP"),n("OutboundLink")],1),e._v(")\nlimits).")]),e._v(" "),n("li",[e._v("Bare serverless functions are easy to port across cloud providers (e.g., using\n"),n("a",{attrs:{href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Terraform Framework"),n("OutboundLink")],1),e._v("), especially when their cloud\nprovider-specific dependencies are limited.")])]),e._v(" "),n("h2",{attrs:{id:"approach-to-security"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#approach-to-security"}},[e._v("#")]),e._v(" Approach to security")]),e._v(" "),n("p",[e._v("For an optimally hands-off user experience, Airnode should utilize fully-managed\nservices whenever possible. To allow this to be done securely, the node is\ndesigned in a defensive way.")]),e._v(" "),n("p",[e._v("There are two external parties that Airnode interacts with:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("APIs:")]),e._v(" Although Airnode is designed for first-party oracles, it considers\nserving data from third-party APIs as a valid usage scenario. In this case,\ncalls made to all APIs are contained in separate serverless function\ninvocations so that they cannot induce node-level failure.")]),e._v(" "),n("li",[n("strong",[e._v("Blockchain nodes:")]),e._v(" Similarly, using blockchain (e.g., Ethereum) nodes run\nby third party service providers is considered as a valid usage scenario.\nAirnode uses all providers simultaneously (i.e., not through a Quorum-based\nconsensus or behind a load balancer) for maximum availability, which is made\npossible by its unique stateless design. The interactions made with each\nprovider is contained in a separate serverless function invocation so that a\nmalicious provider cannot induce node-level failure.")])]),e._v(" "),n("p",[e._v("In addition, the protocol is implemented in a way that a blockchain service\nprovider cannot tamper with the parameters of a request, but only deny service.\nNote that this is not the case with alternative solutions, as they treat the\nblockchain service provider as a trusted party.")]),e._v(" "),n("p",[e._v("Cloud hosting is recommended over hosting on-premises due to the superior\navailability of serverless functions, and also for their set-and-forget\nqualities. As a precaution, redundancy on multiple cloud providers can be\nprovisioned easily and virtually at no cost thanks to the fully-serverless\ndesign of Airnode.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);