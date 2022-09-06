"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30949],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(67294),n=a(86010),o="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return h}});var r=a(87462),n=a(67294),o=a(86010),i=a(72389),l=a(67392),s=a(7094),u=a(12466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,a,i=e.lazy,p=e.block,h=e.defaultValue,m=e.values,f=e.groupId,g=e.className,y=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===h?h:null!=(t=null!=h?h:null==(a=y.find((function(e){return e.props.default})))?void 0:a.props.value)?t:y[0].props.value;if(null!==b&&!k.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,R=(0,n.useState)(b),S=R[0],x=R[1],I=[],L=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=N[f];null!=D&&D!==S&&k.some((function(e){return e.value===D}))&&x(D)}var P=function(e){var t=e.currentTarget,a=I.indexOf(t),r=k[a].value;r!==S&&(L(t),x(r),null!=f&&T(f,String(r)))},E=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=I.indexOf(e.currentTarget)+1;a=null!=(r=I[n])?r:I[0];break;case"ArrowLeft":var o,i=I.indexOf(e.currentTarget)-1;a=null!=(o=I[i])?o:I[I.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},g)},k.map((function(e){var t=e.value,a=e.label,i=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return I.push(e)},onKeyDown:E,onFocus:P,onClick:P},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=a?a:t)}))),i?(0,n.cloneElement)(y.filter((function(e){return e.props.value===S}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function h(e){var t=(0,i.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}},28334:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return h}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=a(65488),l=a(85162),s=["components"],u={title:"1. Set up Infrastructure and Private Registry",weight:100},c=void 0,d={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",id:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",title:"1. Set up Infrastructure and Private Registry",description:"In this section, you will provision the underlying infrastructure for your Rancher management server in an air gapped environment. You will also set up the private Docker registry that must be available to your Rancher node(s).",source:"@site/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/infrastructure-private-registry.md",tags:[],version:"current",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"1. Set up Infrastructure and Private Registry",weight:100},sidebar:"tutorialSidebar",previous:{title:"Air-Gapped Helm CLI Install",permalink:"/pages-for-subheaders/air-gapped-helm-cli-install"},next:{title:"2. Collect and Publish Images to your Private Registry",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"}},p={},h=[{value:"1. Set up Linux Nodes",id:"1-set-up-linux-nodes",level:3},{value:"2. Set up External Datastore",id:"2-set-up-external-datastore",level:3},{value:"3. Set up the Load Balancer",id:"3-set-up-the-load-balancer",level:3},{value:"4. Set up the DNS Record",id:"4-set-up-the-dns-record",level:3},{value:"5. Set up a Private Docker Registry",id:"5-set-up-a-private-docker-registry",level:3},{value:"Why three nodes?",id:"why-three-nodes",level:3},{value:"1. Set up Linux Nodes",id:"1-set-up-linux-nodes-1",level:3},{value:"2. Set up the Load Balancer",id:"2-set-up-the-load-balancer",level:3},{value:"3. Set up the DNS Record",id:"3-set-up-the-dns-record",level:3},{value:"4. Set up a Private Docker Registry",id:"4-set-up-a-private-docker-registry",level:3},{value:"1. Set up a Linux Node",id:"1-set-up-a-linux-node",level:3},{value:"2. Set up a Private Docker Registry",id:"2-set-up-a-private-docker-registry",level:3},{value:"Next: Collect and Publish Images to your Private Registry",id:"next-collect-and-publish-images-to-your-private-registry",level:3}],m={toc:h};function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you will provision the underlying infrastructure for your Rancher management server in an air gapped environment. You will also set up the private Docker registry that must be available to your Rancher node(s)."),(0,o.kt)("p",null,"An air gapped environment is an environment where the Rancher server is installed offline or behind a firewall."),(0,o.kt)("p",null,"The infrastructure depends on whether you are installing Rancher on a K3s Kubernetes cluster, an RKE Kubernetes cluster, or a single Docker container. For more information on each installation option, refer to ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-and-upgrade"},"this page.")),(0,o.kt)("p",null,"Rancher can be installed on any Kubernetes cluster. The RKE and K3s Kubernetes infrastructure tutorials below are still included for convenience."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"K3s",mdxType:"TabItem"},(0,o.kt)("p",null,"We recommend setting up the following infrastructure for a high-availability installation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Two Linux nodes,")," typically virtual machines, in the infrastructure provider of your choice."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"An external database")," to store the cluster data. PostgreSQL, MySQL, and etcd are supported."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A load balancer")," to direct traffic to the two nodes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A DNS record")," to map a URL to the load balancer. This will become the Rancher server URL, and downstream Kubernetes clusters will need to reach it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A private Docker registry")," to distribute Docker images to your machines.")),(0,o.kt)("h3",{id:"1-set-up-linux-nodes"},"1. Set up Linux Nodes"),(0,o.kt)("p",null,"These hosts will be disconnected from the internet, but require being able to connect with your private registry."),(0,o.kt)("p",null,"Make sure that your nodes fulfill the general installation requirements for ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"OS, container runtime, hardware, and networking.")),(0,o.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,o.kt)("h3",{id:"2-set-up-external-datastore"},"2. Set up External Datastore"),(0,o.kt)("p",null,"The ability to run Kubernetes using a datastore other than etcd sets K3s apart from other Kubernetes distributions. This feature provides flexibility to Kubernetes operators. The available options allow you to select a datastore that best fits your use case."),(0,o.kt)("p",null,"For a high-availability K3s installation, you will need to set up one of the following external databases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.postgresql.org/"},"PostgreSQL")," (certified against versions 10.7 and 11.5)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.mysql.com/"},"MySQL")," (certified against version 5.7)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://etcd.io/"},"etcd")," (certified against version 3.3.15)")),(0,o.kt)("p",null,"When you install Kubernetes, you will pass in details for K3s to connect to the database."),(0,o.kt)("p",null,"For an example of one way to set up the database, refer to this ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/mysql-database-in-amazon-rds"},"tutorial")," for setting up a MySQL database on Amazon's RDS service."),(0,o.kt)("p",null,"For the complete list of options that are available for configuring a K3s cluster datastore, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/datastore/"},"K3s documentation.")),(0,o.kt)("h3",{id:"3-set-up-the-load-balancer"},"3. Set up the Load Balancer"),(0,o.kt)("p",null,"You will also need to set up a load balancer to direct traffic to the Rancher replica on both nodes. That will prevent an outage of any single node from taking down communications to the Rancher management server."),(0,o.kt)("p",null,"When Kubernetes gets set up in a later step, the K3s tool will deploy a Traefik Ingress controller. This controller will listen on ports 80 and 443 of the worker nodes, answering traffic destined for specific hostnames."),(0,o.kt)("p",null,"When Rancher is installed (also in a later step), the Rancher system creates an Ingress resource. That Ingress tells the Traefik Ingress controller to listen for traffic destined for the Rancher hostname. The Traefik Ingress controller, when receiving traffic destined for the Rancher hostname, will forward that traffic to the running Rancher pods in the cluster."),(0,o.kt)("p",null,"For your implementation, consider if you want or need to use a Layer-4 or Layer-7 load balancer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A layer-4 load balancer")," is the simpler of the two choices, in which you are forwarding TCP traffic to your nodes. We recommend configuring your load balancer as a Layer 4 balancer, forwarding traffic to ports TCP/80 and TCP/443 to the Rancher management cluster nodes. The Ingress controller on the cluster will redirect HTTP traffic to HTTPS and terminate SSL/TLS on port TCP/443. The Ingress controller will forward traffic to port TCP/80 to the Ingress pod in the Rancher deployment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A layer-7 load balancer")," is a bit more complicated but can offer features that you may want. For instance, a layer-7 load balancer is capable of handling TLS termination at the load balancer, as opposed to Rancher doing TLS termination itself. This can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with. If you decide to terminate the SSL/TLS traffic on a layer-7 load balancer, you will need to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"--set tls=external")," option when installing Rancher in a later step. For more information, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"Rancher Helm chart options."))),(0,o.kt)("p",null,"For an example showing how to set up an NGINX load balancer, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"this page.")),(0,o.kt)("p",null,"For a how-to guide for setting up an Amazon ELB Network Load Balancer, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"this page.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do not use this load balancer (i.e, the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster to Rancher and no other applications."))),(0,o.kt)("h3",{id:"4-set-up-the-dns-record"},"4. Set up the DNS Record"),(0,o.kt)("p",null,"Once you have set up your load balancer, you will need to create a DNS record to send traffic to this load balancer."),(0,o.kt)("p",null,"Depending on your environment, this may be an A record pointing to the load balancer IP, or it may be a CNAME pointing to the load balancer hostname. In either case, make sure this record is the hostname that you intend Rancher to respond on."),(0,o.kt)("p",null,"You will need to specify this hostname in a later step when you install Rancher, and it is not possible to change it later. Make sure that your decision is a final one."),(0,o.kt)("p",null,"For a how-to guide for setting up a DNS record to route domain traffic to an Amazon ELB load balancer, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"official AWS documentation.")),(0,o.kt)("h3",{id:"5-set-up-a-private-docker-registry"},"5. Set up a Private Docker Registry"),(0,o.kt)("p",null,"Rancher supports air gap installs using a private registry. You must have your own private registry or other means of distributing Docker images to your machines."),(0,o.kt)("p",null,"In a later step, when you set up your K3s Kubernetes cluster, you will create a ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/private-registry/"},"private registries configuration file")," with details from this registry."),(0,o.kt)("p",null,"If you need help with creating a private registry, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"official Docker documentation."))),(0,o.kt)(l.Z,{value:"RKE",mdxType:"TabItem"},(0,o.kt)("p",null,"To install the Rancher management server on a high-availability RKE cluster, we recommend setting up the following infrastructure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Three Linux nodes,")," typically virtual machines, in an infrastructure provider such as Amazon's EC2, Google Compute Engine, or vSphere."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A load balancer")," to direct front-end traffic to the three nodes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A DNS record")," to map a URL to the load balancer. This will become the Rancher server URL, and downstream Kubernetes clusters will need to reach it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A private Docker registry")," to distribute Docker images to your machines.")),(0,o.kt)("p",null,"These nodes must be in the same region/data center. You may place these servers in separate availability zones."),(0,o.kt)("h3",{id:"why-three-nodes"},"Why three nodes?"),(0,o.kt)("p",null,"In an RKE cluster, Rancher server data is stored on etcd. This etcd database runs on all three nodes."),(0,o.kt)("p",null,"The etcd database requires an odd number of nodes so that it can always elect a leader with a majority of the etcd cluster. If the etcd database cannot elect a leader, etcd can suffer from ",(0,o.kt)("a",{parentName:"p",href:"https://www.quora.com/What-is-split-brain-in-distributed-systems"},"split brain"),", requiring the cluster to be restored from backup. If one of the three etcd nodes fails, the two remaining nodes can elect a leader because they have the majority of the total number of etcd nodes."),(0,o.kt)("h3",{id:"1-set-up-linux-nodes-1"},"1. Set up Linux Nodes"),(0,o.kt)("p",null,"These hosts will be disconnected from the internet, but require being able to connect with your private registry."),(0,o.kt)("p",null,"Make sure that your nodes fulfill the general installation requirements for ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"OS, container runtime, hardware, and networking.")),(0,o.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,o.kt)("h3",{id:"2-set-up-the-load-balancer"},"2. Set up the Load Balancer"),(0,o.kt)("p",null,"You will also need to set up a load balancer to direct traffic to the Rancher replica on both nodes. That will prevent an outage of any single node from taking down communications to the Rancher management server."),(0,o.kt)("p",null,"When Kubernetes gets set up in a later step, the RKE tool will deploy an NGINX Ingress controller. This controller will listen on ports 80 and 443 of the worker nodes, answering traffic destined for specific hostnames."),(0,o.kt)("p",null,"When Rancher is installed (also in a later step), the Rancher system creates an Ingress resource. That Ingress tells the NGINX Ingress controller to listen for traffic destined for the Rancher hostname. The NGINX Ingress controller, when receiving traffic destined for the Rancher hostname, will forward that traffic to the running Rancher pods in the cluster."),(0,o.kt)("p",null,"For your implementation, consider if you want or need to use a Layer-4 or Layer-7 load balancer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A layer-4 load balancer")," is the simpler of the two choices, in which you are forwarding TCP traffic to your nodes. We recommend configuring your load balancer as a Layer 4 balancer, forwarding traffic to ports TCP/80 and TCP/443 to the Rancher management cluster nodes. The Ingress controller on the cluster will redirect HTTP traffic to HTTPS and terminate SSL/TLS on port TCP/443. The Ingress controller will forward traffic to port TCP/80 to the Ingress pod in the Rancher deployment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A layer-7 load balancer")," is a bit more complicated but can offer features that you may want. For instance, a layer-7 load balancer is capable of handling TLS termination at the load balancer, as opposed to Rancher doing TLS termination itself. This can be beneficial if you want to centralize your TLS termination in your infrastructure. Layer-7 load balancing also offers the capability for your load balancer to make decisions based on HTTP attributes such as cookies, etc. that a layer-4 load balancer is not able to concern itself with. If you decide to terminate the SSL/TLS traffic on a layer-7 load balancer, you will need to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"--set tls=external")," option when installing Rancher in a later step. For more information, refer to the ",(0,o.kt)("a",{parentName:"li",href:"/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"Rancher Helm chart options."))),(0,o.kt)("p",null,"For an example showing how to set up an NGINX load balancer, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},"this page.")),(0,o.kt)("p",null,"For a how-to guide for setting up an Amazon ELB Network Load Balancer, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer"},"this page.")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do not use this load balancer (i.e, the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster Ingress) to load balance applications other than Rancher following installation. Sharing this Ingress with other applications may result in websocket errors to Rancher following Ingress configuration reloads for other apps. We recommend dedicating the ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," cluster to Rancher and no other applications."))),(0,o.kt)("h3",{id:"3-set-up-the-dns-record"},"3. Set up the DNS Record"),(0,o.kt)("p",null,"Once you have set up your load balancer, you will need to create a DNS record to send traffic to this load balancer."),(0,o.kt)("p",null,"Depending on your environment, this may be an A record pointing to the LB IP, or it may be a CNAME pointing to the load balancer hostname. In either case, make sure this record is the hostname that you intend Rancher to respond on."),(0,o.kt)("p",null,"You will need to specify this hostname in a later step when you install Rancher, and it is not possible to change it later. Make sure that your decision is a final one."),(0,o.kt)("p",null,"For a how-to guide for setting up a DNS record to route domain traffic to an Amazon ELB load balancer, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-elb-load-balancer"},"official AWS documentation.")),(0,o.kt)("h3",{id:"4-set-up-a-private-docker-registry"},"4. Set up a Private Docker Registry"),(0,o.kt)("p",null,"Rancher supports air gap installs using a secure Docker private registry. You must have your own private registry or other means of distributing Docker images to your machines."),(0,o.kt)("p",null,"In a later step, when you set up your RKE Kubernetes cluster, you will create a ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/private-registries/"},"private registries configuration file")," with details from this registry."),(0,o.kt)("p",null,"If you need help with creating a private registry, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry"},"official Docker documentation."))),(0,o.kt)(l.Z,{value:"Docker",mdxType:"TabItem"},(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Docker installation is for Rancher users that are wanting to test out Rancher. Since there is only one node and a single Docker container, if the node goes down, you will lose all the data of your Rancher server.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The Rancher backup operator can be used to migrate Rancher from the single Docker container install to an installation on a high-availability Kubernetes cluster. For details, refer to the documentation on ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"migrating Rancher to a new cluster.")))))),(0,o.kt)("h3",{id:"1-set-up-a-linux-node"},"1. Set up a Linux Node"),(0,o.kt)("p",null,"This host will be disconnected from the Internet, but needs to be able to connect to your private registry."),(0,o.kt)("p",null,"Make sure that your node fulfills the general installation requirements for ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"OS, Docker, hardware, and networking.")),(0,o.kt)("p",null,"For an example of one way to set up Linux nodes, refer to this ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/infrastructure-setup/nodes-in-amazon-ec2"},"tutorial")," for setting up nodes as instances in Amazon EC2."),(0,o.kt)("h3",{id:"2-set-up-a-private-docker-registry"},"2. Set up a Private Docker Registry"),(0,o.kt)("p",null,"Rancher supports air gap installs using a Docker private registry on your bastion server. You must have your own private registry or other means of distributing Docker images to your machines."),(0,o.kt)("p",null,"If you need help with creating a private registry, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/"},"official Docker documentation.")))),(0,o.kt)("h3",{id:"next-collect-and-publish-images-to-your-private-registry"},(0,o.kt)("a",{parentName:"h3",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/publish-images"},"Next: Collect and Publish Images to your Private Registry")))}f.isMDXComponent=!0}}]);