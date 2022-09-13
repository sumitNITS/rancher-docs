"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[30337],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},80016:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Adding a Sidecar",weight:3029},d=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",title:"Adding a Sidecar",description:"A sidecar is a container that extends or enhances the main container in a pod. The main container and the sidecar share a pod, and therefore share the same network space and storage. You can add sidecars to existing workloads by using the Add a Sidecar option.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar.md",tags:[],version:"current",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Adding a Sidecar",weight:3029},sidebar:"tutorialSidebar",previous:{title:"Upgrading Workloads",permalink:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"},next:{title:"The Horizontal Pod Autoscaler",permalink:"/pages-for-subheaders/horizontal-pod-autoscaler"}},l={},c=[{value:"Related Links",id:"related-links",level:2}],u={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"sidecar")," is a container that extends or enhances the main container in a pod. The main container and the sidecar share a pod, and therefore share the same network space and storage. You can add sidecars to existing workloads by using the ",(0,o.kt)("strong",{parentName:"p"},"Add a Sidecar")," option."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the cluster where you want to add a sidecar and click ",(0,o.kt)("strong",{parentName:"p"},"Explore"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,o.kt)("strong",{parentName:"p"},"Workload"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the workload that you want to extend. Select ",(0,o.kt)("strong",{parentName:"p"},"\u22ee > + Add Sidecar"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the sidecar.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"General")," section, select a sidecar type. This option determines if the sidecar container is deployed before or after the main container is deployed."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Standard Container:")),(0,o.kt)("p",{parentName:"li"},"  The sidecar container is deployed after the main container.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Init Container:")),(0,o.kt)("p",{parentName:"li"},"  The sidecar container is deployed before the main container.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Container Image")," field, enter the name of the container image that you want to deploy in support of the main container. During deployment, Rancher pulls this image from ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/explore/"},"Docker Hub"),". Enter the name exactly as it appears on Docker Hub.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the remaining options. You can read about them in ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploying Workloads"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Launch"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," The sidecar is deployed according to your parameters. Following its deployment, you can view the sidecar by selecting ",(0,o.kt)("strong",{parentName:"p"},"\u22ee icon (...) > Edit")," for the main deployment."),(0,o.kt)("h2",{id:"related-links"},"Related Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/"},"The Distributed System ToolKit: Patterns for Composite Containers"))))}m.isMDXComponent=!0}}]);