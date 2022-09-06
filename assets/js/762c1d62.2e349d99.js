"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[12463],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},84604:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],l={title:"Migrating from a Kubernetes Install with an RKE Add-on",weight:1030,aliases:["/rancher/v2.0-v2.4/en/upgrades/ha-server-upgrade/","/rancher/v2.0-v2.4/en/upgrades/upgrades/ha-server-upgrade/","/rancher/v2.0-v2.4/en/upgrades/upgrades/migrating-from-rke-add-on","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/migrating-from-rke-add-on","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades/migrating-from-rke-add-on","/rancher/v2.x/en/installation/install-rancher-on-k8s/upgrades/migrating-from-rke-add-on/"]},i=void 0,c={unversionedId:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on",id:"version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on",title:"Migrating from a Kubernetes Install with an RKE Add-on",description:"Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on.md",sourceDirName:"getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades",slug:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Migrating from a Kubernetes Install with an RKE Add-on",weight:1030,aliases:["/rancher/v2.0-v2.4/en/upgrades/ha-server-upgrade/","/rancher/v2.0-v2.4/en/upgrades/upgrades/ha-server-upgrade/","/rancher/v2.0-v2.4/en/upgrades/upgrades/migrating-from-rke-add-on","/rancher/v2.0-v2.4/en/installation/upgrades-rollbacks/upgrades/migrating-from-rke-add-on","/rancher/v2.0-v2.4/en/installation/install-rancher-on-k8s/upgrades-rollbacks/upgrades/migrating-from-rke-add-on","/rancher/v2.x/en/installation/install-rancher-on-k8s/upgrades/migrating-from-rke-add-on/"]},sidebar:"tutorialSidebar",previous:{title:"Upgrades",permalink:"/v2.0-v2.4/pages-for-subheaders/upgrades"},next:{title:"Upgrading to v2.0.7+ \u2014 Namespace Migration",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration"}},u={},d=[{value:"Point kubectl at your Rancher Cluster",id:"point-kubectl-at-your-rancher-cluster",level:3},{value:"Save your certificates",id:"save-your-certificates",level:3},{value:"Remove previous Kubernetes objects",id:"remove-previous-kubernetes-objects",level:3},{value:"Remove addons section from <code>rancher-cluster.yml</code>",id:"remove-addons-section-from-rancher-clusteryml",level:3},{value:"Follow Helm and Rancher install steps",id:"follow-helm-and-rancher-install-steps",level:3}],p={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,o.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, please follow these directions to migrate to the Helm install.")),(0,o.kt)("p",null,"The following instructions will help guide you through migrating from the RKE Add-on install to managing Rancher with the Helm package manager."),(0,o.kt)("p",null,"You will need the to have ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl")," installed and the kubeconfig YAML file (",(0,o.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),") generated by RKE."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," This guide assumes a standard Rancher install. If you have modified any of the object names or namespaces, please adjust accordingly.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," If you are upgrading from from Rancher v2.0.13 or earlier, or v2.1.8 or earlier, and your cluster's certificates have expired, you will need to perform ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates#rotating-expired-certificates-after-upgrading-older-rancher-versions"},"additional steps")," to rotate the certificates.")),(0,o.kt)("h3",{id:"point-kubectl-at-your-rancher-cluster"},"Point kubectl at your Rancher Cluster"),(0,o.kt)("p",null,"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," is using the correct kubeconfig YAML file. Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environmental variable to point to ",(0,o.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export KUBECONFIG=$(pwd)/kube_config_rancher-cluster.yml\n")),(0,o.kt)("p",null,"After setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environment variable, verify that it contains the correct ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," parameter. It should point directly to one of your cluster nodes on port ",(0,o.kt)("inlineCode",{parentName:"p"},"6443"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl config view -o=jsonpath='{.clusters[*].cluster.server}'\nhttps://NODE:6443\n")),(0,o.kt)("p",null,"If the output from the command shows your Rancher hostname with the suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"/k8s/clusters"),", the wrong kubeconfig YAML file is configured. It should be the file that was created when you used RKE to create the cluster to run Rancher."),(0,o.kt)("h3",{id:"save-your-certificates"},"Save your certificates"),(0,o.kt)("p",null,"If you have terminated ssl on the Rancher cluster ingress, recover your certificate and key for use in the Helm install."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," to get the secret, decode the value and direct the output to a file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get secret cattle-keys-ingress -o jsonpath --template='{ .data.tls\\.crt }' | base64 -d > tls.crt\nkubectl -n cattle-system get secret cattle-keys-ingress -o jsonpath --template='{ .data.tls\\.key }' | base64 -d > tls.key\n")),(0,o.kt)("p",null,"If you specified a private CA root cert"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get secret cattle-keys-server -o jsonpath --template='{ .data.cacerts\\.pem }' | base64 -d > cacerts.pem\n")),(0,o.kt)("h3",{id:"remove-previous-kubernetes-objects"},"Remove previous Kubernetes objects"),(0,o.kt)("p",null,"Remove the Kubernetes objects created by the RKE install."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Removing these Kubernetes components will not affect the Rancher configuration or database, but with any maintenance it is a good idea to create a backup of the data before hand. See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters"},"Creating Backups-Kubernetes Install")," for details.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl -n cattle-system delete ingress cattle-ingress-http\nkubectl -n cattle-system delete service cattle-service\nkubectl -n cattle-system delete deployment cattle\nkubectl -n cattle-system delete clusterrolebinding cattle-crb\nkubectl -n cattle-system delete serviceaccount cattle-admin\n")),(0,o.kt)("h3",{id:"remove-addons-section-from-rancher-clusteryml"},"Remove addons section from ",(0,o.kt)("inlineCode",{parentName:"h3"},"rancher-cluster.yml")),(0,o.kt)("p",null,"The addons section from ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," contains all the resources needed to deploy Rancher using RKE. By switching to Helm, this part of the cluster configuration file is no longer needed. Open ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," in your favorite text editor and remove the addons section:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Important:")," Make sure you only remove the addons section from the cluster configuration file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"nodes:\n  - address: <IP> # hostname or IP to access nodes\n    user: <USER> # root user (usually 'root')\n    role: [controlplane,etcd,worker] # K8s roles for node\n    ssh_key_path: <PEM_FILE> # path to PEM file\n  - address: <IP>\n    user: <USER>\n    role: [controlplane,etcd,worker]\n    ssh_key_path: <PEM_FILE>\n  - address: <IP>\n    user: <USER>\n    role: [controlplane,etcd,worker]\n    ssh_key_path: <PEM_FILE>\n\nservices:\n  etcd:\n    snapshot: true\n    creation: 6h\n    retention: 24h\n\n# Remove addons section from here til end of file\naddons: |-\n  ---\n  ...\n# End of file\n")),(0,o.kt)("h3",{id:"follow-helm-and-rancher-install-steps"},"Follow Helm and Rancher install steps"),(0,o.kt)("p",null,"From here follow the standard install steps."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm2-helm-init"},"3 - Initialize Helm")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/helm-rancher"},"4 - Install Rancher"))))}m.isMDXComponent=!0}}]);