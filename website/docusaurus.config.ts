// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'OPA on AWS',
  // tagline: 'Orchestrate Platform and Applications',
  tagline: 'Simplifying the Enterprise DevEx with AWS',
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
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/awslabs/app-development-for-backstage-io-on-aws/blob/main/website/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
      // Replace with your project's social card
    image: 'img/opa-logo.png',
    navbar: {
      // title: 'OPA on AWS',
      hideOnScroll: false,
      logo: {
        alt: 'OPA on AWS Logo',
        src: 'img/opa_white.svg',
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
          "aria-label": 'Github repository',
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
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: ['docusaurus-lunr-search'],
}

export default config;
