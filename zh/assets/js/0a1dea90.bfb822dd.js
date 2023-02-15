"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"\u5378\u8f7d Monitoring"},a=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",id:"version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",title:"\u5378\u8f7d Monitoring",description:"1. \u70b9\u51fb \u2630 > \u96c6\u7fa4\u7ba1\u7406\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring.md",tags:[],version:"2.6",lastUpdatedAt:1672712056,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{title:"\u5378\u8f7d Monitoring"},sidebar:"tutorialSidebar",previous:{title:"\u542f\u7528 Monitoring",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring"},next:{title:"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e Monitoring",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"}},s={},p=[],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=d("Tabs"),u=d("TabItem"),c={toc:p};function g(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(u,{value:"Rancher v2.6.5+",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Apps"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5df2\u5b89\u88c5\u7684\u5e94\u7528"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u5e76\u9009\u4e2d ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-monitoring-crd")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-monitoring"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u786e\u8ba4",(0,o.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002"))),(0,o.kt)(u,{value:"Rancher \u7248\u672c\u4f4e\u4e8e v2.6.5",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5df2\u5b89\u88c5\u7684\u5e94\u7528"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u5e76\u9009\u4e2d ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-monitoring-crd")," \u548c ",(0,o.kt)("inlineCode",{parentName:"li"},"rancher-monitoring"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u786e\u8ba4",(0,o.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5378\u8f7d ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),"\u3002"),(0,o.kt)("admonition",{title:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f\uff1a",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684 Monitoring V2 \u7248\u672c\u662f v9.4.203 \u6216\u66f4\u4f4e\u7248\u672c\uff0c\u5378\u8f7d Monitoring chart \u5c06\u540c\u65f6\u5220\u9664 cattle-dashboards \u547d\u540d\u7a7a\u95f4\uff0c\u6240\u6709\u6301\u4e45\u5316\u7684\u4eea\u8868\u677f\u5c06\u88ab\u5220\u9664\uff08\u9664\u975e\u547d\u540d\u7a7a\u95f4\u5e26\u6709\u6ce8\u91ca ",(0,o.kt)("inlineCode",{parentName:"p"},'helm.sh/resource-policy: "keep"'),"\uff09\u3002Monitoring V2 v14.5.100+ \u4f1a\u9ed8\u8ba4\u6dfb\u52a0\u6b64\u6ce8\u91ca\u3002\u4f46\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u4e0a\u5b89\u88c5\u4e86\u65e7\u7248\u672c\u7684 Monitoring Chart\uff0c\u4f60\u53ef\u4ee5\u5728\u5378\u8f7d\u5b83\u4e4b\u524d\u624b\u52a8\u5c06\u6ce8\u91ca\u5e94\u7528\u5230 cattle-dashboards \u547d\u540d\u7a7a\u95f4\u3002")))}g.isMDXComponent=!0}}]);