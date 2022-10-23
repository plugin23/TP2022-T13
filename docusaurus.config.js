// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'T16',
  tagline: 'Tímový projekt',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/T16.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EvilFlowersCatalog', // Usually your GitHub org/user name.
  projectName: 'TP2022-T13', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'sk',
    locales: ['sk'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/EvilFlowersCatalog/EvilFlowersViewer',
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
      navbar: {
        title: 'TP16',
        logo: {
          alt: 'Tímový projekt',
          src: 'img/T16.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Dokumentácia',
          },
          {
            type: 'doc',
            docId: '/category/zápisnice',
            position: 'left',
            label: 'Zápisnice'
          },
          {
            type: 'doc',
            docId: '/category/metodiky',
            position: 'left',
            label: 'Metodiky'
          },
          {
            href: 'https://github.com/EvilFlowersCatalog/EvilFlowersViewer',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Dokumenty',
            items: [
              {
                label: 'Metodiky',
                to: 'docs/category/metodiky',
              },
              {
                label: 'Špecifikácie',
                to: 'docs/category/špecifikácia',
              },
              {
                label: 'Zápisnice',
                to: 'docs/category/zápisnice',
              },
            ],
          },
          {
            title: 'Projekt',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/EvilFlowersCatalog/EvilFlowersViewer',
              },
            ],
          },
          /*{
            title: 'MoUbre',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },*/
        ],
        copyright: `Copyright © ${new Date().getFullYear()} T16`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
