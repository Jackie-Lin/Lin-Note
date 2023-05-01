// .vuepress/config.js
module.exports = {
  title: "Hello Lin-Note", // 设置网站标题
  description: "艮山的个人博客",
  base: "/Lin-Note/", // 设置站点根路径
  // dest: "./ROOT", // 设置输出目录
  // head: [],
  // plugins: [],
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      {
        text: "基础入门",
        items: [
          {
            text: "sass 入门",
            link: "/introduction/sass 入门",
          },
          {
            text: "TypeScript 入门",
            link: "/introduction/TypeScript 入门",
          },
          {
            text: "React 入门",
            link: "/introduction/React 入门",
          },
        ],
      },
      {
        text: "开发工具",
        items: [
          { text: "vscode 插件篇", link: "/developmentTool/vscode 插件篇" },
          {
            text: "vscode 常用快捷键",
            link: "/developmentTool/vscode 常用快捷键",
          },
          { text: "Typora", link: "/developmentTool/typroa使用心得" },
          { text: "Git", link: "/developmentTool/git 版本管理相关知识点" },
        ],
      },
      {
        text: "学习笔记",
        items: [
          { text: "入门", link: "/note/TypeScript 笔记" },
          { text: "CentOS 7", link: "/note/CentOS 7 真机安装实测" },
          { text: "跨域", link: "/note/跨域处理" },
          { text: "小米路由器", link: "/note/垃圾的小米路由器 bug" },
        ],
      },
      { text: "开发心得", link: "/inspiration/" },
      {
        text: "前端面试",
        items: [
          {
            text: "分类面试题",
            items: [
              { text: "基础面", link: "/interview/基础 面试题" },
              {
                text: "软技能",
                link: "/interview/软技能-沟通、总结和学习能力",
              },
              {
                text: "实践经验",
                link: "/interview/实践工作经验-是否做过真实项目",
              },
              {
                text: "项目设计",
                link: "/interview/项目设计-能否成为项目负责人",
              },
              { text: "知识广度", link: "/interview/知识广度-从前端到全栈" },
              { text: "知识深度", link: "/interview/知识深度-原理和源码" },
              {
                text: "编写代码",
                link: "/interview/编写高质量代码-正确、完整、清晰、鲁棒",
              },
              {
                text: "分析能力",
                link: "/interview/分析和解决问题的思路-可以独立解决问题",
              },
            ],
          },
        ],
      },
      {
        text: "GitHub",
        link: "https://github.com/Jackie-Lin/Lin-UI/tree/master",
      },
      {
        text: "Npm",
        link: "https://www.npmjs.com/package/lin-ui2",
      },
    ],
    sidebar: {
      "/note/": [
        {
          title: "学习笔记",
          collapsable: false,
          children: [
            { title: "TypeScript 入门", path: "/note/TypeScript 笔记" },
            { title: "CentOS 7", path: "/note/CentOS 7 真机安装实测" },
            { title: "跨域", path: "/note/跨域处理" },
            { title: "小米路由器", path: "/note/垃圾的小米路由器 bug" },
          ],
        },
      ],
      "/developmentTool/": [
        {
          title: "工具",
          collapsable: false,
          children: [
            { title: "vscode 插件篇", path: "/developmentTool/vscode 插件篇" },
            {
              title: "vscode 常用快捷键",
              path: "/developmentTool/vscode 常用快捷键",
            },
            { title: "Typora", path: "/developmentTool/typroa使用心得" },
            { title: "Git", path: "/developmentTool/git 版本管理相关知识点" },
          ],
        },
      ],
      "/interview/": [
        {
          title: "分类面试题",
          collapsable: false,
          children: [
            { title: "基础 面试题", path: "/interview/基础 面试题" },
            {
              title: "软技能",
              path: "/interview/软技能-沟通、总结和学习能力",
            },
            {
              title: "实践经验",
              path: "/interview/实践工作经验-是否做过真实项目",
            },
            {
              title: "项目设计",
              path: "/interview/项目设计-能否成为项目负责人",
            },
            { title: "知识广度", path: "/interview/知识广度-从前端到全栈" },
            { title: "知识深度", path: "/interview/知识深度-原理和源码" },
            {
              title: "编写代码",
              path: "/interview/编写高质量代码-正确、完整、清晰、鲁棒",
            },
            {
              title: "分析能力",
              path: "/interview/分析和解决问题的思路-可以独立解决问题",
            },
          ],
        },
      ],
    },
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
  },
};
