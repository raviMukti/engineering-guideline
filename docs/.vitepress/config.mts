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
          { text: 'Formatter', link: '/reference/code-style/formatter' },
          { text: 'Linter', link: '/reference/code-style/linter' }
        ]
      },
      {
        text: 'Version Control',
        collapsed: true,
        items: [
          { text: 'Branching', link: '/reference/version-control/branching' },
          { text: 'Pull Request', link: '/reference/version-control/pull-request' },
        ]
      },
      {
        text: 'Testing',
        collapsed: true,
        items: [
          { text: 'Static Code', link: '/reference/testing/static-code' },
          { text: 'Integration Test', link: '/reference/testing/integration-test' }
        ]
      },
      {
        text: 'Deployment',
        collapsed: true,
        items: [
          { text: 'Production', link: '/reference/deployment/production' },
          { text: 'Staging', link: '/reference/deployment/staging' },
        ]
      },
      {
        text: 'Logging',
        collapsed: true,
        items: [
          { text: 'Backend', link: '/reference/logging/backend' },
          { text: 'Frontend', link: '/reference/logging/frontend' },
          { text: 'Fullstack', link: '/reference/logging/fullstack' },
          { text: 'Mobile', link: '/reference/logging/mobile' },
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
      {
        text: 'Golden Path',
        collapsed: true,
        items: [
          { text: 'Backend', link: '/reference/golden-path/backend' },
          { text: 'Frontend', link: '/reference/golden-path/frontend' },
          { text: 'Fullstack', link: '/reference/golden-path/fullstack' },
          { text: 'Mobile', link: '/reference/golden-path/mobile' },
        ]
      }
    ],

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

})
