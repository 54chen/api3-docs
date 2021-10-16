---
title: secrets.env
---
<TitleSpan>Templates</TitleSpan>
# {{$frontmatter.title}}

The `secrets.env` contains the secrets that the respective Airnode deployments will need. All variables defined in a
`secrets.env` can be interpolated inside [config.json](../deployment-files/config-json.md). For more details, see the
[full description of the secrets file](../deployment-files/secrets-env.md).

```sh
AIRNODE_WALLET_MNEMONIC="<FILL_*>"
CHAIN_PROVIDER_URL="<FILL_*>"
```