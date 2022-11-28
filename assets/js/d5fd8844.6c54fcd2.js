"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[53198],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:e},p),{},{components:n})):r.createElement(d,a({ref:e},p))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60909:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={title:"Additional Steps for Installing Istio on an RKE2 Cluster"},c=void 0,l={unversionedId:"integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",id:"integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",title:"Additional Steps for Installing Istio on an RKE2 Cluster",description:"When installing or upgrading the Istio Helm chart through Apps & Marketplace,",source:"@site/docs/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md",sourceDirName:"integrations-in-rancher/istio/configuration-options",slug:"/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",permalink:"/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/istio/configuration-options/install-istio-on-rke2-cluster.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"10/25/2022",frontMatter:{title:"Additional Steps for Installing Istio on an RKE2 Cluster"},sidebar:"tutorialSidebar",previous:{title:"Selectors and Scrape Configs",permalink:"/integrations-in-rancher/istio/configuration-options/selectors-and-scrape-configurations"},next:{title:"Additional Steps for Project Network Isolation",permalink:"/integrations-in-rancher/istio/configuration-options/project-network-isolation"}},p={},u=[],f={toc:u};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When installing or upgrading the Istio Helm chart through ",(0,o.kt)("strong",{parentName:"p"},"Apps & Marketplace,")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you are installing the chart, click ",(0,o.kt)("strong",{parentName:"p"},"Customize Helm options before install")," and click ",(0,o.kt)("strong",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will see options for configuring the Istio Helm chart. On the ",(0,o.kt)("strong",{parentName:"p"},"Components")," tab, check the box next to ",(0,o.kt)("strong",{parentName:"p"},"Enabled CNI"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Add a custom overlay file specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"cniBinDir")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cniConfDir"),". For more information on these options, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/setup/additional-setup/cni/#helm-chart-parameters"},"Istio documentation.")," An example is below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nspec:\n  components:\n    cni:\n      enabled: true\n      k8s:\n        overlays:\n        - apiVersion: "apps/v1"\n          kind: "DaemonSet"\n          name: "istio-cni-node"\n          patches:\n          - path: spec.template.spec.containers.[name:install-cni].securityContext.privileged\n            value: true\n  values:\n    cni:\n      image: rancher/mirrored-istio-install-cni:1.9.3\n      excludeNamespaces:\n        - istio-system\n        - kube-system\n      logLevel: info\n      cniBinDir: /opt/cni/bin\n      cniConfDir: /etc/cni/net.d\n')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Now you should be able to utilize Istio as desired, including sidecar injection and monitoring via Kiali."))}m.isMDXComponent=!0}}]);