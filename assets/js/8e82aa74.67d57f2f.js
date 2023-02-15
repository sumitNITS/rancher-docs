"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[21348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,s(s({ref:t},u),{},{components:n})):r.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"DNS"},s=void 0,i={unversionedId:"troubleshooting/other-troubleshooting-tips/dns",id:"version-2.6/troubleshooting/other-troubleshooting-tips/dns",title:"DNS",description:"The commands/steps listed on this page can be used to check name resolution issues in your cluster.",source:"@site/versioned_docs/version-2.6/troubleshooting/other-troubleshooting-tips/dns.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/dns",permalink:"/v2.6/troubleshooting/other-troubleshooting-tips/dns",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/troubleshooting/other-troubleshooting-tips/dns.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"DNS"},sidebar:"tutorialSidebar",previous:{title:"Networking",permalink:"/v2.6/troubleshooting/other-troubleshooting-tips/networking"},next:{title:"Rancher HA",permalink:"/v2.6/troubleshooting/other-troubleshooting-tips/rancher-ha"}},l={},c=[{value:"Check if DNS pods are running",id:"check-if-dns-pods-are-running",level:3},{value:"Check if the DNS service is present with the correct cluster-ip",id:"check-if-the-dns-service-is-present-with-the-correct-cluster-ip",level:3},{value:"Check if domain names are resolving",id:"check-if-domain-names-are-resolving",level:3},{value:"CoreDNS specific",id:"coredns-specific",level:3},{value:"Check CoreDNS logging",id:"check-coredns-logging",level:4},{value:"Check configuration",id:"check-configuration",level:4},{value:"Check upstream nameservers in resolv.conf",id:"check-upstream-nameservers-in-resolvconf",level:4},{value:"Enable query logging",id:"enable-query-logging",level:4},{value:"kube-dns specific",id:"kube-dns-specific",level:3},{value:"Check upstream nameservers in kubedns container",id:"check-upstream-nameservers-in-kubedns-container",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The commands/steps listed on this page can be used to check name resolution issues in your cluster."),(0,o.kt)("p",null,"Make sure you configured the correct kubeconfig (for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_cluster.yml")," for Rancher HA) or are using the embedded kubectl via the UI."),(0,o.kt)("p",null,"Before running the DNS checks, check the ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#default-dns-provider"},"default DNS provider")," for your cluster and make sure that ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/troubleshooting/other-troubleshooting-tips/networking#check-if-overlay-network-is-functioning-correctly"},"the overlay network is functioning correctly")," as this can also be the reason why DNS resolution (partly) fails."),(0,o.kt)("h3",{id:"check-if-dns-pods-are-running"},"Check if DNS pods are running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl -n kube-system get pods -l k8s-app=kube-dns\n")),(0,o.kt)("p",null,"Example output when using CoreDNS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME                       READY   STATUS    RESTARTS   AGE\ncoredns-799dffd9c4-6jhlz   1/1     Running   0          76m\n")),(0,o.kt)("p",null,"Example output when using kube-dns:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME                        READY   STATUS    RESTARTS   AGE\nkube-dns-5fd74c7488-h6f7n   3/3     Running   0          4m13s\n")),(0,o.kt)("h3",{id:"check-if-the-dns-service-is-present-with-the-correct-cluster-ip"},"Check if the DNS service is present with the correct cluster-ip"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl -n kube-system get svc -l k8s-app=kube-dns\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME               TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)         AGE\nservice/kube-dns   ClusterIP   10.43.0.10   <none>        53/UDP,53/TCP   4m13s\n")),(0,o.kt)("h3",{id:"check-if-domain-names-are-resolving"},"Check if domain names are resolving"),(0,o.kt)("p",null,"Check if internal cluster names are resolving (in this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"kubernetes.default"),"), the IP shown after ",(0,o.kt)("inlineCode",{parentName:"p"},"Server:")," should be the same as the ",(0,o.kt)("inlineCode",{parentName:"p"},"CLUSTER-IP")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-dns")," service."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl run -it --rm --restart=Never busybox --image=busybox:1.28 -- nslookup kubernetes.default\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Server:    10.43.0.10\nAddress 1: 10.43.0.10 kube-dns.kube-system.svc.cluster.local\n\nName:      kubernetes.default\nAddress 1: 10.43.0.1 kubernetes.default.svc.cluster.local\npod "busybox" deleted\n')),(0,o.kt)("p",null,"Check if external names are resolving (in this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"www.google.com"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl run -it --rm --restart=Never busybox --image=busybox:1.28 -- nslookup www.google.com\n")),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Server:    10.43.0.10\nAddress 1: 10.43.0.10 kube-dns.kube-system.svc.cluster.local\n\nName:      www.google.com\nAddress 1: 2a00:1450:4009:80b::2004 lhr35s04-in-x04.1e100.net\nAddress 2: 216.58.211.100 ams15s32-in-f4.1e100.net\npod "busybox" deleted\n')),(0,o.kt)("p",null,"If you want to check resolving of domain names on all of the hosts, execute the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the following file as ",(0,o.kt)("inlineCode",{parentName:"p"},"ds-dnstest.yml")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'apiVersion: apps/v1\nkind: DaemonSet\nmetadata:\n  name: dnstest\nspec:\n  selector:\n      matchLabels:\n        name: dnstest\n  template:\n    metadata:\n      labels:\n        name: dnstest\n    spec:\n      tolerations:\n      - operator: Exists\n      containers:\n      - image: busybox:1.28\n        imagePullPolicy: Always\n        name: alpine\n        command: ["sh", "-c", "tail -f /dev/null"]\n        terminationMessagePath: /dev/termination-log\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Launch it using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl create -f ds-dnstest.yml"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Wait until ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl rollout status ds/dnstest -w")," returns: ",(0,o.kt)("inlineCode",{parentName:"p"},'daemon set "dnstest" successfully rolled out'),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DOMAIN")," to a fully qualified domain name (FQDN) that the host should be able to resolve (",(0,o.kt)("inlineCode",{parentName:"p"},"www.google.com")," is used as an example) and run the following command to let each container on every host resolve the configured domain name (it's a single line command)."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'export DOMAIN=www.google.com; echo "=> Start DNS resolve test"; kubectl get pods -l name=dnstest --no-headers -o custom-columns=NAME:.metadata.name,HOSTIP:.status.hostIP | while read pod host; do kubectl exec $pod -- /bin/sh -c "nslookup $DOMAIN > /dev/null 2>&1"; RC=$?; if [ $RC -ne 0 ]; then echo $host cannot resolve $DOMAIN; fi; done; echo "=> End DNS resolve test"\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When this command has finished running, the output indicating everything is correct is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"=> Start DNS resolve test\n=> End DNS resolve test\n")))),(0,o.kt)("p",null,"If you see error in the output, that means that the mentioned host(s) is/are not able to resolve the given FQDN."),(0,o.kt)("p",null,"Example error output of a situation where host with IP 209.97.182.150 had the UDP ports blocked."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"=> Start DNS resolve test\ncommand terminated with exit code 1\n209.97.182.150 cannot resolve www.google.com\n=> End DNS resolve test\n")),(0,o.kt)("p",null,"Cleanup the alpine DaemonSet by running ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl delete ds/dnstest"),"."),(0,o.kt)("h3",{id:"coredns-specific"},"CoreDNS specific"),(0,o.kt)("h4",{id:"check-coredns-logging"},"Check CoreDNS logging"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl -n kube-system logs -l k8s-app=kube-dns\n")),(0,o.kt)("h4",{id:"check-configuration"},"Check configuration"),(0,o.kt)("p",null,"CoreDNS configuration is stored in the configmap ",(0,o.kt)("inlineCode",{parentName:"p"},"coredns")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl -n kube-system get configmap coredns -o go-template={{.data.Corefile}}\n")),(0,o.kt)("h4",{id:"check-upstream-nameservers-in-resolvconf"},"Check upstream nameservers in resolv.conf"),(0,o.kt)("p",null,"By default, the configured nameservers on the host (in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),") will be used as upstream nameservers for CoreDNS. You can check this file on the host or run the following Pod with ",(0,o.kt)("inlineCode",{parentName:"p"},"dnsPolicy")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Default"),", which will inherit the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," from the host it is running on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl run -i --restart=Never --rm test-${RANDOM} --image=ubuntu --overrides=\'{"kind":"Pod", "apiVersion":"v1", "spec": {"dnsPolicy":"Default"}}\' -- sh -c \'cat /etc/resolv.conf\'\n')),(0,o.kt)("h4",{id:"enable-query-logging"},"Enable query logging"),(0,o.kt)("p",null,"Enabling query logging can be done by enabling the ",(0,o.kt)("a",{parentName:"p",href:"https://coredns.io/plugins/log/"},"log plugin")," in the Corefile configuration in the configmap ",(0,o.kt)("inlineCode",{parentName:"p"},"coredns"),". You can do so by using ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl -n kube-system edit configmap coredns")," or use the command below to replace the configuration in place:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl get configmap -n kube-system coredns -o json | sed -e 's_loadbalance_log\\\\n    loadbalance_g' | kubectl apply -f -\n")),(0,o.kt)("p",null,"All queries will now be logged and can be checked using the command in ",(0,o.kt)("a",{parentName:"p",href:"#check-coredns-logging"},"Check CoreDNS logging"),"."),(0,o.kt)("h3",{id:"kube-dns-specific"},"kube-dns specific"),(0,o.kt)("h4",{id:"check-upstream-nameservers-in-kubedns-container"},"Check upstream nameservers in kubedns container"),(0,o.kt)("p",null,"By default, the configured nameservers on the host (in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf"),") will be used as upstream nameservers for kube-dns. Sometimes the host will run a local caching DNS nameserver, which means the address in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," will point to an address in the loopback range (",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.0/8"),") which will be unreachable by the container. In case of Ubuntu 18.04, this is done by ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd-resolved"),". We detect if ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd-resolved")," is running, and will automatically use the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/resolv.conf")," file with the correct upstream nameservers (which is located at ",(0,o.kt)("inlineCode",{parentName:"p"},"/run/systemd/resolve/resolv.conf"),")."),(0,o.kt)("p",null,"Use the following command to check the upstream nameservers used by the kubedns container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl -n kube-system get pods -l k8s-app=kube-dns --no-headers -o custom-columns=NAME:.metadata.name,HOSTIP:.status.hostIP | while read pod host; do echo "Pod ${pod} on host ${host}"; kubectl -n kube-system exec $pod -c kubedns cat /etc/resolv.conf; done\n')),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Pod kube-dns-667c7cb9dd-z4dsf on host x.x.x.x\nnameserver 1.1.1.1\nnameserver 8.8.4.4\n")),(0,o.kt)("p",null,"If the output shows an address in the loopback range (",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.0/8"),"), you can correct this in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure the correct nameservers are listed in ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/resolv.conf")," on your nodes in the cluster, please consult your operating system documentation on how to do this. Make sure you execute this before provisioning a cluster, or reboot the nodes after making the modification."),(0,o.kt)("li",{parentName:"ul"},"Configure the ",(0,o.kt)("inlineCode",{parentName:"li"},"kubelet")," to use a different file for resolving names, by using ",(0,o.kt)("inlineCode",{parentName:"li"},"extra_args")," as shown below (where ",(0,o.kt)("inlineCode",{parentName:"li"},"/run/resolvconf/resolv.conf")," is the file with the correct nameservers):")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'services:\n  kubelet:\n    extra_args:\n      resolv-conf: "/run/resolvconf/resolv.conf"\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"As the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," is running inside a container, the path for files located in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr")," are in ",(0,o.kt)("inlineCode",{parentName:"p"},"/host/etc")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/host/usr")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"kubelet")," container.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/v2.6/pages-for-subheaders/cluster-configuration#editing-clusters-with-yaml"},"Editing Cluster as YAML")," how to apply this change. When the provisioning of the cluster has finished, you have to remove the kube-dns pod to activate the new setting in the pod:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl delete pods -n kube-system -l k8s-app=kube-dns\npod "kube-dns-5fd74c7488-6pwsf" deleted\n')),(0,o.kt)("p",null,"Try to resolve name again using ",(0,o.kt)("a",{parentName:"p",href:"#check-if-domain-names-are-resolving"},"Check if domain names are resolving"),"."),(0,o.kt)("p",null,"If you want to check the kube-dns configuration in your cluster (for example, to check if there are different upstream nameservers configured), you can run the following command to list the kube-dns configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'kubectl -n kube-system get configmap kube-dns -o go-template=\'{{range $key, $value := .data}}{{ $key }}{{":"}}{{ $value }}{{"\\n"}}{{end}}\'\n')),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'upstreamNameservers:["1.1.1.1"]\n')))}p.isMDXComponent=!0}}]);