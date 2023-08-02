# Fund Data Overview

## Introduction
The Morningstar API Center is designed to provide access to clients for data that is currently available by making a direct call to the Morningstar database for a specific investment. Additional functionality allows for the user to create their APIs, and retrieve data for a
specific universe or use the Morningstar APIs to generate a configured data feed in a format specific to their needs.

| **Data Field**                           | **Description**                                                                 | **Data Example**                               |
| ---------------------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- |
| MStarID                                  | MorningStar ID identification, used for identifying funds among MorningStar API | F0HKG062RW                                     |
| ISIN                                     | Fund ISIN Identification                                                        | SG9999017685                                   |
| ProviderCompanyName                      | Fund Provider Company Name                                                      | Schroder Investment Management (Singapore) Ltd |
| BrandingName                             | Provider Company Branding Name                                                  | Schroders                                      |
| LegalName                                | Provider Company Legal Name                                                     | Schroder Asian Income SGD C Dis                |
| MinimumInitial                           | Minimum Subscription Amount                                                     | 5000                                           |
| MinimumInitialUnit                       | Minimum Initial for Funds                                                       | Monetary, Shares                               |
| SettlementDay                            | Settlement day for funds                                                        | 5                                              |
| SettlementDayType                        | Settlement Day Type Information                                                 | Excluding Bank Holiday                         |
| MinimumRedemptionAmount                  | Minimum Redemption Amount                                                       | 10000                                          |
| MinimumRedemptionUnit                    | Minimum Redemption Unit Amount                                                  | 100                                            |
| FundLegalName                            | Fund Legal Name                                                                 | Schroder Asian Income                          |
| CurrencyId                               | Fund Currency ID                                                                | CU$$$$$SGD                                     |
| CustodianCompanyName                     | Custodian Company Name                                                          | HSBC Institutional Trust Services (SGP)        |
| MinimumSubsequent                        | Minimum Subsequent Amount                                                       | 5000                                           |
| MinimumSubsequentUnit                    | Minimum Subsequent Unit                                                         | Monetary                                       |
| CreationUnitSizeType                     |                                                                                 |                                                |
| CreationUnitMaximumTransactionFee        |                                                                                 |                                                |
| CreationUnitSize                         |                                                                                 |                                                |
| DayEndNAV                                | Net Asset Value at the end of the day                                           | 0.829                                          |
| DayEndDate                               | Day for the Net Asset Value                                                     | 2022-11-04                                     |
| MinimumRedemptionMultiple                |                                                                                 |                                                |
| MinimumRedemptionMultipleUnit            |                                                                                 |                                                |
| Country                                  | Country, in full term                                                           | Singapore                                      |
| CutOffTime                               | Cut Off Time for Fund Subscription                                              | 17:00                                          |
| DealingType                              | Dealing Type                                                                    | Subscription and Redemption                    |
| TransferAgentCompanies_CompanyID         | Transfer Agent Company ID, used to identify Transfer Agent                      | 0C00008KSS                                     |
| TransferAgentCompanies_CompanyName       | Transfer Agent Company Name                                                     | RBC Trust Services Singapore Ltd               |
| TransferAgentCompanies_CompanyCity       | Transfer Agent City Location, in full term                                      | Singapore                                      |
| TransferAgentCompanies_CompanyProvince   | Transfer Agent Province location, Empty if none                                 |                                                |
| TransferAgentCompanies_CompanyCountry    | Transfer Agent Company Country, Country Code in ISO Standard                    | SGP                                            |
| TransferAgentCompanies_CompanyPostalCode | Transfer Agent Postal Code, Empty if none                                       | 049705                                         |
| TransferAgentCompanies_CompanyAddress    | Company Address for Transfer Agent                                              | 20 Cecil Street                                |
| AvailableForInsuranceProduct             | Whether the Funds is Insurance Linked Product, True if yes, False if no         | True/False                                     |
| QualifiedCPFSchemeID                     | CPF Account Identification                                                      | 2                                              |
| QualifiedCPFSchemeAccount                | Which CPF Account the fund is qualified                                         | Ordinary Account                               |
