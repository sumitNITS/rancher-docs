"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24332],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,k=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70023:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={title:"Rancher AWS \u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\u9605\u8bfb\u6b64\u5206\u6b65 Rancher AWS \u6307\u5357\uff0c\u4ee5\u5feb\u901f\u90e8\u7f72\u5e26\u6709\u5355\u8282\u70b9\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684 Rancher Server\u3002"},l=void 0,o={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/aws",id:"version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws",title:"Rancher AWS \u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\u9605\u8bfb\u6b64\u5206\u6b65 Rancher AWS \u6307\u5357\uff0c\u4ee5\u5feb\u901f\u90e8\u7f72\u5e26\u6709\u5355\u8282\u70b9\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684 Rancher Server\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/aws",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"Rancher AWS \u5feb\u901f\u5165\u95e8\u6307\u5357",description:"\u9605\u8bfb\u6b64\u5206\u6b65 Rancher AWS \u6307\u5357\uff0c\u4ee5\u5feb\u901f\u90e8\u7f72\u5e26\u6709\u5355\u8282\u70b9\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684 Rancher Server\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72 Rancher Server",permalink:"/zh/v2.6/pages-for-subheaders/deploy-rancher-manager"},next:{title:"Rancher AWS Marketplace \u5feb\u901f\u5165\u95e8",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace"}},p={},s=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:2},{value:"IAM \u7b56\u7565\u793a\u4f8b",id:"iam-\u7b56\u7565\u793a\u4f8b",level:3},{value:"\u5f00\u59cb\u4f7f\u7528",id:"\u5f00\u59cb\u4f7f\u7528",level:2},{value:"\u7ed3\u679c",id:"\u7ed3\u679c",level:5},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:2},{value:"\u9500\u6bc1\u73af\u5883",id:"\u9500\u6bc1\u73af\u5883",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u6b65\u9aa4\uff0c\u5728 AWS \u7684\u5355\u8282\u70b9 K3s Kubernetes \u96c6\u7fa4\u4e2d\u5feb\u901f\u90e8\u7f72 Rancher Server\uff0c\u5e76\u9644\u52a0\u4e00\u4e2a\u5355\u8282\u70b9\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u672c\u7ae0\u8282\u4e2d\u63d0\u4f9b\u7684\u6307\u5357\uff0c\u65e8\u5728\u5e2e\u52a9\u4f60\u5feb\u901f\u542f\u52a8\u4e00\u4e2a\u7528\u4e8e Rancher \u7684\u6c99\u76d2\uff0c\u4ee5\u8bc4\u4f30 Rancher \u662f\u5426\u80fd\u6ee1\u8db3\u4f60\u7684\u4f7f\u7528\u9700\u6c42\u3002\u5feb\u901f\u5165\u95e8\u6307\u5357\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u3002\u5982\u679c\u4f60\u9700\u8981\u83b7\u53d6\u751f\u4ea7\u73af\u5883\u7684\u64cd\u4f5c\u6307\u5bfc\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/installation-and-upgrade"},"\u5b89\u88c5"),"\u3002")),(0,n.kt)("h2",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u90e8\u7f72\u5230 Amazon AWS \u4f1a\u4ea7\u751f\u8d39\u7528\u3002")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/account/"},"Amazon AWS \u8d26\u53f7"),": \u7528\u4e8e\u521b\u5efa\u90e8\u7f72 Rancher Server \u548c Kubernetes \u7684\u8d44\u6e90\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/general/latest/gr/managing-aws-access-keys.html"},"Amazon AWS \u8bbf\u95ee\u5bc6\u94a5"),"\uff1a\u5982\u679c\u4f60\u6ca1\u6709\u7684\u8bdd\uff0c\u8bf7\u8bbf\u95ee\u6b64\u94fe\u63a5\u67e5\u770b\u76f8\u5173\u6307\u5357\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html#access_policies_create-start"},"\u5df2\u521b\u5efa IAM \u7b56\u7565"),"\uff1a\u5b9a\u4e49\u9644\u52a0\u6b64\u7b56\u7565\u7684\u8d26\u53f7\u6240\u5177\u6709\u7684\u6743\u9650\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform"),": \u7528\u4e8e\u5728 Amazon AWS \u4e2d\u914d\u7f6e\u670d\u52a1\u5668\u548c\u96c6\u7fa4\u3002")),(0,n.kt)("h3",{id:"iam-\u7b56\u7565\u793a\u4f8b"},"IAM \u7b56\u7565\u793a\u4f8b"),(0,n.kt)("p",null,"AWS \u6a21\u5757\u53ea\u521b\u5efa\u4e00\u4e2a EC2 \u5bc6\u94a5\u5bf9\u3001\u4e00\u4e2a EC2 \u5b89\u5168\u7ec4\u548c\u4e00\u4e2a EC2 \u5b9e\u4f8b\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u7b56\u7565\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "ec2:*",\n            "Resource": "*"\n        }\n    ]\n}\n')),(0,n.kt)("h2",{id:"\u5f00\u59cb\u4f7f\u7528"},"\u5f00\u59cb\u4f7f\u7528"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u547d\u4ee4\u884c\u5de5\u5177\uff0c\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart")," \u628a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," \u514b\u9686\u5230\u672c\u5730\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"cd quickstart/rancher/aws")," \u547d\u4ee4\uff0c\u8fdb\u5165\u5305\u542b terraform \u6587\u4ef6\u7684 AWS \u6587\u4ef6\u5939\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u628a ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars.example")," \u6587\u4ef6\u91cd\u547d\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7f16\u8f91 ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," \u6587\u4ef6\uff0c\u5e76\u66ff\u6362\u4ee5\u4e0b\u53d8\u91cf\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"aws_access_key")," - \u66ff\u6362\u4e3a Amazon AWS \u8bbf\u95ee\u5bc6\u94a5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"aws_secret_key")," - \u66ff\u6362\u4e3a Amazon AWS Secret \u5bc6\u94a5"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rancher_server_admin_password")," - \u66ff\u6362\u4e3a\u521b\u5efa Rancher Server \u7684 admin \u8d26\u53f7\u7684\u5bc6\u7801"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u53ef\u9009"),"\uff1a\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," \u4e2d\u7684\u53ef\u9009\u53c2\u6570\u3002\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Quickstart Readme")," \u4ee5\u53ca ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart/tree/master/rancher/aws"},"AWS Quickstart Readme")," \u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u3002\n\u5efa\u8bae\u5305\u62ec\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"aws_region")," - Amazon AWS \u533a\u57df\u3002AWS \u7684\u9ed8\u8ba4\u533a\u57df (",(0,n.kt)("inlineCode",{parentName:"li"},"us-east-1"),") \u4e0d\u4e00\u5b9a\u662f\u8ddd\u79bb\u4f60\u6700\u8fd1\u7684\u533a\u57df\u3002\u5efa\u8bae\u4fee\u6539\u4e3a\u8ddd\u79bb\u4f60\u6700\u8fd1\u7684\u533a\u57df\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"prefix")," - \u6240\u6709\u521b\u5efa\u8d44\u6e90\u7684\u524d\u7f00"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"instance_type")," - EC2 \u4f7f\u7528\u7684\u5b9e\u4f8b\u89c4\u683c\uff0c\u6700\u5c0f\u89c4\u683c\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"t3a.medium")," \u3002\u5982\u679c\u5728\u9884\u7b97\u8303\u56f4\u5185\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"t3a.large")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"li"},"t3a.xlarge"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"add_windows_node")," - \u5982\u679c\u8bbe\u4e3a true\uff0c\u4e00\u4e2a\u989d\u5916\u7684 Windows worker \u8282\u70b9\u4f1a\u6dfb\u52a0\u5230\u5de5\u4f5c\u8d1f\u8f7d\u96c6\u7fa4\u4e2d\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply --auto-approve")," \u4ee5\u521d\u59cb\u5316\u73af\u5883\u3002\u7136\u540e\uff0c\u7b49\u5f85\u547d\u4ee4\u884c\u5de5\u5177\u8fd4\u56de\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Apply complete! Resources: 16 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nrancher_node_ip = xx.xx.xx.xx\nrancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io\nworkload_node_ip = yy.yy.yy.yy\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u4ee5\u4e0a\u8f93\u51fa\u4e2d\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher_server_url")," \u7c98\u8d34\u5230\u6d4f\u89c8\u5668\u4e2d\u3002\u5728\u767b\u5f55\u9875\u9762\u4e2d\u767b\u5f55\uff08\u9ed8\u8ba4\u7528\u6237\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),"\uff0c\u5bc6\u7801\u4e3a\u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher_server_admin_password")," \u4e2d\u8bbe\u7f6e\u7684\u5bc6\u7801\uff09\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/aws")," \u4e2d\u751f\u6210\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"id_rsa")," \u5bc6\u94a5 SSH \u5230 Rancher Server\u3002"))),(0,n.kt)("h5",{id:"\u7ed3\u679c"},"\u7ed3\u679c"),(0,n.kt)("p",null,"\u4e24\u4e2a Kubernetes \u96c6\u7fa4\u5df2\u90e8\u7f72\u5230\u4f60\u7684 AWS \u8d26\u6237\u4e2d\uff0c\u4e00\u4e2a\u8fd0\u884c Rancher Server\uff0c\u53e6\u4e00\u4e2a\u4e3a\u5b9e\u9a8c\u90e8\u7f72\u505a\u597d\u51c6\u5907\u3002\u8bf7\u6ce8\u610f\uff0c\u867d\u7136\u8fd9\u79cd\u8bbe\u7f6e\u662f\u63a2\u7d22 Rancher \u529f\u80fd\u7684\u597d\u65b9\u6cd5\uff0c\u4f46\u5728\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u5e94\u9075\u5faa\u6211\u4eec\u7684\u9ad8\u53ef\u7528\u8bbe\u7f6e\u6307\u5357\u3002\u7528\u4e8e\u865a\u62df\u673a\u7684 SSH \u5bc6\u94a5\u662f\u81ea\u52a8\u751f\u6210\u7684\uff0c\u5b58\u50a8\u5728\u6a21\u5757\u76ee\u5f55\u4e2d\u3002"),(0,n.kt)("h2",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,n.kt)("p",null,"\u4f7f\u7528 Rancher \u521b\u5efa deployment\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/deploy-rancher-workloads"},"\u521b\u5efa Deployment"),"\u3002"),(0,n.kt)("h2",{id:"\u9500\u6bc1\u73af\u5883"},"\u9500\u6bc1\u73af\u5883"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u8fdb\u5165 ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart/rancher/aws")," \u6587\u4ef6\u5939\uff0c\u7136\u540e\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform destroy --auto-approve"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u7b49\u5f85\u547d\u4ee4\u884c\u754c\u9762\u663e\u793a\u8d44\u6e90\u5df2\u5220\u9664\u7684\u6d88\u606f\u3002"))))}m.isMDXComponent=!0}}]);