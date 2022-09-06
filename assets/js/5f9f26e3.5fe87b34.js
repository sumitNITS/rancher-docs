"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14755],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=u(t),d=a,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},94160:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={title:"SELinux RPM",weight:4},s=void 0,u={unversionedId:"pages-for-subheaders/selinux-rpm",id:"version-2.5/pages-for-subheaders/selinux-rpm",title:"SELinux RPM",description:"Available as of v2.5.8",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/selinux-rpm.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/selinux-rpm",permalink:"/v2.5/pages-for-subheaders/selinux-rpm",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/selinux-rpm.md",tags:[],version:"2.5",lastUpdatedAt:1662486037,formattedLastUpdatedAt:"9/6/2022",frontMatter:{title:"SELinux RPM",weight:4},sidebar:"tutorialSidebar",previous:{title:"CIS 1.6 Benchmark - Self-Assessment Guide - Rancher v2.5.4",permalink:"/v2.5/reference-guides/rancher-security/rancher-v2.5-hardening-guides/self-assessment-guide-with-cis-v1.6-benchmark"},next:{title:"about-rancher-selinux",permalink:"/v2.5/reference-guides/rancher-security/selinux-rpm/about-rancher-selinux"}},p={},c=[{value:"1. Set up the yum repo",id:"1-set-up-the-yum-repo",level:3},{value:"2. Installing the RPM",id:"2-installing-the-rpm",level:3}],h={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.5.8")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Security-Enhanced_Linux"},"Security-Enhanced Linux (SELinux)")," is a security enhancement to Linux."),(0,i.kt)("p",null,"Developed by Red Hat, it is an implementation of mandatory access controls (MAC) on Linux. Mandatory access controls allow an administrator of a system to define how applications and users can access different resources such as files, devices, networks and inter-process communication. SELinux also enhances security by making an OS restrictive by default. "),(0,i.kt)("p",null,"After being historically used by government agencies, SELinux is now industry standard and is enabled by default on CentOS 7 and 8. To check whether SELinux is enabled and enforcing on your system, use ",(0,i.kt)("inlineCode",{parentName:"p"},"getenforce"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# getenforce\nEnforcing\n")),(0,i.kt)("p",null,"We provide two RPMs (Red Hat packages) that enable Rancher products to function properly on SELinux-enforcing hosts: ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-selinux"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rancher-selinux"},"rancher-selinux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rke2-selinux"},"rke2-selinux")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installing-the-rancher-selinux-rpm"},"Installing the rancher-selinux RPM")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-the-logging-application-to-work-with-selinux"},"Configuring the Logging Application to Work with SELinux"))),(0,i.kt)("h1",{id:"rancher-selinux"},"rancher-selinux"),(0,i.kt)("p",null,"To allow Rancher to work with SELinux, some functionality has to be manually enabled for the SELinux nodes. To help with that, Rancher provides a SELinux RPM. "),(0,i.kt)("p",null,"As of v2.5.8, the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM only contains policies for the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/tree/dev-v2.5/charts/rancher-logging"},"rancher-logging application.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," GitHub repository is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher-selinux"},"here.")),(0,i.kt)("h1",{id:"rke2-selinux"},"rke2-selinux"),(0,i.kt)("p",null,"rke2-selinux provides policies for RKE2. It is installed automatically when the RKE2 installer script detects that it is running on an RPM-based distro."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rke2-selinux")," GitHub repository is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux"},"here.")),(0,i.kt)("p",null,"For more information about installing RKE2 on SELinux-enabled hosts, see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/install/methods/#rpm"},"RKE2 documentation.")),(0,i.kt)("h1",{id:"installing-the-rancher-selinux-rpm"},"Installing the rancher-selinux RPM"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Requirements:")," The rancher-selinux RPM was tested with CentOS 7 and 8.")),(0,i.kt)("h3",{id:"1-set-up-the-yum-repo"},"1. Set up the yum repo"),(0,i.kt)("p",null,"Set up the yum repo to install ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," directly on all hosts in the cluster."),(0,i.kt)("p",null,"In order to use the RPM repository, on a CentOS 7 or RHEL 7 system, run the following bash snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# cat << EOF > /etc/yum.repos.d/rancher.repo \n[rancher] \nname=Rancher \nbaseurl=https://rpm.rancher.io/rancher/production/centos/7/noarch\nenabled=1 \ngpgcheck=1 \ngpgkey=https://rpm.rancher.io/public.key \nEOF\n")),(0,i.kt)("p",null,"In order to use the RPM repository, on a CentOS 8 or RHEL 8 system, run the following bash snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# cat << EOF > /etc/yum.repos.d/rancher.repo \n[rancher] \nname=Rancher \nbaseurl=https://rpm.rancher.io/rancher/production/centos/8/noarch\nenabled=1 \ngpgcheck=1 \ngpgkey=https://rpm.rancher.io/public.key \nEOF\n")),(0,i.kt)("h3",{id:"2-installing-the-rpm"},"2. Installing the RPM"),(0,i.kt)("p",null,"Install the RPM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yum -y install rancher-selinux\n")),(0,i.kt)("h1",{id:"configuring-the-logging-application-to-work-with-selinux"},"Configuring the Logging Application to Work with SELinux"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Requirements:")," Logging v2 was tested with SELinux on RHEL/CentOS 7 and 8.")),(0,i.kt)("p",null,"Applications do not automatically work once the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-selinux")," RPM is installed on the host. They need to be configured to run in an allowed SELinux container domain provided by the RPM. "),(0,i.kt)("p",null,"To configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-logging")," chart to be SELinux aware, change ",(0,i.kt)("inlineCode",{parentName:"p"},"global.seLinux.enabled")," to true in the ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," when installing the chart."))}d.isMDXComponent=!0}}]);