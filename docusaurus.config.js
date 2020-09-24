module.exports = {
  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        id: 'plugin-google-gtag-1',
      },
    ],
    [
      '@docusaurus/plugin-google-analytics',
      {
        id: 'plugin-google-analytics-2',
      },
    ],
  ],
  title: 'Competitive Programming',
  tagline: 'A roadmap by Cyberlabs',
  url: 'https://cp.cyberlabs.club',
  baseUrl: '/',
  organizationName: 'Cyber-Labs',
  projectName: 'cp-roadmap',
  favicon: 'img/cl_logo.png',
  onBrokenLinks: 'throw',
  themeConfig: {
    navbar: {
      title: 'Competitive Programming',
      logo: {
        alt: 'CL',
        src: 'img/cl_logo.png',
      },
      items: [
        {
          to: 'docs/roadmap/',
          activeBasePath: 'docs/roadmap',
          label: 'Roadmap',
          position: 'left',
        },
        {
          to: 'docs/tools',
          activeBasePath: 'docs/tools',
          label: 'Tools',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/Cyber-Labs/cp-roadmap',
          label: 'GitHub',
          position: 'right',
          classname: 'header-github-link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Roadmap',
          items: [
            {
              label: 'Basics',
              to: 'docs/roadmap',
            },
            {
              label: 'STL',
              to: 'docs/roadmap/stl/stl-tutorials',
            },
            {
              label: 'Number Theory',
              to: 'docs/roadmap/number-theory/number-theory-tutorials',
            },
            {
              label: 'Binary Search',
              to: 'docs/roadmap/binary-search/binary-search-tutorials',
            },
          ],
        },
        {
          title: 'Important Tools',
          items: [
            {
              label: 'Coding Schedule',
              href: 'https://codingschedule.gitlab.io/',
            },
            {
              label: 'OEIS',
              href: 'https://oeis.org/',
            },
            {
              label: 'CP Editor',
              href: 'https://cpeditor.org/',
            },
            {
              label: 'Diff Checker',
              href: 'https://www.diffchecker.com/',
            },
            {
              label: 'CSAcademy online IDE',
              href: 'https://csacademy.com/workspace/',
            },
            {
              label: 'VisuAlgo',
              href: 'https://visualgo.net/en',
            },
            {
              label: 'Algorithm Visualizer',
              href: 'https://algorithm-visualizer.org/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cyber-labs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cyber Labs. All Rights Reserved.`,
    },
    googleAnalytics: {
      trackingID: 'UA-149721084-2',
      anonymizeIP: true,
    },
    gtag: {
      trackingID: 'UA-149721084-2',
      anonymizeIP: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/cyber-labs/cp-roadmap/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/cyber-labs/cp-roadmap/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
};
