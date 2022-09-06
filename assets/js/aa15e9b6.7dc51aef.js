"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[54263],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33799:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"EC2 Node Template Configuration",weight:1},c=void 0,u={unversionedId:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",id:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",title:"EC2 Node Template Configuration",description:"For more details about EC2, nodes, refer to the official documentation for the EC2 Management Console.",source:"@site/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2.md",sourceDirName:"reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration",slug:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/amazon-ec2.md",tags:[],version:"current",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"EC2 Node Template Configuration",weight:1},sidebar:"tutorialSidebar",previous:{title:"node-template-configuration",permalink:"/pages-for-subheaders/node-template-configuration"},next:{title:"DigitalOcean Node Template Configuration",permalink:"/reference-guides/cluster-configuration/downstream-cluster-configuration/node-template-configuration/digitalocean"}},l={},p=[{value:"Region",id:"region",level:3},{value:"Cloud Credentials",id:"cloud-credentials",level:3},{value:"Authenticate &amp; Configure Nodes",id:"authenticate--configure-nodes",level:3},{value:"Security Group",id:"security-group",level:3},{value:"Instance Options",id:"instance-options",level:3},{value:"Engine Options",id:"engine-options",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"For more details about EC2, nodes, refer to the official documentation for the ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2"},"EC2 Management Console"),". "),(0,a.kt)("h3",{id:"region"},"Region"),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Region")," field, select the same region that you used when creating your cloud credentials."),(0,a.kt)("h3",{id:"cloud-credentials"},"Cloud Credentials"),(0,a.kt)("p",null,"Your AWS account access information, stored in a ",(0,a.kt)("a",{parentName:"p",href:"/reference-guides/user-settings/manage-cloud-credentials"},"cloud credential.")," "),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey"},"Amazon Documentation: Creating Access Keys")," how to create an Access Key and Secret Key."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"Amazon Documentation: Creating IAM Policies (Console)")," how to create an IAM policy."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_change-permissions.html#users_change_permissions-add-console"},"Amazon Documentation: Adding Permissions to a User (Console)")," how to attach an IAM "),(0,a.kt)("p",null,"See our three example JSON policies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy"},"Example IAM Policy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-with-passrole"},"Example IAM Policy with PassRole")," (needed if you want to use ",(0,a.kt)("a",{parentName:"li",href:"/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider")," or want to pass an IAM Profile to an instance)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-an-amazon-ec2-cluster#example-iam-policy-to-allow-encrypted-ebs-volumes"},"Example IAM Policy to allow encrypted EBS volumes")," policy to an user.")),(0,a.kt)("h3",{id:"authenticate--configure-nodes"},"Authenticate & Configure Nodes"),(0,a.kt)("p",null,"Choose an availability zone and network settings for your cluster. "),(0,a.kt)("h3",{id:"security-group"},"Security Group"),(0,a.kt)("p",null,"Choose the default security group or configure a security group."),(0,a.kt)("p",null,"Please refer to ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/port-requirements#rancher-aws-ec2-security-group"},"Amazon EC2 security group when using Node Driver")," to see what rules are created in the ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-nodes")," Security Group."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"New in v2.6.4"))),(0,a.kt)("p",null,"If you provide your own security group for an EC2 instance, please note that Rancher will not modify it. As such, you will be responsible for ensuring that your security group is set to allow the ",(0,a.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/port-requirements#ports-for-rancher-server-nodes-on-rke"},"necessary ports for Rancher to provision the instance"),". For more information on controlling inbound and outbound traffic to EC2 instances with security groups, refer ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#WorkingWithSecurityGroups"},"here"),"."),(0,a.kt)("h3",{id:"instance-options"},"Instance Options"),(0,a.kt)("p",null,"Configure the instances that will be created. Make sure you configure the correct ",(0,a.kt)("strong",{parentName:"p"},"SSH User")," for the configured AMI. It is possible that a selected region does not support the default instance type. In this scenario you must select an instance type that does exist, otherwise an error will occur stating the requested configuration is not supported."),(0,a.kt)("p",null,"If you need to pass an ",(0,a.kt)("strong",{parentName:"p"},"IAM Instance Profile Name")," (not ARN), for example, when you want to use a ",(0,a.kt)("a",{parentName:"p",href:"/pages-for-subheaders/set-up-cloud-providers"},"Kubernetes Cloud Provider"),", you will need an additional permission in your policy. See ",(0,a.kt)("a",{parentName:"p",href:"#example-iam-policy-with-passrole"},"Example IAM policy with PassRole")," for an example policy."),(0,a.kt)("h3",{id:"engine-options"},"Engine Options"),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Engine Options")," section of the node template, you can configure the Docker daemon. You may want to specify the docker version or a Docker registry mirror."))}m.isMDXComponent=!0}}]);