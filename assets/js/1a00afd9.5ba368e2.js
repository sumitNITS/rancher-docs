"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[7654],{3905:function(e,a,r){r.d(a,{Zo:function(){return u},kt:function(){return g}});var t=r(67294);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=t.createContext({}),d=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},u=function(e){var a=d(e.components);return t.createElement(i.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(r),g=n,y=c["".concat(i,".").concat(g)]||c[g]||p[g]||l;return r?t.createElement(y,o(o({ref:a},u),{},{components:r})):t.createElement(y,o({ref:a},u))}));function g(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var d=2;d<l;d++)o[d]=r[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},40004:function(e,a,r){r.r(a),r.d(a,{assets:function(){return u},contentTitle:function(){return i},default:function(){return g},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var t=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],s={title:"Layer 4 and Layer 7 Load Balancing",description:"Kubernetes supports load balancing in two ways: Layer-4 Load Balancing and Layer-7 Load Balancing. Learn about the support for each way in different deployments",weight:3041,aliases:["/rancher/v2.0-v2.4/en/concepts/load-balancing/","/rancher/v2.0-v2.4/en/k8s-in-rancher/load-balancers-and-ingress/load-balancers"]},i=void 0,d={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",title:"Layer 4 and Layer 7 Load Balancing",description:"Kubernetes supports load balancing in two ways: Layer-4 Load Balancing and Layer-7 Load Balancing. Learn about the support for each way in different deployments",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/layer-4-and-layer-7-load-balancing.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Layer 4 and Layer 7 Load Balancing",description:"Kubernetes supports load balancing in two ways: Layer-4 Load Balancing and Layer-7 Load Balancing. Learn about the support for each way in different deployments",weight:3041,aliases:["/rancher/v2.0-v2.4/en/concepts/load-balancing/","/rancher/v2.0-v2.4/en/k8s-in-rancher/load-balancers-and-ingress/load-balancers"]},sidebar:"tutorialSidebar",previous:{title:"Set Up Load Balancer and Ingress Controller within Rancher",permalink:"/v2.0-v2.4/pages-for-subheaders/load-balancer-and-ingress-controller"},next:{title:"Adding Ingresses to Your Project",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"}},u={},p=[{value:"Layer-4 Load Balancer",id:"layer-4-load-balancer",level:2},{value:"Support for Layer-4 Load Balancing",id:"support-for-layer-4-load-balancing",level:3},{value:"Layer-7 Load Balancer",id:"layer-7-load-balancer",level:2},{value:"Support for Layer-7 Load Balancing",id:"support-for-layer-7-load-balancing",level:3},{value:"Host Names in Layer-7 Load Balancer",id:"host-names-in-layer-7-load-balancer",level:3},{value:"Related Links",id:"related-links",level:2}],c={toc:p};function g(e){var a=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Kubernetes supports load balancing in two ways: Layer-4 Load Balancing and Layer-7 Load Balancing."),(0,l.kt)("h2",{id:"layer-4-load-balancer"},"Layer-4 Load Balancer"),(0,l.kt)("p",null,"Layer-4 load balancer (or the external load balancer) forwards traffic to Nodeports. Layer-4 load balancer allows you to forward both HTTP and TCP traffic."),(0,l.kt)("p",null,"Often, the Layer-4 load balancer is supported by the underlying cloud provider, so when you deploy RKE clusters on bare-metal servers and vSphere clusters, Layer-4 load balancer is not supported. However, a single ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/exposing-tcp-udp-services/"},"globally managed config-map")," can be used to expose services on NGINX or third-party ingress."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," It is possible to deploy a cluster with a non-cloud load balancer, such as ",(0,l.kt)("a",{parentName:"p",href:"https://metallb.universe.tf/"},"MetalLB.")," However, that use case is more advanced than the Layer-4 load balancer supported by a cloud provider, and it is not configurable in Rancher or RKE.")),(0,l.kt)("h3",{id:"support-for-layer-4-load-balancing"},"Support for Layer-4 Load Balancing"),(0,l.kt)("p",null,"Support for layer-4 load balancer varies based on the underlying cloud provider."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cluster Deployment"),(0,l.kt)("th",{parentName:"tr",align:null},"Layer-4 Load Balancer Support"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported by AWS cloud provider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google GKE"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported by GCE cloud provider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Azure AKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported by Azure cloud provider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RKE on EC2"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported by AWS cloud provider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RKE on DigitalOcean"),(0,l.kt)("td",{parentName:"tr",align:null},"Limited NGINX or third-party Ingress*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RKE on vSphere"),(0,l.kt)("td",{parentName:"tr",align:null},"Limited NGINX or third party-Ingress*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RKE on Custom Hosts",(0,l.kt)("br",null),"(e.g. bare-metal servers)"),(0,l.kt)("td",{parentName:"tr",align:null},"Limited NGINX or third-party Ingress*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Third-party MetalLB"),(0,l.kt)("td",{parentName:"tr",align:null},"Limited NGINX or third-party Ingress*")))),(0,l.kt)("p",null,"*"," Services can be exposed through a single ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/exposing-tcp-udp-services/"},"globally managed config-map.")),(0,l.kt)("h2",{id:"layer-7-load-balancer"},"Layer-7 Load Balancer"),(0,l.kt)("p",null,"Layer-7 load balancer (or the ingress controller) supports host and path-based load balancing and SSL termination. Layer-7 load balancer only forwards HTTP and HTTPS traffic and therefore they listen on ports 80 and 443 only. Cloud providers such as Amazon and Google support layer-7 load balancer. In addition, RKE clusters deploys the Nginx Ingress Controller."),(0,l.kt)("h3",{id:"support-for-layer-7-load-balancing"},"Support for Layer-7 Load Balancing"),(0,l.kt)("p",null,"Support for layer-7 load balancer varies based on the underlying cloud provider."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Cluster Deployment"),(0,l.kt)("th",{parentName:"tr",align:null},"Layer-7 Load Balancer Support"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Amazon EKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported by AWS cloud provider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google GKE"),(0,l.kt)("td",{parentName:"tr",align:null},"Supported by GKE cloud provider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Azure AKS"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RKE on EC2"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RKE on DigitalOcean"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RKE on vSphere"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RKE on Custom Hosts",(0,l.kt)("br",null),"(e.g. bare-metal servers)"),(0,l.kt)("td",{parentName:"tr",align:null},"Nginx Ingress Controller")))),(0,l.kt)("h3",{id:"host-names-in-layer-7-load-balancer"},"Host Names in Layer-7 Load Balancer"),(0,l.kt)("p",null,"Some cloud-managed layer-7 load balancers (such as the ALB ingress controller on AWS) expose DNS addresses for ingress rules. You need to map (via CNAME) your domain name to the DNS address generated by the layer-7 load balancer."),(0,l.kt)("p",null,"Other layer-7 load balancers, such as the Google Load Balancer or Nginx Ingress Controller, directly expose one or more IP addresses. Google Load Balancer provides a single routable IP address. Nginx Ingress Controller exposes the external IP of all nodes that run the Nginx Ingress Controller. You can do either of the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Configure your own DNS to map (via A records) your domain name to the IP addresses exposes by the Layer-7 load balancer."),(0,l.kt)("li",{parentName:"ol"},"Ask Rancher to generate an sslip.io host name for your ingress rule. Rancher will take one of your exposed IPs, say a.b.c.d, and generate a host name ",(0,l.kt)("inlineCode",{parentName:"li"},"<ingressname>.<namespace>.a.b.c.d.sslip.io"),".")),(0,l.kt)("p",null,"The benefit of using sslip.io is that you obtain a working entrypoint URL immediately after you create the ingress rule. Setting up your own domain name, on the other hand, requires you to configure DNS servers and wait for DNS to propagate."),(0,l.kt)("h2",{id:"related-links"},"Related Links"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/"},"Create an External Load Balancer"))))}g.isMDXComponent=!0}}]);