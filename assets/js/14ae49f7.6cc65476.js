"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[40860],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=i,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27551:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),o=["components"],s={title:"Pod Security Policies",weight:1135,aliases:["/rancher/v2.5/en/concepts/global-configuration/pod-security-policies/","/rancher/v2.5/en/tasks/global-configuration/pod-security-policies/","/rancher/v2.5/en/tasks/clusters/adding-a-pod-security-policy/","/rancher/v2.x/en/admin-settings/pod-security-policies/"]},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",id:"version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",title:"Pod Security Policies",description:"Pod Security Policies (or PSPs) are objects that control security-sensitive aspects of pod specification (like root privileges).",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies.md",tags:[],version:"2.5",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Pod Security Policies",weight:1135,aliases:["/rancher/v2.5/en/concepts/global-configuration/pod-security-policies/","/rancher/v2.5/en/tasks/global-configuration/pod-security-policies/","/rancher/v2.5/en/tasks/clusters/adding-a-pod-security-policy/","/rancher/v2.x/en/admin-settings/pod-security-policies/"]},sidebar:"tutorialSidebar",previous:{title:"Example Scenarios",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases"},next:{title:"Configuring a Global Default Private Registry",permalink:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/global-default-private-registry"}},u={},p=[{value:"Restricted",id:"restricted",level:3},{value:"Unrestricted",id:"unrestricted",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Creating PSPs in the Rancher UI",id:"creating-psps-in-the-rancher-ui",level:3}],d={toc:p};function h(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Pod Security Policies")," (or PSPs) are objects that control security-sensitive aspects of pod specification (like root privileges)."),(0,a.kt)("p",null,"If a pod does not meet the conditions specified in the PSP, Kubernetes will not allow it to start, and Rancher will display an error message of ",(0,a.kt)("inlineCode",{parentName:"p"},"Pod <NAME> is forbidden: unable to validate..."),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-psps-work"},"How PSPs Work")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#default-psps"},"Default PSPs"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#restricted"},"Restricted")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#unrestricted"},"Unrestricted")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-psps"},"Creating PSPs"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#requirements"},"Requirements")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#creating-psps-in-the-rancher-ui"},"Creating PSPs in the Rancher UI")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuration"},"Configuration"))),(0,a.kt)("h1",{id:"how-psps-work"},"How PSPs Work"),(0,a.kt)("p",null,"You can assign PSPs at the cluster or project level."),(0,a.kt)("p",null,"PSPs work through inheritance:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By default, PSPs assigned to a cluster are inherited by its projects, as well as any namespaces added to those projects."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Exception:")," Namespaces that are not assigned to projects do not inherit PSPs, regardless of whether the PSP is assigned to a cluster or project. Because these namespaces have no PSPs, workload deployments to these namespaces will fail, which is the default Kubernetes behavior."),(0,a.kt)("li",{parentName:"ul"},"You can override the default PSP by assigning a different PSP directly to the project.")),(0,a.kt)("p",null,"Any workloads that are already running in a cluster or project before a PSP is assigned will not be checked if it complies with the PSP. Workloads would need to be cloned or upgraded to see if they pass the PSP."),(0,a.kt)("p",null,"Read more about Pod Security Policies in the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"Kubernetes Documentation"),"."),(0,a.kt)("h1",{id:"default-psps"},"Default PSPs"),(0,a.kt)("p",null,"Rancher ships with two default Pod Security Policies (PSPs): the ",(0,a.kt)("inlineCode",{parentName:"p"},"restricted")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"unrestricted")," policies."),(0,a.kt)("h3",{id:"restricted"},"Restricted"),(0,a.kt)("p",null,"This policy is based on the Kubernetes ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kubernetes/website/master/content/en/examples/policy/restricted-psp.yaml"},"example restricted policy"),". It significantly restricts what types of pods can be deployed to a cluster or project. This policy:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prevents pods from running as a privileged user and prevents escalation of privileges."),(0,a.kt)("li",{parentName:"ul"},"Validates that server-required security mechanisms are in place (such as restricting what volumes can be mounted to only the core volume types and preventing root supplemental groups from being added.")),(0,a.kt)("h3",{id:"unrestricted"},"Unrestricted"),(0,a.kt)("p",null,"This policy is equivalent to running Kubernetes with the PSP controller disabled. It has no restrictions on what pods can be deployed into a cluster or project."),(0,a.kt)("h1",{id:"creating-psps"},"Creating PSPs"),(0,a.kt)("p",null,"Using Rancher, you can create a Pod Security Policy using our GUI rather than creating a YAML file."),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"Rancher can only assign PSPs for clusters that are ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"launched using RKE.")),(0,a.kt)("p",null,"You must enable PSPs at the cluster level before you can assign them to a project. This can be configured by ",(0,a.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/cluster-configuration"},"editing the cluster.")),(0,a.kt)("p",null,"It is a best practice to set PSP at the cluster level."),(0,a.kt)("p",null,"We recommend adding PSPs during cluster and project creation instead of adding it to an existing one."),(0,a.kt)("h3",{id:"creating-psps-in-the-rancher-ui"},"Creating PSPs in the Rancher UI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the ",(0,a.kt)("strong",{parentName:"p"},"Global")," view, select ",(0,a.kt)("strong",{parentName:"p"},"Security")," > ",(0,a.kt)("strong",{parentName:"p"},"Pod Security Policies")," from the main menu. Then click ",(0,a.kt)("strong",{parentName:"p"},"Add Policy"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step Result:")," The ",(0,a.kt)("strong",{parentName:"p"},"Add Policy")," form opens.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Name the policy.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Complete each section of the form. Refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"Kubernetes documentation")," for more information on what each policy does."))),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The Kubernetes documentation on PSPs is ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/"},"here.")))}h.isMDXComponent=!0}}]);