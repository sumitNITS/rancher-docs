"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24242],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(h,l(l({ref:t},d),{},{components:r})):n.createElement(h,l({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},87344:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],i={title:"Recommended Cluster Architecture",weight:1,aliases:["/rancher/v2.x/en/cluster-provisioning/production/recommended-architecture/"]},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture",id:"version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture",title:"Recommended Cluster Architecture",description:"There are three roles that can be assigned to nodes: etcd, controlplane and worker.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/recommended-cluster-architecture.md",tags:[],version:"2.5",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Recommended Cluster Architecture",weight:1,aliases:["/rancher/v2.x/en/cluster-provisioning/production/recommended-architecture/"]},sidebar:"tutorialSidebar",previous:{title:"Checklist for Production-Ready Clusters",permalink:"/v2.5/pages-for-subheaders/checklist-for-production-ready-clusters"},next:{title:"Roles for Nodes in Kubernetes",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes"}},d={},c=[{value:"Number of Controlplane Nodes",id:"number-of-controlplane-nodes",level:3},{value:"Number of etcd Nodes",id:"number-of-etcd-nodes",level:3},{value:"Number of Worker Nodes",id:"number-of-worker-nodes",level:3},{value:"Why Production Requirements are Different for the Rancher Cluster and the Clusters Running Your Applications",id:"why-production-requirements-are-different-for-the-rancher-cluster-and-the-clusters-running-your-applications",level:3}],p={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are three roles that can be assigned to nodes: ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"worker"),". "),(0,a.kt)("h1",{id:"separating-worker-nodes-from-nodes-with-other-roles"},"Separating Worker Nodes from Nodes with Other Roles"),(0,a.kt)("p",null,"When designing your cluster(s), you have two options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use dedicated nodes for each role. This ensures resource availability for the components needed for the specified role. It also strictly isolates network traffic between each of the roles according to the ",(0,a.kt)("a",{parentName:"li",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters#networking-requirements"},"port requirements"),". "),(0,a.kt)("li",{parentName:"ul"},"Assign the ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")," roles to the same nodes. These nodes must meet the hardware requirements for both roles.")),(0,a.kt)("p",null,"In either case, the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," role should not be used or added to nodes with the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," role."),(0,a.kt)("p",null,"Therefore, each node should have one of the following role configurations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")),(0,a.kt)("li",{parentName:"ul"},"Both ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"worker"))),(0,a.kt)("h1",{id:"recommended-number-of-nodes-with-each-role"},"Recommended Number of Nodes with Each Role"),(0,a.kt)("p",null,"The cluster should have:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"At least three nodes with the role ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," to survive losing one node. Increase this count for higher node fault toleration, and spread them across (availability) zones to provide even better fault tolerance."),(0,a.kt)("li",{parentName:"ul"},"At least two nodes with the role ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")," for master component high availability."),(0,a.kt)("li",{parentName:"ul"},"At least two nodes with the role ",(0,a.kt)("inlineCode",{parentName:"li"},"worker")," for workload rescheduling upon node failure.")),(0,a.kt)("p",null,"For more information on what each role is used for, refer to the ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/checklist-for-production-ready-clusters/roles-for-nodes-in-kubernetes"},"section on roles for nodes in Kubernetes.")),(0,a.kt)("h3",{id:"number-of-controlplane-nodes"},"Number of Controlplane Nodes"),(0,a.kt)("p",null,"Adding more than one node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," role makes every master component highly available."),(0,a.kt)("h3",{id:"number-of-etcd-nodes"},"Number of etcd Nodes"),(0,a.kt)("p",null,"The number of nodes that you can lose at once while maintaining cluster availability is determined by the number of nodes assigned the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role. For a cluster with n members, the minimum is (n/2)+1. Therefore, we recommend creating an  ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," node in 3 different availability zones within a region to survive the loss of one availability zone. If you use only two zones, you can only survive the loss of the zone where you don't lose the majority of nodes."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nodes with ",(0,a.kt)("inlineCode",{parentName:"th"},"etcd")," role"),(0,a.kt)("th",{parentName:"tr",align:null},"Majority"),(0,a.kt)("th",{parentName:"tr",align:null},"Failure Tolerance"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"2"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"3"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"4"))))),(0,a.kt)("p",null,"References:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/faq/#what-is-failure-tolerance"},"Official etcd documentation on optimal etcd cluster size")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/administer-cluster/configure-upgrade-etcd/"},"Official Kubernetes documentation on operating etcd clusters for Kubernetes"))),(0,a.kt)("h3",{id:"number-of-worker-nodes"},"Number of Worker Nodes"),(0,a.kt)("p",null,"Adding more than one node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," role will make sure your workloads can be rescheduled if a node fails."),(0,a.kt)("h3",{id:"why-production-requirements-are-different-for-the-rancher-cluster-and-the-clusters-running-your-applications"},"Why Production Requirements are Different for the Rancher Cluster and the Clusters Running Your Applications"),(0,a.kt)("p",null,"You may have noticed that our ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Kubernetes Install")," instructions do not meet our definition of a production-ready cluster, as there are no dedicated nodes for the ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," role. However, for your Rancher installation, this three node cluster is valid, because:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It allows one ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," node failure."),(0,a.kt)("li",{parentName:"ul"},"It maintains multiple instances of the master components by having multiple ",(0,a.kt)("inlineCode",{parentName:"li"},"controlplane")," nodes."),(0,a.kt)("li",{parentName:"ul"},"No other workloads than Rancher itself should be created on this cluster.")),(0,a.kt)("h1",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/components/#master-components"},"Kubernetes: Master Components"))))}m.isMDXComponent=!0}}]);