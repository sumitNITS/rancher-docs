"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86062],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),g=r,v=p["".concat(s,".").concat(g)]||p[g]||u[g]||o;return t?a.createElement(v,i(i({ref:n},c),{},{components:t})):a.createElement(v,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85008:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"NGINX Configuration",weight:277,aliases:["/rancher/v2.0-v2.4/en/installation/ha-server-install-external-lb/nginx/","/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/layer-7-lb/nginx","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/layer-7-lb/nginx/"]},s=void 0,d={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/nginx",id:"version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/nginx",title:"NGINX Configuration",description:"#### Important: RKE add-on install is only supported up to Rancher v2.0.8",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/nginx.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/nginx",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/nginx",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/nginx.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"NGINX Configuration",weight:277,aliases:["/rancher/v2.0-v2.4/en/installation/ha-server-install-external-lb/nginx/","/rancher/v2.0-v2.4/en/installation/options/helm2/rke-add-on/layer-7-lb/nginx","/rancher/v2.x/en/installation/resources/advanced/helm2/rke-add-on/layer-7-lb/nginx/"]},sidebar:"tutorialSidebar",previous:{title:"Amazon ALB Configuration",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/layer-7-lb/alb"},next:{title:"HTTP Proxy Configuration",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/rke-add-on/proxy"}},c={},u=[{value:"Install NGINX",id:"install-nginx",level:2},{value:"Create NGINX Configuration",id:"create-nginx-configuration",level:2},{value:"Run NGINX",id:"run-nginx",level:2},{value:"Browse to Rancher UI",id:"browse-to-rancher-ui",level:2}],p={toc:u};function g(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("h4",{parentName:"blockquote",id:"important-rke-add-on-install-is-only-supported-up-to-rancher-v208"},(0,o.kt)("strong",{parentName:"h4"},"Important: RKE add-on install is only supported up to Rancher v2.0.8")),(0,o.kt)("p",{parentName:"blockquote"},"Please use the Rancher Helm chart to install Rancher on a Kubernetes cluster. For details, see the ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/resources/choose-a-rancher-version"},"Kubernetes Install "),"."),(0,o.kt)("p",{parentName:"blockquote"},"If you are currently using the RKE add-on install method, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/migrating-from-rke-add-on"},"Migrating from a Kubernetes Install with an RKE Add-on")," for details on how to move to using the helm chart.")),(0,o.kt)("h2",{id:"install-nginx"},"Install NGINX"),(0,o.kt)("p",null,"Start by installing NGINX on your load balancer host. NGINX has packages available for all known operating systems."),(0,o.kt)("p",null,"For help installing NGINX, refer to their ",(0,o.kt)("a",{parentName:"p",href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/install/"},"install documentation"),"."),(0,o.kt)("h2",{id:"create-nginx-configuration"},"Create NGINX Configuration"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/helm2/helm-rancher/chart-options#example-nginx-config"},"Example NGINX config"),"."),(0,o.kt)("h2",{id:"run-nginx"},"Run NGINX"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reload or restart NGINX"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# Reload NGINX\nnginx -s reload\n\n# Restart NGINX\n# Depending on your Linux distribution\nservice nginx restart\nsystemctl restart nginx\n")))),(0,o.kt)("h2",{id:"browse-to-rancher-ui"},"Browse to Rancher UI"),(0,o.kt)("p",null,"You should now be to able to browse to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://FQDN"),"."))}g.isMDXComponent=!0}}]);