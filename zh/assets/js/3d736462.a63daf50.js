"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[53982],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"UI \u7ba1\u7406 Istio \u865a\u62df\u670d\u52a1\u548c\u76ee\u6807\u89c4\u5219"},u=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features",id:"how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features",title:"UI \u7ba1\u7406 Istio \u865a\u62df\u670d\u52a1\u548c\u76ee\u6807\u89c4\u5219",description:"\u6b64\u529f\u80fd\u53ef\u542f\u52a8\u4e00\u4e2a UI\uff0c\u7528\u4e8e\u7ba1\u7406 Istio \u7684\u6d41\u91cf\uff0c\u5176\u4e2d\u5305\u62ec\u521b\u5efa\u3001\u8bfb\u53d6\u3001\u66f4\u65b0\u548c\u5220\u9664\u865a\u62df\u670d\u52a1\uff08Virtual Service\uff09\u548c\u76ee\u6807\u89c4\u5219\uff08Destination Rule\uff09\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features.md",sourceDirName:"how-to-guides/advanced-user-guides/enable-experimental-features",slug:"/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features",permalink:"/zh/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"UI \u7ba1\u7406 Istio \u865a\u62df\u670d\u52a1\u548c\u76ee\u6807\u89c4\u5219"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u975e\u9ed8\u8ba4\u652f\u6301\u7684\u5b58\u50a8\u9a71\u52a8",permalink:"/zh/how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers"},next:{title:"\u6301\u7eed\u4ea4\u4ed8",permalink:"/zh/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery"}},p={},c=[{value:"\u529f\u80fd\u4ecb\u7ecd",id:"\u529f\u80fd\u4ecb\u7ecd",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6b64\u529f\u80fd\u53ef\u542f\u52a8\u4e00\u4e2a UI\uff0c\u7528\u4e8e\u7ba1\u7406 Istio \u7684\u6d41\u91cf\uff0c\u5176\u4e2d\u5305\u62ec\u521b\u5efa\u3001\u8bfb\u53d6\u3001\u66f4\u65b0\u548c\u5220\u9664\u865a\u62df\u670d\u52a1\uff08Virtual Service\uff09\u548c\u76ee\u6807\u89c4\u5219\uff08Destination Rule\uff09\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u542f\u7528\u6b64\u529f\u80fd\u5e76\u4e0d\u4f1a\u542f\u7528 Istio\u3002\u96c6\u7fa4\u7ba1\u7406\u5458\u9700\u8981",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/istio-setup-guide"},"\u4e3a\u96c6\u7fa4\u542f\u7528 Istio")," \u624d\u80fd\u4f7f\u7528\u8be5\u529f\u80fd\u3002")),(0,i.kt)("p",null,"\u5982\u9700\u542f\u7528\u6216\u7981\u7528\u6b64\u529f\u80fd\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/enable-experimental-features"},"\u542f\u7528\u5b9e\u9a8c\u529f\u80fd\u4e3b\u9875"),"\u4e2d\u7684\u8bf4\u660e\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u952e"),(0,i.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001"),(0,i.kt)("th",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9a8c\u529f\u80fd"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"GA"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.3.2")))),(0,i.kt)("h2",{id:"\u529f\u80fd\u4ecb\u7ecd"},"\u529f\u80fd\u4ecb\u7ecd"),(0,i.kt)("p",null,"Istio \u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u7684\u4e3b\u8981\u4f18\u52bf\u65f6\u5141\u8bb8\u52a8\u6001\u8bf7\u6c42\u8def\u7531\uff0c\u8fd9\u5bf9\u4e8e\u91d1\u4e1d\u96c0\u53d1\u5e03\uff0c\u84dd/\u7eff\u53d1\u5e03\u6216 A/B \u6d4b\u8bd5\u90fd\u975e\u5e38\u6709\u7528\u3002"),(0,i.kt)("p",null,"\u542f\u7528\u6b64\u529f\u80fd\u540e\uff0c\u4e00\u4e2a\u9875\u9762\u4f1a\u6253\u5f00\uff0c\u8ba9\u4f60\u901a\u8fc7 Rancher UI \u914d\u7f6e Istio \u7684\u67d0\u4e9b\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002\u5982\u679c\u4e0d\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6765\u4f7f\u7528 Istio \u7ba1\u7406\u6d41\u91cf\u3002"),(0,i.kt)("p",null,"\u6b64\u529f\u80fd\u4f1a\u542f\u7528\u4e24\u4e2a\u9009\u9879\u5361\uff0c\u4e00\u4e2a\u7528\u4e8e",(0,i.kt)("strong",{parentName:"p"},"\u865a\u62df\u670d\u52a1"),"\uff0c\u53e6\u4e00\u4e2a\u7528\u4e8e",(0,i.kt)("strong",{parentName:"p"},"\u76ee\u6807\u89c4\u5219"),"\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u865a\u62df\u670d\u52a1"),"\uff1a\u62e6\u622a\u5e76\u5c06\u6d41\u91cf\u91cd\u5b9a\u5411\u5230\u4f60\u7684 Kubernetes Service \u4e0a\u3002\u8fd9\u6837\uff0c\u4f60\u53ef\u4ee5\u5c06\u90e8\u5206\u8bf7\u6c42\u6d41\u91cf\u5b9a\u5411\u5230\u4e0d\u540c\u7684\u670d\u52a1\u4e0a\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u670d\u52a1\u6765\u5b9a\u4e49\u4e00\u7ec4\u8def\u7531\u89c4\u5219\uff0c\u7528\u4e8e\u4e3b\u673a\u5bfb\u5740\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/virtual-service/"},"Istio \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u76ee\u6807\u89c4\u5219"),"\uff1a\u4f5c\u4e3a\u552f\u4e00\u53ef\u4fe1\u6765\u6e90\uff0c\u8868\u660e\u54ea\u4e9b\u670d\u52a1\u7248\u672c\u53ef\u7528\u4e8e\u63a5\u6536\u865a\u62df\u670d\u52a1\u7684\u6d41\u91cf\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e9b\u8d44\u6e90\u6765\u5b9a\u4e49\u7b56\u7565\uff0c\u8fd9\u4e9b\u7b56\u7565\u9002\u7528\u4e8e\u8def\u7531\u53d1\u751f\u540e\u7528\u4e8e\u670d\u52a1\u7684\u6d41\u91cf\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/destination-rule"},"Istio \u5b98\u65b9\u6587\u6863"),"\u3002")),(0,i.kt)("p",null,"\u5982\u9700\u67e5\u770b\u9009\u9879\u5361\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u5b89\u88c5\u4e86 Istio \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb ",(0,i.kt)("strong",{parentName:"li"},"Istio"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f60\u5c06\u770b\u5230 ",(0,i.kt)("strong",{parentName:"li"},"Kiali")," \u548c ",(0,i.kt)("strong",{parentName:"li"},"Jaeger")," \u7684\u9009\u9879\u5361\u3002\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u4f60\u53ef\u67e5\u770b\u548c\u914d\u7f6e",(0,i.kt)("strong",{parentName:"li"},"\u865a\u62df\u670d\u52a1"),"\u548c",(0,i.kt)("strong",{parentName:"li"},"\u76ee\u6807\u89c4\u5219"),"\u3002")))}m.isMDXComponent=!0}}]);