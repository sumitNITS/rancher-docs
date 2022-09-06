"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1014],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},13205:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=a(87462),r=a(63366),s=(a(67294),a(3905)),o=["components"],i={title:"RKE Templates",weight:7010},l=void 0,u={unversionedId:"pages-for-subheaders/about-rke1-templates",id:"version-2.0-2.4/pages-for-subheaders/about-rke1-templates",title:"RKE Templates",description:"Available as of Rancher v2.3.0",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/about-rke1-templates.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/about-rke1-templates",permalink:"/v2.0-v2.4/pages-for-subheaders/about-rke1-templates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/about-rke1-templates.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"RKE Templates",weight:7010},sidebar:"tutorialSidebar",previous:{title:"Node Drivers",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers"},next:{title:"Template Creator Permissions",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions"}},p={},c=[{value:"Add-ons",id:"add-ons",level:3}],d={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of Rancher v2.3.0")),(0,s.kt)("p",null,"RKE templates are designed to allow DevOps and security teams to standardize and simplify the creation of Kubernetes clusters."),(0,s.kt)("p",null,"RKE is the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"Rancher Kubernetes Engine,")," which is the tool that Rancher uses to provision Kubernetes clusters."),(0,s.kt)("p",null,"With Kubernetes increasing in popularity, there is a trend toward managing a larger number of smaller clusters. When you want to create many clusters, it\u2019s more important to manage them consistently. Multi-cluster management comes with challenges to enforcing security and add-on configurations that need to be standardized before turning clusters over to end users."),(0,s.kt)("p",null,"RKE templates help standardize these configurations. Regardless of whether clusters are created with the Rancher UI, the Rancher API, or an automated process, Rancher will guarantee that every cluster it provisions from an RKE template is uniform and consistent in the way it is produced."),(0,s.kt)("p",null,"Admins control which cluster options can be changed by end users. RKE templates can also be shared with specific users and groups, so that admins can create different RKE templates for different sets of users."),(0,s.kt)("p",null,"If a cluster was created with an RKE template, you can't change it to a different RKE template. You can only update the cluster to a new revision of the same template."),(0,s.kt)("p",null,"As of Rancher v2.3.3, you can ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#converting-an-existing-cluster-to-use-an-rke-template"},"save the configuration of an existing cluster as an RKE template.")," Then the cluster's settings can only be changed if the template is updated. The new template can also be used to launch new clusters."),(0,s.kt)("p",null,"The core features of RKE templates allow DevOps and security teams to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Standardize cluster configuration and ensure that Rancher-provisioned clusters are created following best practices"),(0,s.kt)("li",{parentName:"ul"},"Prevent less technical users from making uninformed choices when provisioning clusters"),(0,s.kt)("li",{parentName:"ul"},"Share different templates with different sets of users and groups"),(0,s.kt)("li",{parentName:"ul"},"Delegate ownership of templates to users who are trusted to make changes to them"),(0,s.kt)("li",{parentName:"ul"},"Control which users can create templates"),(0,s.kt)("li",{parentName:"ul"},"Require users to create clusters from a template")),(0,s.kt)("h1",{id:"configurable-settings"},"Configurable Settings"),(0,s.kt)("p",null,"RKE templates can be created in the Rancher UI or defined in YAML format. They can define all the same parameters that can be specified when you use Rancher to provision custom nodes or nodes from an infrastructure provider:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Cloud provider options"),(0,s.kt)("li",{parentName:"ul"},"Pod security options"),(0,s.kt)("li",{parentName:"ul"},"Network providers"),(0,s.kt)("li",{parentName:"ul"},"Ingress controllers"),(0,s.kt)("li",{parentName:"ul"},"Network security configuration"),(0,s.kt)("li",{parentName:"ul"},"Network plugins"),(0,s.kt)("li",{parentName:"ul"},"Private registry URL and credentials"),(0,s.kt)("li",{parentName:"ul"},"Add-ons"),(0,s.kt)("li",{parentName:"ul"},"Kubernetes options, including configurations for Kubernetes components such as kube-api, kube-controller, kubelet, and services")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"#add-ons"},"add-on section")," of an RKE template is especially powerful because it allows a wide range of customization options."),(0,s.kt)("h1",{id:"scope-of-rke-templates"},"Scope of RKE Templates"),(0,s.kt)("p",null,"RKE templates are supported for Rancher-provisioned clusters. The templates can be used to provision custom clusters or clusters that are launched by an infrastructure provider."),(0,s.kt)("p",null,"RKE templates are for defining Kubernetes and Rancher settings. Node templates are responsible for configuring nodes. For tips on how to use RKE templates in conjunction with hardware, refer to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure"},"RKE Templates and Hardware"),"."),(0,s.kt)("p",null,"RKE templates can be created from scratch to pre-define cluster configuration. They can be applied to launch new clusters, or templates can also be exported from existing running clusters."),(0,s.kt)("p",null,"As of v2.3.3, the settings of an existing cluster can be ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#converting-an-existing-cluster-to-use-an-rke-template"},"saved as an RKE template.")," This creates a new template and binds the cluster settings to the template, so that the cluster can only be upgraded if the ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#updating-a-template"},"template is updated"),", and the cluster is upgraded to ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#upgrading-a-cluster-to-use-a-new-template-revision"},"use a newer version of the template.")," The new template can also be used to create new clusters."),(0,s.kt)("h1",{id:"example-scenarios"},"Example Scenarios"),(0,s.kt)("p",null,"When an organization has both basic and advanced Rancher users, administrators might want to give the advanced users more options for cluster creation, while restricting the options for basic users."),(0,s.kt)("p",null,"These ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases"},"example scenarios")," describe how an organization could use templates to standardize cluster creation."),(0,s.kt)("p",null,"Some of the example scenarios include the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Enforcing templates:")," Administrators might want to ",(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases#enforcing-a-template-setting-for-everyone"},"enforce one or more template settings for everyone")," if they want all new Rancher-provisioned clusters to have those settings."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Sharing different templates with different users:")," Administrators might give ",(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases#templates-for-basic-and-advanced-users"},"different templates to basic and advanced users,")," so that basic users can have more restricted options and advanced users can use more discretion when creating clusters."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Updating template settings:")," If an organization's security and DevOps teams decide to embed best practices into the required settings for new clusters, those best practices could change over time. If the best practices change, ",(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases#updating-templates-and-clusters-created-with-them"},"a template can be updated to a new revision")," and clusters created from the template can ",(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates#upgrading-a-cluster-to-use-a-new-template-revision"},"upgrade to the new version")," of the template."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Sharing ownership of a template:")," When a template owner no longer wants to maintain a template, or wants to share ownership of the template, this scenario describes how ",(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/example-use-cases#allowing-other-users-to-control-and-share-a-template"},"template ownership can be shared."))),(0,s.kt)("h1",{id:"template-management"},"Template Management"),(0,s.kt)("p",null,"When you create an RKE template, it is available in the Rancher UI from the ",(0,s.kt)("strong",{parentName:"p"},"Global")," view under ",(0,s.kt)("strong",{parentName:"p"},"Tools > RKE Templates.")," When you create a template, you become the template owner, which gives you permission to revise and share the template. You can share the RKE templates with specific users or groups, and you can also make it public."),(0,s.kt)("p",null,"Administrators can turn on template enforcement to require users to always use RKE templates when creating a cluster. This allows administrators to guarantee that Rancher always provisions clusters with specific settings."),(0,s.kt)("p",null,"RKE template updates are handled through a revision system. If you want to change or update a template, you create a new revision of the template. Then a cluster that was created with the older version of the template can be upgraded to the new template revision."),(0,s.kt)("p",null,"In an RKE template, settings can be restricted to what the template owner chooses, or they can be open for the end user to select the value. The difference is indicated by the ",(0,s.kt)("strong",{parentName:"p"},"Allow User Override")," toggle over each setting in the Rancher UI when the template is created."),(0,s.kt)("p",null,"For the settings that cannot be overridden, the end user will not be able to directly edit them. In order for a user to get different options of these settings, an RKE template owner would need to create a new revision of the RKE template, which would allow the user to upgrade and change that option."),(0,s.kt)("p",null,"The documents in this section explain the details of RKE template management:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/creator-permissions"},"Getting permission to create templates")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/manage-rke1-templates"},"Creating and revising templates")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/enforce-templates#requiring-new-clusters-to-use-an-rke-template"},"Enforcing template settings")," "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/override-template-settings"},"Overriding template settings")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates#sharing-templates-with-specific-users-or-groups"},"Sharing templates with cluster creators")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates#sharing-ownership-of-templates"},"Sharing ownership of a template"))),(0,s.kt)("p",null,"An ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rke1-template-example-yaml"},"example YAML configuration file for a template")," is provided for reference."),(0,s.kt)("h1",{id:"applying-templates"},"Applying Templates"),(0,s.kt)("p",null,"You can ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#creating-a-cluster-from-an-rke-template"},"create a cluster from a template")," that you created, or from a template that has been ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/access-or-share-templates"},"shared with you.")),(0,s.kt)("p",null,"If the RKE template owner creates a new revision of the template, you can ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#updating-a-cluster-created-with-an-rke-template"},"upgrade your cluster to that revision.")),(0,s.kt)("p",null,"RKE templates can be created from scratch to pre-define cluster configuration. They can be applied to launch new clusters, or templates can also be exported from existing running clusters."),(0,s.kt)("p",null,"As of Rancher v2.3.3, you can ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/apply-templates#converting-an-existing-cluster-to-use-an-rke-template"},"save the configuration of an existing cluster as an RKE template.")," Then the cluster's settings can only be changed if the template is updated."),(0,s.kt)("h1",{id:"standardizing-hardware"},"Standardizing Hardware"),(0,s.kt)("p",null,"RKE templates are designed to standardize Kubernetes and Rancher settings. If you want to standardize your infrastructure as well, you use RKE templates ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-rke1-templates/infrastructure"},"in conjunction with other tools"),"."),(0,s.kt)("h1",{id:"yaml-customization"},"YAML Customization"),(0,s.kt)("p",null,"If you define an RKE template as a YAML file, you can modify this ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/reference-guides/rke1-template-example-yaml"},"example RKE template YAML"),". The YAML in the RKE template uses the same customization that Rancher uses when creating an RKE cluster, but since the YAML is located within the context of a Rancher provisioned cluster, you will need to nest the RKE template customization under the ",(0,s.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive in the YAML."),(0,s.kt)("p",null,"The RKE documentation also has ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"annotated")," ",(0,s.kt)("inlineCode",{parentName:"p"},"cluster.yml")," files that you can use for reference."),(0,s.kt)("p",null,"For guidance on available options, refer to the RKE documentation on ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"cluster configuration.")),(0,s.kt)("h3",{id:"add-ons"},"Add-ons"),(0,s.kt)("p",null,"The add-on section of the RKE template configuration file works the same way as the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/"},"add-on section of a cluster configuration file"),"."),(0,s.kt)("p",null,"The user-defined add-ons directive allows you to either call out and pull down Kubernetes manifests or put them inline directly. If you include these manifests as part of your RKE template, Rancher will provision those in the cluster."),(0,s.kt)("p",null,"Some things you could do with add-ons include:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Install applications on the Kubernetes cluster after it starts"),(0,s.kt)("li",{parentName:"ul"},"Install plugins on nodes that are deployed with a Kubernetes daemonset"),(0,s.kt)("li",{parentName:"ul"},"Automatically set up namespaces, service accounts, or role binding")),(0,s.kt)("p",null,"The RKE template configuration must be nested within the ",(0,s.kt)("inlineCode",{parentName:"p"},"rancher_kubernetes_engine_config")," directive. To set add-ons, when creating the template, you will click ",(0,s.kt)("strong",{parentName:"p"},"Edit as YAML.")," Then use the ",(0,s.kt)("inlineCode",{parentName:"p"},"addons")," directive to add a manifest, or the ",(0,s.kt)("inlineCode",{parentName:"p"},"addons_include")," directive to set which YAML files are used for the add-ons. For more information on custom add-ons, refer to the ",(0,s.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/user-defined-add-ons/"},"user-defined add-ons documentation.")))}m.isMDXComponent=!0}}]);