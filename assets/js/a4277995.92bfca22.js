"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76297],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74952:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={title:"API"},o=void 0,s={unversionedId:"pages-for-subheaders/about-the-api",id:"version-2.5/pages-for-subheaders/about-the-api",title:"API",description:"How to use the API",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/about-the-api.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/about-the-api",permalink:"/v2.5/pages-for-subheaders/about-the-api",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/about-the-api.md",tags:[],version:"2.5",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"Sep 23, 2022",frontMatter:{title:"API"},sidebar:"tutorialSidebar",previous:{title:"kubectl Utility",permalink:"/v2.5/reference-guides/cli-with-rancher/kubectl-utility"},next:{title:"API Tokens",permalink:"/v2.5/reference-guides/about-the-api/api-tokens"}},l={},c=[{value:"How to use the API",id:"how-to-use-the-api",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Making requests",id:"making-requests",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Capturing Rancher API Calls",id:"capturing-rancher-api-calls",level:2}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-to-use-the-api"},"How to use the API"),(0,r.kt)("p",null,"The API has its own user interface accessible from a web browser.  This is an easy way to see resources, perform actions, and see the equivalent cURL or HTTP request & response.  To access it, click on your user avatar in the upper right corner. Under ",(0,r.kt)("strong",{parentName:"p"},"API & Keys"),", you can find the URL endpoint as well as create ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/user-settings/api-keys"},"API keys"),"."),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"API requests must include authentication information.  Authentication is done with HTTP basic authentication using ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/user-settings/api-keys"},"API Keys"),". API keys can create new clusters and have access to multiple clusters via ",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/clusters/"),". ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Cluster and project roles")," apply to these keys and restrict what clusters and projects the account can see and what actions they can take."),(0,r.kt)("p",null,"By default, some cluster-level API tokens are generated with infinite time-to-live (",(0,r.kt)("inlineCode",{parentName:"p"},"ttl=0"),"). In other words, API tokens with ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl=0")," never expire unless you invalidate them. For details on how to invalidate them, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/v2.5/reference-guides/about-the-api/api-tokens"},"API tokens page"),"."),(0,r.kt)("h2",{id:"making-requests"},"Making requests"),(0,r.kt)("p",null,"The API is generally RESTful but has several features to make the definition of everything discoverable by a client so that generic clients can be written instead of having to write specific code for every type of resource.  For detailed info about the generic API spec, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/api-spec/blob/master/specification.md"},"see here"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every type has a Schema which describes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The URL to get to the collection of this type of resources"),(0,r.kt)("li",{parentName:"ul"},"Every field the resource can have, along with their type, basic validation rules, whether they are required or optional, etc."),(0,r.kt)("li",{parentName:"ul"},"Every action that is possible on this type of resource, with their inputs and outputs (also as schemas)."),(0,r.kt)("li",{parentName:"ul"},"Every field that filtering is allowed on"),(0,r.kt)("li",{parentName:"ul"},"What HTTP verb methods are available for the collection itself, or for individual resources in the collection.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"So the theory is that you can load just the list of schemas and know everything about the API.  This is in fact how the UI for the API works, it contains no code specific to Rancher itself.  The URL to get Schemas is sent in every HTTP response as a ",(0,r.kt)("inlineCode",{parentName:"p"},"X-Api-Schemas")," header.  From there you can follow the ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," link on each schema to know where to list resources, and other ",(0,r.kt)("inlineCode",{parentName:"p"},"links")," inside of the returned resources to get any other information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In practice, you will probably just want to construct URL strings.  We highly suggest limiting this to the top-level to list a collection (",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/<type>"),") or get a specific resource (",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/<type>/<id>"),").  Anything deeper than that is subject to change in future releases.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resources have relationships between each other called links.  Each resource includes a map of ",(0,r.kt)("inlineCode",{parentName:"p"},"links")," with the name of the link and the URL to retrieve that information.  Again you should ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," the resource and then follow the URL in the ",(0,r.kt)("inlineCode",{parentName:"p"},"links")," map, not construct these strings yourself.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Most resources have actions, which do something or change the state of the resource.  To use these, send a HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," to the URL in the ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," map for the action you want.  Some actions require input or produce output, see the individual documentation for each type or the schemas for specific information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To edit a resource, send a HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"links.update")," link on the resource with the fields that you want to change.  If the link is missing then you don't have permission to update the resource. Unknown fields and ones that are not editable are ignored.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To delete a resource, send a HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"links.remove")," link on the resource.  If the link is missing then you don't have permission to update the resource.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To create a new resource, HTTP ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," to the collection URL in the schema (which is ",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/<type>"),")."))),(0,r.kt)("h2",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"Most collections can be filtered on the server-side by common fields using HTTP query parameters.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"filters"),' map shows you what fields can be filtered on and what the filtered values were for the request you made.  The API UI has controls to setup filtering and show you the appropriate request.  For simple "equals" matches it\'s just ',(0,r.kt)("inlineCode",{parentName:"p"},"field=value"),".  Modifiers can be added to the field name, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"field_gt=42"),' for "field is greater than 42".  See the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/api-spec/blob/master/specification.md#filtering"},"API spec")," for full details."),(0,r.kt)("h2",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,"Most collections can be sorted on the server-side by common fields using HTTP query parameters.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"sortLinks")," map shows you what sorts are available, along with the URL to get the collection sorted by that.  It also includes info about what the current response was sorted by, if specified."),(0,r.kt)("h2",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"API responses are paginated with a limit of 100 resources per page by default.  This can be changed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," query parameter, up to a maximum of 1000, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/v3/pods?limit=1000"),".  The ",(0,r.kt)("inlineCode",{parentName:"p"},"pagination")," map in collection responses tells you whether or not you have the full result set and has a link to the next page if you do not."),(0,r.kt)("h2",{id:"capturing-rancher-api-calls"},"Capturing Rancher API Calls"),(0,r.kt)("p",null,"You can use browser developer tools to capture how the Rancher API is called. For example, you could follow these steps to use the Chrome developer tools to get the API call for provisioning an RKE cluster:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the Rancher UI, go to ",(0,r.kt)("strong",{parentName:"li"},"Cluster Management")," and click ",(0,r.kt)("strong",{parentName:"li"},"Create.")),(0,r.kt)("li",{parentName:"ol"},"Click one of the cluster types. This example uses Digital Ocean."),(0,r.kt)("li",{parentName:"ol"},"Fill out the form with a cluster name and node template, but don't click ",(0,r.kt)("strong",{parentName:"li"},"Create"),"."),(0,r.kt)("li",{parentName:"ol"},"You will need to open the developer tools before the cluster creation to see the API call being recorded. To open the tools, right-click on the Rancher UI and click ",(0,r.kt)("strong",{parentName:"li"},"Inspect.")),(0,r.kt)("li",{parentName:"ol"},"In the developer tools, click the ",(0,r.kt)("strong",{parentName:"li"},"Network")," tab."),(0,r.kt)("li",{parentName:"ol"},"On the ",(0,r.kt)("strong",{parentName:"li"},"Network")," tab, make sure ",(0,r.kt)("strong",{parentName:"li"},"Fetch/XHR")," is selected."),(0,r.kt)("li",{parentName:"ol"},"In the Rancher UI, click ",(0,r.kt)("strong",{parentName:"li"},"Create"),". In the developer tools, you should see a new network request with the name ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster?_replace=true"),"."),(0,r.kt)("li",{parentName:"ol"},"Right-click ",(0,r.kt)("inlineCode",{parentName:"li"},"cluster?_replace=true")," and click ",(0,r.kt)("strong",{parentName:"li"},"Copy > Copy as cURL.")),(0,r.kt)("li",{parentName:"ol"},"Paste the result into any text editor. You will be able to see the POST request, including the URL it was sent to, all of the headers, and the full body of the request. This command can be used to create a cluster from the command line. Note: The request should be stored in a safe place because it contains credentials.")))}h.isMDXComponent=!0}}]);