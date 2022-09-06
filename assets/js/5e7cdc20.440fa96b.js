"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[64792],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||s;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},21218:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return h}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={title:"Architecture",weight:1},l=void 0,c={unversionedId:"pages-for-subheaders/rancher-manager-architecture",id:"version-2.0-2.4/pages-for-subheaders/rancher-manager-architecture",title:"Architecture",description:"This section focuses on the Rancher server, its components, and how Rancher communicates with downstream Kubernetes clusters.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-manager-architecture.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-manager-architecture",permalink:"/v2.0-v2.4/pages-for-subheaders/rancher-manager-architecture",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/rancher-manager-architecture.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Architecture",weight:1},sidebar:"tutorialSidebar",previous:{title:"Tips for Scaling, Security and Reliability",permalink:"/v2.0-v2.4/reference-guides/best-practices/management"},next:{title:"rancher-server-and-components",permalink:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/rancher-server-and-components"}},u={},h=[{value:"1. The Authentication Proxy",id:"1-the-authentication-proxy",level:3},{value:"2. Cluster Controllers and Cluster Agents",id:"2-cluster-controllers-and-cluster-agents",level:3},{value:"3. Node Agents",id:"3-node-agents",level:3},{value:"4. Authorized Cluster Endpoint",id:"4-authorized-cluster-endpoint",level:3},{value:"Rancher Launched Kubernetes for Nodes Hosted in an Infrastructure Provider",id:"rancher-launched-kubernetes-for-nodes-hosted-in-an-infrastructure-provider",level:3},{value:"Rancher Launched Kubernetes for Custom Nodes",id:"rancher-launched-kubernetes-for-custom-nodes",level:3},{value:"Hosted Kubernetes Providers",id:"hosted-kubernetes-providers",level:3},{value:"Imported Kubernetes Clusters",id:"imported-kubernetes-clusters",level:3}],p={toc:h};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This section focuses on the Rancher server, its components, and how Rancher communicates with downstream Kubernetes clusters."),(0,s.kt)("p",null,"For information on the different ways that Rancher can be installed, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade#overview-of-installation-options"},"overview of installation options.")),(0,s.kt)("p",null,"For a list of main features of the Rancher API server, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/introduction/overview#features-of-the-rancher-api-server"},"overview section.")),(0,s.kt)("p",null,"For guidance about setting up the underlying infrastructure for the Rancher server, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rancher-manager-architecture/architecture-recommendations"},"architecture recommendations.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This section assumes a basic familiarity with Docker and Kubernetes. For a brief explanation of how Kubernetes components work together, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/kubernetes-concepts"},"concepts")," page.")),(0,s.kt)("p",null,"This section covers the following topics:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#rancher-server-architecture"},"Rancher server architecture")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#communicating-with-downstream-user-clusters"},"Communicating with downstream user clusters"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#1-the-authentication-proxy"},"The authentication proxy")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#2-cluster-controllers-and-cluster-agents"},"Cluster controllers and cluster agents")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#3-node-agents"},"Node agents")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#4-authorized-cluster-endpoint"},"Authorized cluster endpoint")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#important-files"},"Important files")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#tools-for-provisioning-kubernetes-clusters"},"Tools for provisioning Kubernetes clusters")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#rancher-server-components-and-source-code"},"Rancher server components and source code"))),(0,s.kt)("h1",{id:"rancher-server-architecture"},"Rancher Server Architecture"),(0,s.kt)("p",null,"The majority of Rancher 2.x software runs on the Rancher Server. Rancher Server includes all the software components used to manage the entire Rancher deployment."),(0,s.kt)("p",null,"The figure below illustrates the high-level architecture of Rancher 2.x. The figure depicts a Rancher Server installation that manages two downstream Kubernetes clusters: one created by RKE and another created by Amazon EKS (Elastic Kubernetes Service)."),(0,s.kt)("p",null,"For the best performance and security, we recommend a dedicated Kubernetes cluster for the Rancher management server. Running user workloads on this cluster is not advised. After deploying Rancher, you can ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"create or import clusters")," for running your workloads."),(0,s.kt)("p",null,"The diagram below shows how users can manipulate both ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher-launched Kubernetes")," clusters and ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"hosted Kubernetes")," clusters through Rancher's authentication proxy:"),(0,s.kt)("figcaption",null,"Managing Kubernetes Clusters through Rancher's Authentication Proxy"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Architecture",src:r(16904).Z,width:"766",height:"792"})),(0,s.kt)("p",null,"You can install Rancher on a single node, or on a high-availability Kubernetes cluster."),(0,s.kt)("p",null,"A high-availability Kubernetes installation is recommended for production."),(0,s.kt)("p",null,"A Docker installation of Rancher is recommended only for development and testing purposes. The ability to migrate Rancher to a high-availability cluster depends on the Rancher version:"),(0,s.kt)("p",null,"For Rancher v2.0-v2.4, there was no migration path from a Docker installation to a high-availability installation. Therefore, you may want to use a Kubernetes installation from the start."),(0,s.kt)("p",null,"The Rancher server, regardless of the installation method, should always run on nodes that are separate from the downstream user clusters that it manages. If Rancher is installed on a high-availability Kubernetes cluster, it should run on a separate cluster from the cluster(s) it manages."),(0,s.kt)("h1",{id:"communicating-with-downstream-user-clusters"},"Communicating with Downstream User Clusters"),(0,s.kt)("p",null,"This section describes how Rancher provisions and manages the downstream user clusters that run your apps and services."),(0,s.kt)("p",null,"The below diagram shows how the cluster controllers, cluster agents, and node agents allow Rancher to control downstream clusters."),(0,s.kt)("figcaption",null,"Communicating with Downstream Clusters"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Rancher Components",src:r(78422).Z,width:"758",height:"750"})),(0,s.kt)("p",null,"The following descriptions correspond to the numbers in the diagram above:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#1-the-authentication-proxy"},"The Authentication Proxy")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#2-cluster-controllers-and-cluster-agents"},"Cluster Controllers and Cluster Agents")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#3-node-agents"},"Node Agents")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("a",{parentName:"li",href:"#4-authorized-cluster-endpoint"},"Authorized Cluster Endpoint"))),(0,s.kt)("h3",{id:"1-the-authentication-proxy"},"1. The Authentication Proxy"),(0,s.kt)("p",null,"In this diagram, a user named Bob wants to see all pods running on a downstream user cluster called User Cluster 1. From within Rancher, he can run a ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," command to see\nthe pods. Bob is authenticated through Rancher's authentication proxy."),(0,s.kt)("p",null,"The authentication proxy forwards all Kubernetes API calls to downstream clusters. It integrates with authentication services like local authentication, Active Directory, and GitHub. On every Kubernetes API call, the authentication proxy authenticates the caller and sets the proper Kubernetes impersonation headers before forwarding the call to Kubernetes masters."),(0,s.kt)("p",null,"Rancher communicates with Kubernetes clusters using a ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},"service account,")," which provides an identity for processes that run in a pod."),(0,s.kt)("p",null,"By default, Rancher generates a ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"kubeconfig file")," that contains credentials for proxying through the Rancher server to connect to the Kubernetes API server on a downstream user cluster. The kubeconfig file (",(0,s.kt)("inlineCode",{parentName:"p"},"kube_config_rancher-cluster.yml"),") contains full access to the cluster."),(0,s.kt)("h3",{id:"2-cluster-controllers-and-cluster-agents"},"2. Cluster Controllers and Cluster Agents"),(0,s.kt)("p",null,"Each downstream user cluster has a cluster agent, which opens a tunnel to the corresponding cluster controller within the Rancher server."),(0,s.kt)("p",null,"There is one cluster controller and one cluster agent for each downstream cluster. Each cluster controller:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Watches for resource changes in the downstream cluster"),(0,s.kt)("li",{parentName:"ul"},"Brings the current state of the downstream cluster to the desired state"),(0,s.kt)("li",{parentName:"ul"},"Configures access control policies to clusters and projects"),(0,s.kt)("li",{parentName:"ul"},"Provisions clusters by calling the required Docker machine drivers and Kubernetes engines, such as RKE and GKE")),(0,s.kt)("p",null,"By default, to enable Rancher to communicate with a downstream cluster, the cluster controller connects to the cluster agent. If the cluster agent is not available, the cluster controller can connect to a ",(0,s.kt)("a",{parentName:"p",href:"#3-node-agents"},"node agent")," instead."),(0,s.kt)("p",null,"The cluster agent, also called ",(0,s.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent"),", is a component that runs in a downstream user cluster. It performs the following tasks:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Connects to the Kubernetes API of Rancher-launched Kubernetes clusters"),(0,s.kt)("li",{parentName:"ul"},"Manages workloads, pod creation and deployment within each cluster"),(0,s.kt)("li",{parentName:"ul"},"Applies the roles and bindings defined in each cluster's global policies"),(0,s.kt)("li",{parentName:"ul"},"Communicates between the cluster and Rancher server (through a tunnel to the cluster controller) about events, stats, node info, and health")),(0,s.kt)("h3",{id:"3-node-agents"},"3. Node Agents"),(0,s.kt)("p",null,"If the cluster agent (also called ",(0,s.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent"),") is not available, one of the node agents creates a tunnel to the cluster controller to communicate with Rancher."),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," is deployed using a ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"DaemonSet")," resource to make sure it runs on every node in a Rancher-launched Kubernetes cluster. It is used to interact with the nodes when performing cluster operations. Examples of cluster operations include upgrading the Kubernetes version and creating or restoring etcd snapshots."),(0,s.kt)("h3",{id:"4-authorized-cluster-endpoint"},"4. Authorized Cluster Endpoint"),(0,s.kt)("p",null,"An authorized cluster endpoint allows users to connect to the Kubernetes API server of a downstream cluster without having to route their requests through the Rancher authentication proxy."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The authorized cluster endpoint only works on Rancher-launched Kubernetes clusters. In other words, it only works in clusters where Rancher ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"used RKE")," to provision the cluster. It is not available for imported clusters, or for clusters in a hosted Kubernetes provider, such as Amazon's EKS.")),(0,s.kt)("p",null,"There are two main reasons why a user might need the authorized cluster endpoint:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"To access a downstream user cluster while Rancher is down"),(0,s.kt)("li",{parentName:"ul"},"To reduce latency in situations where the Rancher server and downstream cluster are separated by a long distance")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," microservice is deployed to provide the user authentication functionality for the authorized cluster endpoint. When you access the user cluster using ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),", the cluster's Kubernetes API server authenticates you by using the ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," service as a webhook."),(0,s.kt)("p",null,"Like the authorized cluster endpoint, the ",(0,s.kt)("inlineCode",{parentName:"p"},"kube-api-auth")," authentication service is also only available for Rancher-launched Kubernetes clusters."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Example scenario:")," Let's say that the Rancher server is located in the United States, and User Cluster 1 is located in Australia. A user, Alice, also lives in Australia. Alice can manipulate resources in User Cluster 1 by using the Rancher UI, but her requests will have to be sent from Australia to the Rancher server in the United States, then be proxied back to Australia, where the downstream user cluster is. The geographical distance may cause significant latency, which Alice can reduce by using the authorized cluster endpoint.")),(0,s.kt)("p",null,"With this endpoint enabled for the downstream cluster, Rancher generates an extra Kubernetes context in the kubeconfig file in order to connect directly to the cluster. This file has the credentials for ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"helm"),". "),(0,s.kt)("p",null,"You will need to use a context defined in this kubeconfig file to access the cluster if Rancher goes down. Therefore, we recommend exporting the kubeconfig file so that if Rancher goes down, you can still use the credentials in the file to access your cluster. For more information, refer to the section on accessing your cluster with ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"kubectl and the kubeconfig file.")),(0,s.kt)("h1",{id:"important-files"},"Important Files"),(0,s.kt)("p",null,"The files mentioned below are needed to maintain, troubleshoot and upgrade your cluster:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),": The RKE cluster configuration file."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"kube_config_rancher-cluster.yml"),": The Kubeconfig file for the cluster, this file contains credentials for full access to the cluster. You can use this file to authenticate with a Rancher-launched Kubernetes cluster if Rancher goes down."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),": The Kubernetes cluster state file. This file contains credentials for full access to the cluster. Note: This state file is only created when using RKE v0.2.0 or higher.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Note:"),' The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.')),(0,s.kt)("p",null,"For more information on connecting to a cluster without the Rancher authentication proxy and other configuration options, refer to the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig"},"kubeconfig file")," documentation."),(0,s.kt)("h1",{id:"tools-for-provisioning-kubernetes-clusters"},"Tools for Provisioning Kubernetes Clusters"),(0,s.kt)("p",null,"The tools that Rancher uses to provision downstream user clusters depends on the type of cluster that is being provisioned."),(0,s.kt)("h3",{id:"rancher-launched-kubernetes-for-nodes-hosted-in-an-infrastructure-provider"},"Rancher Launched Kubernetes for Nodes Hosted in an Infrastructure Provider"),(0,s.kt)("p",null,"Rancher can dynamically provision nodes in a provider such as Amazon EC2, DigitalOcean, Azure, or vSphere, then install Kubernetes on them."),(0,s.kt)("p",null,"Rancher provisions this type of cluster using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke"},"RKE")," and ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/machine"},"docker-machine.")),(0,s.kt)("h3",{id:"rancher-launched-kubernetes-for-custom-nodes"},"Rancher Launched Kubernetes for Custom Nodes"),(0,s.kt)("p",null,"When setting up this type of cluster, Rancher installs Kubernetes on existing nodes, which creates a custom cluster."),(0,s.kt)("p",null,"Rancher provisions this type of cluster using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke"},"RKE.")),(0,s.kt)("h3",{id:"hosted-kubernetes-providers"},"Hosted Kubernetes Providers"),(0,s.kt)("p",null,"When setting up this type of cluster, Kubernetes is installed by providers such as Google Kubernetes Engine, Amazon Elastic Container Service for Kubernetes, or Azure Kubernetes Service."),(0,s.kt)("p",null,"Rancher provisions this type of cluster using ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/kontainer-engine"},"kontainer-engine.")),(0,s.kt)("h3",{id:"imported-kubernetes-clusters"},"Imported Kubernetes Clusters"),(0,s.kt)("p",null,"In this type of cluster, Rancher connects to a Kubernetes cluster that has already been set up. Therefore, Rancher does not provision Kubernetes, but only sets up the Rancher agents to communicate with the cluster."),(0,s.kt)("h1",{id:"rancher-server-components-and-source-code"},"Rancher Server Components and Source Code"),(0,s.kt)("p",null,"This diagram shows each component that the Rancher server is composed of:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Rancher Components",src:r(1962).Z,width:"647",height:"276"})),(0,s.kt)("p",null,"The GitHub repositories for Rancher can be found at the following links:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher"},"Main Rancher server repository")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/rancher/ui"},"Rancher UI")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/rancher/api-ui"},"Rancher API UI")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/rancher/norman"},"Norman,")," Rancher's API framework"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/rancher/types"},"Types")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/rancher/cli"},"Rancher CLI")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/rancher/helm"},"Catalog applications"))),(0,s.kt)("p",null,"This is a partial list of the most important Rancher repositories. For more details about Rancher source code, refer to the section on ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/contribute-to-rancher#repositories"},"contributing to Rancher.")," To see all libraries and projects used in Rancher, see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/blob/master/go.mod"},(0,s.kt)("inlineCode",{parentName:"a"},"go.mod")," file")," in the ",(0,s.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," repository."))}d.isMDXComponent=!0},78422:function(e,t,r){t.Z=r.p+"assets/images/rancher-architecture-cluster-controller-39be909f05f9b9a0e356df60dd00ea5e.svg"},16904:function(e,t,r){t.Z=r.p+"assets/images/rancher-architecture-rancher-api-server-2743dae746c64cd2ad66711908be4108.svg"},1962:function(e,t,r){t.Z=r.p+"assets/images/rancher-architecture-rancher-components-64200c35eda5939f425c67f5a498f96f.svg"}}]);