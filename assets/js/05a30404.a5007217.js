"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86730],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=a,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14733:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(13683),o=["components"],s={title:"Cluster Configuration",weight:2025},u=void 0,d={unversionedId:"pages-for-subheaders/cluster-configuration",id:"version-2.0-2.4/pages-for-subheaders/cluster-configuration",title:"Cluster Configuration",description:"After you provision a Kubernetes cluster using Rancher, you can still edit options and settings for the cluster.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/cluster-configuration.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/cluster-configuration",permalink:"/v2.0-v2.4/pages-for-subheaders/cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/cluster-configuration.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Cluster Configuration",weight:2025},sidebar:"tutorialSidebar",previous:{title:"Architecture Recommendations",permalink:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/architecture-recommendations"},next:{title:"rancher-server-configuration",permalink:"/v2.0-v2.4/pages-for-subheaders/rancher-server-configuration"}},p={},c=[{value:"Cluster Management Capabilities by Cluster Type",id:"cluster-management-capabilities-by-cluster-type",level:3},{value:"Editing Clusters in the Rancher UI",id:"editing-clusters-in-the-rancher-ui",level:3},{value:"Editing Clusters with YAML",id:"editing-clusters-with-yaml",level:3},{value:"Updating ingress-nginx",id:"updating-ingress-nginx",level:3}],g={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"After you provision a Kubernetes cluster using Rancher, you can still edit options and settings for the cluster."),(0,i.kt)("p",null,"For information on editing cluster membership, go to ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"this page.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cluster-management-capabilities-by-cluster-type"},"Cluster Management Capabilities by Cluster Type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#editing-clusters-in-the-rancher-ui"},"Editing Clusters in the Rancher UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#editing-clusters-with-yaml"},"Editing Clusters with YAML")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#updating-ingress-nginx"},"Updating ingress-nginx"))),(0,i.kt)("h3",{id:"cluster-management-capabilities-by-cluster-type"},"Cluster Management Capabilities by Cluster Type"),(0,i.kt)("p",null,"The options and settings available for an existing cluster change based on the method that you used to provision it. For example, only clusters ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"provisioned by RKE")," have ",(0,i.kt)("strong",{parentName:"p"},"Cluster Options")," available for editing."),(0,i.kt)("p",null,"The following table summarizes the options and settings available for each cluster type:"),(0,i.kt)(l.ZP,{mdxType:"ClusterCapabilitiesTable"}),(0,i.kt)("h3",{id:"editing-clusters-in-the-rancher-ui"},"Editing Clusters in the Rancher UI"),(0,i.kt)("p",null,"To edit your cluster, open the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, make sure the ",(0,i.kt)("strong",{parentName:"p"},"Clusters")," tab is selected, and then select ",(0,i.kt)("strong",{parentName:"p"},"\u22ee"," > Edit")," for the cluster that you want to edit."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"clusters launched by RKE"),", you can edit any of the remaining options that follow."),(0,i.kt)("p",null,"Note that these options are not available for imported clusters or hosted Kubernetes clusters."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kubernetes Version"),(0,i.kt)("td",{parentName:"tr",align:null},"The version of Kubernetes installed on each cluster node. For more detail, see ",(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"Upgrading Kubernetes"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Network Provider"),(0,i.kt)("td",{parentName:"tr",align:null},"The \\container networking interface (CNI) that powers networking for your cluster.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Note:")," You can only choose this option while provisioning your cluster. It cannot be edited later.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Project Network Isolation"),(0,i.kt)("td",{parentName:"tr",align:null},"As of Rancher v2.0.7, if you're using the Canal network provider, you can choose whether to enable or disable inter-project communication.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Nginx Ingress"),(0,i.kt)("td",{parentName:"tr",align:null},"If you want to publish your applications in a high-availability configuration, and you're hosting your nodes with a cloud-provider that doesn't have a native load-balancing feature, enable this option to use Nginx ingress within the cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Metrics Server Monitoring"),(0,i.kt)("td",{parentName:"tr",align:null},"Each cloud provider capable of launching a cluster using RKE can collect metrics and monitor for your cluster nodes. Enable this option to view your node metrics from your cloud provider's portal.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Pod Security Policy Support"),(0,i.kt)("td",{parentName:"tr",align:null},"Enables ",(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"pod security policies")," for the cluster. After enabling this option, choose a policy using the ",(0,i.kt)("strong",{parentName:"td"},"Default Pod Security Policy")," drop-down.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Docker version on nodes"),(0,i.kt)("td",{parentName:"tr",align:null},"Configures whether nodes are allowed to run versions of Docker that Rancher doesn't officially support. If you choose to require a ",(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/rke-add-on/layer-7-lb"},"supported Docker version"),", Rancher will stop pods from running on nodes that don't have a supported Docker version installed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Docker Root Directory"),(0,i.kt)("td",{parentName:"tr",align:null},"The directory on your cluster nodes where you've installed Docker. If you install Docker on your nodes to a non-default directory, update this path.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Default Pod Security Policy"),(0,i.kt)("td",{parentName:"tr",align:null},"If you enable ",(0,i.kt)("strong",{parentName:"td"},"Pod Security Policy Support"),", use this drop-down to choose the pod security policy that's applied to the cluster.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Cloud Provider"),(0,i.kt)("td",{parentName:"tr",align:null},"If you're using a cloud provider to host cluster nodes launched by RKE, enable ",(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"this option")," so that you can use the cloud provider's native features. If you want to store persistent data for your cloud-hosted cluster, this option is required.")))),(0,i.kt)("h3",{id:"editing-clusters-with-yaml"},"Editing Clusters with YAML"),(0,i.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the options available in an RKE installation, except for system_images configuration, by specifying them in YAML."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To edit an RKE config file directly from the Rancher UI, click ",(0,i.kt)("strong",{parentName:"li"},"Edit as YAML"),"."),(0,i.kt)("li",{parentName:"ul"},"To read from an existing RKE file, click ",(0,i.kt)("strong",{parentName:"li"},"Read from File"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:n(69871).Z,width:"2708",height:"258"})),(0,i.kt)("p",null,"For an example of RKE config file syntax, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE documentation"),"."),(0,i.kt)("p",null,"For the complete reference of configurable options for RKE Kubernetes clusters in YAML, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE documentation.")),(0,i.kt)("p",null,"In Rancher v2.0.0-v2.2.x, the config file is identical to the  ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"cluster config file for the Rancher Kubernetes Engine"),", which is the tool Rancher uses to provision clusters. In Rancher v2.3.0, the RKE information is still included in the config file, but it is separated from other options, so that the RKE cluster config options are nested under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive. For more information, see the ",(0,i.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration"},"cluster configuration reference.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," In Rancher v2.0.5 and v2.0.6, the names of services in the Config File (YAML) should contain underscores only: ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_api")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_controller"),".")),(0,i.kt)("h3",{id:"updating-ingress-nginx"},"Updating ingress-nginx"),(0,i.kt)("p",null,"Clusters that were created before Kubernetes 1.16 will have an ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," ",(0,i.kt)("inlineCode",{parentName:"p"},"updateStrategy")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDelete"),". Clusters that were created with Kubernetes 1.16 or newer will have ",(0,i.kt)("inlineCode",{parentName:"p"},"RollingUpdate"),"."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateStrategy")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDelete"),", you will need to delete these pods to get the correct version for your deployment."))}m.isMDXComponent=!0},13683:function(e,t,n){n.d(t,{ZP:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Action"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes Clusters")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"Hosted Kubernetes Clusters")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"Imported Clusters")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"Using kubectl and a kubeconfig file to Access a Cluster")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/add-users-to-clusters"},"Managing Cluster Members")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/cluster-configuration"},"Editing and Upgrading Clusters")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"},"Managing Nodes")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/create-kubernetes-persistent-storage"},"Managing Persistent Volumes and Storage Classes")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"Managing Projects, Namespaces and Workloads")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher/"},"Using App Catalogs")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/rancher-cluster-tools"},"Configuring Tools (Alerts, Notifiers, Logging, Monitoring, Istio)")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"},"Cloning Clusters")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates"},"Ability to rotate certificates")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd"},"Ability to back up your Kubernetes Clusters")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd"},"Ability to recover and restore etcd")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"Cleaning Kubernetes components when clusters are no longer reachable from Rancher")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/add-a-pod-security-policy"},"Configuring Pod Security Policies")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/pages-for-subheaders/cis-scans"},"Running Security Scans")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/v2.0-v2.4/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#authorized-cluster-endpoint"},"Authorized Cluster Endpoint")),(0,i.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"*"," Cluster configuration options can't be edited for imported clusters, except for K3s clusters."))}s.isMDXComponent=!0},69871:function(e,t,n){t.Z=n.p+"assets/images/cluster-options-yaml-994a3b9b3d53ed35101fa31517f64620.png"}}]);