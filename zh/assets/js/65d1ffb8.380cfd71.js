"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51569],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(k,i(i({ref:t},l),{},{components:a})):r.createElement(k,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71062:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],p={title:"\u5907\u4efd Rancher"},c=void 0,s={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher",id:"version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher",title:"\u5907\u4efd Rancher",description:"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u5907\u4efd\u8fd0\u884c\u5728\u4efb\u4f55 Kubernetes \u96c6\u7fa4\u4e0a\u7684 Rancher\u3002\u8981\u5907\u4efd\u901a\u8fc7 Docker \u5b89\u88c5\u7684 Rancher\uff0c\u8bf7\u53c2\u89c1\u5355\u8282\u70b9\u5907\u4efd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022/11/14",frontMatter:{title:"\u5907\u4efd Rancher"},sidebar:"tutorialSidebar",previous:{title:"\u5907\u4efd\u548c\u707e\u96be\u6062\u590d",permalink:"/zh/v2.6/pages-for-subheaders/backup-restore-and-disaster-recovery"},next:{title:"\u8fd8\u539f Rancher",permalink:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"}},l={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u5b89\u88c5 <code>rancher backup</code> operator",id:"1-\u5b89\u88c5-rancher-backup-operator",level:3},{value:"2. \u6267\u884c\u5907\u4efd",id:"2-\u6267\u884c\u5907\u4efd",level:3}],d={toc:u};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u4f60\u5c06\u5b66\u4e60\u5982\u4f55\u5907\u4efd\u8fd0\u884c\u5728\u4efb\u4f55 Kubernetes \u96c6\u7fa4\u4e0a\u7684 Rancher\u3002\u8981\u5907\u4efd\u901a\u8fc7 Docker \u5b89\u88c5\u7684 Rancher\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"\u5355\u8282\u70b9\u5907\u4efd"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"backup-restore")," operator \u9700\u8981\u5b89\u88c5\u5728 local \u96c6\u7fa4\u4e0a\uff0c\u5e76\u4e14\u53ea\u5bf9 Rancher \u5e94\u7528\u8fdb\u884c\u5907\u4efd\u3002\u5907\u4efd\u548c\u6062\u590d\u64cd\u4f5c\u4ec5\u5728\u672c\u5730 Kubernetes \u96c6\u7fa4\u4e2d\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u8bf7\u77e5\u6089\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator \u7684 2.x.x \u7248\u672c\u7528\u4e8e Rancher v2.6.x\u3002"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5f53\u628a\u5907\u4efd\u6062\u590d\u5230\u4e00\u4e2a\u65b0\u7684 Rancher \u8bbe\u7f6e\u4e2d\u65f6\uff0c\u65b0\u8bbe\u7f6e\u7684\u7248\u672c\u5e94\u8be5\u4e0e\u5907\u4efd\u7684\u7248\u672c\u76f8\u540c\u3002\u5728\u6062\u590d\u5907\u4efd\u65f6\u8fd8\u5e94\u8003\u8651 Kubernetes \u7684\u7248\u672c\uff0c\u56e0\u4e3a\u96c6\u7fa4\u4e2d\u652f\u6301\u7684 apiVersion \u548c\u5907\u4efd\u6587\u4ef6\u4e2d\u7684 apiVersion \u53ef\u80fd\u4e0d\u540c\u3002"))),(0,o.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,o.kt)("p",null,"Rancher \u5fc5\u987b\u662f 2.5.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster#2-%E4%BD%BF%E7%94%A8-restore-%E8%87%AA%E5%AE%9A%E4%B9%89%E8%B5%84%E6%BA%90%E6%9D%A5%E8%BF%98%E5%8E%9F%E5%A4%87%E4%BB%BD"},"\u6b64\u5904"),"\u83b7\u53d6\u5728 Rancher 2.6.3 \u4e2d\u5c06\u73b0\u6709\u5907\u4efd\u6587\u4ef6\u6062\u590d\u5230 v1.22 \u96c6\u7fa4\u7684\u5e2e\u52a9\u3002"),(0,o.kt)("h3",{id:"1-\u5b89\u88c5-rancher-backup-operator"},"1. \u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"h3"},"rancher backup")," operator"),(0,o.kt)("p",null,"\u5907\u4efd\u5b58\u50a8\u4f4d\u7f6e\u662f operator \u7ea7\u522b\u7684\u8bbe\u7f6e\uff0c\u6240\u4ee5\u9700\u8981\u5728\u5b89\u88c5\u6216\u5347\u7ea7 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher backup")," \u5e94\u7528\u65f6\u8fdb\u884c\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u5907\u4efd\u6587\u4ef6\u7684\u683c\u5f0f\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},".tar.gz"),"\u3002\u8fd9\u4e9b\u6587\u4ef6\u53ef\u4ee5\u63a8\u9001\u5230 S3 \u6216 Minio\uff0c\u4e5f\u53ef\u4ee5\u5b58\u50a8\u5728\u4e00\u4e2a\u6301\u4e45\u5377\u4e2d\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728",(0,o.kt)("strong",{parentName:"li"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230 ",(0,o.kt)("inlineCode",{parentName:"li"},"local")," \u96c6\u7fa4\u5e76\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002Rancher Server \u8fd0\u884c\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"local")," \u96c6\u7fa4\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > Chart"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Rancher \u5907\u4efd"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u9ed8\u8ba4\u5b58\u50a8\u4f4d\u7f6e\u3002\u5982\u9700\u83b7\u53d6\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"li",href:"/zh/v2.6/reference-guides/backup-restore-configuration/storage-configuration"},"\u5b58\u50a8\u914d\u7f6e"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5b89\u88c5"),"\u3002")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"backup-restore")," operator \u6267\u884c\u6062\u590d\u540e\uff0cFleet \u4e2d\u4f1a\u51fa\u73b0\u4e00\u4e2a\u5df2\u77e5\u95ee\u9898\uff1a\u7528\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"clientSecretName")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"helmSecretName")," \u7684\u5bc6\u6587\u4e0d\u5305\u542b\u5728 Fleet \u7684 Git \u4ed3\u5e93\u4e2d\u3002\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#%E6%95%85%E9%9A%9C%E6%8E%92%E9%99%A4"},"\u6b64\u5904"),"\u83b7\u5f97\u89e3\u51b3\u65b9\u6cd5\u3002"))),(0,o.kt)("h3",{id:"2-\u6267\u884c\u5907\u4efd"},"2. \u6267\u884c\u5907\u4efd"),(0,o.kt)("p",null,"\u8981\u6267\u884c\u5907\u4efd\uff0c\u5fc5\u987b\u521b\u5efa Backup \u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728",(0,o.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," \u96c6\u7fa4\u5e76\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Rancher \u5907\u4efd > \u5907\u4efd"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8868\u5355\u6216 YAML \u7f16\u8f91\u5668\u521b\u5efa Backup\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8981\u4f7f\u7528\u8be5\u8868\u5355\u914d\u7f6e Backup \u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\uff0c\u7136\u540e\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/backup-configuration"},"\u914d\u7f6e\u53c2\u8003"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/examples#%E5%A4%87%E4%BB%BD"},"\u793a\u4f8b"),"\u8fdb\u884c\u64cd\u4f5c\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8981\u4f7f\u7528 YAML \u7f16\u8f91\u5668\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa > \u4f7f\u7528 YAML \u6587\u4ef6\u521b\u5efa"),"\u3002\u8f93\u5165 Backup YAML\u3002\u8fd9\u4e2a\u793a\u4f8b Backup \u81ea\u5b9a\u4e49\u8d44\u6e90\u5c06\u5728 S3 \u4e2d\u521b\u5efa\u52a0\u5bc6\u7684\u5b9a\u671f\u5907\u4efd\u3002\u8fd9\u4e2a\u5e94\u7528\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"credentialSecretNamespace")," \u503c\u6765\u786e\u5b9a\u5728\u54ea\u91cc\u5bfb\u627e S3 \u5907\u4efd\u7684\u5bc6\u6587\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: resources.cattle.io/v1\nkind: Backup\nmetadata:\n  name: s3-recurring-backup\nspec:\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: rancher-backups\n      folder: rancher\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n  resourceSetName: rancher-resource-set\n  encryptionConfigSecretName: encryptionconfig\n  schedule: "@every 1h"\n  retentionCount: 10\n')),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4f7f\u7528 YAML \u7f16\u8f91\u5668\u521b\u5efa Backup \u8d44\u6e90\u65f6\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"resourceSetName")," \u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-resource-set"),"\u3002"))),(0,o.kt)("p",{parentName:"li"},"\u5982\u9700\u83b7\u5f97\u914d\u7f6e Backup \u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/backup-configuration"},"\u914d\u7f6e\u53c2\u8003"),"\u548c",(0,o.kt)("a",{parentName:"p",href:"/zh/v2.6/reference-guides/backup-restore-configuration/examples#%E5%A4%87%E4%BB%BD"},"\u793a\u4f8b"),"\u3002"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator \u4e0d\u4fdd\u5b58 ",(0,o.kt)("inlineCode",{parentName:"p"},"EncryptionConfiguration")," \u6587\u4ef6\u3002\u521b\u5efa\u52a0\u5bc6\u5907\u4efd\u65f6\uff0c\u5fc5\u987b\u4fdd\u5b58 ",(0,o.kt)("inlineCode",{parentName:"p"},"EncryptionConfiguration")," \u6587\u4ef6\u7684\u5185\u5bb9\uff0c\u800c\u4e14\u5728\u4f7f\u7528\u5907\u4efd\u8fd8\u539f\u65f6\u5fc5\u987b\u4f7f\u7528\u540c\u4e00\u4e2a\u6587\u4ef6\u3002")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5907\u4efd\u6587\u4ef6\u521b\u5efa\u5728 Backup \u81ea\u5b9a\u4e49\u8d44\u6e90\u4e2d\u914d\u7f6e\u7684\u5b58\u50a8\u4f4d\u7f6e\u4e2d\u3002\u6267\u884c\u8fd8\u539f\u65f6\u4f7f\u7528\u8be5\u6587\u4ef6\u7684\u540d\u79f0\u3002"))}m.isMDXComponent=!0}}]);