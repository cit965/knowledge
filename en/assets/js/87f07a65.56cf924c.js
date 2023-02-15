"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),k=o,b=p["".concat(i,".").concat(k)]||p[k]||d[k]||a;return r?n.createElement(b,c(c({ref:t},u),{},{components:r})):n.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},7614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"K8s-Lec2.1",date:new Date("2022-03-23T12:31:47.000Z"),draft:!1,categories:"k8s"},c=void 0,l={unversionedId:"kubernetes/lec2.1",id:"kubernetes/lec2.1",title:"K8s-Lec2.1",description:"1.1 container + orchestration",source:"@site/docs/kubernetes/lec2.1.md",sourceDirName:"kubernetes",slug:"/kubernetes/lec2.1",permalink:"/knowledge/en/docs/kubernetes/lec2.1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes/lec2.1.md",tags:[],version:"current",frontMatter:{title:"K8s-Lec2.1",date:"2022-03-23T12:31:47.000Z",draft:!1,categories:"k8s"},sidebar:"tutorialSidebar",previous:{title:"K8s-Lec1.1",permalink:"/knowledge/en/docs/kubernetes/lec1.1"},next:{title:"K8s-Lec2.1",permalink:"/knowledge/en/docs/kubernetes/lec3.1"}},i={},s=[{value:"1.1 container + orchestration",id:"11-container--orchestration",level:3},{value:"1.2 container",id:"12-container",level:3},{value:"1.2.1 \u4ec0\u4e48\u662f\u6253\u5305",id:"121-\u4ec0\u4e48\u662f\u6253\u5305",level:4},{value:"1.2.2 \u4e3a\u4ec0\u4e48\u9700\u8981\u6253\u5305",id:"122-\u4e3a\u4ec0\u4e48\u9700\u8981\u6253\u5305",level:4},{value:"1.2.3 \u4e91\u539f\u751f\u5982\u4f55\u6253\u5305",id:"123-\u4e91\u539f\u751f\u5982\u4f55\u6253\u5305",level:4},{value:"1.3 orchestration",id:"13-orchestration",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"11-container--orchestration"},"1.1 container + orchestration"),(0,o.kt)("p",null,"\u5bb9\u5668+\u7f16\u6392\uff0c\u5f88\u591ak8s\u4e66\u7b2c\u4e8c\u7ae0\u90fd\u4f1a\u8bb2\u5bb9\u5668\uff0c\u4e3a\u4ec0\u4e48\u5927\u5bb6\u90fd\u8981\u8bb2\u5462\uff1f\u56e0\u4e3ak8s=container + orchestration "),(0,o.kt)("p",null,"Kubernetes \u662f\u4e00\u4e2a\u521b\u5efa\u3001\u90e8\u7f72\u548c\u7ba1\u7406\u5206\u5e03\u5f0f\u5e94\u7528\u7a0b\u5e8f\u7684\u5e73\u53f0\u3002\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u6709\u8bb8\u591a\u4e0d\u540c\u7684\u5f62\u72b6\u548c\u5927\u5c0f\uff0c\u4f46\u6700\u7ec8\uff0c\u5b83\u4eec\u90fd\u7531\u4e00\u4e2a\u6216\u591a\u4e2a\u5728\u5355\u72ec\u673a\u5668\u4e0a\u8fd0\u884c\u7684\u7a0b\u5e8f\u7ec4\u6210\u3002\u8fd9\u4e9b\u7a0b\u5e8f\u63a5\u53d7\u8f93\u5165\uff0c\u64cd\u4f5c\u6570\u636e\uff0c\u7136\u540e\u8fd4\u56de\u7ed3\u679c\u3002\u5728\u8003\u8651\u6784\u5efa\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e4b\u524d\uff0c\u6211\u4eec\u5fc5\u987b\u9996\u5148\u8003\u8651\u5982\u4f55\u6784\u5efa\u5305\u542b\u8fd9\u4e9b\u7a0b\u5e8f\u5e76\u6784\u6210\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u5e94\u7528\u7a0b\u5e8f\u5bb9\u5668\u6620\u50cf\u3002"),(0,o.kt)("h3",{id:"12-container"},"1.2 container"),(0,o.kt)("h4",{id:"121-\u4ec0\u4e48\u662f\u6253\u5305"},"1.2.1 \u4ec0\u4e48\u662f\u6253\u5305"),(0,o.kt)("p",null,"\u5e94\u7528\u7a0b\u5e8f\u901a\u5e38\u7531\u8bed\u8a00\u8fd0\u884c\u65f6\u3001\u5e93\u548c\u6e90\u4ee3\u7801\u7ec4\u6210\u3002\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u4f9d\u8d56\u4e8e\u5916\u90e8\u5171\u4eab\u5e93\uff0c\u5982 libc \u548c libssl\u3002\u8fd9\u4e9b\u5916\u90e8\u5e93\u901a\u5e38\u4f5c\u4e3a\u60a8\u5df2\u7ecf\u5b89\u88c5\u5728\u7279\u5b9a\u673a\u5668\u4e0a\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u7684\u5171\u4eab\u7ec4\u4ef6\u63d0\u4f9b "),(0,o.kt)("h4",{id:"122-\u4e3a\u4ec0\u4e48\u9700\u8981\u6253\u5305"},"1.2.2 \u4e3a\u4ec0\u4e48\u9700\u8981\u6253\u5305"),(0,o.kt)("p",null,"\u5f53\u5728\u7a0b\u5e8f\u5458\u7b14\u8bb0\u672c\u7535\u8111\u4e0a\u5f00\u53d1\u7684\u5e94\u7528\u7a0b\u5e8f\u4f9d\u8d56\u4e8e\u5171\u4eab\u5e93\u65f6\uff0c\u8fd9\u79cd\u5bf9\u5171\u4eab\u5e93\u7684\u4f9d\u8d56\u4f1a\u5bfc\u81f4\u95ee\u9898\uff0c\u800c\u5f53\u7a0b\u5e8f\u88ab\u63a8\u5e7f\u5230\u751f\u4ea7\u64cd\u4f5c\u7cfb\u7edf\u65f6\uff0c\u5171\u4eab\u5e93\u5c31\u4e0d\u53ef\u7528\u4e86\u3002\u5373\u4f7f\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u5171\u4eab\u5b8c\u5168\u76f8\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff0c\u5f53\u5f00\u53d1\u4eba\u5458\u5fd8\u8bb0\u5728\u4ed6\u4eec\u90e8\u7f72\u5230\u751f\u4ea7\u73af\u5883\u7684\u5305\u4e2d\u5305\u542b\u4f9d\u8d56\u7684\u8d44\u4ea7\u6587\u4ef6\u65f6\uff0c\u4e5f\u4f1a\u51fa\u73b0\u95ee\u9898 "),(0,o.kt)("p",null,"\u5728\u5904\u7406\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c\u5c06\u5b83\u4eec\u6253\u5305\u4ee5\u4fbf\u4e8e\u4e0e\u5176\u4ed6\u4eba\u5171\u4eab\u901a\u5e38\u662f\u6709\u5e2e\u52a9\u7684\u3002\u591a\u6570\u4eba\u4f7f\u7528\u7684\u5bb9\u5668\u9ed8\u8ba4\u5de5\u5177 Docker \u53ef\u4ee5\u8f7b\u677e\u5730\u6253\u5305\u53ef\u6267\u884c\u6587\u4ef6\u5e76\u5c06\u5176\u63a8\u9001\u5230\u8fdc\u7a0b\u6ce8\u518c\u8868\uff0c\u4ee5\u4fbf\u5176\u4ed6\u4eba\u968f\u540e\u53ef\u4ee5\u4f7f\u7528\u3002\u5728\u64b0\u5199\u672c\u6587\u65f6\uff0c\u5bb9\u5668\u6ce8\u518c\u5728\u6240\u6709\u4e3b\u8981\u7684\u516c\u5171\u4e91\u4e2d\u90fd\u53ef\u7528\uff0c\u5728\u4e91\u4e2d\u6784\u5efa\u6620\u50cf\u7684\u670d\u52a1\u5728\u5176\u4e2d\u7684\u8bb8\u591a\u4e91\u4e2d\u4e5f\u53ef\u7528\u3002\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5f00\u6e90\u6216\u5546\u4e1a\u7cfb\u7edf\u8fd0\u884c\u60a8\u81ea\u5df1\u7684\u6ce8\u518c\u8868\u3002\u8fd9\u4e9b\u6ce8\u518c\u4e2d\u5fc3\u4f7f\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u5730\u7ba1\u7406\u548c\u90e8\u7f72\u79c1\u6709\u6620\u50cf\uff0c\u800c\u955c\u50cf\u4ed3\u5e93\u5219\u53ef\u4ee5\u8f7b\u677e\u5730\u4e0e\u6301\u7eed\u4ea4\u4ed8\u7cfb\u7edf\u96c6\u6210 "),(0,o.kt)("p",null,"\u4e0b\u9762\u4e24\u5f20\u5bf9\u6bd4\u56fe\u89e3\u91ca\u4e86docker\u6253\u5305\u7684\u6700\u4e3b\u8981\u7684\u597d\u5904\uff1a\n",(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/cit965/blog-picture/master/Screen%20Shot%202022-03-23%20at%206.07.17%20PM.png",alt:null}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/cit965/blog-picture/master/Screen%20Shot%202022-03-23%20at%206.08.28%20PM.png",alt:null})),(0,o.kt)("h4",{id:"123-\u4e91\u539f\u751f\u5982\u4f55\u6253\u5305"},"1.2.3 \u4e91\u539f\u751f\u5982\u4f55\u6253\u5305"),(0,o.kt)("p",null,"\u4f7f\u7528docker ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/"},"https://docs.docker.com/get-started/")),(0,o.kt)("h3",{id:"13-orchestration"},"1.3 orchestration"),(0,o.kt)("p",null,"\u4e3a\u4ec0\u4e48\u9700\u8981\u7f16\u6392"),(0,o.kt)("p",null,"\u5bb9\u5668\u7f16\u6392\u4f7f\u5bb9\u5668\u7684\u90e8\u7f72\u3001\u7ba1\u7406\u3001\u4f38\u7f29\u548c\u8054\u7f51\u81ea\u52a8\u5316\u3002\u9700\u8981\u90e8\u7f72\u548c\u7ba1\u7406\u6210\u767e\u4e0a\u5343\u4e2a Linux \u5bb9\u5668\u548c\u4e3b\u673a\u7684\u4f01\u4e1a\u53ef\u4ee5\u4ece\u5bb9\u5668\u7f16\u6392\u4e2d\u83b7\u76ca"),(0,o.kt)("p",null,"Kubernetes \u6d88\u9664\u4e86\u90e8\u7f72\u548c\u6269\u5c55\u5bb9\u5668\u5316\u5e94\u7528\u7a0b\u5e8f\u6240\u6d89\u53ca\u7684\u8bb8\u591a\u624b\u52a8\u6d41\u7a0b\u3002\u60a8\u53ef\u4ee5\u5c06\u8fd0\u884c Linux \u5bb9\u5668\u7684\u4e3b\u673a\u7ec4(\u7269\u7406\u6216\u865a\u62df\u673a)\u96c6\u7fa4\u5728\u4e00\u8d77\uff0c\u800c Kubernetes \u4e3a\u60a8\u63d0\u4f9b\u4e86\u7b80\u5355\u6709\u6548\u5730\u7ba1\u7406\u8fd9\u4e9b\u96c6\u7fa4\u7684\u5e73\u53f0\u3002\u66f4\u5e7f\u6cdb\u5730\u8bf4\uff0c\u5b83\u53ef\u4ee5\u5e2e\u52a9\u60a8\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u5b8c\u5168\u5b9e\u73b0\u548c\u4f9d\u8d56\u57fa\u4e8e\u5bb9\u5668\u7684\u57fa\u7840\u7ed3\u6784"),(0,o.kt)("p",null,"\u5f53\u60a8\u4f7f\u7528\u5bb9\u5668\u7f16\u6392\u5de5\u5177(\u5982 Kubernetes)\u65f6\uff0c\u60a8\u5c06\u4f7f\u7528 YAML \u6216 JSON \u6587\u4ef6\u63cf\u8ff0\u5e94\u7528\u7a0b\u5e8f\u7684\u914d\u7f6e\u3002\u914d\u7f6e\u6587\u4ef6\u544a\u8bc9\u7ec4\u6001\u7ba1\u7406\u5de5\u5177\u5728\u54ea\u91cc\u53ef\u4ee5\u627e\u5230\u5bb9\u5668\u6620\u50cf\uff0c\u5982\u4f55\u5efa\u7acb\u7f51\u7edc\uff0c\u4ee5\u53ca\u5728\u54ea\u91cc\u5b58\u50a8\u65e5\u5fd7 "),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 Kubernetes \u6a21\u5f0f\u6765\u7ba1\u7406\u57fa\u4e8e\u5bb9\u5668\u7684\u5e94\u7528\u7a0b\u5e8f\u548c\u670d\u52a1\u7684\u914d\u7f6e\u3001\u751f\u547d\u5468\u671f\u548c\u89c4\u6a21\u3002\u8fd9\u4e9b\u53ef\u91cd\u590d\u7684\u6a21\u5f0f\u662f Kubernetes \u5f00\u53d1\u4eba\u5458\u6784\u5efa\u5b8c\u6574\u7cfb\u7edf\u6240\u9700\u7684\u5de5\u5177 "),(0,o.kt)("p",null,"\u4f7f\u7528k8s ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-interactive/"},"https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-interactive/")))}d.isMDXComponent=!0}}]);