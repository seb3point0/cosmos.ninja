module.exports = {
  title: "Cosmos Ninja",
  description: "A list of Cosmos resources",
  ga: "",
  dest: "./",
  base: "/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    repo: "seb2point0/cosmos.ninja",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "master",
    editLinkText: 'Edit this page on Github',
    lastUpdated: true,
    algolia: {
      apiKey: '',
      indexName: '',
      debug: false
    },
    nav: [
      { text: "Cosmology Newsletter", link: "https://cosmology.email" }
    ],
    sidebar: [
      "/",
      ['/page-b', 'Explicit link text'],
      ['/page-b', 'Explicit link text1']
    ]
  }
}
