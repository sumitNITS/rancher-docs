"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43063],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>v});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(t),v=a,d=h["".concat(i,".").concat(v)]||h[v]||l[v]||c;return t?n.createElement(d,s(s({ref:r},u),{},{components:t})):n.createElement(d,s({ref:r},u))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,s=new Array(c);s[0]=h;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<c;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},28643:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const c={title:"Rancher Server \u7684\u6700\u4f73\u5b9e\u8df5"},s=void 0,o={unversionedId:"pages-for-subheaders/rancher-server",id:"version-2.6/pages-for-subheaders/rancher-server",title:"Rancher Server \u7684\u6700\u4f73\u5b9e\u8df5",description:"\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u8ba9 Rancher \u7ba1\u7406\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684 Rancher Server \u8fd0\u884c\u5efa\u8bae\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/pages-for-subheaders/rancher-server.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-server",permalink:"/zh/v2.6/pages-for-subheaders/rancher-server",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/pages-for-subheaders/rancher-server.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"Rancher Server \u7684\u6700\u4f73\u5b9e\u8df5"},sidebar:"tutorialSidebar",previous:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh/v2.6/pages-for-subheaders/best-practices"},next:{title:"\u5728 vSphere \u73af\u5883\u4e2d\u5b89\u88c5 Rancher",permalink:"/zh/v2.6/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"}},i={},p=[{value:"\u63a8\u8350\u7684\u67b6\u6784\u548c\u57fa\u7840\u8bbe\u65bd",id:"\u63a8\u8350\u7684\u67b6\u6784\u548c\u57fa\u7840\u8bbe\u65bd",level:3},{value:"\u90e8\u7f72\u7b56\u7565",id:"\u90e8\u7f72\u7b56\u7565",level:3},{value:"\u5728 vSphere \u73af\u5883\u4e2d\u5b89\u88c5 Rancher",id:"\u5728-vsphere-\u73af\u5883\u4e2d\u5b89\u88c5-rancher",level:3}],u={toc:p};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6307\u5357\u4ecb\u7ecd\u4e86\u8ba9 Rancher \u7ba1\u7406\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684 Rancher Server \u8fd0\u884c\u5efa\u8bae\u3002"),(0,a.kt)("h3",{id:"\u63a8\u8350\u7684\u67b6\u6784\u548c\u57fa\u7840\u8bbe\u65bd"},"\u63a8\u8350\u7684\u67b6\u6784\u548c\u57fa\u7840\u8bbe\u65bd"),(0,a.kt)("p",null,"\u6709\u5173\u5728\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e0a\u8bbe\u7f6e Rancher Server \u7684\u901a\u7528\u5efa\u8bae\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/best-practices/rancher-server/tips-for-running-rancher"},"\u672c\u6307\u5357"),"\u3002"),(0,a.kt)("h3",{id:"\u90e8\u7f72\u7b56\u7565"},"\u90e8\u7f72\u7b56\u7565"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/best-practices/rancher-server/rancher-deployment-strategy"},"\u672c\u6307\u5357"),"\u65e8\u5728\u5e2e\u52a9\u4f60\u9009\u62e9\u90e8\u7f72\u7b56\u7565\uff08\u533a\u57df\u90e8\u7f72/\u4e2d\u5fc3\u8f90\u5c04\u578b\u90e8\u7f72\uff09\uff0c\u6765\u8ba9 Rancher Server \u66f4\u597d\u5730\u7ba1\u7406\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u3002"),(0,a.kt)("h3",{id:"\u5728-vsphere-\u73af\u5883\u4e2d\u5b89\u88c5-rancher"},"\u5728 vSphere \u73af\u5883\u4e2d\u5b89\u88c5 Rancher"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},"\u672c\u6307\u5357"),"\u4ecb\u7ecd\u4e86\u5728 vSphere \u73af\u5883\u4e2d\u5b89\u88c5 Rancher \u7684\u53c2\u8003\u67b6\u6784\uff0c\u4ee5\u53ca VMware \u8bb0\u5f55\u7684\u6807\u51c6 vSphere \u6700\u4f73\u5b9e\u8df5\u3002"))}l.isMDXComponent=!0}}]);