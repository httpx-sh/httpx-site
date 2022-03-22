// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'httpx',
    tagline: 'CLI and IDE plugin to test REST API, GraphQL, gRPC services with HTTP DSL',
    url: 'https://httpx.sh',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'httpx-sh', // Usually your GitHub org/user name.
    projectName: 'httpx', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                docs: {
                    sidebarCollapsed: false
                }
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'httpx',
                logo: {
                    alt: 'httpx Logo',
                    src: 'img/httpx-logo-small.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: 'Tutorial',
                    },
                    {to: '/blog', label: 'Blog', position: 'left'},
                    {
                        href: 'https://github.com/httpx-sh/httpx/releases',
                        label: 'Download',
                        position: 'right',
                    },
                    {
                        href: 'https://github.com/httpx-sh/httpx',
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
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                            {
                                label: 'Cheat Sheet',
                                to: 'https://cheatography.com/linux-china/cheat-sheets/httpx/',
                            },
                            {
                                label: 'Httpx JetBrains plugin',
                                to: 'https://plugins.jetbrains.com/plugin/18807-httpx-requests',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/httpx',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/httpx',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/linux_china',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/httpx-sh/httpx',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} httpx, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
