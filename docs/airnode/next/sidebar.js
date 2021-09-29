module.exports = [
  {
    title: 'Introduction', initialOpenGroupIndex: 0, collapsable: true,
    children: [
      '',
      'introduction/contributing',
      'introduction/blog-posts',
      'introduction/apis',
      'introduction/first-party-oracles',
      'introduction/decentrally-governed-oracle-networks',
      'introduction/dapis'
    ]
  },
  {
    title: 'API Providers', initialOpenGroupIndex: 0, collapsable: false, 
    children: [
      'grp-providers/', // Routes to the README.md in grp-providers
      {title:'Design Philosophy', path:'grp-providers/airnode/design-philosophy'},
            {title:'Implementation', path:'grp-providers/airnode/implementation'},
            {title:'Ethereum Providers', path:'grp-providers/airnode/ethereum-providers'},
      /*{ 
        title: 'Airnode', initialOpenGroupIndex: -1, collapsable: true,
        children: [
            {title:'Design Philosophy', path:'grp-providers/airnode/design-philosophy'},
            {title:'Implementation', path:'grp-providers/airnode/implementation'},
            {title:'Ethereum Providers', path:'grp-providers/airnode/ethereum-providers'},
        ],
      },*/
      {
        title: 'Build an Airnode', collapsable: true, 
        children:[
          'grp-providers/guides/build-an-airnode/api-integration',
          'grp-providers/guides/build-an-airnode/configuring-airnode',
          'grp-providers/guides/build-an-airnode/apply-auth',
          {title:'Heartbeat (optional)', path:'grp-providers/guides/build-an-airnode/heartbeat'},
          {title:'HTTP Gateway (optional)', path:'grp-providers/guides/build-an-airnode/http-gateway'},
          'grp-providers/guides/build-an-airnode/deploying-airnode',
          'grp-providers/guides/build-an-airnode/removing-airnode'
        ]
      },
      'grp-providers/using-docker',
      /*{
        title: 'Docker',
        children:[
          'grp-providers/guides/docker/client-image',
          'grp-providers/guides/docker/deployer-image'
        ]
      },*/
      {
        title: 'Tutorial', collapsable: true,
        children: [
          'grp-providers/tutorial/airnode-starter',
          'grp-providers/tutorial/config-json',
          'grp-providers/tutorial/secrets-env',
          'grp-providers/tutorial/authorizers-json',
          'grp-providers/tutorial/receipt-json'
         /* {title: 'Config Examples',
            children:[
              'grp-providers/tutorials/config-examples/authorizers-json',
              'grp-providers/tutorials/config-examples/config-example-json',
              'grp-providers/tutorials/config-examples/example-env',
              'grp-providers/tutorials/config-examples/security-json',
            ]
          },*/
        ]
      }
    ]
  },
  {
    title: 'Developers', initialOpenGroupIndex: 0, collapsable: false,
    children:[
      'grp-developers/', // Routes to the README.md in grp-developers
      'grp-developers/requesters-sponsors',
      'grp-developers/call-an-airnode',
      'grp-developers/using-templates',
      'grp-developers/fees',
      'grp-developers/self-serve-platforms',
    ]
  },
  /*{
    
     * When adding a new doc or group before the"Dashboard" group
     * you must change the value of initialOpenGroupIndex.
    
    title: 'API3 Members', initialOpenGroupIndex: 2, collapsable: true,
    children: [
      {title:'API3 DAO', path:'grp-members/'},
      {title:'The DAO Pool', path:'grp-members/dao-pool'},
      {
        title: 'Dashboard', collapsable: true,
        children: [
            'grp-members/dashboard/',
            'grp-members/dashboard/staking',
            'grp-members/dashboard/proposals',
            'grp-members/dashboard/voting',
            'grp-members/dashboard/videos'
        ]
      },
      {title: 'DAO Tracker', path: 'grp-members/dao-tracker'},
    ]
  },*/
  //{title:'_________________',collapsable: false},
  {
    title: 'Concepts and Definitions', collapsable: true, initialOpenGroupIndex: -1,
    children:[
      'concepts/',
      'concepts/airnode',
      'concepts/endpoint',
      'concepts/authorization',
      'concepts/adminnable',
      'concepts/airnode-auth',
      'concepts/requester',
      'concepts/sponsor',
      'concepts/template',
      'concepts/request'
    ],
  },
  {
    title: 'Reference', initialOpenGroupIndex: -1, collapsable: true,
    children: [
      {
        title: 'Specification Files', collapsable: true,
        children: [
            {title:'Oracle Integration Specifications (OIS)', path:'reference/specifications/ois'},
            'reference/specifications/airnode-abi-specifications',
            'reference/specifications/reserved-parameters'
        ]
      },
      {
        title: 'Deployment Files', collapsable: true,
        children: [
            {title:'Overview', path:'reference/deployment-files/overview'},
            {title:'config.json', path:'reference/deployment-files/config-json'},
            {title:'secrets.env', path:'reference/deployment-files/secrets-env'},
            {title:'receipt.json', path:'reference/deployment-files/receipt-json'},
        ],
      },
      {
        title: 'Templates',
        children:[
          'reference/templates/ois-json',
          'reference/templates/config-json',
          'reference/templates/secrets-env'
        ]
      },
      'reference/cli-commands',
      'reference/deployer-commands',
      'reference/airnode-addresses',
      'reference/dao-contracts'
    ]
  }
]