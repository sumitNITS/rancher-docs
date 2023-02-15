"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6446],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),m=u(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||i;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},81779:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u914d\u7f6e Okta (SAML)"},o=void 0,l={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml",id:"version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml",title:"\u914d\u7f6e Okta (SAML)",description:"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 Okta Identity Provider (IdP) \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u7528\u6237\u4f7f\u7528 IdP \u51ed\u8bc1\u767b\u5f55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml",permalink:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-okta-saml.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u914d\u7f6e Okta (SAML)"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e PingIdentity (SAML)",permalink:"/zh/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/authentication-config/configure-pingidentity"},next:{title:"\u914d\u7f6e OpenLDAP",permalink:"/zh/v2.6/pages-for-subheaders/configure-openldap"}},p={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"\u5728 Rancher \u4e2d\u914d\u7f6e Okta",id:"\u5728-rancher-\u4e2d\u914d\u7f6e-okta",level:2}],d={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 Okta Identity Provider (IdP) \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u7528\u6237\u4f7f\u7528 IdP \u51ed\u8bc1\u767b\u5f55\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Okta \u96c6\u6210\u4ec5\u652f\u6301\u670d\u52a1\u63d0\u4f9b\u5546\u53d1\u8d77\u7684\u767b\u5f55\u3002")),(0,r.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u5728 Okta \u4e2d\uff0c\u4f7f\u7528\u4ee5\u4e0b\u8bbe\u7f6e\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 SAML \u5e94\u7528\u3002\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.okta.com/standards/SAML/setting_up_a_saml_application_in_okta"},"Okta \u6587\u6863"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8bbe\u7f6e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Single Sign on URL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/acs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Audience URI (SP Entity ID)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"https://yourRancherHostURL/v1-saml/okta/saml/metadata"))))),(0,r.kt)("h2",{id:"\u5728-rancher-\u4e2d\u914d\u7f6e-okta"},"\u5728 Rancher \u4e2d\u914d\u7f6e Okta"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u8ba4\u8bc1"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Okta"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u586b\u5199",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e Okta \u8d26\u53f7"),"\u8868\u5355\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u63cf\u8ff0\u4e86\u5982\u4f55\u5c06 Okta \u5c5e\u6027\u4ece\u5c5e\u6027\u8bed\u53e5\u6620\u5c04\u5230 Rancher \u4e2d\u7684\u5b57\u6bb5\uff1a"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u540d\u79f0\u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u8bed\u53e5\u4e2d\u5305\u542b\u7528\u6237\u663e\u793a\u540d\u79f0\u7684\u5c5e\u6027\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d\u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u8bed\u53e5\u4e2d\u5305\u542b\u7528\u6237\u540d/\u7ed9\u5b9a\u540d\u79f0\u7684\u5c5e\u6027\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UID \u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u8bed\u53e5\u4e2d\u6bcf\u4e2a\u7528\u6237\u552f\u4e00\u7684\u5c5e\u6027\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u7ec4\u5b57\u6bb5"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ec4\u5c5e\u6027\u8bed\u53e5\u4e2d\u516c\u5f00\u4f60\u7684\u7ec4\u7684\u5c5e\u6027\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rancher API \u4e3b\u673a"),(0,r.kt)("td",{parentName:"tr",align:null},"Rancher Server \u7684 URL\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u79c1\u94a5/\u8bc1\u4e66"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u94a5/\u8bc1\u4e66\u5bf9\uff0c\u7528\u4e8e\u65ad\u8a00\u52a0\u5bc6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5143\u6570\u636e XML"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f60\u5728\u5e94\u7528 ",(0,r.kt)("inlineCode",{parentName:"td"},"Sign On")," \u90e8\u5206\u4e2d\u627e\u5230\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"Identity Provider metadata")," \u6587\u4ef6\u3002")))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 openssl \u547d\u4ee4\u751f\u6210\u4e00\u4e2a\u5bc6\u94a5/\u8bc1\u4e66\u5bf9\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout myservice.key -out myservice.crt\n"))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b8c\u6210",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e Okta \u8d26\u53f7"),"\u8868\u5355\u540e\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"Rancher \u4f1a\u5c06\u4f60\u91cd\u5b9a\u5411\u5230 IdP \u767b\u5f55\u9875\u9762\u3002\u8f93\u5165\u4f7f\u7528 Okta IdP \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u51ed\u8bc1\uff0c\u6765\u9a8c\u8bc1\u4f60\u7684 Rancher Okta \u914d\u7f6e\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4ec0\u4e48\u90fd\u6ca1\u6709\u53d1\u751f\uff0c\u5f88\u53ef\u80fd\u662f\u56e0\u4e3a\u4f60\u7684\u6d4f\u89c8\u5668\u963b\u6b62\u4e86\u5f39\u51fa\u7a97\u53e3\u3002\u8bf7\u5728\u5f39\u51fa\u7a97\u53e3\u963b\u6b62\u7a0b\u5e8f\u4e2d\u7981\u7528 Rancher \u57df\uff0c\u5e76\u5728\u5176\u4ed6\u7c7b\u4f3c\u6269\u5c55\u4e2d\u5c06 Rancher \u5217\u5165\u767d\u540d\u5355\u3002")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 Rancher \u914d\u7f6e\u4e3a\u4f7f\u7528 Okta\u3002\u4f60\u7684\u7528\u6237\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 Okta \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002"),(0,r.kt)("admonition",{title:"SAML \u8eab\u4efd\u63d0\u4f9b\u5546\u6ce8\u610f\u4e8b\u9879",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"SAML \u534f\u8bae\u4e0d\u652f\u6301\u641c\u7d22\u6216\u67e5\u627e\u7528\u6237\u6216\u7ec4\u3002\u56e0\u6b64\uff0c\u5c06\u7528\u6237\u6216\u7ec4\u6dfb\u52a0\u5230 Rancher \u65f6\u4e0d\u4f1a\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7528\u6237\u65f6\uff0c\u5fc5\u987b\u6b63\u786e\u8f93\u5165\u786e\u5207\u7684\u7528\u6237 ID\uff08\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"UID")," \u5b57\u6bb5\uff09\u3002\u952e\u5165\u7528\u6237 ID \u65f6\uff0c\u5c06\u4e0d\u4f1a\u641c\u7d22\u53ef\u80fd\u5339\u914d\u7684\u5176\u4ed6\u7528\u6237 ID\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7ec4\u65f6\uff0c\u5fc5\u987b\u4ece\u6587\u672c\u6846\u65c1\u8fb9\u7684\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u7ec4\u3002Rancher \u5047\u5b9a\u6765\u81ea\u6587\u672c\u6846\u7684\u4efb\u4f55\u8f93\u5165\u90fd\u662f\u7528\u6237\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u7ec4\u4e0b\u62c9\u5217\u8868\u4ec5\u663e\u793a\u4f60\u6240\u5c5e\u7684\u7528\u6237\u7ec4\u3002\u5982\u679c\u4f60\u4e0d\u662f\u67d0\u4e2a\u7ec4\u7684\u6210\u5458\uff0c\u4f60\u5c06\u65e0\u6cd5\u6dfb\u52a0\u8be5\u7ec4\u3002"))))}c.isMDXComponent=!0}}]);