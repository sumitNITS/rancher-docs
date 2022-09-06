"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[26446],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,m=p["".concat(l,".").concat(g)]||p[g]||c[g]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5080:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Customizing Grafana Dashboards",weight:5},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",title:"Customizing Grafana Dashboards",description:"In this section, you'll learn how to customize the Grafana dashboard to show metrics that apply to a certain container.",source:"@site/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard.md",tags:[],version:"current",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Customizing Grafana Dashboards",weight:5},sidebar:"tutorialSidebar",previous:{title:"Setting up Monitoring for a Workload",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/set-up-monitoring-for-workloads"},next:{title:"Persistent Grafana Dashboards",permalink:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Signing in to Grafana",id:"signing-in-to-grafana",level:3},{value:"Getting the PromQL Query Powering a Grafana Panel",id:"getting-the-promql-query-powering-a-grafana-panel",level:3}],p={toc:c};function g(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this section, you'll learn how to customize the Grafana dashboard to show metrics that apply to a certain container."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you can customize a Grafana dashboard, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," application must be installed."),(0,o.kt)("p",null,"To see the links to the external monitoring UIs, including Grafana dashboards, you will need at least a ",(0,o.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#users-with-rancher-cluster-manager-based-permissions"},"project-member role.")),(0,o.kt)("h3",{id:"signing-in-to-grafana"},"Signing in to Grafana"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the Rancher UI, go to the cluster that has the dashboard you want to customize."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,o.kt)("strong",{parentName:"li"},"Monitoring.")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Grafana.")," The Grafana dashboard should open in a new tab."),(0,o.kt)("li",{parentName:"ol"},"Go to the log in icon in the lower left corner and click ",(0,o.kt)("strong",{parentName:"li"},"Sign In.")),(0,o.kt)("li",{parentName:"ol"},"Log in to Grafana. The default Admin username and password for the Grafana instance is ",(0,o.kt)("inlineCode",{parentName:"li"},"admin/prom-operator"),". (Regardless of who has the password, cluster administrator permission in Rancher is still required access the Grafana instance.) Alternative credentials can also be supplied on deploying or upgrading the chart.")),(0,o.kt)("h3",{id:"getting-the-promql-query-powering-a-grafana-panel"},"Getting the PromQL Query Powering a Grafana Panel"),(0,o.kt)("p",null,"For any panel, you can click the title and click ",(0,o.kt)("strong",{parentName:"p"},"Explore")," to get the PromQL queries powering the graphic."),(0,o.kt)("p",null,"For this example, we would like to get the CPU usage for the Alertmanager container, so we click ",(0,o.kt)("strong",{parentName:"p"},"CPU Utilization > Inspect.")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Data")," tab shows the underlying data as a time series, with the time in first column and the PromQL query result in the second column. Copy the PromQL query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```\n(1 - (avg(irate({__name__=~"node_cpu_seconds_total|windows_cpu_time_total",mode="idle"}[5m])))) * 100\n\n```\n')),(0,o.kt)("p",null,"You can then modify the query in the Grafana panel or create a new Grafana panel using the query. "),(0,o.kt)("p",null,"See also:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/panels/panel-editor/"},"Grafana docs on editing a panel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/panels/add-a-panel/"},"Grafana docs on adding a panel to a dashboard"))))}g.isMDXComponent=!0}}]);