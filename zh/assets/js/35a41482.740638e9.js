"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[23354],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(r),m=a,h=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<l;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4355:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),c=["components"],o={title:"Rancher \u5f03\u7528\u7684\u529f\u80fd"},i=void 0,p={unversionedId:"faq/deprecated-features-in-v2.5",id:"version-2.6/faq/deprecated-features-in-v2.5",title:"Rancher \u5f03\u7528\u7684\u529f\u80fd",description:"Rancher \u7684\u5f03\u7528\u7b56\u7565\u662f\u4ec0\u4e48\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/faq/deprecated-features-in-v2.5.md",sourceDirName:"faq",slug:"/faq/deprecated-features-in-v2.5",permalink:"/zh/v2.6/faq/deprecated-features-in-v2.5",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/faq/deprecated-features-in-v2.5.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"Rancher \u5f03\u7528\u7684\u529f\u80fd"},sidebar:"tutorialSidebar",previous:{title:"\u4e00\u822c\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",permalink:"/zh/v2.6/faq/general-faq"},next:{title:"\u5b89\u88c5\u548c\u914d\u7f6e kubectl",permalink:"/zh/v2.6/faq/install-and-configure-kubectl"}},u={},d=[{value:"Rancher \u7684\u5f03\u7528\u7b56\u7565\u662f\u4ec0\u4e48\uff1f",id:"rancher-\u7684\u5f03\u7528\u7b56\u7565\u662f\u4ec0\u4e48",level:3},{value:"\u5728\u54ea\u91cc\u53ef\u4ee5\u627e\u5230 Rancher \u5df2\u5f03\u7528\u7684\u529f\u80fd\uff1f",id:"\u5728\u54ea\u91cc\u53ef\u4ee5\u627e\u5230-rancher-\u5df2\u5f03\u7528\u7684\u529f\u80fd",level:3},{value:"\u5982\u679c\u67d0\u4e2a\u529f\u80fd\u6807\u8bb0\u4e3a\u5f03\u7528\uff0c\u6211\u8981\u600e\u4e48\u505a\uff1f",id:"\u5982\u679c\u67d0\u4e2a\u529f\u80fd\u6807\u8bb0\u4e3a\u5f03\u7528\u6211\u8981\u600e\u4e48\u505a",level:3}],s={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"rancher-\u7684\u5f03\u7528\u7b56\u7565\u662f\u4ec0\u4e48"},"Rancher \u7684\u5f03\u7528\u7b56\u7565\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("p",null,"\u6211\u4eec\u5728\u652f\u6301",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms"},"\u670d\u52a1\u6761\u6b3e"),"\u4e2d\u53d1\u5e03\u4e86\u5b98\u65b9\u5f03\u7528\u7b56\u7565\u3002"),(0,l.kt)("h3",{id:"\u5728\u54ea\u91cc\u53ef\u4ee5\u627e\u5230-rancher-\u5df2\u5f03\u7528\u7684\u529f\u80fd"},"\u5728\u54ea\u91cc\u53ef\u4ee5\u627e\u5230 Rancher \u5df2\u5f03\u7528\u7684\u529f\u80fd\uff1f"),(0,l.kt)("p",null,"Rancher \u4f1a\u5728 GitHub \u4e0a\u7684",(0,l.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/releases"},"\u53d1\u884c\u8bf4\u660e"),"\u4e2d\u516c\u5e03\u5df2\u5f03\u7528\u7684\u529f\u80fd\u3002\u8bf7\u53c2\u9605\u4ee5\u4e0b\u8865\u4e01\u7248\u672c\u4e86\u89e3\u5df2\u5f03\u7528\u7684\u529f\u80fd\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u8865\u4e01\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u65e5\u671f"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.0"},"2.6.0")),(0,l.kt)("td",{parentName:"tr",align:null},"2021 \u5e74 8 \u6708 31 \u65e5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.1"},"2.6.1")),(0,l.kt)("td",{parentName:"tr",align:null},"2021 \u5e74 10 \u6708 11 \u65e5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.2"},"2.6.2")),(0,l.kt)("td",{parentName:"tr",align:null},"2021 \u5e74 10 \u6708 19 \u65e5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.3"},"2.6.3")),(0,l.kt)("td",{parentName:"tr",align:null},"2021 \u5e74 12 \u6708 21 \u65e5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.4"},"2.6.4")),(0,l.kt)("td",{parentName:"tr",align:null},"2022 \u5e74 3 \u6708 31 \u65e5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.5"},"2.6.5")),(0,l.kt)("td",{parentName:"tr",align:null},"2022 \u5e74 5 \u6708 12 \u65e5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/rancher/releases/tag/v2.6.6"},"2.6.6")),(0,l.kt)("td",{parentName:"tr",align:null},"2022 \u5e74 6 \u6708 30 \u65e5")))),(0,l.kt)("h3",{id:"\u5982\u679c\u67d0\u4e2a\u529f\u80fd\u6807\u8bb0\u4e3a\u5f03\u7528\u6211\u8981\u600e\u4e48\u505a"},"\u5982\u679c\u67d0\u4e2a\u529f\u80fd\u6807\u8bb0\u4e3a\u5f03\u7528\uff0c\u6211\u8981\u600e\u4e48\u505a\uff1f"),(0,l.kt)("p",null,'\u5982\u679c\u67d0\u4e2a\u53d1\u884c\u7248\u5c06\u67d0\u529f\u80fd\u6807\u8bb0\u4e3a"Deprecated"\uff08\u5df2\u5f03\u7528\uff09\uff0c\u8be5\u529f\u80fd\u4ecd\u7136\u53ef\u7528\u5e76\u53d7\u652f\u6301\uff0c\u4ece\u800c\u5141\u8bb8\u7528\u6237\u6309\u7167\u5e38\u89c4\u6d41\u7a0b\u8fdb\u884c\u5347\u7ea7\u3002\u5728\u5347\u7ea7\u5230\u8be5\u529f\u80fd\u88ab\u6807\u8bb0\u4e3a"\u5df2\u5220\u9664"\u7684\u53d1\u884c\u7248\u524d\uff0c\u7528\u6237/\u7ba1\u7406\u5458\u5e94\u8be5\u8ba1\u5212\u5265\u79bb\u8be5\u529f\u80fd\u3002\u5bf9\u4e8e\u65b0\u90e8\u7f72\uff0c\u6211\u4eec\u5efa\u8bae\u4e0d\u8981\u4f7f\u7528\u5df2\u5f03\u7528\u7684\u529f\u80fd\u3002'))}m.isMDXComponent=!0}}]);