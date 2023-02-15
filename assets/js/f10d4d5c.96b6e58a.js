"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=u(r),d=s,g=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},20004:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const a={title:"User Settings"},i=void 0,o={unversionedId:"pages-for-subheaders/user-settings",id:"version-2.0-2.4/pages-for-subheaders/user-settings",title:"User Settings",description:"Within Rancher, each user has a number of settings associated with their login: personal preferences, API keys, etc. You can configure these settings by choosing from the User Settings menu. You can open this menu by clicking your avatar, located within the main menu.",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/user-settings.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/user-settings",permalink:"/v2.0-v2.4/pages-for-subheaders/user-settings",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/user-settings.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"User Settings"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes Concepts",permalink:"/v2.0-v2.4/reference-guides/kubernetes-concepts"},next:{title:"API Keys",permalink:"/v2.0-v2.4/reference-guides/user-settings/api-keys"}},c={},u=[],l={toc:u};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Within Rancher, each user has a number of settings associated with their login: personal preferences, API keys, etc. You can configure these settings by choosing from the ",(0,s.kt)("strong",{parentName:"p"},"User Settings")," menu. You can open this menu by clicking your avatar, located within the main menu."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"User Settings Menu",src:r(72411).Z,width:"288",height:"294"})),(0,s.kt)("p",null,"The available user settings are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/user-settings/api-keys"},"API & Keys"),": If you want to interact with Rancher programmatically, you need an API key. Follow the directions in this section to obtain a key."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/user-settings/manage-cloud-credentials"},"Cloud Credentials"),": Manage cloud credentials ",(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider#node-templates"},"used by node templates")," to ",(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"provision nodes for clusters"),". Note: Available as of v2.2.0."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/user-settings/manage-node-templates"},"Node Templates"),": Manage templates ",(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"used by Rancher to provision nodes for clusters"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/reference-guides/user-settings/user-preferences"},"Preferences"),": Sets superficial preferences for the Rancher UI."),(0,s.kt)("li",{parentName:"ul"},"Log Out: Ends your user session.")))}p.isMDXComponent=!0},72411:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/user-settings-cda0eec8ae28c8bdf1742e2c5367e3d8.png"}}]);