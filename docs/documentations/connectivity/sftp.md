# SFTP


## Introduction
### Overview
The primary objective of this guide is to provide both external and internal participants with a comprehensive understanding of the Marketnode Fundnode
SFTP solution as well as provide guidance with the set-up process and relative requirements for using the Marketnode Fundnode Platform.

### Scope
The intended audience for this guide is all external or internal participants who connect to Fundnode SFTP. 
In the context of this document, they are also referred to as Connecting Parties. It contains the necessary information 
that a connecting party needs to connect to this service and information on the files which are exchanged between Marketnode Fundnode and 
the connecting party.

### Owner and Responsibilities
Marketnode is the owner and responsible for the maintenance of this document, Change log will be updated for each new edit.

### Expected Outcome
Connecting Parties would be using this document to connect with the Marketnode Fundnode Platform.

### SFTP Protocol
SFTP (SSH File Transfer Protocol) is a secure file transfer medium. It runs over the SSH Protocol. 
It supports the full security and authentication functionality of SSH. The SSH protocol (also known as Secure Shell) is a method for securing remote login
from one host to another. It provides strong authentication methods and it protects communications security and integrity with strong encryption.

### Types of Authentication
Fundnode Platform supports the following authentication method:
- Default Authentication - SSH key Authentication
Standard Authentication: This is single layer authentication model where the participant connection is authenticated at Fundnode’s SFTP gateway using the participant’s SSH Key, As part of onboarding, Participants will have to provide their public SSH key to be configured at Fundnode’s SFTP gateway in order to perform the authentication.

### File Transfer Model

Fundnode Platform follows the standard SFTP transfer model which is **Participant PUSH & PULL**.

**Participant PULL**: The participant has to login into Fundnode Platform SFTP to download files from Fundnode.

**Participant PUSH**: The participant has to login into Fundnode Platform SFTP to upload files to Fundnode.

**more info on the folder destination file path will be here.*

## System Requirement

### Software Requirement
Marketnode SFTP does not dictate which software the participants have to install. However, it would be assumed that the software required below is based on industry-wide standards.

| **Software**     | **Description**                                                                                                                                                                                                                                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SFTP Client ** | SFTP Client software has to be installed in the participant’s environment, accordingly to their platform types. This client would be required to initiate files push and return files pull from the participant’s hosting environment.**Note that participants have to provide their SFTP scripts for remote connection setup when doing scheduled connection initiation* |
| **PGP**          | PGP Software needs to be made available in the participant’s hosting environment for file encryption and decryption.                                                                                                                                                                                                                                                      |

### Network Requirements
| **Network **                  | **Description**                                                                                                |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Fixed Internet IP Address** | This is required to allow the Fundnode to set up the internal firewall to allow the IP address to pass through |

### Data Security Requirement
| **Data Security**         | **Description**                                                                                                                                                                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Encryption/Decryption** | All files transmitted via SFTP solutions to Fundnode has be PGP encrypted to ensure data security.Similarly, for return files to the participants, it will be similarly encrypted to ensure data secrecy.                                                         |
| **Recommended PGP Type**  | Type:Size:Hash:Cipher:Compres sion:Encoding:                                                                                                                                                                                                                      |
| **PGP Key Requirement**   | Participants would have to provide their own PGP public key to the Fundnode platform for the Fundnode server injection as part of the connectivity setup. Similarly, Participants would have to inject the Fundnode’s public key into their hosting environment.  |
| **PGP Finger Print File** | Text file containing PGP fingerprints for the participant’s PGP key generated.                                                                                                                                                                                    |

## Participant On-Boarding

### SFTP Setup (Pre-requisite from participants)
Fundnode requires the following details from participants for SFTP setup for onboarding.

| **Pre-requisite **                | **Description**                                             |
| --------------------------------- | ----------------------------------------------------------- |
| **Fixed Internet IP Address**     | There should be 1 IP address for the production environment |
| **PGP Public Key & Fingerprint ** | There should be 1 key for the production environment        |
| **SSH Public Key & Fingerprint**  | There should be 1 key for production                        |

### Key Exchange
Participants must share the following keys to the Fundnode Platform

- Public SSH key - SFTP will use this key to authenticate SFTP connection from participants
- Public PGP key - SFTP will use this key to verify the PGP signature for incoming files and encrypt the outgoing files

In return, Fundnode will share the following,

- Public PGP key - Participant Host to Host (H2H) gateway will use this key to encrypt the files while uploading to SFTP and to verify Fundnode’s signature for files received from SFTP.

###  Participants Setup
As part of the setup, Participants have to make the following changes on their side as applicable.

- Participants must whitelist the Marketnode Fundnode Platform Public IP address in their firewall in order to allow outgoing connection tothe  Marketnode Fundnode Platform SFTP URL from their network.
- Import Fundnode Platform PGP key in their system in order to perform PGP encryption for files to be uploaded to SFTP and to verify the digital signature of the files downloaded from SFTP.
- Participants have to set up SFTP Public Uniform Resource Locator (URL) and port in their system in order to make the SFTP connection via the internet.

### Fundnode Setup
Once the listed prerequisites are received from participants, the following will be carried out at the Marketnode Fundnode Platform side.

- Fundnode Platform to whitelist participant's public IP Address at Fundnode SFTP Network firewall in order to allow incoming connection from the customer.
- Perform account creation for the participant using the provided SSH and PGP key.
- Share the SFTP Account details, and Bank PGP public key with participants.

## SFTP Client

### List of SFTP Client
| **SFTP Client ** |
| ---------------- |
| OpenSSH          |
| WinSCP           |

### Using OpenSSH

Use the instruction follow to transfer files from the command line using OpenSSH

- On Linux, macOS, or Windows, open a command terminal. 
- At the prompt, enter the following command:  
```shell
sftp -i transfer-key sftp_user@service_endpoint
```
  **_sftp_user_** is the username and **_transfer-key_** is the SSH private key, **_service_endpoint_** is the server's endpoint.  

- An **_sftp_** prompt should appear.
- (Optional) To view the user’s home directory, enter the following command at the **_sftp_** prompt:  
```shell
pwd
```
- To upload a file from your file system to Fundnode SFTP Server, use the put command.
  - For example, to upload **_test.txt_**, run the following command at the **_sftp_** prompt:  
  ```shell
 put test.txt
  ```
  - A message similar to the following appears, indicating that the file transfer is in progress, or to complete:  
  ```shell
 uploading test.txt to /home/sftp_user/test.txt
 test.txt 100% 127 0.1KB/s 00:00 
  ```

### Using WinSCP
Use the instructions that follow to transfer files from the command line using WinSCP.
- Open WinSCP Client.
- In the **Login **dialog box, for **File Protocol**, choose a protocol: **SFTP** or **FTP**.
  - If choose **FTP**, for **Encryption**, choose one of the following
    - **No Encryption** for FTP.
    - **encryptionTLS/SSL Explicit encryption** for FTPS.
- For **Host Name**, enter the server endpoint. The server endpoint is located on the **Server Details** page.
- For **Port** **Number**, enter the following:
  - 22 for SFTP
  - **21** for FTP/FTPS
- For **Username** enter the username created to you by Fundnode
- Choose ** Advance **to open the **Advance Site Setting **dialog box. In the **SSH** section, choose **Authentication**.
- For **Private Key File**, browse for and choose the SSH Private Key file from your file system.
- Choose **OK** to return to the login dialog box, and then choose **Save**.
- In the **Save session as site **dialog box, choose setup complete your connection set up.
- In the **Login** dialog box, choose **Tools**, and then choose **Preferences**.
- In the **Preferences **dialog box, for** Transfer**, choose **Endurance**.
  - For the **Enable transfer resume/transfer to temporary filename for** option, choose **Disable**. 
- For **Transfer**, choose **Background**, and clear the **Use Multiple connections for single transfer** check box.
- Performing file transfer process.
  - drag-and-drop methods to copy files between the Target and source windows. participant can use toolbar icons to **Upload**, **Download**, **Delete**, **Edit**, or **Modify** the properties of files in the WinSCP

###  Fundnode  SFTP Detail

| **PTE SFTP Server IP Address** | **PTE Folder Path**    | **PROD SFTP Server IP Address** | **PROD Folder Path**   |
|--------------------------------|------------------------|---------------------------------|------------------------|
| 20.150.28.164                  | /from_fm <br/> /to_fn  |                                 | /from_fm <br/> /to_fn  |
| 20.150.28.196                  | /from_fm <br/> /to_fn  |                                 | /from_fm <br/> /to_fn  |
| 20.150.28.228                  | /from_fm <br/> /to_fn  |                                 | /from_fm <br/> /to_fn  |

### SFTP Guide



