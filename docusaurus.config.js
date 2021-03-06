/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Bothub',
  tagline: 'The tagline of my site',
  url: 'https://ilhasoft.github.io/bothub-blog/',
  baseUrl: '/',
  favicon: 'img/botinho.png',
  organizationName: 'ilhasoft', // Usually your GitHub org/user name.
  projectName: 'bothub-bloog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Bothub',
      logo: {
        alt: 'My Site Logo',
        src: 'img/botinho.png',
      },
      links: [
        {to: 'docs/doc1', label: 'Change log', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: 'docs/doc1',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
      ],
      logo: {
        alt: 'Bothub.it',
        src: 'https://docusaurus.io/img/oss_logo.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Ilhasoft, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
