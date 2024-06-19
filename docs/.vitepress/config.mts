import { defineConfig } from 'vitepress'
import markdownItTaskCheckBox from 'markdown-it-task-checkbox';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Waizly Engineering Guideline",
  description: "Guidance and any best practice that applied in Waizly",
  // Base
  base: '/engineering-guideline/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '1.0.0',
        items: [
          { text: 'Changelog', link: 'https://waizly.id' },
        ]
      }
    ],

    // Sidebar
    sidebar: [
      {
        text: 'Basic',
        collapsed: false,
        items: [
          { text: 'Local Development', link: '/reference/basic/local-development' },
        ]
      },
      {
        text: 'Code Style',
        collapsed: true,
        items: [
          { text: 'Formatter-Linter', link: '/reference/code-style/formatter-linter' },
        ]
      },
      {
        text: 'Version Control',
        collapsed: true,
        items: [
          { text: 'Branching-PR', link: '/reference/version-control/branching-pr' },
        ]
      },
      {
        text: 'Deployment',
        collapsed: true,
        items: [
          { text: 'Deploy', link: '/reference/deployment/deploy' },
        ]
      },
      {
        text: 'Logging',
        collapsed: true,
        items: [
          { text: 'Logging', link: '/reference/logging/logging' },
        ]
      },
      {
        text: 'Tips And Trick',
        collapsed: true,
        items: [
          { text: 'Debugger', link: '/reference/tips-trick/debugger' },
          { text: 'Design Pattern', link: '/reference/tips-trick/design-pattern' },
        ]
      },
    ],

    // Search
    search: {
      provider: 'local'
    },

    // Edit Link
    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('/docs/reference/')) {
          return `https://github.com/raviMukti/engineering-guideline/edit/main/${filePath}`
        } else {
          return `https://github.com/raviMukti/engineering-guideline/edit/main/docs/${filePath}`
        }
      },
      text: 'Edit this page on GitHub'
    },

    // Social Links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/waizly/engineering-guideline' }
    ]
  },

  // Markdown
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(markdownItTaskCheckBox, {
            disabled: true,
            divWrap: false,
            divClass: 'checkbox',
            idPrefix: 'cbx_',
            ulClass: 'task-list',
            liClass: 'task-list-item'
      })

      md.render('- [x] unchecked')
    }
  },

  lastUpdated: true,

})
