"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[13170],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(d,".").concat(m)]||u[m]||s[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},83839:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={title:"Opening Ports with firewalld"},d=void 0,p={unversionedId:"how-to-guides/advanced-user-guides/open-ports-with-firewalld",id:"version-2.6/how-to-guides/advanced-user-guides/open-ports-with-firewalld",title:"Opening Ports with firewalld",description:"We recommend disabling firewalld. For Kubernetes 1.19.x and higher, firewalld must be turned off.",source:"@site/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/open-ports-with-firewalld.md",sourceDirName:"how-to-guides/advanced-user-guides",slug:"/how-to-guides/advanced-user-guides/open-ports-with-firewalld",permalink:"/v2.6/how-to-guides/advanced-user-guides/open-ports-with-firewalld",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/open-ports-with-firewalld.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"11/14/2022",frontMatter:{title:"Opening Ports with firewalld"},sidebar:"tutorialSidebar",previous:{title:"Continuous Delivery",permalink:"/v2.6/how-to-guides/advanced-user-guides/enable-experimental-features/continuous-delivery"},next:{title:"Tuning etcd for Large Installations",permalink:"/v2.6/how-to-guides/advanced-user-guides/tune-etcd-for-large-installs"}},c={},s=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Applying Firewall Port Rules",id:"applying-firewall-port-rules",level:2}],u={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"We recommend disabling firewalld. For Kubernetes 1.19.x and higher, firewalld must be turned off.")),(0,l.kt)("p",null,"Some distributions of Linux ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux#Rebuilds"},"derived from RHEL,")," including Oracle Linux, may have default firewall rules that block communication with Helm."),(0,l.kt)("p",null,"For example, one Oracle Linux image in AWS has REJECT rules that stop Helm from communicating with Tiller:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Chain INPUT (policy ACCEPT)\ntarget     prot opt source               destination\nACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED\nACCEPT     icmp --  anywhere             anywhere\nACCEPT     all  --  anywhere             anywhere\nACCEPT     tcp  --  anywhere             anywhere             state NEW tcp dpt:ssh\nREJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited\n\nChain FORWARD (policy ACCEPT)\ntarget     prot opt source               destination\nREJECT     all  --  anywhere             anywhere             reject-with icmp-host-prohibited\n\nChain OUTPUT (policy ACCEPT)\ntarget     prot opt source               destination\n")),(0,l.kt)("p",null,"You can check the default firewall rules with this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo iptables --list\n")),(0,l.kt)("p",null,"This section describes how to use ",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld")," to apply the ",(0,l.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/installation-requirements#port-requirements"},"firewall port rules")," for nodes in a high-availability Rancher server cluster."),(0,l.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("p",null,"Install v7.x or later ofv",(0,l.kt)("inlineCode",{parentName:"p"},"firewalld"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"yum install firewalld\nsystemctl start firewalld\nsystemctl enable firewalld\n")),(0,l.kt)("h2",{id:"applying-firewall-port-rules"},"Applying Firewall Port Rules"),(0,l.kt)("p",null,"In the Rancher high-availability installation instructions, the Rancher server is set up on three nodes that have all three Kubernetes roles: etcd, controlplane, and worker. If your Rancher server nodes have all three roles, run the following commands on each node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"firewall-cmd --permanent --add-port=22/tcp\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=2379/tcp\nfirewall-cmd --permanent --add-port=2380/tcp\nfirewall-cmd --permanent --add-port=6443/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n")),(0,l.kt)("p",null,"If your Rancher server nodes have separate roles, use the following commands based on the role of the node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"# For etcd nodes, run the following commands:\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=2379/tcp\nfirewall-cmd --permanent --add-port=2380/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\n\n# For control plane nodes, run the following commands:\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=6443/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n\n# For worker nodes, run the following commands:\nfirewall-cmd --permanent --add-port=22/tcp\nfirewall-cmd --permanent --add-port=80/tcp\nfirewall-cmd --permanent --add-port=443/tcp\nfirewall-cmd --permanent --add-port=2376/tcp\nfirewall-cmd --permanent --add-port=8472/udp\nfirewall-cmd --permanent --add-port=9099/tcp\nfirewall-cmd --permanent --add-port=10250/tcp\nfirewall-cmd --permanent --add-port=10254/tcp\nfirewall-cmd --permanent --add-port=30000-32767/tcp\nfirewall-cmd --permanent --add-port=30000-32767/udp\n")),(0,l.kt)("p",null,"After the ",(0,l.kt)("inlineCode",{parentName:"p"},"firewall-cmd")," commands have been run on a node, use the following command to enable the firewall rules:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"firewall-cmd --reload\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Result:")," The firewall is updated so that Helm can communicate with the Rancher server nodes."))}m.isMDXComponent=!0}}]);