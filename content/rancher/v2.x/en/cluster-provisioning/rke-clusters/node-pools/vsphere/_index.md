---
title: Creating a vSphere Cluster
shortTitle: vSphere
weight: 2225
aliases:
  - /rancher/v2.x/en/tasks/clusters/creating-a-cluster/create-cluster-vsphere/
---
Use {{< product >}} to create a Kubernetes cluster in vSphere.

## Introduction

When creating a vSphere cluster Rancher first provisions the specified amount of virtual machines by communicating with the vCenter API. Then it installs Kubernetes on top of them. A vSphere cluster may consist of multiple groups of VMs with distinct properties, such as the amount of memory or the number of vCPUs. This allows for fine-grained controll over the sizing of nodes for the data, control and worker plane respectively.

## Prerequisites

> *Note:*
> 
> If you are planning to make use of vSphere volumes for persistent storage in the cluster, there are [additional requirements]({{< baseurl >}}/rke/v0.1.x/en/config-options/cloud-providers/vsphere/) that must be met.

Before processing to create a cluster you must ensure that you have a vSphere user with sufficient permissions. Let's walk through the steps of creating the user in the vSphere console:

1. From the **vSphere** console, go to the **Administration** page.

2. Go to the **Roles** tab.

3. Create a new *role*.  Give it a name and select the *privileges* listed in the [permissions table](#annex-vsphere-permissions).

	![image]({{< baseurl >}}/img/rancher/rancherroles1.png)

4. Go to the **Users and Groups** tab.

5. Create a new *user*. Fill out the form and then click **OK**. Make sure to note the username and password as you will need it when configuring node templates in Rancher.

	![image]({{< baseurl >}}/img/rancher/rancheruser.png)

6. Go to the **Global Permissions** tab.

7. Create a new *Global Permission*.  Add the *user* you created earlier and assign it the Role you created earlier. Click **OK**.

	![image]({{< baseurl >}}/img/rancher/globalpermissionuser.png)

	![image]({{< baseurl >}}/img/rancher/globalpermissionrole.png)

## Creating vSphere Clusters

### Create a vSphere Node Template

In order to create a cluster you will need to create at least one vSphere [node template]({{< baseurl >}}/rancher/v2.x/en/cluster-provisioning/rke-clusters/node-pools/#node-templates) first that specifies how VMs are created in vSphere.

> **Note:**
>
> Once you create a node template, it will be saved and you will be able to re-use it whenever you create additional vSphere clusters.

1. Log in with an admin account to the Rancher UI.
2. In the right-hand account menu, select **Node Templates**.
3. Click **Add Template** and then click on the **vSphere** icon.
4. Under **[Account Access](#account-access)** enter the vCenter FQDN or IP address and the credentials for the vSphere user account (see [Prerequisites](#prerequisites)).
5. Under **[Instance Options](#instance-options)**, configure the number of vCPUs, memory and disk size for the VMs created by this template.
6. Optionally, enter the URL pointing to a [RancherOS]({{< baseurl >}}/os/v1.x/en/) cloud-config file in the **[Cloud Init](#instance-options)** field.
7. Ensure that the **[OS ISO URL](#instance-options)** contains the URL of a VMware ISO release for RancherOS (`rancheros-vmware.iso`).

	![image]({{< baseurl >}}/img/rancher/vsphere-node-template-1.png)

8. Optionally, provide a set of **[Configuration Parameters](#instance-options)** for the VMs.
9. Under **Scheduling** enter the name/path of the **Data Center** to instantiate the VMs in, the name of the **VM Network** to attach to and the name/path of the **Datastore** in which to store the disks.

	![image]({{< baseurl >}}/img/rancher/vsphere-node-template-2.png)

10. Optionally, assign labels to the VMs that can be used as a base for scheduling rules in the cluster.
11. Optionally, customize the configuration of the Docker daemon on the VMs that will be created.

10. Assign a descriptive **Name** for this template and click **Create**.

___

### Create a cluster

1. From the **Clusters** page, click **Add Cluster**.
2. Choose **vSphere**.
3. Enter a **Cluster Name**.
4. {{< step_create-cluster_member-roles >}}
5. {{< step_create-cluster_cluster-options >}}
6. {{< step_create-cluster_node-pools >}}

	![image]({{< baseurl >}}/img/rancher/vsphere-cluster-create-1.png)

7. Review your configuration, then click **Create**.

> **Note:**
> 
> If you have a cluster with DRS enabled, it's recommended that you setup [VM-VM Affinity Rules](https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-7297C302-378F-4AF2-9BD6-6EDB1E0A850A.html) to run VMs within the node pools assigned the etcd and control-plane roles on seperate ESXi hosts. This ensures that the failure of a single physical machine does not affect the availability of those planes.

{{< result_create-cluster >}}

## Annex - Node Template Configuration Reference

Below tables describe the configuration options available in the vSphere node template.

### Account Access

| Parameter                | Required | Description |
|:------------------------:|:--------:|:------------------------------------------------------------:|
| vCenter or ESXi Server   |   *      | IP or FQDN of the vCenter or ESXi server used for managing VMs. |
| Port                     |   *      | Port to use to connect to the server. Defaults to 443.  |
| Username                 |   *      | vCenter/ESXi user to authenticate with the server. |
| Password                 |   *      | User's password. |

___

### Instance Options

| Parameter                | Required | Description |
|:------------------------:|:--------:|:------------------------------------------------------------:|
| CPUs                     |   *      | Number of vCPUS to assign to VMs. |
| Memory                   |   *      | Amount of memory to assign to VMs.  |
| Disk.                    |   *      | Size of the disk (in MB) to attach to the VM |
| Cloud Init               |          | URL of a [RancherOS cloud-config]({{< baseurl >}}/os/v1.x/en/installation/configuration/) file to provision VMs with. This allows further customization of the RancherOS operating system, such as network configuration, DNS servers or system daemons.|
| OS ISO URL               |   *      | URL of a RancherOS vSphere ISO file to boot the VMs from. You can find URLs for specfic versions [here](https://github.com/rancher/os). |
| Configuration Parameters |          | Additional configuration parameters for the VMs. These correspond to the [Advanced Settings](https://kb.vmware.com/s/article/1016098) in the vSphere console. Example use cases include providing RancherOS [guestinfo]({{< baseurl >}}/os/v1.x/en/installation/running-rancheros/cloud/vmware-esxi/#vmware-guestinfo) parameters or enabling disk UUIDs for the VMs (`disk.EnableUUID=TRUE`). |

___

### Scheduling Options

| Parameter                | Required | Description |
|:------------------------:|:--------:|:------------------------------------------------------------:|
| Data Center              |   *      | Name/path of the datacenter to create VMs in.          |
| Pool                     |          | Name/path of the resource pool to schedule the VMs in. If not specified, the default resource pool is used.  |
| Host                     |          | Name/path of the host system to schedule VMs in. If specified, the host system's pool will be used and the *Pool* parameter will be ignored. |
| Network                  |   *      | Name of the VM network to attach VMs to. |
| Data Store               |   *      | Datastore to store the VM disks. |
| Folder                   |          | Folder to create the VMs in. |

___

## Annex - vSphere permissions

The following table lists the permissions required for the vSphere user account configured in the node templates:

| Privilege Group       | Operations  |
|:----------------------|:-----------------------------------------------------------------------|
| Datastore             | AllocateSpace </br> Browse </br> DeleteFile </br> FileManagement </br>UpdateVirtualMachineFiles </br> UpdateVirtualMachineMetadata |
| Folder                | Create </br> Delete |
| Network               | AssignNetwork |
| Resource              | AssignVMToPool |
| System ?              | Anonymous </br> Read </br> View |
| Virtual Machine       | Config (All) </br> GuestOperations (All) </br> Interact (All) </br> Inventory (All) </br> Provisioning (All) |