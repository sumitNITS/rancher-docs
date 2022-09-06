"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21210],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return h}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),h=o,v=d["".concat(a,".").concat(h)]||d[h]||l[h]||u;return t?n.createElement(v,i(i({ref:r},c),{},{components:t})):n.createElement(v,i({ref:r},c))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,i=new Array(u);i[0]=d;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<u;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96385:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l}});var n=t(87462),o=t(63366),u=(t(67294),t(3905)),i=["components"],s={title:"Setting up the vSphere Cloud Provider",weight:4,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/cloud-providers/vsphere/"]},a=void 0,p={unversionedId:"pages-for-subheaders/vsphere-cloud-provider",id:"version-2.5/pages-for-subheaders/vsphere-cloud-provider",title:"Setting up the vSphere Cloud Provider",description:"In this section, you'll learn how to set up a vSphere cloud provider for a Rancher managed RKE Kubernetes cluster in vSphere.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/vsphere-cloud-provider.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/vsphere-cloud-provider",permalink:"/v2.5/pages-for-subheaders/vsphere-cloud-provider",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/vsphere-cloud-provider.md",tags:[],version:"2.5",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Setting up the vSphere Cloud Provider",weight:4,aliases:["/rancher/v2.x/en/cluster-provisioning/rke-clusters/cloud-providers/vsphere/"]},sidebar:"tutorialSidebar",previous:{title:"Setting up the Google Compute Engine Cloud Provider",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/other-cloud-providers/google-compute-engine"},next:{title:"How to Configure In-tree vSphere Cloud Provider",permalink:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere"}},c={},l=[],d={toc:l};function h(e){var r=e.components,t=(0,o.Z)(e,i);return(0,u.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"In this section, you'll learn how to set up a vSphere cloud provider for a Rancher managed RKE Kubernetes cluster in vSphere."),(0,u.kt)("h1",{id:"in-tree-cloud-provider"},"In-tree Cloud Provider"),(0,u.kt)("p",null,"To use the in-tree vSphere cloud provider, you will need to use an RKE configuration option. For details, refer to ",(0,u.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-in-tree-vsphere"},"this page.")),(0,u.kt)("h1",{id:"out-of-tree-cloud-provider"},"Out-of-tree Cloud Provider"),(0,u.kt)("p",null,(0,u.kt)("em",{parentName:"p"},"Available as of v2.5+")),(0,u.kt)("p",null,"To set up the out-of-tree vSphere cloud provider, you will need to install Helm charts from the Rancher marketplace. For details, refer to ",(0,u.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/set-up-cloud-providers/vsphere/configure-out-of-tree-vsphere"},"this page.")))}h.isMDXComponent=!0}}]);