# FAQ

## Frequently Asked Question

### Which Consensus Protocol is Fundnode Using?
Fundnode is using IBFT protocol for Byzantine Tolerance, with N answering nodes, the number of faulty node is described by N=3F+1.

### Is Fundnode Byzantine Fault Tolerance In Case of Node / Zone / Region Loss?
The placement of validator nodes is designed to allow the loss of a region and at
least 1 customer starting to have faulty nodes (from a byzantine fault definition).
The more validators will join the network, the more validators can start to be faulty,
according to the IBFT consensus definition.
Validators will also be balanced across region and zone to respect 3F+1.

### What if a customer lose its Private Key?
On the Blockchain node, key and other secret are stateless and
immutable. They are read from Azure Key Vault at deployment time.
Re-applying the Terraform module would recreate the key on the cluster.
In addition, Key Vault are backup in case of in cluster key and Key Vault loss at the
same time. This backup also protects in case of Key Vault corruption issue.
