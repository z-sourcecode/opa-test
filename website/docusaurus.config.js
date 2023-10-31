// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'Docusaurus',
  tagline: 'Build optimized websites quickly, focus on your content',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
      },
    ],
  ],
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OPA on AWS',
  // tagline: 'Orchestrate Platform and Applications',
  tagline: 'Simplifying the Developer Experience with AWS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://opaonaws.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/opa-test/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'app-development-for-backstage-io-on-aws', // Usually your repo name.
  organizationName: 'awslabs', // Usually your GitHub org/user name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/awslabs/app-development-for-backstage-io-on-aws/blob/main/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/opa-logo.png',
      navbar: {
        // title: 'OPA on AWS',
        hideOnScroll: false,
        logo: {
          alt: 'OPA on AWS Logo',
          src: 'img/opa.svg',
          srcDark: 'img/opa_dark.svg',
          className: 'opa-nav-logo',
          // width: 128,
          // height: 128,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            to: '/workshop', 
            label: 'Workshop', 
            position: 'left'
          },
          {
            to: '/partners', 
            label: 'Partners', 
            position: 'left'
          },
          {
            to: '/about', 
            label: 'About', 
            position: 'left'
          },
          {
            href: 'https://github.com/awslabs/app-development-for-backstage-io-on-aws',
            position: 'right',
            className: 'header-github-link',
          },
          // {
          //   type: 'search',
          //   position: 'right',
          // }
        ],
      },
      announcementBar: {
        content:
          'OPA on AWS phase 2 is now available.  Check it out and give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/awslabs/app-development-for-backstage-io-on-aws">GitHub</a>! ⭐️',
        backgroundColor: '#ffffff',
        textColor: '#000000',
        isCloseable: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'Learn',
            items: [
              {
                label: 'YouTube Videos',
                href: 'https://www.youtube.com/playlist?list=PLhr1KZpdzukcf5e7vYOVkpw4h-rzy7Pn3' 
              }
            ]
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/awslabs/app-development-for-backstage-io-on-aws',
              },
            ],
          },
        ],
        copyright: `Built with ❤️ at AWS | Copyright © ${new Date().getFullYear()} Amazon.com, Inc. or its affiliates. All rights reserved`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [require.resolve('docusaurus-lunr-search')],
};

module.exports = config;
