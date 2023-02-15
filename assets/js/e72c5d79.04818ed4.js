"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[27845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Enable Monitoring"},i=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",id:"version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",title:"Enable Monitoring",description:"As an administrator or cluster owner, you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/enable-monitoring.md",tags:[],version:"2.6",lastUpdatedAt:1670549188,formattedLastUpdatedAt:"Dec 9, 2022",frontMatter:{title:"Enable Monitoring"},sidebar:"tutorialSidebar",previous:{title:"Monitoring Guides",permalink:"/v2.6/pages-for-subheaders/monitoring-alerting-guides"},next:{title:"Uninstall Monitoring",permalink:"/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/uninstall-monitoring"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Install the Monitoring Application",id:"install-the-monitoring-application",level:2},{value:"Enable Monitoring for use without SSL",id:"enable-monitoring-for-use-without-ssl",level:3},{value:"Enable Monitoring for use with SSL",id:"enable-monitoring-for-use-with-ssl",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=c("Tabs"),m=c("TabItem"),d={toc:p};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"As an ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"administrator")," or ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"cluster owner"),", you can configure Rancher to deploy Prometheus to monitor your Kubernetes cluster."),(0,a.kt)("p",null,"This page describes how to enable monitoring and alerting within a cluster using the new monitoring application."),(0,a.kt)("p",null,"You can enable monitoring with or without SSL."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure that you are allowing traffic on port 9796 for each of your nodes because Prometheus will scrape metrics from here."),(0,a.kt)("li",{parentName:"ul"},"Make sure your cluster fulfills the resource requirements. The cluster should have at least 1950Mi memory available, 2700m CPU, and 50Gi storage. A breakdown of the resource limits and requests is ",(0,a.kt)("a",{parentName:"li",href:"/v2.6/reference-guides/monitoring-v2-configuration/helm-chart-options#configuring-resource-limits-and-requests"},"here.")),(0,a.kt)("li",{parentName:"ul"},"When installing monitoring on an RKE cluster using RancherOS or Flatcar Linux nodes, change the etcd node certificate directory to ",(0,a.kt)("inlineCode",{parentName:"li"},"/opt/rke/etc/kubernetes/ssl"),"."),(0,a.kt)("li",{parentName:"ul"},"For clusters provisioned with the RKE CLI and the address is set to a hostname instead of an IP address, set ",(0,a.kt)("inlineCode",{parentName:"li"},"rkeEtcd.clients.useLocalhost")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," during the Values configuration step of the installation. The YAML snippet will look like the following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"rkeEtcd:\n  clients:\n    useLocalhost: true\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you want to set up Alertmanager, Grafana or Ingress, it has to be done with the settings on the Helm chart deployment. It's problematic to create Ingress outside the deployment.")),(0,a.kt)("p",null,"#Setting Resource Limits and Requests"),(0,a.kt)("p",null,"The resource requests and limits can be configured when installing ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-monitoring"),".  To configure Prometheus resources from the Rancher UI, click ",(0,a.kt)("strong",{parentName:"p"},"Apps & Marketplace > Monitoring")," (Rancher before v2.6.5) or ",(0,a.kt)("strong",{parentName:"p"},"Apps > Monitoring")," (Rancher v2.6.5+) in the upper left corner."),(0,a.kt)("p",null,"For more information about the default limits, see ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/monitoring-v2-configuration/helm-chart-options#configuring-resource-limits-and-requests"},"this page.")),(0,a.kt)("h2",{id:"install-the-monitoring-application"},"Install the Monitoring Application"),(0,a.kt)("h3",{id:"enable-monitoring-for-use-without-ssl"},"Enable Monitoring for use without SSL"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Go to the cluster that you created and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cluster Tools")," (bottom left corner)."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Install")," by Monitoring."),(0,a.kt)("li",{parentName:"ol"},"Optional: Customize requests, limits and more for Alerting, Prometheus, and Grafana in the Values step. For help, refer to the ",(0,a.kt)("a",{parentName:"li",href:"/v2.6/reference-guides/monitoring-v2-configuration/helm-chart-options"},"configuration reference."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."),(0,a.kt)("h3",{id:"enable-monitoring-for-use-with-ssl"},"Enable Monitoring for use with SSL"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(m,{value:"Rancher v2.6.5+",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the steps on ",(0,a.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"this page")," to create a secret in order for SSL to be used for alerts.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The secret should be created in the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace. If it doesn't exist, create it first."),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"ca"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"cert"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," files to the secret.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to enable monitoring for use with SSL and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Apps > Charts"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Install")," or ",(0,a.kt)("strong",{parentName:"li"},"Update"),", depending on whether you have already installed Monitoring."),(0,a.kt)("li",{parentName:"ol"},"Check the box for ",(0,a.kt)("strong",{parentName:"li"},"Customize Helm options before install")," and click ",(0,a.kt)("strong",{parentName:"li"},"Next"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Alerting"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Additional Secrets")," field, add the secrets created earlier."))),(0,a.kt)(m,{value:"Rancher before v2.6.5",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the steps on ",(0,a.kt)("a",{parentName:"li",href:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"this page")," to create a secret in order for SSL to be used for alerts.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The secret should be created in the ",(0,a.kt)("inlineCode",{parentName:"li"},"cattle-monitoring-system")," namespace. If it doesn't exist, create it first."),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"ca"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"cert"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"key")," files to the secret.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster where you want to enable monitoring for use with SSL and click ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Apps & Marketplace > Charts"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Monitoring"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Install")," or ",(0,a.kt)("strong",{parentName:"li"},"Update"),", depending on whether you have already installed Monitoring."),(0,a.kt)("li",{parentName:"ol"},"Check the box for ",(0,a.kt)("strong",{parentName:"li"},"Customize Helm options before install")," and click ",(0,a.kt)("strong",{parentName:"li"},"Next"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Alerting"),"."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Additional Secrets")," field, add the secrets created earlier.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Result:")," The monitoring app is deployed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," namespace."),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager#creating-receivers-in-the-rancher-ui"},"creating a receiver,")," SSL-enabled receivers such as email or webhook will have a ",(0,a.kt)("strong",{parentName:"p"},"SSL")," section with fields for ",(0,a.kt)("strong",{parentName:"p"},"CA File Path"),", ",(0,a.kt)("strong",{parentName:"p"},"Cert File Path"),", and ",(0,a.kt)("strong",{parentName:"p"},"Key File Path"),". Fill in these fields with the paths to each of ",(0,a.kt)("inlineCode",{parentName:"p"},"ca"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"cert"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),". The path will be of the form ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/name-of-file-in-secret"),"."),(0,a.kt)("p",null,"For example, if you created a secret with these key-value pairs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"ca.crt=`base64-content`\ncert.pem=`base64-content`\nkey.pfx=`base64-content`\n")),(0,a.kt)("p",null,"Then ",(0,a.kt)("strong",{parentName:"p"},"Cert File Path")," would be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/alertmanager/secrets/cert.pem"),"."))}g.isMDXComponent=!0}}]);