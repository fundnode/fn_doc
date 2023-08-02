// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fundnode",
  tagline: "Singapore's Fund Utility",
  url: "http://34.126.190.62",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/fn_favicon.ico",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true
        }
      },
      navbar: {
        title: "",
        logo: {
          alt: "Fundnode",
          src: "img/fundnode.png",
          srcDark: 'img/fundnode_dark.png',
        },
        items: [
          {
            type: "doc",
            docId: "documentations/overview/overview",
            position: "left",
            label: "Documentation"
          },
          {
            label: "Fundnode API",
            position: "left",
            to: "/docs/fundnode/fundnode-api"
          },
          {
            type: "doc",
            label: "Fund Data",
            docId: "fund-data/fund-data",
            position: "left",
            to: "/docs/fund-data/fund-data"
          },
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Fundnode Documentation",
                to: "/docs/documentations/overview"
              },
              {
                label: "Fundnode API",
                to: "/docs/fundnode/fundnode-api"
              },
              {
                label: "Fund Data",
                to: "/docs/fund-data"
              }
            ]
          },
          {
            title: "External",
            items: [
              {
                label: "Marketnode",
                href: "https://www.marketnode.com"
              },
              {
                label: "SGX",
                href: "https://www.sgx.com"
              },
              {
                label: "Temasek",
                href: "https://www.temasek.com.sg"
              }
            ]
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fundnode.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"]
      }
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "fundnode",
        docsPluginId: "classic",
        config: {
          fundnode: {
            specPath: "examples/fundnode.yaml",
            outputDir: "docs/fundnode",
            downloadUrl:
              "http://34.126.236.81/examples/fundnode.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag"
            }
          }
        }
      }
    ]
  ],

  themes: ["docusaurus-theme-openapi-docs"]
};

module.exports = config;
