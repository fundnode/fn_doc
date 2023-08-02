/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
      {
          type: "category",
          label: "Overview",
          items: [
              "documentations/overview/overview",
          ],
      },
      {
        type: "category",
        label: "Connectivity",
        items: [
            "documentations/connectivity/overview",
            "documentations/connectivity/sftp",
            "documentations/connectivity/api",
        ],
      },
      {
        type: "category",
        label: "Infrastructures",
        items: [
            "documentations/infrastructures/overview",
            {
                type: "category",
                label: "Technology",
                items: [
                    "documentations/infrastructures/technology/technology-overview",
                    "documentations/infrastructures/technology/microservice",
                    "documentations/infrastructures/technology/monitoring",
                ]
            },
            {
                type: "category",
                label: "Blockchain",
                items: [
                    "documentations/infrastructures/technology/dlt",
                    "documentations/infrastructures/technology/quorum",

                ]
            },
            {
                type: "category",
                label: "SWIFT",
                items: [
                    "documentations/infrastructures/technology/swift-detail",
                ]
            },
        ]
      },
      {
          type: "category",
          label: "Security",
          items: [
              "documentations/security/overview",
              "documentations/security/data-governance",
          ],
      },
          "documentations/faq/faq",
  ],
    openApiSidebar: [
        {
            type: "category",
            label: "Fundnode API",
            link: {
                type: "generated-index",
                title: "Fundnode API",
                description:
                    "This is a documentation on Fundnode Platform API",
                slug: "/category/fundnode-api"
            },
            // @ts-ignore
            items: require("./docs/fundnode/sidebar.js")
        }
    ],

    fundDataSidebar: [
        {
            type: "category",
            label: "Fund Data",
            items: [
                "fund-data/fund-data",
            ],
        },
    ],
};

module.exports = sidebars;

