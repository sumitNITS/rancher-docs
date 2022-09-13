"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1441],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(c,".").concat(d)]||m[d]||l[d]||s;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},67395:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"Namespaces",weight:2520},c=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-namespaces",id:"how-to-guides/advanced-user-guides/manage-projects/manage-namespaces",title:"Namespaces",description:"Within Rancher, you can further divide projects into different namespaces, which are virtual clusters within a project backed by a physical cluster. Should you require another level of organization beyond projects and the default namespace, you can use multiple namespaces to isolate applications and resources.",source:"@site/docs/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces",permalink:"/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces.md",tags:[],version:"current",lastUpdatedAt:1663100404,formattedLastUpdatedAt:"9/13/2022",frontMatter:{title:"Namespaces",weight:2520},sidebar:"tutorialSidebar",previous:{title:"Adding Users to Projects",permalink:"/how-to-guides/advanced-user-guides/manage-projects/add-users-to-projects"},next:{title:"Rancher's CI/CD Pipelines",permalink:"/how-to-guides/advanced-user-guides/manage-projects/ci-cd-pipelines"}},u={},l=[{value:"Creating Namespaces",id:"creating-namespaces",level:3},{value:"Moving Namespaces to Another Project",id:"moving-namespaces-to-another-project",level:3},{value:"Editing Namespace Resource Quotas",id:"editing-namespace-resource-quotas",level:3}],m={toc:l};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Within Rancher, you can further divide projects into different ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"namespaces"),", which are virtual clusters within a project backed by a physical cluster. Should you require another level of organization beyond projects and the ",(0,s.kt)("inlineCode",{parentName:"p"},"default")," namespace, you can use multiple namespaces to isolate applications and resources."),(0,s.kt)("p",null,"Although you assign resources at the project level so that each namespace in the project can use them, you can override this inheritance by assigning resources explicitly to a namespace."),(0,s.kt)("p",null,"Resources that you can assign directly to namespaces include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pages-for-subheaders/workloads-and-pods"},"Workloads")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pages-for-subheaders/load-balancer-and-ingress-controller"},"Load Balancers/Ingress")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/create-services"},"Service Discovery Records")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/pages-for-subheaders/create-kubernetes-persistent-storage"},"Persistent Volume Claims")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"Certificates")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMaps")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries"},"Registries")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/secrets"},"Secrets"))),(0,s.kt)("p",null,"To manage permissions in a vanilla Kubernetes cluster, cluster admins configure role-based access policies for each namespace. With Rancher, user permissions are assigned on the project level instead, and permissions are automatically inherited by any namespace owned by the particular project."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"If you create a namespace with ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl"),", it may be unusable because ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl")," doesn't require your new namespace to be scoped within a project that you have access to. If your permissions are restricted to the project level, it is better to ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-projects/manage-namespaces"},"create a namespace through Rancher")," to ensure that you will have permission to access the namespace."))),(0,s.kt)("h3",{id:"creating-namespaces"},"Creating Namespaces"),(0,s.kt)("p",null,"Create a new namespace to isolate apps and resources in a project."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"When working with project resources that you can assign to a namespace (i.e., ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"workloads"),", ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"certificates"),", ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/new-user-guides/kubernetes-resources-setup/configmaps"},"ConfigMaps"),", etc.) you can create a namespace on the fly."))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"On the ",(0,s.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster where you want to create a namespace and click ",(0,s.kt)("strong",{parentName:"p"},"Explore"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Cluster > Projects/Namespaces"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Go to the project where you want to add a namespace and click ",(0,s.kt)("strong",{parentName:"p"},"Create Namespace"),". Alternately, go to ",(0,s.kt)("strong",{parentName:"p"},"Not in a Project")," to create a namespace not associated with a project.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Optional:")," If your project has ",(0,s.kt)("a",{parentName:"p",href:"/pages-for-subheaders/manage-project-resource-quotas"},"Resource Quotas")," in effect, you can override the default resource ",(0,s.kt)("strong",{parentName:"p"},"Limits")," (which places a cap on the resources that the namespace can consume).")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Enter a ",(0,s.kt)("strong",{parentName:"p"},"Name")," and then click ",(0,s.kt)("strong",{parentName:"p"},"Create"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," Your namespace is added to the project. You can begin assigning cluster resources to the namespace."),(0,s.kt)("h3",{id:"moving-namespaces-to-another-project"},"Moving Namespaces to Another Project"),(0,s.kt)("p",null,"Cluster admins and members may occasionally need to move a namespace to another project, such as when you want a different team to start using the application."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,s.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"On the ",(0,s.kt)("strong",{parentName:"p"},"Clusters")," page, go to the cluster where you want to move a namespace and click ",(0,s.kt)("strong",{parentName:"p"},"Explore"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Cluster > Projects/Namespaces"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Go to the namespace you want to move and click ",(0,s.kt)("strong",{parentName:"p"},"\u22ee > Move"),".")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Select the namespace(s) that you want to move to a different project. Then click ",(0,s.kt)("strong",{parentName:"p"},"Move"),". You can move multiple namespaces at one."),(0,s.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"Don't move the namespaces in the ",(0,s.kt)("inlineCode",{parentName:"li"},"System")," project. Moving these namespaces can adversely affect cluster networking."),(0,s.kt)("li",{parentName:"ul"},"You cannot move a namespace into a project that already has a ",(0,s.kt)("a",{parentName:"li",href:"/pages-for-subheaders/manage-project-resource-quotas"},"resource quota"),"configured."),(0,s.kt)("li",{parentName:"ul"},"If you move a namespace from a project that has a quota set to a project with no quota set, the quota is removed from the namespace."))))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Choose a new project for the new namespace and then click ",(0,s.kt)("strong",{parentName:"p"},"Move"),". Alternatively, you can remove the namespace from all projects by selecting ",(0,s.kt)("strong",{parentName:"p"},"None"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Result:")," Your namespace is moved to a different project (or is unattached from all projects). If any project resources are attached to the namespace, the namespace releases them and then attached resources from the new project."),(0,s.kt)("h3",{id:"editing-namespace-resource-quotas"},"Editing Namespace Resource Quotas"),(0,s.kt)("p",null,"You can always override the namespace default limit to provide a specific namespace with access to more (or less) project resources."),(0,s.kt)("p",null,"For more information, see how to ",(0,s.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/override-default-limit-in-namespaces"},"edit namespace resource quotas"),"."))}d.isMDXComponent=!0}}]);