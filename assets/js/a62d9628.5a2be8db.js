"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[16501],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(n),p=r,g=l["".concat(u,".").concat(p)]||l[p]||m[p]||i;return n?o.createElement(g,a(a({ref:t},d),{},{components:n})):o.createElement(g,a({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}l.displayName="MDXCreateElement"},15965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Prometheus Configuration"},u=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",id:"version-2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",title:"Prometheus Configuration",description:"It is usually not necessary to directly edit the Prometheus custom resource because the monitoring application automatically updates it based on changes to ServiceMonitors and PodMonitors.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",slug:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"Prometheus Configuration"},sidebar:"tutorialSidebar",previous:{title:"Alertmanager Configuration",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager"},next:{title:"Configuring PrometheusRules",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheusrules"}},d={},m=[{value:"About the Prometheus Custom Resource",id:"about-the-prometheus-custom-resource",level:2}],l={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is usually not necessary to directly edit the Prometheus custom resource because the monitoring application automatically updates it based on changes to ServiceMonitors and PodMonitors."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section assumes familiarity with how monitoring components work together. For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"this section.")))),(0,i.kt)("h2",{id:"about-the-prometheus-custom-resource"},"About the Prometheus Custom Resource"),(0,i.kt)("p",null,"The Prometheus CR defines a desired Prometheus deployment. The Prometheus Operator observes the Prometheus CR. When the CR changes, the Prometheus Operator creates ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus-rancher-monitoring-prometheus"),", a Prometheus deployment based on the CR configuration."),(0,i.kt)("p",null,"The Prometheus CR specifies details such as rules and what Alertmanagers are connected to Prometheus. Rancher builds this CR for you."),(0,i.kt)("p",null,"Monitoring V2 only supports one Prometheus per cluster. However, you might want to edit the Prometheus CR if you want to limit monitoring to certain namespaces."))}p.isMDXComponent=!0}}]);