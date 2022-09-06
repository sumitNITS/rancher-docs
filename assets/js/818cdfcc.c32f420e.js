"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96540],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,k=u["".concat(c,".").concat(h)]||u[h]||s[h]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73125:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"Rolling Back Rancher Installed with Docker",weight:1015,aliases:["/rancher/v2.0-v2.4/en/upgrades/single-node-rollbacks","/rancher/v2.0-v2.4/en/upgrades/rollbacks/single-node-rollbacks"]},c=void 0,d={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher",id:"version-2.0-2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher",title:"Rolling Back Rancher Installed with Docker",description:"If a Rancher upgrade does not complete successfully, you'll have to roll back to your Rancher setup that you were using before Docker Upgrade. Rolling back restores:",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/roll-back-docker-installed-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"Rolling Back Rancher Installed with Docker",weight:1015,aliases:["/rancher/v2.0-v2.4/en/upgrades/single-node-rollbacks","/rancher/v2.0-v2.4/en/upgrades/rollbacks/single-node-rollbacks"]},sidebar:"tutorialSidebar",previous:{title:"Upgrading Rancher Installed with Docker",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},next:{title:"Certificate Troubleshooting",permalink:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"}},p={},s=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Rolling Back Rancher",id:"rolling-back-rancher",level:2}],u={toc:s};function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If a Rancher upgrade does not complete successfully, you'll have to roll back to your Rancher setup that you were using before ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},"Docker Upgrade"),". Rolling back restores:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your previous version of Rancher."),(0,o.kt)("li",{parentName:"ul"},"Your data backup created before upgrade.")),(0,o.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,o.kt)("p",null,"During rollback to a prior version of Rancher, you'll enter a series of commands, filling placeholders with data from your environment. These placeholders are denoted with angled brackets and all capital letters (",(0,o.kt)("inlineCode",{parentName:"p"},"<EXAMPLE>"),"). Here's an example of a command with a placeholder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker pull rancher/rancher:<PRIOR_RANCHER_VERSION>\n")),(0,o.kt)("p",null,"In this command, ",(0,o.kt)("inlineCode",{parentName:"p"},"<PRIOR_RANCHER_VERSION>")," is the version of Rancher you were running before your unsuccessful upgrade. ",(0,o.kt)("inlineCode",{parentName:"p"},"v2.0.5")," for example."),(0,o.kt)("p",null,"Cross reference the image and reference table below to learn how to obtain this placeholder data. Write down or copy this information before starting the procedure below."),(0,o.kt)("sup",null,"Terminal ",(0,o.kt)("code",null,"docker ps")," Command, Displaying Where to Find ",(0,o.kt)("code",null,"<PRIOR_RANCHER_VERSION>")," and ",(0,o.kt)("code",null,"<RANCHER_CONTAINER_NAME>")),"![Placeholder Reference](/img/placeholder-ref-2.png)",(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<PRIOR_RANCHER_VERSION>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"The rancher/rancher image you used before upgrade.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_CONTAINER_NAME>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"festive_mestorf")),(0,o.kt)("td",{parentName:"tr",align:null},"The name of your Rancher container.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<RANCHER_VERSION>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"v2.0.5")),(0,o.kt)("td",{parentName:"tr",align:null},"The version of Rancher that the backup is for.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"<DATE>")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"9-27-18")),(0,o.kt)("td",{parentName:"tr",align:null},"The date that the data container or backup was created.")))),(0,o.kt)("br",null),(0,o.kt)("p",null,"You can obtain ",(0,o.kt)("inlineCode",{parentName:"p"},"<PRIOR_RANCHER_VERSION>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," by logging into your Rancher Server by remote connection and entering the command to view the containers that are running: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),". You can also view containers that are stopped using a different command: ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps -a"),". Use these commands for help anytime during while creating backups."),(0,o.kt)("h2",{id:"rolling-back-rancher"},"Rolling Back Rancher"),(0,o.kt)("p",null,"If you have issues upgrading Rancher, roll it back to its latest known healthy state by pulling the last version you used and then restoring the backup you made before upgrade."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Warning!")," Rolling back to a previous version of Rancher destroys any changes made to Rancher following the upgrade. Unrecoverable data loss may occur.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Using a remote Terminal connection, log into the node running your Rancher Server.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Pull the version of Rancher that you were running before upgrade. Replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PRIOR_RANCHER_VERSION>")," with that version."),(0,o.kt)("p",{parentName:"li"},"For example, if you were running Rancher v2.0.5 before upgrade, pull v2.0.5."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker pull rancher/rancher:<PRIOR_RANCHER_VERSION>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop the container currently running Rancher Server. Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<RANCHER_CONTAINER_NAME>")," with the name of your Rancher container."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker stop <RANCHER_CONTAINER_NAME>\n")),(0,o.kt)("p",{parentName:"li"},"You can obtain the name for your Rancher container by entering ",(0,o.kt)("inlineCode",{parentName:"p"},"docker ps"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move the backup tarball that you created during completion of ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},"Docker Upgrade")," onto your Rancher Server. Change to the directory that you moved it to. Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"dir")," to confirm that it's there."),(0,o.kt)("p",{parentName:"li"},"If you followed the naming convention we suggested in ",(0,o.kt)("a",{parentName:"p",href:"/v2.0-v2.4/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/upgrade-docker-installed-rancher"},"Docker Upgrade"),", it will have a name similar to  (",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command to replace the data in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-data")," container with the data in the backup tarball, replacing the placeholder. Don't forget to close the quotes."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'docker run  --volumes-from rancher-data \\\n-v $PWD:/backup busybox sh -c "rm /var/lib/rancher/* -rf \\\n&& tar zxvf /backup/rancher-data-backup-<RANCHER_VERSION>-<DATE>.tar.gz"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start a new Rancher Server container with the ",(0,o.kt)("inlineCode",{parentName:"p"},"<PRIOR_RANCHER_VERSION>")," tag placeholder pointing to the data container."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker run -d --volumes-from rancher-data \\\n--restart=unless-stopped \\\n-p 80:80 -p 443:443 \\\nrancher/rancher:<PRIOR_RANCHER_VERSION>\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," ",(0,o.kt)("em",{parentName:"p"},"Do not")," stop the rollback after initiating it, even if the rollback process seems longer than expected. Stopping the rollback may result in database issues during future upgrades."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait a few moments and then open Rancher in a web browser. Confirm that the rollback succeeded and that your data is restored."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," Rancher is rolled back to its version and data state before upgrade."))}h.isMDXComponent=!0}}]);