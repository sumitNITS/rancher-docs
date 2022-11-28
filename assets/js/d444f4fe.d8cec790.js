"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[62515],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),p=n,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||i;return r?a.createElement(m,o(o({ref:t},c),{},{components:r})):a.createElement(m,o({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},48352:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],s={title:"UI for Istio Virtual Services and Destination Rules"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features",id:"version-2.6/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features",title:"UI for Istio Virtual Services and Destination Rules",description:"This feature enables a UI that lets you create, read, update and delete virtual services and destination rules, which are traffic management features of Istio.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features.md",sourceDirName:"how-to-guides/advanced-user-guides/enable-experimental-features",slug:"/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features",permalink:"/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/enable-experimental-features/istio-traffic-management-features.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"UI for Istio Virtual Services and Destination Rules"},sidebar:"tutorialSidebar",previous:{title:"Allow Unsupported Storage Drivers",permalink:"/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/unsupported-storage-drivers"},next:{title:"Continuous Delivery",permalink:"/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery"}},c={},d=[{value:"About this Feature",id:"about-this-feature",level:2}],f={toc:d};function p(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This feature enables a UI that lets you create, read, update and delete virtual services and destination rules, which are traffic management features of Istio."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Prerequisite:")," Turning on this feature does not enable Istio. A cluster administrator needs to ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/istio-setup-guide"},"enable Istio for the cluster")," in order to use the feature.")),(0,i.kt)("p",null,"To enable or disable this feature, refer to the instructions on ",(0,i.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/enable-experimental-features"},"the main page about enabling experimental features.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment Variable Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Status"),(0,i.kt)("th",{parentName:"tr",align:null},"Available as of"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},"Experimental"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"istio-virtual-service-ui")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true")),(0,i.kt)("td",{parentName:"tr",align:null},"GA"),(0,i.kt)("td",{parentName:"tr",align:null},"v2.3.2")))),(0,i.kt)("h2",{id:"about-this-feature"},"About this Feature"),(0,i.kt)("p",null,"A central advantage of Istio's traffic management features is that they allow dynamic request routing, which is useful for canary deployments, blue/green deployments, or A/B testing."),(0,i.kt)("p",null,"When enabled, this feature turns on a page that lets you configure some traffic management features of Istio using the Rancher UI. Without this feature, you need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," to manage traffic with Istio."),(0,i.kt)("p",null,"The feature enables two UI tabs: one tab for ",(0,i.kt)("strong",{parentName:"p"},"Virtual Services")," and another for ",(0,i.kt)("strong",{parentName:"p"},"Destination Rules"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Virtual services")," intercept and direct traffic to your Kubernetes services, allowing you to direct percentages of traffic from a request to different services. You can use them to define a set of routing rules to apply when a host is addressed. For details, refer to the ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/virtual-service/"},"Istio documentation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Destination rules")," serve as the single source of truth about which service versions are available to receive traffic from virtual services. You can use these resources to define policies that apply to traffic that is intended for a service after routing has occurred. For details, refer to the ",(0,i.kt)("a",{parentName:"li",href:"https://istio.io/docs/reference/config/networking/v1alpha3/destination-rule"},"Istio documentation."))),(0,i.kt)("p",null,"To see these tabs,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the cluster where Istio is installed and click ",(0,i.kt)("strong",{parentName:"li"},"Explore"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,i.kt)("strong",{parentName:"li"},"Istio"),"."),(0,i.kt)("li",{parentName:"ol"},"You will see tabs for ",(0,i.kt)("strong",{parentName:"li"},"Kiali")," and ",(0,i.kt)("strong",{parentName:"li"},"Jaeger"),". From the left navigation bar, you can view and configure ",(0,i.kt)("strong",{parentName:"li"},"Virtual Services")," and ",(0,i.kt)("strong",{parentName:"li"},"Destination Rules"),".")))}p.isMDXComponent=!0}}]);