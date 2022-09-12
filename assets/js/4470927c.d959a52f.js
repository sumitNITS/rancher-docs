"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54977],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(g,i(i({ref:t},u),{},{components:a})):r.createElement(g,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44231:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=["components"],l={title:"Backup Storage Location Configuration",shortTitle:"Storage",weight:3},s=void 0,c={unversionedId:"reference-guides/backup-restore-configuration/storage-configuration",id:"reference-guides/backup-restore-configuration/storage-configuration",title:"Backup Storage Location Configuration",description:"Configure a storage location where all backups are saved by default. You will have the option to override this with each backup, but will be limited to using an S3-compatible object store.",source:"@site/docs/reference-guides/backup-restore-configuration/storage-configuration.md",sourceDirName:"reference-guides/backup-restore-configuration",slug:"/reference-guides/backup-restore-configuration/storage-configuration",permalink:"/reference-guides/backup-restore-configuration/storage-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/backup-restore-configuration/storage-configuration.md",tags:[],version:"current",lastUpdatedAt:1663013069,formattedLastUpdatedAt:"9/12/2022",frontMatter:{title:"Backup Storage Location Configuration",shortTitle:"Storage",weight:3},sidebar:"tutorialSidebar",previous:{title:"Restore Configuration",permalink:"/reference-guides/backup-restore-configuration/restore-configuration"},next:{title:"Examples",permalink:"/reference-guides/backup-restore-configuration/examples"}},u={},p=[{value:"Storage Location Configuration",id:"storage-location-configuration",level:2},{value:"No Default Storage Location",id:"no-default-storage-location",level:3},{value:"S3-compatible Object Store",id:"s3-compatible-object-store",level:3},{value:"Existing StorageClass",id:"existing-storageclass",level:3},{value:"Existing Persistent Volume",id:"existing-persistent-volume",level:3},{value:"Example values.yaml for the rancher-backup Helm Chart",id:"example-valuesyaml-for-the-rancher-backup-helm-chart",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Configure a storage location where all backups are saved by default. You will have the option to override this with each backup, but will be limited to using an S3-compatible object store."),(0,o.kt)("p",null,"Only one storage location can be configured at the operator level."),(0,o.kt)("h2",{id:"storage-location-configuration"},"Storage Location Configuration"),(0,o.kt)("h3",{id:"no-default-storage-location"},"No Default Storage Location"),(0,o.kt)("p",null,"You can choose to not have any operator-level storage location configured. If you select this option, you must configure an S3-compatible object store as the storage location for each individual backup."),(0,o.kt)("h3",{id:"s3-compatible-object-store"},"S3-compatible Object Store"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Credential Secret"),(0,o.kt)("td",{parentName:"tr",align:null},"Choose the credentials for S3 from your secrets in Rancher. ",(0,o.kt)("a",{parentName:"td",href:"/reference-guides/backup-restore-configuration/examples#example-credential-secret-for-storing-backups-in-s3"},"Example"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bucket Name"),(0,o.kt)("td",{parentName:"tr",align:null},"Enter the name of the ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html"},"S3 bucket")," where the backups will be stored. Default: ",(0,o.kt)("inlineCode",{parentName:"td"},"rancherbackups"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Region"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("a",{parentName:"td",href:"https://aws.amazon.com/about-aws/global-infrastructure/regions_az/"},"AWS region")," where the S3 bucket is located.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Folder"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/user-guide/using-folders.html"},"folder in the S3 bucket")," where the backups will be stored.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Endpoint"),(0,o.kt)("td",{parentName:"tr",align:null},"The ",(0,o.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html"},"S3 endpoint")," For example, ",(0,o.kt)("inlineCode",{parentName:"td"},"s3.us-west-2.amazonaws.com"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Endpoint CA"),(0,o.kt)("td",{parentName:"tr",align:null},"The CA cert used to for the S3 endpoint. Default: base64 encoded CA cert")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"insecureTLSSkipVerify"),(0,o.kt)("td",{parentName:"tr",align:null},"Set to true if you are not using TLS.")))),(0,o.kt)("h3",{id:"existing-storageclass"},"Existing StorageClass"),(0,o.kt)("p",null,"Installing the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," chart by selecting the StorageClass option will create a Persistent Volume Claim (PVC), and Kubernetes will in turn dynamically provision a Persistent Volume (PV) where all the backups will be saved by default."),(0,o.kt)("p",null,"For information about creating storage classes refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage"},"this section.")),(0,o.kt)("p",null,"::: note Important:"),(0,o.kt)("p",null,'It is highly recommended to use a StorageClass with a reclaim policy of "Retain". Otherwise if the PVC created by the ',(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," chart gets deleted (either during app upgrade, or accidentally), the PV will get deleted too, which means all backups saved in it will get deleted.",(0,o.kt)("br",{parentName:"p"}),"\n",'If no such StorageClass is available, after the PV is provisioned, make sure to edit its reclaim policy and set it to "Retain" before storing backups in it.'),(0,o.kt)("p",null,":::"),(0,o.kt)("h3",{id:"existing-persistent-volume"},"Existing Persistent Volume"),(0,o.kt)("p",null,"Select an existing Persistent Volume (PV) that will be used to store your backups. For information about creating PersistentVolumes in Rancher, refer to ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage#2-add-a-persistent-volume-that-refers-to-the-persistent-storage"},"this section.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'It is highly recommended to use a Persistent Volume with a reclaim policy of "Retain". Otherwise if the PVC created by the ',(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," chart gets deleted (either during app upgrade, or accidentally), the PV will get deleted too, which means all backups saved in it will get deleted.  "))),(0,o.kt)("h2",{id:"example-valuesyaml-for-the-rancher-backup-helm-chart"},"Example values.yaml for the rancher-backup Helm Chart"),(0,o.kt)("p",null,"The documented ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," file that can be used to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-backup")," operator when the Helm CLI is used can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/backup-restore-operator/blob/master/charts/rancher-backup/values.yaml"},"backup-restore-operator repository.")),(0,o.kt)("p",null,"For more information about ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," files and configuring Helm charts during installation, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing"},"Helm documentation.")))}m.isMDXComponent=!0}}]);