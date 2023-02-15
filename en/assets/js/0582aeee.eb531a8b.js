"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[749],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),k=l,f=p["".concat(i,".").concat(k)]||p[k]||d[k]||o;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=k;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:l,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const o={title:"K8s-Lec2.1",date:new Date("2022-04-07T13:03:53.000Z"),draft:!1},a=void 0,c={unversionedId:"kubernetes/lec3.1",id:"kubernetes/lec3.1",title:"K8s-Lec2.1",description:"k8s \u6e90\u7801\u7b80\u4ecb",source:"@site/docs/kubernetes/lec3.1.md",sourceDirName:"kubernetes",slug:"/kubernetes/lec3.1",permalink:"/knowledge/en/docs/kubernetes/lec3.1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes/lec3.1.md",tags:[],version:"current",frontMatter:{title:"K8s-Lec2.1",date:"2022-04-07T13:03:53.000Z",draft:!1},sidebar:"tutorialSidebar",previous:{title:"K8s-Lec2.1",permalink:"/knowledge/en/docs/kubernetes/lec2.1"},next:{title:"LeetCode",permalink:"/knowledge/en/docs/category/leetcode"}},i={},u=[{value:"k8s \u6e90\u7801\u7b80\u4ecb",id:"k8s-\u6e90\u7801\u7b80\u4ecb",level:3},{value:"\u8d77\u6b65",id:"\u8d77\u6b65",level:3},{value:"\u4ee3\u7801\u6a21\u5757",id:"\u4ee3\u7801\u6a21\u5757",level:3},{value:"apiserver",id:"apiserver",level:3},{value:"cloudcfg",id:"cloudcfg",level:3},{value:"controller-manager",id:"controller-manager",level:3},{value:"kubelet",id:"kubelet",level:3},{value:"proxy",id:"proxy",level:3},{value:"cluster",id:"cluster",level:3}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"k8s-\u6e90\u7801\u7b80\u4ecb"},"k8s \u6e90\u7801\u7b80\u4ecb"),(0,l.kt)("p",null,"\u54b1\u4eec\u4ecek8s first comiit \u8bb2\u52301.23\uff0c\u8fd9\u79cd\u65f6\u95f4\u5e8f\u5217\u7684\u4e0a\u5e1d\u8bb2\u6cd5\uff0c\u8ba9\u4f60\u4eec\u4eff\u4f5b\u56de\u52302014\u5e74\u4e2d\uff0c\u53c2\u4e0e\u90a3\u4e00\u573a\u4e92\u8054\u7f51\u65f6\u4ee3\u7684\u6280\u672f\u9769\u547d\u3002\u4e0d\u8981\u62c5\u5fc3\u542c\u4e0d\u61c2\uff0c\u53ea\u8981\u5bf9\u4e8ego\u8bed\u8a00\u8bed\u6cd5\u6709\u57fa\u672c\u7684\u4e86\u89e3\uff0c\u540c\u65f6\u82b1\u8d39\u5927\u91cf\u65f6\u95f4\u8fdb\u53bb\uff0c\u4f60\u4e00\u5b9a\u80fd\u591f\u4ece13\u4ebf\u4e2d\u56fd\u4eba\u4e2d\u8131\u5f15\u800c\u51fa\uff0c\u8715\u53d8\u6210top softwere developer\uff01"),(0,l.kt)("h3",{id:"\u8d77\u6b65"},"\u8d77\u6b65"),(0,l.kt)("p",null,"\u5927\u5bb6\u5148\u4e0b\u8f7dk8s\u6e90\u7801\uff0c\u7136\u540e\u5c06\u4ee3\u7801\u56de\u9000\u5230\u7b2c\u4e00\u4e2acommit\uff0c\u6211\u4eec\u9996\u5148\u6765\u68b3\u7406\u4e0b\u8fd9\u4e2a\u7248\u672c\u7684\u4ee3\u7801\u76ee\u5f55"),(0,l.kt)("h3",{id:"\u4ee3\u7801\u6a21\u5757"},"\u4ee3\u7801\u6a21\u5757"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"apiserver"),(0,l.kt)("li",{parentName:"ul"},"cloudcfg"),(0,l.kt)("li",{parentName:"ul"},"controller-manager"),(0,l.kt)("li",{parentName:"ul"},"kubelet"),(0,l.kt)("li",{parentName:"ul"},"proxy"),(0,l.kt)("li",{parentName:"ul"},"cluster(sh)")),(0,l.kt)("h3",{id:"apiserver"},"apiserver"),(0,l.kt)("p",null,"\u5b9a\u4e49\u4e86\u4e00\u4e9bRestStorage \uff1a tasks,replicationControllers,services , endpointController \uff0c\u4e3b\u8981\u8d1f\u8d23\u63a5\u6536\u7528\u6237\u53d1\u51fa\u7684crud\uff0c\u5e95\u5c42\u4f9d\u8d56\u4e86etcd"),(0,l.kt)("h3",{id:"cloudcfg"},"cloudcfg"),(0,l.kt)("p",null,"kubectl \u7684\u524d\u8eab\uff0c\u8d1f\u8d23\u89e3\u6790\u547d\u4ee4\u884c\u53c2\u6570\uff0c\u548capiserver\u4ea4\u4e92"),(0,l.kt)("h3",{id:"controller-manager"},"controller-manager"),(0,l.kt)("p",null,"\u901a\u8fc7list\u548cwatch\u4ee5\u53calabel selector \u6765\u63a7\u5236tasks\u7684\u526f\u672c\u6570\u91cf"),(0,l.kt)("h3",{id:"kubelet"},"kubelet"),(0,l.kt)("p",null,"\u7528\u6765\u521b\u5efatask\uff0c\u67e5\u8be2task\uff0c\u5220\u9664task\uff0c\u5e95\u5c42\u548cdocker\u8fdb\u884c\u4ea4\u4e92"),(0,l.kt)("h3",{id:"proxy"},"proxy"),(0,l.kt)("p",null,"\u4e3b\u8981\u7528\u6765\u5b9e\u73b0servers\u548cendpoint\u7684\u6d41\u91cf\u8f6c\u53d1"),(0,l.kt)("h3",{id:"cluster"},"cluster"),(0,l.kt)("p",null,"\u8d1f\u8d23\u542f\u52a8\u865a\u62df\u673a\uff0c\u9632\u706b\u5899\uff0c\u7f51\u7edc\u521d\u59cb\u5316\uff0ck8s\u96c6\u7fa4\u7684\u5b89\u88c5\u5378\u8f7d\uff0c\u7b2c\u4e00\u7248\u4e3b\u8981\u5b9e\u73b0\u4e86\u5728\u8c37\u6b4c\u4e91\u4e0a\u542f\u52a8k8s"))}d.isMDXComponent=!0}}]);