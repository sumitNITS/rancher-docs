"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3299],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62067:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],l={title:"vSphere Node Template Configuration in Rancher before v2.0.4",shortTitle:"Before v2.0.4",weight:5,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/node-pools/vsphere/vsphere-node-template-config/prior-to-2.0.4/"]},s=void 0,p={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/prior-to-v2.0.4",id:"version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/prior-to-v2.0.4",title:"vSphere Node Template Configuration in Rancher before v2.0.4",description:"- Account access",source:"@site/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/prior-to-v2.0.4.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/prior-to-v2.0.4",permalink:"/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/prior-to-v2.0.4",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/prior-to-v2.0.4.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"vSphere Node Template Configuration in Rancher before v2.0.4",shortTitle:"Before v2.0.4",weight:5,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/node-pools/vsphere/vsphere-node-template-config/prior-to-2.0.4/"]},sidebar:"tutorialSidebar",previous:{title:"vSphere Node Template Configuration in Rancher v2.0.4",permalink:"/v2.0-v2.4/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/vsphere/v2.0.4"},next:{title:"single-node-rancher-in-docker",permalink:"/v2.0-v2.4/pages-for-subheaders/single-node-rancher-in-docker"}},c={},d=[],u={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#account-access"},"Account access")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#scheduling"},"Scheduling")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#instance-options"},"Instance options")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#disk-uuids"},"Disk UUIDs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#node-tags-and-custom-attributes"},"Node Tags and Custom Attributes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cloud-init"},"Cloud Init"))),(0,o.kt)("h1",{id:"account-access"},"Account Access"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Account Access")," section, enter the vCenter FQDN or IP address and the credentials for the vSphere user account."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"vCenter or ESXi Server"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"IP or FQDN of the vCenter or ESXi server used for managing VMs. Enter the vCenter or ESXi hostname/IP. ESXi is the virtualization platform where you create and run virtual machines and virtual appliances. vCenter Server is the service through which you manage multiple hosts connected in a network and pool host resources.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Port"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Port to use when connecting to the server. Defaults to ",(0,o.kt)("inlineCode",{parentName:"td"},"443"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Username"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"vCenter/ESXi user to authenticate with the server.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Password"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"User's password.")))),(0,o.kt)("h1",{id:"scheduling"},"Scheduling"),(0,o.kt)("p",null,"Choose what hypervisor the virtual machine will be scheduled to."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Data Center"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name/path of the datacenter to create VMs in.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Pool"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name/path of the resource pool to schedule the VMs in. If not specified, the default resource pool is used.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Host"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name/path of the host system to schedule VMs in. If specified, the host system's pool will be used and the ",(0,o.kt)("em",{parentName:"td"},"Pool")," parameter will be ignored.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Network"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of the VM network to attach VMs to.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Data Store"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Datastore to store the VM disks.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Folder"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Name of a folder in the datacenter to create the VMs in. Must already exist. The folder name should be prefaced with ",(0,o.kt)("inlineCode",{parentName:"td"},"vm/")," in your vSphere config file.")))),(0,o.kt)("h1",{id:"instance-options"},"Instance Options"),(0,o.kt)("p",null,"In the ",(0,o.kt)("strong",{parentName:"p"},"Instance Options")," section, configure the number of vCPUs, memory, and disk size for the VMs created by this template."),(0,o.kt)("p",null,"Only VMs booting from RancherOS ISO are supported."),(0,o.kt)("p",null,"Ensure that the OS ISO URL contains the URL of the VMware ISO release for RancherOS: ",(0,o.kt)("inlineCode",{parentName:"p"},"rancheros-vmware.iso"),"."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"CPUs"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Number of vCPUS to assign to VMs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Amount of memory to assign to VMs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Disk"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Size of the disk (in MB) to attach to the VMs.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Cloud Init"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"URL of a ",(0,o.kt)("a",{parentName:"td",href:"%7B%7B%3Cbaseurl%3E%7D%7D/os/v1.x/en/configuration/"},"RancherOS cloud-config")," file to provision VMs with. This file allows further customization of the RancherOS operating system, such as network configuration, DNS servers, or system daemons.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"OS ISO URL"),(0,o.kt)("td",{parentName:"tr",align:"center"},"*"),(0,o.kt)("td",{parentName:"tr",align:"left"},"URL of a RancherOS vSphere ISO file to boot the VMs from. You can find URLs for specific versions in the ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/rancher/os"},"Rancher OS GitHub Repo"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},"Configuration Parameters"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"left"},"Additional configuration parameters for the VMs. These correspond to the ",(0,o.kt)("a",{parentName:"td",href:"https://kb.vmware.com/s/article/1016098"},"Advanced Settings")," in the vSphere console. Example use cases include providing RancherOS ",(0,o.kt)("a",{parentName:"td",href:"%7B%7B%3Cbaseurl%3E%7D%7D/os/v1.x/en/installation/cloud/vmware-esxi/#vmware-guestinfo"},"guestinfo")," parameters or enabling disk UUIDs for the VMs (",(0,o.kt)("inlineCode",{parentName:"td"},"disk.EnableUUID=TRUE"),").")))),(0,o.kt)("h1",{id:"disk-uuids"},"Disk UUIDs"),(0,o.kt)("p",null,"In order to provision nodes with RKE, all nodes must be configured with disk UUIDs. Follow these instructions to enable UUIDs for the nodes in your vSphere cluster."),(0,o.kt)("p",null,"To enable disk UUIDs for all VMs created for a cluster,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Node Templates")," in the Rancher UI while logged in as an administrator.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add or edit an existing vSphere node template.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Under ",(0,o.kt)("strong",{parentName:"p"},"Instance Options")," click on ",(0,o.kt)("strong",{parentName:"p"},"Add Parameter"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"disk.enableUUID")," as key with a value of ",(0,o.kt)("strong",{parentName:"p"},"TRUE"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:r(35254).Z,width:"750",height:"488"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Create")," or ",(0,o.kt)("strong",{parentName:"p"},"Save"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The disk UUID is enabled in the vSphere node template."),(0,o.kt)("h1",{id:"node-tags-and-custom-attributes"},"Node Tags and Custom Attributes"),(0,o.kt)("p",null,"These attributes allow you to attach metadata to objects in the vSphere inventory to make it easier to sort and search for these objects."),(0,o.kt)("p",null,"Optionally, you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provide a set of configuration parameters (instance-options) for the VMs."),(0,o.kt)("li",{parentName:"ul"},"Assign labels to the VMs that can be used as a base for scheduling rules in the cluster."),(0,o.kt)("li",{parentName:"ul"},"Customize the configuration of the Docker daemon on the VMs that will be created.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Custom attributes are a legacy feature that will eventually be removed from vSphere.")),(0,o.kt)("h1",{id:"cloud-init"},"Cloud Init"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/"},"Cloud-init")," allows you to initialize your nodes by applying configuration on the first boot. This may involve things such as creating users, authorizing SSH keys or setting up the network."),(0,o.kt)("p",null,"You may specify the URL of a RancherOS cloud-config.yaml file in the the ",(0,o.kt)("strong",{parentName:"p"},"Cloud Init")," field. Refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/os/v1.x/en/configuration/#cloud-config"},"RancherOS Documentation")," for details on the supported configuration directives. Note that the URL must be network accessible from the VMs created by the template."))}m.isMDXComponent=!0},35254:function(e,t,r){t.Z=r.p+"assets/images/vsphere-nodedriver-enable-uuid-fae8dc7e2b174ee99cedee5ea0ce0c6e.png"}}]);