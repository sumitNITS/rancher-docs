"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14950],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||c[d]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45564:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"FAQ"},s=void 0,i={unversionedId:"faq",id:"version-2.0-2.4/faq",title:"FAQ",description:"This FAQ is a work in progress designed to answers the questions our users most frequently ask about Rancher v2.x.",source:"@site/versioned_docs/version-2.0-2.4/faq.md",sourceDirName:".",slug:"/faq",permalink:"/v2.0-v2.4/faq",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/faq.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Notifiers",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/notifiers"},next:{title:"Installing and Configuring kubectl",permalink:"/v2.0-v2.4/faq/install-and-configure-kubectl"}},l={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This FAQ is a work in progress designed to answers the questions our users most frequently ask about Rancher v2.x."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/faq/technical-items"},"Technical FAQ"),", for frequently asked technical questions."),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Does Rancher v2.x support Docker Swarm and Mesos as environment types?")),(0,o.kt)("p",null,"When creating an environment in Rancher v2.x, Swarm and Mesos will no longer be standard options you can select. However, both Swarm and Mesos will continue to be available as Catalog applications you can deploy. It was a tough decision to make but, in the end, it came down to adoption. For example, out of more than 15,000 clusters, only about 200 or so are running Swarm."),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Is it possible to manage Azure Kubernetes Services with Rancher v2.x?")),(0,o.kt)("p",null,"Yes."),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Does Rancher support Windows?")),(0,o.kt)("p",null,"As of Rancher 2.3.0, we support Windows Server 1809 containers. For details on how to set up a cluster with Windows worker nodes, refer to the section on ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/use-windows-clusters"},"configuring custom clusters for Windows.")),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Does Rancher support Istio?")),(0,o.kt)("p",null,"As of Rancher 2.3.0, we support ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/istio"},"Istio.")),(0,o.kt)("p",null,'Furthermore, Istio is implemented in our micro-PaaS "Rio", which works on Rancher 2.x along with any CNCF compliant Kubernetes cluster. You can read more about it ',(0,o.kt)("a",{parentName:"p",href:"https://rio.io/"},"here")),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Will Rancher v2.x support Hashicorp's Vault for storing secrets?")),(0,o.kt)("p",null,"Secrets management is on our roadmap but we haven't assigned it to a specific release yet."),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Does Rancher v2.x support RKT containers as well?")),(0,o.kt)("p",null,"At this time, we only support Docker."),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Does Rancher v2.x support Calico, Contiv, Contrail, Flannel, Weave net, etc., for embedded and imported Kubernetes?")),(0,o.kt)("p",null,"Out-of-the-box, Rancher provides the following CNI network providers for Kubernetes clusters: Canal, Flannel, Calico and Weave (Weave is available as of v2.2.0).  Always refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"Rancher Support Matrix")," for details about what is officially supported."),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Are you planning on supporting Traefik for existing setups?")),(0,o.kt)("p",null,"We don't currently plan on providing embedded Traefik support, but we're still exploring load-balancing approaches."),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Can I import OpenShift Kubernetes clusters into v2.x?")),(0,o.kt)("p",null,"Our goal is to run any upstream Kubernetes clusters. Therefore, Rancher v2.x should work with OpenShift, but we haven't tested it yet."),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Are you going to integrate Longhorn?")),(0,o.kt)("p",null,"Yes. Longhorn was on a bit of a hiatus while we were working on v2.0. We plan to re-engage on the project."))}c.isMDXComponent=!0}}]);