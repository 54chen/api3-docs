---
title: DEPRECATED What is API3?
---

<p align="center">
  <img src="./figures/api3.png" width="400" />
</p>

# {{$frontmatter.title}}

<TocHeader />
<TOC class="table-of-contents" :include-level="[2,3]" />

**API3** ([https://api3.org](https://api3.org)) is a collaborative project to deliver traditional API services to smart contract platforms in a decentralized and trust-minimized way. It is governed by a _decentralized autonomous organization_ (DAO), namely the **API3 DAO**. Therefore, its code is open source and its operations are transparent.

## Thesis Statement

The vast majority of the external integrations that decentralized applications need are to commercial Web APIs that traditional businesses have built to monetize their data and services.

Therefore, what is widely known as _the oracle problem_ is in practice _an API connectivity problem_.

Existing oracle solutions fall short because they fail to make this distinction, resulting in inferior solutions that depend on third-party oracles and ecosystems that exclude _API providers_. By refining the definition of the problem, **API3** aims to provide a much more optimal solution.

::: tip API3 Whitepaper (pdf)
For a detailed discussion of the API3 project, read the [API3 Whitepaper](https://github.com/api3dao/api3-whitepaper/blob/master/api3-whitepaper.pdf).
:::

## The Airnode

At its core, **API3** brings the ability for API providers to easily run their own _oracle nodes_. This allows them to provide their data on-chain, without an intermediary, to any _decentralized application_ \(dApp\) interested in their services.

At the heart of this mechanism sits **Airnode**, an open-source oracle node. It's designed to be easily deployed by any API provider with almost no maintenance. Because of Airnode, dApp developers can write _smart contracts_ to interact with the on-chain data of API providers.

Airnode is designed with mechanisms to remove the on-chain or off-chain concerns of API providers. The set-and-forget framework of Airnode is all about ease of implementation.

::: tip Learn more about Airnode
Read Section 4 of the [API3 Whitepaper](https://github.com/api3dao/api3-whitepaper/blob/master/api3-whitepaper.pdf) to learn more. _Airnode: A Node Designed for First-Party Oracles_
:::

## Learn More about API3

<!-- START TAB BOX -->
:::: tabs

::: tab API3 Website
The API3 website ([https://api3.org/](https://api3.org/)) is the best place to learn more.
:::

::: tab The Whitepaper

**Abstract from the [API3 Whitepaper](https://github.com/api3dao/api3-whitepaper/blob/master/api3-whitepaper.pdf)</a>**

With decentralized applications beginning to provide meaningful services in areas such as decentralized finance, there is an increasing need for these applications to receive data or trigger events using traditional Web APIs.

However, the generic oracle solutions fail to appropriately address the API connectivity problem due to an over-generalized and misguided approach. To remedy this issue, API3 will drive a collaborative effort to create a new generation of blockchain-native, decentralized APIs, or dAPIs for short.

dAPIs are composed of first-party oracles operated by API providers, and thus are more secure and cost-efficient than alternative solutions that employ middlemen. At the core of the governance, security, and value capture mechanics of this initiative will be the API3 token. Staking the token will grant its holders full governing rights over the API3 DAO along with all the associated rewards.

Staked API3 tokens will be used as collateral for the on-chain insurance service that will provide quantifiable and trustless security guarantees to dAPI users. These mechanics will remove the need for a central authority at the ecosystem level. As a result, the API3 Project will allow smart contract platforms to leverage APIs for the building of meaningful applications in a truly decentralized and trust-minimized way.
:::

::: tab Blog Posts
Not comfortable with academic-style papers? The following Blog Posts explain the Whitepaper in smaller digestible articles.

<blog-posts :tab="'byGroup'"/>

**All the Blog Posts**

You can find all our blog posts on our [Medium page here](https://medium.com/api3/archive)
:::

::: tab Communities
Join the API3 community on the following services.  

[API3 Forum](https://forum.api3.org/)

Community Chat on [Telegram](https://t.me/API3DAO)

Developer Chat on [Discord](https://discord.gg/qnRrcfnm5W)

[YouTube Channel](https://www.youtube.com/channel/UCCpUthOhahxjdeX9T7t7nJQ)
:::

::: tab GitHub
Visit the [API3 GitHub](https://github.com/api3dao) page and find everything about.. everything. Explore the many repositories to gain in-depth knowledge about API3.

* the whitepaper
* source code
* documentation
* usage examples

Please feel free to contribute to any API3 GitHub repositories.
:::

::::
<!-- END TAB BOX -->

## Contributing

At **API3** we are open to any proposals and improvements. Please feel free to contribute. 

* opening issues
* making pull requests
* proposing features

Read more about contributing in the [Contributing](./introduction/contributing.md) section.
