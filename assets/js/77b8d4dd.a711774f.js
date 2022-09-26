"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[59104],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return v}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),v=a,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||o;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85099:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var i=t(87462),a=t(63366),o=(t(67294),t(3905)),r=["components"],s={title:"4. Add Deployments and Services with the Istio Sidecar",weight:4,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/setup/deploy-workloads","/rancher/v2.0-v2.4/en/istio/legacy/setup/deploy-workloads","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/setup/deploy-workloads","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/setup/deploy-workloads/"]},l=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",title:"4. Add Deployments and Services with the Istio Sidecar",description:"Prerequisite: To enable Istio for a workload, the cluster and namespace must have Istio enabled.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1661494099,formattedLastUpdatedAt:"8/26/2022",frontMatter:{title:"4. Add Deployments and Services with the Istio Sidecar",weight:4,aliases:["/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/setup/deploy-workloads","/rancher/v2.0-v2.4/en/istio/legacy/setup/deploy-workloads","/rancher/v2.0-v2.4/en/istio/v2.3.x-v2.4.x/setup/deploy-workloads","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/setup/deploy-workloads/"]},sidebar:"tutorialSidebar",previous:{title:"3. Select the Nodes Where Istio Components Will be Deployed",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/node-selectors"},next:{title:"5. Set up the Istio Gateway",permalink:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"}},c={},d=[{value:"3. Add Deployments and Services",id:"3-add-deployments-and-services",level:3},{value:"Resource YAML",id:"resource-yaml",level:3},{value:"Next: Set up the Istio Gateway",id:"next-set-up-the-istio-gateway",level:3}],u={toc:d};function v(e){var n=e.components,t=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisite:")," To enable Istio for a workload, the cluster and namespace must have Istio enabled.  ")),(0,o.kt)("p",null,"Enabling Istio in a namespace only enables automatic sidecar injection for new workloads. To enable the Envoy sidecar for existing workloads, you need to enable it manually for each workload."),(0,o.kt)("p",null,"To inject the Istio sidecar on an existing workload in the namespace, go to the workload, click the ",(0,o.kt)("strong",{parentName:"p"},"\u22ee",",")," and click ",(0,o.kt)("strong",{parentName:"p"},"Redeploy.")," When the workload is redeployed, it will have the Envoy sidecar automatically injected."),(0,o.kt)("p",null,"Wait a few minutes for the workload to upgrade to have the istio sidecar. Click it and go to the Containers section. You should be able to see istio-init and istio-proxy alongside your original workload. This means the Istio sidecar is enabled for the workload. Istio is doing all the wiring for the sidecar envoy. Now Istio can do all the features automatically if you enable them in the yaml."),(0,o.kt)("h3",{id:"3-add-deployments-and-services"},"3. Add Deployments and Services"),(0,o.kt)("p",null,"Next we add the Kubernetes resources for the sample deployments and services for the BookInfo app in Istio's documentation."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the project inside the cluster you want to deploy the workload on."),(0,o.kt)("li",{parentName:"ol"},"In Workloads, click ",(0,o.kt)("strong",{parentName:"li"},"Import YAML.")),(0,o.kt)("li",{parentName:"ol"},"Copy the below resources into the form."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Import."))),(0,o.kt)("p",null,"This will set up the following sample resources from Istio's example BookInfo app:"),(0,o.kt)("p",null,"Details service and deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"details")," Service"),(0,o.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,o.kt)("inlineCode",{parentName:"li"},"bookinfo-details")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"details-v1")," Deployment")),(0,o.kt)("p",null,"Ratings service and deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"ratings")," Service"),(0,o.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,o.kt)("inlineCode",{parentName:"li"},"bookinfo-ratings")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"ratings-v1")," Deployment")),(0,o.kt)("p",null,"Reviews service and deployments (three versions):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"reviews")," Service"),(0,o.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,o.kt)("inlineCode",{parentName:"li"},"bookinfo-reviews")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"reviews-v1")," Deployment"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"reviews-v2")," Deployment"),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"reviews-v3")," Deployment")),(0,o.kt)("p",null,"Productpage service and deployment:"),(0,o.kt)("p",null,"This is the main page of the app, which will be visible from a web browser. The other services will be called from this page."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"productpage")," service"),(0,o.kt)("li",{parentName:"ul"},"A ServiceAccount for ",(0,o.kt)("inlineCode",{parentName:"li"},"bookinfo-productpage")),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"productpage-v1")," Deployment")),(0,o.kt)("h3",{id:"resource-yaml"},"Resource YAML"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Copyright 2017 Istio Authors\n#\n#   Licensed under the Apache License, Version 2.0 (the "License");\n#   you may not use this file except in compliance with the License.\n#   You may obtain a copy of the License at\n#\n#       http://www.apache.org/licenses/LICENSE-2.0\n#\n#   Unless required by applicable law or agreed to in writing, software\n#   distributed under the License is distributed on an "AS IS" BASIS,\n#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n#   See the License for the specific language governing permissions and\n#   limitations under the License.\n\n##################################################################################################\n# Details service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: details\n  labels:\n    app: details\n    service: details\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: details\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-details\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: details-v1\n  labels:\n    app: details\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: details\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: details\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-details\n      containers:\n      - name: details\n        image: docker.io/istio/examples-bookinfo-details-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Ratings service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: ratings\n  labels:\n    app: ratings\n    service: ratings\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: ratings\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-ratings\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ratings-v1\n  labels:\n    app: ratings\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: ratings\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: ratings\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-ratings\n      containers:\n      - name: ratings\n        image: docker.io/istio/examples-bookinfo-ratings-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Reviews service\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: reviews\n  labels:\n    app: reviews\n    service: reviews\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: reviews\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-reviews\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v1\n  labels:\n    app: reviews\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v2\n  labels:\n    app: reviews\n    version: v2\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v2\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v2\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v2:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: reviews-v3\n  labels:\n    app: reviews\n    version: v3\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: reviews\n      version: v3\n  template:\n    metadata:\n      labels:\n        app: reviews\n        version: v3\n    spec:\n      serviceAccountName: bookinfo-reviews\n      containers:\n      - name: reviews\n        image: docker.io/istio/examples-bookinfo-reviews-v3:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n##################################################################################################\n# Productpage services\n##################################################################################################\napiVersion: v1\nkind: Service\nmetadata:\n  name: productpage\n  labels:\n    app: productpage\n    service: productpage\nspec:\n  ports:\n  - port: 9080\n    name: http\n  selector:\n    app: productpage\n---\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: bookinfo-productpage\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: productpage-v1\n  labels:\n    app: productpage\n    version: v1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: productpage\n      version: v1\n  template:\n    metadata:\n      labels:\n        app: productpage\n        version: v1\n    spec:\n      serviceAccountName: bookinfo-productpage\n      containers:\n      - name: productpage\n        image: docker.io/istio/examples-bookinfo-productpage-v1:1.15.0\n        imagePullPolicy: IfNotPresent\n        ports:\n        - containerPort: 9080\n---\n')),(0,o.kt)("h3",{id:"next-set-up-the-istio-gateway"},(0,o.kt)("a",{parentName:"h3",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/istio-setup-guide/set-up-istio-gateway"},"Next: Set up the Istio Gateway")))}v.isMDXComponent=!0}}]);