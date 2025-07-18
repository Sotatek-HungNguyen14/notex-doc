import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'NoteX AI',
  tagline: 'AI Note-Taking for Students and Professionals',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://Sotatek-HungNguyen14.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/notex-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sotatek-HungNguyen14', // GitHub org/user
  projectName: 'notex-doc',     // Repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'], // Thêm tiếng Việt nếu muốn
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/Sotatek-HungNguyen14/notex-doc/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/Sotatek-HungNguyen14/notex-doc/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'NoteX AI',
      logo: {
        alt: 'NoteX AI Logo',
        src: 'img/logo.svg',
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
          href: 'https://notexapp.com',
          label: 'Home',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          items: [
            { label: 'Terms', href: 'https://notexapp.com/tos' },
            { label: 'Privacy', href: 'https://notexapp.com/privacy' },
          ],
        },
        {
          title: 'Download',
          items: [
            { label: 'iOS', href: 'https://apps.apple.com/us/app/notex-ai-note-taker-notebook/id6654910983' },
            { label: 'Android', href: 'https://play.google.com/store/apps/details?id=com.sota.ainotex&hl=en' },
            { label: 'Web', href: 'https://notexapp.com' },
          ],
        },
        {
          title: 'Resources',
          items: [
            { label: 'Pricing', href: 'https://notexapp.com/iap' },
            { label: 'Community', href: 'https://discord.gg/C4zQEJMNxR' },
            { label: 'Affiliates', href: 'https://checkout.notexapp.com/affiliates' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NoteX AI`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      require.resolve('docusaurus-plugin-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
      },
    ],
  ],
};

export default config;
