"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[47674],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35255:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"Encrypting HTTP Communication",description:"Learn how to add an SSL (Secure Sockets Layer) certificate or TLS (Transport Layer Security) certificate to either a project, a namespace, or both, so that you can add it to deployments",weight:3060,aliases:["/rancher/v2.0-v2.4/en/tasks/projects/add-ssl-certificates/","/rancher/v2.0-v2.4/en/k8s-in-rancher/certificates"]},s=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",id:"version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",title:"Encrypting HTTP Communication",description:"Learn how to add an SSL (Secure Sockets Layer) certificate or TLS (Transport Layer Security) certificate to either a project, a namespace, or both, so that you can add it to deployments",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Encrypting HTTP Communication",description:"Learn how to add an SSL (Secure Sockets Layer) certificate or TLS (Transport Layer Security) certificate to either a project, a namespace, or both, so that you can add it to deployments",weight:3060,aliases:["/rancher/v2.0-v2.4/en/tasks/projects/add-ssl-certificates/","/rancher/v2.0-v2.4/en/k8s-in-rancher/certificates"]},sidebar:"tutorialSidebar",previous:{title:"Service Discovery",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"},next:{title:"ConfigMaps",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"}},u={},l=[{value:"What&#39;s Next?",id:"whats-next",level:2}],d={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you create an ingress within Rancher/Kubernetes, you must provide it with a secret that includes a TLS private key and certificate, which are used to encrypt and decrypt communications that come through the ingress. You can make certificates available for ingress use by navigating to its project or namespace, and then uploading the certificate. You can then add the certificate to the ingress deployment."),(0,o.kt)("p",null,"Add SSL certificates to either projects, namespaces, or both. A project scoped certificate will be available in all its namespaces."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")," You must have a TLS private key and certificate available to upload.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the ",(0,o.kt)("strong",{parentName:"p"},"Global")," view, select the project where you want to deploy your ingress.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From the main menu, select ",(0,o.kt)("strong",{parentName:"p"},"Resources > Secrets > Certificates"),". Click ",(0,o.kt)("strong",{parentName:"p"},"Add Certificate"),". (For Rancher before v2.3, click ",(0,o.kt)("strong",{parentName:"p"},"Resources > Certificates."),")")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter a ",(0,o.kt)("strong",{parentName:"p"},"Name")," for the certificate."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Kubernetes classifies SSL certificates as ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/"},"secrets"),", and no two secrets in a project or namespace can have duplicate names. Therefore, to prevent conflicts, your SSL certificate must have a unique name among the other certificates, registries, and secrets within your project/workspace."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select the ",(0,o.kt)("strong",{parentName:"p"},"Scope")," of the certificate."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Available to all namespaces in this project:")," The certificate is available for any deployment in any namespaces in the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Available to a single namespace:")," The certificate is only available for the deployments in one namespace. If you choose this option, select a ",(0,o.kt)("strong",{parentName:"p"},"Namespace")," from the drop-down list or click ",(0,o.kt)("strong",{parentName:"p"},"Add to a new namespace")," to add the certificate to a namespace you create on the fly.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From ",(0,o.kt)("strong",{parentName:"p"},"Private Key"),", either copy and paste your certificate's private key into the text box (include the header and footer), or click ",(0,o.kt)("strong",{parentName:"p"},"Read from a file")," to browse to the private key on your file system. If possible, we recommend using ",(0,o.kt)("strong",{parentName:"p"},"Read from a file")," to reduce likelihood of error."),(0,o.kt)("p",{parentName:"li"},"Private key files end with an extension of ",(0,o.kt)("inlineCode",{parentName:"p"},".key"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From ",(0,o.kt)("strong",{parentName:"p"},"Certificate"),", either copy and paste your certificate into the text box (include the header and footer), or click ",(0,o.kt)("strong",{parentName:"p"},"Read from a file")," to browse to the certificate on your file system. If possible, we recommend using ",(0,o.kt)("strong",{parentName:"p"},"Read from a file")," to reduce likelihood of error."),(0,o.kt)("p",{parentName:"li"},"Certificate files end with an extension of ",(0,o.kt)("inlineCode",{parentName:"p"},".crt"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Your certificate is added to the project or namespace. You can now add it to deployments."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you added an SSL certificate to the project, the certificate is available for deployments created in any project namespace."),(0,o.kt)("li",{parentName:"ul"},"If you added an SSL certificate to a namespace, the certificate is available only for deployments in that namespace."),(0,o.kt)("li",{parentName:"ul"},"Your certificate is added to the ",(0,o.kt)("strong",{parentName:"li"},"Resources > Secrets > Certificates")," view. (For Rancher before v2.3, it is added to ",(0,o.kt)("strong",{parentName:"li"},"Resources > Certificates."),")")),(0,o.kt)("h2",{id:"whats-next"},"What's Next?"),(0,o.kt)("p",null,"Now you can add the certificate when launching an ingress within the current project or namespace. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/load-balancer-and-ingress-controller/add-ingresses"},"Adding Ingress"),"."))}m.isMDXComponent=!0}}]);