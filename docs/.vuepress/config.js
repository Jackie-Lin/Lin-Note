// .vuepress/config.js
module.exports = {
    title:'Lin-Note',
    base:'/Lin-Note/',
    themeConfig: {
      nav:[{
        text: 'Home', link: '/'
      },{
        text: 'GitHub', link: 'https://github.com/Jackie-Lin/Lin-UI/tree/master'
      },{
        text: 'Npm', link: 'https://www.npmjs.com/package/lin-ui2'
      }],
      sidebar: [
        '/',
        '/note/deployEnvironment'
      ]
    }
  }