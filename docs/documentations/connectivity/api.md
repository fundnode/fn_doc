# API

## API Overview
Welcome to Fundnode API Suite! Fundnode API provides a comprehensive set of endpoints that empower participants to seamlessly interact with our Fund Utility System and facilitate a wide range of investment transactions. 
From Fund Subscription and Redemption to Switch orders, our API streamlines the entire process, making it quick, secure, and efficient.

**Key Features:**

- __Robust Security__: Our API implements stringent security measures, ensuring that only authorized Distributors can access and utilize the services, safeguarding sensitive financial data.

- __Real-time Processing__: Enjoy the benefits of real-time transaction processing, providing instant confirmations and status updates for submitted orders.

- __Accurate Data Validation__: With rigorous data validation checks, our API guarantees the accuracy and integrity of submitted order details, reducing errors and enhancing reliability.

- __Clear Documentation__: We provide comprehensive API documentation, including endpoint descriptions, request/response examples, and guidelines, to facilitate easy integration and usage.

- __Error Handling__: Our API employs efficient error handling mechanisms, delivering clear and informative messages in case of any issues during order submission.

## Endpoint Description

### /submitOrderLine
The /submitOrderLine endpoint enables Distributors to effortlessly send Fund Subscription, Redemption, and Switch orders into Fundnode. Through this streamlined process, Distributors can provide investor details and transaction specifics, ensuring efficient and secure order submissions. 
Fundnode's real-time processing and validation mechanisms further enhance the reliability of investment transactions, delivering prompt confirmations.

| Field                                          | Description                                                                                                   | Example                                |
|------------------------------------------------|---------------------------------------------------------------------------------------------------------------|----------------------------------------|
| `batchNumber`                                  | A unique identifier for the transaction batch.                                                                | "FUND0001"                             |
| `senderCode`                                   | The code of the sender initiating the transaction.                                                            | "F50014"                               |
| `sendDate`                                     | The date when the transaction is sent, in the format "YYYYMMDD" (Year, Month, Day).                           | "20230106" (January 6, 2023)           |
| `sendTime`                                     | The time when the transaction is sent, in the format "HHmmss" (Hour, Minute, Second).                         | "152054" (15:20:54)                    |
| `fnReferenceId`                                | A unique Fundnode reference ID for the transaction.                                                           | "85fd7ba6-e588-4e7f-8690-a936365dfdbb" |
| `cpfAccountNumber`                             | The account number associated with CPF (Central Provident Fund).                                              | "123432435"                            |
| `idType`                                       | The identification type of the investor.                                                                      | "NRIC"                                 |
| `plAmount`                                     | The profit & loss amount.                                                                                     | "123.45"                               |
| `costAmount`                                   | The cost amount for the transaction                                                                           | "456.78"                               |
| `investmentType`                               | The type of investment being made.                                                                            | "UT" (Unit Trust)                      |
| `distributorCode`                              | The code of the distributor handling the transaction.                                                         | "F50006"                               |
| `taAccountNumber`                              | The account number of the Transfer Agent.                                                                     | "DACODEFRTA115"                        |
| `distributorReferenceId`                       | unique reference ID associated with the distributor's internal record for the transaction.                    | "f5127a1c-6304-4994-aeac-f6d4d008b389" |
| `transactionType`                              | The type of transaction being performed (e.g., "P" for Subscription).                                         | "P"                                    |
| `isinCode`                                     | The ISIN (International Securities Identification Number) code for the investment product.                    | "SG9999003412"                         |
| `units`                                        | The number of units for the investment.                                                                       | "12.000"                               |
| `orderAmount`                                  | The amount of the order .                                                                                     | "567.89"                               |
| `fundCurrency`                                 | The currency of the investment fund (e.g., "SGD" for Singapore Dollar).                                       | "SGD"                                  |
| `rsp`                                          | Indicates if it is a Regular Savings Plan (e.g., "Y" for Yes).                                                | "Y"                                    |
| `accountType`                                  | The type of account associated with the investment (e.g., "CASH-INDIVIDUAL" for individual cash transaction). | "CASH-INDIVIDUAL"                      |
| `cpfissrsAccountNumber`                        | The CPF Investment Scheme Account number.                                                                     | "999999999"                            |
| `taxIdNumber`                                  | The tax identification number of the investor.                                                                | "12345678"                             |
| `endInvestorName`                              | The name of the end investor.                                                                                 | "Baey Kang Min"                        |
| `nationality`                                  | The nationality of the investor.                                                                              | "SG" (Singaporean)                     |
| `dateOfBirth`                                  | The date of birth of the investor, in the format "YYYYMMDD" (Year, Month, Day).                               | "19800104" (January 4, 1980)           |
| `addressLine1`, `addressLine2`, `addressLine3` | Lines of the investor's address.                                                                              | "520 SIMS AVENUE#02-09"                |
| `postalCode`                                   | The postal code of the investor's address.                                                                    | "068804"                               |
| `countryCode`                                  | The country code of the investor's address.                                                                   | "SG"                                   |
| `contactNumber`                                | The contact number of the investor.                                                                           | "67384380"                             |
| `fatcaStatus`                                  | FATCA (Foreign Account Tax Compliance Act) status (e.g., "N" for No).                                         | "N"                                    |
| `countryTaxResidency`                          | The country of tax residency of the investor (e.g., "SG" for Singapore).                                      | "SG"                                   |
| `dividendInstruction`                          | The dividend instruction code (e.g., "C" for Cash).                                                           | "C"                                    |
| `agentBankChargeType`                          | The charge type for the agent bank.                                                                           | "XTRL"                                 |
| `distributorChargeType`                        | The charge type for the distributor.                                                                          | "BRKF"                                 |
| `paymentCurrency`                              | The currency used for payment.                                                                                | "SGD"                                  |
| `switchTransaction`                            | Indicates if it is a switch transaction (e.g., "Y" for Yes).                                                  | "Y"                                    |
| `agentBank`                                    | The name of the agent bank.                                                                                   | "string"                               |
| `identificationNumber`                         | The identification number of the investor.                                                                    | "S12345678F"                           |
| `distributorFee`                               | The fee charged by the distributor.                                                                           | "200"                                  |
| `distributorClientAccountNumber`               | The account number of the distributor's client.                                                               | "string"                               |



### /submitAgentBankApproval

The **/submitOrderLine** endpoint serves as a response mechanism to notify Distributors about the approval or rejection status of their Fund Subscription or Redemption requests made through CPF agent banks. 
The (`agentBankProcessCode`) indicates the outcome, with "0000" denoting success and other codes indicating specific reasons for failure. 
This streamlined feedback loop enables Distributors to promptly take necessary actions based on the approval status.

| Field                    | Description                                                                                               | Example                                             |
|--------------------------|-----------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| `distributorCode`        | The code of the distributor handling the transaction.                                                     | "F50006"                                            |
| `distributorReferenceId` | A unique reference ID associated with the distributor's internal record for the transaction.              | "85fd7ba6-e588-4e7f-8690-a936365dfdbb-0026"         |
| `fnReferenceId`          | A unique reference ID for the overall financial transaction (possibly the same as the batch's reference). | "85fd7ba6-e588-4e7f-8690-a936365dfdbb"              |
| `processingDate`         | The date when the transaction is processed, in the format "YYYYMMDD" (Year, Month, Day).                  | "20230106" (January 6, 2023)                        |
| `agentBankReferenceId`   | A reference ID associated with the agent bank involved in the transaction.                                | "string"                                            |
| `agentBankProcessCode`   | The process code or status returned by the agent bank for the transaction (e.g., success code "0000").    | "0000"                                              |


### /submitOrderConfirmation
The endpoint allows for the posting of Transfer Agent (TA) confirmations in response to processed transactions.
Distributors can use this API to submit crucial details, including the unique reference ID, order amount, NAV date, fund price, and TA-related information.

| Field             | Description                                                                                                    | Example                                |
|-------------------|----------------------------------------------------------------------------------------------------------------|----------------------------------------|
| `fnReferenceId`   | A unique Fundnode reference ID for the transaction.                                                            | "85fd7ba6-e588-4e7f-8690-a936365dfdbb" |
| `orderAmount`     | The amount of the order .                                                                                      | "123.45"                               |
| `navDate`         | The Net Asset Value (NAV) date, indicating the date of the NAV used for the transaction, in "YYYYMMDD" format. | "20230106" (January 6, 2023)           |
| `price`           | The price of the fund for the transaction.                                                                     | "123456"                               |
| `taReferenceId`   | A reference ID associated with the Transfer Agent (TA) for the transaction.                                    | "string"                               |
| `taProcessCode`   | The process code or status returned by the Transfer Agent for the transaction.                                 | "string"                               |
| `unitsNb`         | The number of units involved in the transaction.                                                               | 0                                      |
| `grossAmt`        | The gross amount associated with the transaction.                                                              | 0                                      |
| `netAmt`          | The net amount after deducting fees, if applicable.                                                            | 0                                      |
| `fees`            | An array containing fee details, such as fee name and fee amount.                                              | Array with a single fee object         |
| `cashSttlDt`      | The cash settlement date for the transaction, in "YYYYMMDD" format.                                            | "20230106" (January 6, 2023)           |

### /submitOrderState
This endpoint allows Distributors to retrieve the Transfer Agent (TA) processing status and rejection reason for specific financial transactions. By providing the unique reference ID (`fnReferenceId`), distributors can obtain real-time updates on the transaction's status (`taProcessingStatus`).
In case of a rejection, a detailed message (`detailedMessage`) provides the reason behind the rejection, facilitating prompt resolution of any issues.

| Field                  | Description                                                                                                | Example                                                  |
|------------------------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `fnReferenceId`        | A unique Fundnode reference ID for the transaction.                                                        | "85fd7ba6-e588-4e7f-8690-a936365dfdbb"                   |
| `taProcessingStatus`   | The processing status code returned by the Transfer Agent (TA) for the transaction.                        | "00"                                                     |
| `detailedMessage`      | A detailed message providing the reason for the rejection, if applicable (placeholder or incomplete data). | "reason of the rejection"                                |


### /submitOrderCancellation
This endpoint allows for the cancellation of a financial order based on the unique fnReferenceId. 
Distributors can utilize this API to request the cancellation of a specific transaction, providing the associated reference ID as identification. 
This streamlined process enables prompt and efficient order cancellations.

| Field                  | Description                                                                                                | Example                                                  |
|------------------------|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| `fnReferenceId`        | A unique Fundnode reference ID for the transaction.                                                        | "85fd7ba6-e588-4e7f-8690-a936365dfdbb"                   |

### Testing
For further testing and exploration, viewers can access more details on the Fundnode API page available in the navigation bar. 