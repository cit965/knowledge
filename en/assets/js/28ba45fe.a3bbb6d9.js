"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(n),d=l,m=s["".concat(p,".").concat(d)]||s[d]||k[d]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const a={title:"\u64cd\u4f5c\u7cfb\u7edf-lec1",date:new Date("2021-12-18T03:59:38.000Z"),draft:!1,categories:"os"},o=void 0,i={unversionedId:"linux/lec1",id:"linux/lec1",title:"\u64cd\u4f5c\u7cfb\u7edf-lec1",description:"\u64cd\u4f5c\u7cfb\u7edf",source:"@site/docs/linux/lec1.md",sourceDirName:"linux",slug:"/linux/lec1",permalink:"/knowledge/en/docs/linux/lec1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/lec1.md",tags:[],version:"current",frontMatter:{title:"\u64cd\u4f5c\u7cfb\u7edf-lec1",date:"2021-12-18T03:59:38.000Z",draft:!1,categories:"os"},sidebar:"tutorialSidebar",previous:{title:"Linux",permalink:"/knowledge/en/docs/category/linux"},next:{title:"\u64cd\u4f5c\u7cfb\u7edf-lec2",permalink:"/knowledge/en/docs/linux/lec2"}},p={},c=[{value:"\u64cd\u4f5c\u7cfb\u7edf",id:"\u64cd\u4f5c\u7cfb\u7edf",level:3},{value:"\u64cd\u4f5c\u7cfb\u7edf\u7684\u4efb\u52a1",id:"\u64cd\u4f5c\u7cfb\u7edf\u7684\u4efb\u52a1",level:3},{value:"\u64cd\u4f5c\u7cfb\u7edf\u7ed3\u6784",id:"\u64cd\u4f5c\u7cfb\u7edf\u7ed3\u6784",level:3},{value:"\u6388\u8bfe\u5185\u5bb9",id:"\u6388\u8bfe\u5185\u5bb9",level:3},{value:"fork",id:"fork",level:3},{value:"\u91cd\u5b9a\u5411",id:"\u91cd\u5b9a\u5411",level:3},{value:"lab\u5b9e\u9a8c",id:"lab\u5b9e\u9a8c",level:3}],u={toc:c},s="wrapper";function k(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u7cfb\u7edf"},"\u64cd\u4f5c\u7cfb\u7edf"),(0,l.kt)("p",null,"\u5927\u5bb6\u597d\uff0c\u6b22\u8fce\u6765\u5230CIT-\u64cd\u4f5c\u7cfb\u7edf\u8fd9\u95e8\u8bfe\u7a0b\u3002\u7406\u89e3\u64cd\u4f5c\u7cfb\u7edf\u7684\u8bbe\u8ba1\u548c\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u8bbe\u8ba1\u662f\u6307\u6574\u4f53\u7684\u7ed3\u6784\uff0c\u5b9e\u73b0\u662f\u6307\u5177\u4f53\u7684\u4ee3\u7801\u957f\u4ec0\u4e48\u6837\u3002\u5bf9\u4e8e\u8fd9\u4e24\u8005\uff0c\u6211\u90fd\u4f1a\u82b1\u8d39\u5927\u91cf\u65f6\u95f4\u8bb2\u89e3\u3002\u4e3a\u4e86\u6df1\u5165\u4e86\u89e3\u5177\u4f53\u7684\u5de5\u4f5c\u539f\u7406\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u5c0f\u7684\u53eb\u505aXV6\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u83b7\u5f97\u5b9e\u9645\u52a8\u624b\u7ecf\u9a8c\u3002\u901a\u8fc7\u7814\u7a76\u73b0\u6709\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5e76\u7ed3\u5408\u8bfe\u7a0b\u914d\u5957\u7684\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u83b7\u5f97\u6269\u5c55\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4fee\u6539\u5e76\u63d0\u5347\u64cd\u4f5c\u7cfb\u7edf\u7684\u76f8\u5173\u7ecf\u9a8c\uff0c\u5e76\u4e14\u80fd\u591f\u901a\u8fc7\u64cd\u4f5c\u7cfb\u7edf\u63a5\u53e3\uff0c\u7f16\u5199\u7cfb\u7edf\u8f6f\u4ef6"),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u7cfb\u7edf\u7684\u4efb\u52a1"},"\u64cd\u4f5c\u7cfb\u7edf\u7684\u4efb\u52a1"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u4e2a\u5c31\u662f\u62bd\u8c61\u786c\u4ef6\u3002\u901a\u5e38\u6765\u8bf4\uff0c\u4f60\u4f1a\u4e70\u4e00\u4e2a\u8ba1\u7b97\u673a\uff0c\u91cc\u9762\u5305\u542b\u4e86CPU\uff0c\u5185\u5b58\uff0c\u4f46\u662f\u8fd9\u662f\u4e00\u79cd\u975e\u5e38\u4f4e\u5c42\u7ea7\u7684\u8d44\u6e90\u3002\u5e78\u597d\u6211\u4eec\u6709\u4e00\u4e9b\u5e94\u7528\u7a0b\u5e8f\u5b9e\u73b0\u4e86\u9ad8\u5c42\u7ea7\u7684\u63a5\u53e3\u548c\u62bd\u8c61\uff0c\u4f8b\u5982\u8fdb\u7a0b\uff0c\u6587\u4ef6\u7cfb\u7edf\u3002\u8fd9\u4e9b\u9ad8\u5c42\u7ea7\u7684\u63a5\u53e3\u548c\u62bd\u8c61 ",(0,l.kt)("strong",{parentName:"p"},"\uff08Abstraction\uff09")," \u65b9\u4fbf\u4e86\u5e94\u7528\u7684\u5f00\u53d1\uff0c\u4e5f\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u79fb\u690d\u6027\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u64cd\u4f5c\u7cfb\u7edf\u7684\u53e6\u4e00\u4e2a\u91cd\u8981\u7684\u4efb\u52a1\u662f\uff1a\u5728\u591a\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\u5171\u7528\u786c\u4ef6\u8d44\u6e90\u3002\u4f60\u53ef\u4ee5\u5728\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u540c\u65f6\u8fd0\u884c\u6587\u672c\u7f16\u8f91\u5668\uff0c\u7a0b\u5e8f\u7f16\u8bd1\u5668\uff0c\u591a\u4e2a\u6570\u636e\u5e93\u7b49\u7b49\u3002\u64cd\u4f5c\u7cfb\u7edf\u80fd\u975e\u5e38\u795e\u5947\u7684\u5728\u4e0d\u76f8\u4e92\u5e72\u6270\u7684\u524d\u63d0\u4e0b\uff0c\u540c\u65f6\u8fd0\u884c\u8fd9\u4e9b\u7a0b\u5e8f\u3002\u8fd9\u91cc\u901a\u5e38\u88ab\u79f0\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"(multiplex)"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u56e0\u4e3a\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u53ef\u80fd\u540c\u65f6\u8fd0\u884c\u5f88\u591a\u7a0b\u5e8f\uff0c\u5373\u4f7f\u7a0b\u5e8f\u51fa\u73b0\u4e86\u6545\u969c\uff0c\u591a\u4e2a\u7a0b\u5e8f\u4e4b\u95f4\u4e92\u4e0d\u5e72\u6270\u5c31\u53d8\u5f97\u975e\u5e38\u91cd\u8981\u3002\u6240\u4ee5\u8fd9\u91cc\u9700\u8981\u9694\u79bb\u6027 ",(0,l.kt)("strong",{parentName:"p"},"(Isolation)"),"\uff0c\u4e0d\u540c\u7684\u6d3b\u52a8\u4e4b\u95f4\u4e0d\u80fd\u76f8\u4e92\u5e72\u6270\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f46\u662f\u53e6\u4e00\u65b9\u4fbf\uff0c\u4e0d\u540c\u7684\u6d3b\u52a8\u4e4b\u95f4\u6709\u65f6\u53c8\u60f3\u8981\u76f8\u4e92\u5f71\u54cd\uff0c\u6bd4\u5982\u8bf4\u6570\u636e\u4ea4\u4e92\uff0c\u534f\u540c\u5b8c\u6210\u4efb\u52a1\u7b49\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u6211\u901a\u8fc7\u6587\u672c\u7f16\u8f91\u5668\u521b\u5efa\u4e86\u4e00\u4e2a\u6587\u4ef6\uff0c\u5e76\u4e14\u6211\u5e0c\u671b\u6211\u7684\u7f16\u8bd1\u5668\u80fd\u8bfb\u53d6\u6587\u4ef6\uff0c\u6211\u7edd\u5bf9\u60f3\u8981\u6570\u636e\u80fd\u5171\u4eab\u3002\u6240\u4ee5\uff0c\u6211\u4eec\u5e0c\u671b\u80fd\u5728\u9700\u8981\u7684\u65f6\u5019\u5b9e\u73b0\u5171\u4eab ",(0,l.kt)("strong",{parentName:"p"},"\uff08Sharing\uff09"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f46\u662f\u5728\u5f88\u591a\u573a\u666f\u4e0b\uff0c\u7528\u6237\u5e76\u4e0d\u60f3\u8981\u5171\u4eab\uff0c\u6bd4\u5982\u4f60\u767b\u5f55\u5230\u4e86\u4e00\u4e2a\u516c\u5171\u7684\u8ba1\u7b97\u673a\uff0c\u4f8b\u5982Athena\uff0c\u4f60\u4e0d\u4f1a\u60f3\u8981\u5176\u4ed6\u4eba\u6765\u8bfb\u53d6\u4f60\u7684\u6587\u4ef6\u3002\u6240\u4ee5\u5728\u5171\u4eab\u7684\u540c\u65f6\uff0c\u6211\u4eec\u4e5f\u5e0c\u671b\u5728\u6ca1\u6709\u5fc5\u8981\u7684\u65f6\u5019\u4e0d\u5171\u4eab\u3002\u8fd9\u91cc\u6211\u4eec\u79f0\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"(Security)")," \u6216\u8005Permission System\u6216\u8005\u662fAccess Control System\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u53e6\u4e00\u4e2a\u4eba\u4eec\u8ba4\u4e3a\u64cd\u4f5c\u7cfb\u7edf\u5e94\u8be5\u5177\u6709\u7684\u4ef7\u503c\u662f\uff1a\u5982\u679c\u4f60\u5728\u786c\u4ef6\u4e0a\u82b1\u8d39\u4e86\u5927\u91cf\u7684\u91d1\u94b1\uff0c\u4f60\u4f1a\u671f\u671b\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u62e5\u6709\u786c\u4ef6\u5e94\u8be5\u63d0\u4f9b\u7684\u5b8c\u6574\u6027\u80fd\uff0c\u4f46\u662f\u5f88\u591a\u65f6\u5019\u4f60\u53ea\u8d1f\u8d23\u5e94\u7528\u7a0b\u5e8f\u7f16\u7a0b\uff0c\u4f60\u4f1a\u671f\u671b\u64cd\u4f5c\u7cfb\u7edf\u4e5f\u5fc5\u987b\u4fdd\u8bc1\u81ea\u8eab\u63d0\u4f9b\u7684\u670d\u52a1\u4e0d\u4f1a\u963b\u6b62\u5e94\u7528\u7a0b\u5e8f\u83b7\u5f97\u9ad8\u6027\u80fd\u3002\u6240\u4ee5\u64cd\u4f5c\u7cfb\u7edf\u9700\u8981\u81f3\u5c11\u4e0d\u963b\u6b62\u5e94\u7528\u7a0b\u5e8f\u83b7\u5f97\u9ad8\u6027\u80fd\uff0c\u751a\u81f3\u9700\u8981\u5e2e\u52a9\u5e94\u7528\u7a0b\u5e8f\u83b7\u5f97\u9ad8\u6027\u80fd ",(0,l.kt)("strong",{parentName:"p"},"\uff08Performance\uff09"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6700\u540e\uff0c\u5bf9\u4e8e\u5927\u90e8\u5206\u64cd\u4f5c\u7cfb\u7edf\uff0c\u5fc5\u987b\u8981\u652f\u6301\u5927\u91cf\u4e0d\u540c\u7c7b\u578b\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u6216\u8bb8\u8fd9\u662f\u4e00\u4e2a\u7b14\u8bb0\u672c\uff0c\u6b63\u5728\u8fd0\u884c\u6587\u672c\u7f16\u8f91\u5668\uff0c\u6b63\u5728\u8fd0\u884c\u6e38\u620f\uff0c\u6216\u8bb8\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u9700\u8981\u652f\u6301\u6570\u636e\u5e93\u670d\u52a1\u5668\u548c\u4e91\u8ba1\u7b97\u3002\u901a\u5e38\u6765\u8bf4\uff0c\u8bbe\u8ba1\u5e76\u6784\u9020\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u4ee3\u4ef7\u662f\u975e\u5e38\u5927\u7684\uff0c\u6240\u4ee5\u4eba\u4eec\u603b\u662f\u5e0c\u671b\u5728\u76f8\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\uff0c\u4f8b\u5982Linux\uff0c\u8fd0\u884c\u5927\u91cf\u7684\u4efb\u52a1\u3002\u6211\u8ba4\u4e3a\u5927\u90e8\u5206\u4eba\u90fd\u5df2\u7ecf\u8dd1\u8fc7Linux\uff0c\u5e76\u4f7f\u7528\u4e86\u6211\u521a\u521a\u63cf\u8ff0\u7684\u6240\u6709\u7684\u573a\u666f\u3002\u6240\u4ee5\uff0c\u540c\u4e00\u4e2a\u64cd\u4f5c\u7cfb\u7edf\u9700\u8981\u80fd\u591f\u652f\u6301\u5927\u91cf\u4e0d\u540c\u7684\u7528\u6237\u573a\u666f ",(0,l.kt)("strong",{parentName:"p"},"(range of uses)")))),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u7cfb\u7edf\u7ed3\u6784"},"\u64cd\u4f5c\u7cfb\u7edf\u7ed3\u6784"),(0,l.kt)("p",null,"\u8fc7\u53bb\u51e0\u5341\u5e74\uff0c\u4eba\u4eec\u5c06\u4e00\u4e9b\u5206\u5c42\u7684\u8bbe\u8ba1\u601d\u60f3\u52a0\u5165\u5230\u64cd\u4f5c\u7cfb\u7edf\u4e2d\uff0c\u5e76\u8fd0\u884c\u7684\u5f88\u597d\u3002\u6211\u5c06\u4f1a\u4e3a\u4f60\u5217\u51fa\u64cd\u4f5c\u7cfb\u7edf\u7ecf\u5178\u7684\u7ec4\u7ec7\u7ed3\u6784\uff0c\u8fd9\u4e2a\u7ec4\u7ec7\u7ed3\u6784\u540c\u65f6\u4e5f\u662f\u8fd9\u95e8\u8bfe\u7a0b\u7684\u4e3b\u8981\u5185\u5bb9\uff0c\u8fd9\u91cc\u7684\u7ec4\u7ec7\u7ed3\u6784\u5bf9\u4e8e\u64cd\u4f5c\u7cfb\u7edf\u6765\u8bf4\u8fd8\u662f\u633a\u5e38\u89c1\u7684"),(0,l.kt)("p",null,"\u5f53\u8fdb\u7a0b\u9700\u8981\u8c03\u7528\u5185\u6838\u670d\u52a1\u65f6\uff0c\u5b83\u4f1a\u8c03\u7528\u7cfb\u7edf\u8c03\u7528\uff0c\u8fd9\u662f\u64cd\u4f5c\u7cfb\u7edf\u63a5\u53e3\u4e2d\u7684\u8c03\u7528\u4e4b\u4e00\u3002 \u7cfb\u7edf\u8c03\u7528\u8fdb\u5165\u5185\u6838\uff1b \u5185\u6838\u6267\u884c\u670d\u52a1\u5e76\u8fd4\u56de\u3002 \u56e0\u6b64\uff0c\u4e00\u4e2a\u8fdb\u7a0b\u5728\u7528\u6237\u7a7a\u95f4\u548c\u5185\u6838\u7a7a\u95f4\u4e4b\u95f4\u4ea4\u66ff\u6267\u884c"),(0,l.kt)("p",null,"\u6211\u4eec\u540c\u65f6\u4e5f\u5bf9\u5e94\u7528\u7a0b\u5e8f\u662f\u5982\u4f55\u4e0eKernel\u4ea4\u4e92\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u63a5\u53e3\u957f\u4ec0\u4e48\u6837\u611f\u5174\u8da3\u3002\u8fd9\u91cc\u901a\u5e38\u6210\u4e3aKernel\u7684API\uff0c\u5b83\u51b3\u5b9a\u4e86\u5e94\u7528\u7a0b\u5e8f\u5982\u4f55\u8bbf\u95eeKernel\u3002\u901a\u5e38\u6765\u8bf4\uff0c\u8fd9\u91cc\u662f\u901a\u8fc7\u6240\u8c13\u7684\u7cfb\u7edf\u8c03\u7528\uff08System Call\uff09\u6765\u5b8c\u6210\u3002\u7cfb\u7edf\u8c03\u7528\u4e0e\u7a0b\u5e8f\u4e2d\u7684\u51fd\u6570\u8c03\u7528\u770b\u8d77\u6765\u662f\u4e00\u6837\u7684\uff0c\u4f46\u533a\u522b\u662f\u7cfb\u7edf\u8c03\u7528\u4f1a\u5b9e\u9645\u8fd0\u884c\u5230\u7cfb\u7edf\u5185\u6838\u4e2d\uff0c\u5e76\u6267\u884c\u5185\u6838\u4e2d\u5bf9\u4e8e\u7cfb\u7edf\u8c03\u7528\u7684\u5b9e\u73b0\u3002\u5728\u8fd9\u95e8\u8bfe\u7a0b\u7684\u540e\u9762\uff0c\u6211\u4f1a\u8be6\u7ec6\u4ecb\u7ecd\u7cfb\u7edf\u8c03\u7528\u3002\u73b0\u5728\uff0c\u6211\u53ea\u4f1a\u4ecb\u7ecd\u4e00\u4e9b\u7cfb\u7edf\u8c03\u7528\u5728\u5e94\u7528\u7a0b\u5e8f\u4e2d\u662f\u957f\u4ec0\u4e48\u6837\u7684"),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a\u4f8b\u5b50\u662f\uff0c\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u9700\u8981\u6253\u5f00\u4e00\u4e2a\u6587\u4ef6\uff0c\u5b83\u4f1a\u8c03\u7528\u540d\u4e3aopen\u7684\u7cfb\u7edf\u8c03\u7528\uff0c\u5e76\u4e14\u628a\u6587\u4ef6\u540d\u4f5c\u4e3a\u53c2\u6570\u4f20\u7ed9open\u3002\u5047\u8bbe\u73b0\u5728\u8981\u6253\u5f00\u4e00\u4e2a\u540d\u4e3a\u201cout\u201d\u7684\u6587\u4ef6\uff0c\u90a3\u4e48\u4f1a\u5c06\u6587\u4ef6\u540d\u201cout\u201d\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\u3002\u540c\u65f6\u6211\u4eec\u8fd8\u5e0c\u671b\u5199\u5165\u6570\u636e\uff0c\u90a3\u4e48\u8fd8\u4f1a\u6709\u4e00\u4e2a\u989d\u5916\u7684\u53c2\u6570\uff0c\u5728\u8fd9\u91cc\u8fd9\u4e2a\u53c2\u6570\u7684\u503c\u662f1\uff0c\u8868\u660e\u6211\u60f3\u8981\u5199\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u770b\u8d77\u6765\u50cf\u662f\u4e2a\u51fd\u6570\u8c03\u7528\uff0c\u4f46\u662fopen\u662f\u4e00\u4e2a\u7cfb\u7edf\u8c03\u7528\uff0c\u5b83\u4f1a\u8df3\u5230Kernel\uff0cKernel\u53ef\u4ee5\u83b7\u53d6\u5230open\u7684\u53c2\u6570\uff0c\u6267\u884c\u4e00\u4e9b\u5b9e\u73b0\u4e86open\u7684Kernel\u4ee3\u7801\uff0c\u6216\u8bb8\u4f1a\u4e0e\u78c1\u76d8\u6709\u4e00\u4e9b\u4ea4\u4e92\uff0c\u6700\u540e\u8fd4\u56de\u4e00\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\u5bf9\u8c61\u3002\u4e0a\u56fe\u4e2d\u7684fd\u5168\u79f0\u5c31\u662ffile descriptor\u3002\u4e4b\u540e\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u6587\u4ef6\u63cf\u8ff0\u7b26\u4f5c\u4e3ahandle\uff0c\u6765\u8868\u793a\u76f8\u5e94\u6253\u5f00\u7684\u6587\u4ef6\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u5411\u6587\u4ef6\u5199\u5165\u6570\u636e\uff0c\u76f8\u5e94\u7684\u7cfb\u7edf\u8c03\u7528\u662fwrite\u3002\u4f60\u9700\u8981\u5411write\u4f20\u9012\u4e00\u4e2a\u7531open\u8fd4\u56de\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u4f5c\u4e3a\u53c2\u6570\u3002\u4f60\u8fd8\u9700\u8981\u5411write\u4f20\u9012\u4e00\u4e2a\u6307\u5411\u8981\u5199\u5165\u6570\u636e\u7684\u6307\u9488\uff08\u6570\u636e\u901a\u5e38\u662fchar\u578b\u5e8f\u5217\uff09\uff0c\u5728C\u8bed\u8a00\u4e2d\uff0c\u53ef\u4ee5\u7b80\u5355\u4f20\u9012\u4e00\u4e2a\u53cc\u5f15\u53f7\u8868\u793a\u7684\u5b57\u7b26\u4e32\uff08\u4e0b\u56fe\u4e2d\u7684\\n\u8868\u793a\u662f\u6362\u884c\uff09\u3002\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u4f60\u60f3\u8981\u5199\u5165\u5b57\u7b26\u7684\u6570\u91cf\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e9b\u7cfb\u7edf\u8c03\u7528\u770b\u8d77\u6765\u5c31\u8ddf\u666e\u901a\u7684\u51fd\u6570\u8c03\u7528\u4e00\u6837\u3002\u7cfb\u7edf\u8c03\u7528\u4e0d\u540c\u7684\u5730\u65b9\u662f\uff0c\u5b83\u6700\u7ec8\u4f1a\u8df3\u5230\u7cfb\u7edf\u5185\u6838\u4e2d"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/cit965/blog-picture/master/Screen%20Shot%202021-12-18%20at%2012.07.14%20PM.png",alt:null})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'fd = open("out",1)\nwrite(fd,"hello\\n",6)\n')),(0,l.kt)("h3",{id:"\u6388\u8bfe\u5185\u5bb9"},"\u6388\u8bfe\u5185\u5bb9"),(0,l.kt)("p",null,"\u6388\u8bfe\u5185\u5bb9\u662f\u8fd9\u95e8\u8bfe\u7a0b\u7684\u4e00\u5927\u90e8\u5206\uff0c\u6211\u4f1a\u8bb2\u89e3\u64cd\u4f5c\u7cfb\u7edf\u7684\u57fa\u672c\u6982\u5ff5\u3002\u6709\u51e0\u8282\u8bfe\u4f1a\u4e13\u6ce8\u4e8e\u5b66\u4e60",(0,l.kt)("strong",{parentName:"p"},"XV6"),"\u4e2d\u7684\u4ee3\u7801\uff0cXV6\u662f\u6211\u4eec\u7684\u4e00\u4e2a\u5c0f\u7684\u7528\u4e8e\u6559\u5b66\u7684\u64cd\u4f5c\u7cfb\u7edf\uff0c\u6211\u4eec\u4f1a\u4ecb\u7ecd\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\uff0c\u67e5\u770b\u5b83\u7684\u4ee3\u7801\uff0c\u5e76\u5728\u8bfe\u7a0b\u4e2d\u6f14\u793a\u4ee3\u7801\u7684\u8fd0\u884c\u3002\u5728\u6bcf\u4e00\u8282\u8bfe\u7a0b\u4e4b\u524d\u90fd\u4f1a\u6709\u4f5c\u4e1a\uff0c\u4f5c\u4e1a\u4f1a\u8981\u6c42\u4f60\u4eec\u9605\u8bfb\u4ecb\u7ecdXV6\u7684\u4e66\u7c4d\uff0c\u4e66\u7c4d\u7684\u5185\u5bb9\u662fXV6\u5982\u4f55\u8fd0\u884c\u4ee5\u53ca\u8bbe\u8ba1\u601d\u60f3\u3002\u6240\u4ee5\u4f60\u5e94\u8be5\u5728\u8bfe\u7a0b\u4e4b\u524d\u5b8c\u6210\u76f8\u5e94\u7684\u9605\u8bfb\uff0c\u8fd9\u6837\u4f60\u624d\u80fd\u7406\u89e3\u8bfe\u7a0b\u7684\u8ba8\u8bba\u5185\u5bb9\u3002\u6709\u51e0\u8282\u8bfe\u4f1a\u4e13\u6ce8\u4e8e\u5e2e\u52a9\u4f60\u5b8c\u6210\u5b9e\u9a8c\u5185\u5bb9\uff0c\u4f8b\u5982\u89e3\u91caC\u8bed\u8a00\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u4f8b\u5982\u4ecb\u7ecdRISC-V\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u8fd9\u662f\u6211\u4eec\u5c06\u8981\u4f7f\u7528\u7684\u4e00\u4e2a\u5fae\u5904\u7406\u5668\u3002\u8fd9\u4e9b\u5185\u5bb9\u5bf9\u4e8e\u4f60\u4eec\u5b8c\u6210\u5b9e\u9a8c\u662f\u6709\u5e2e\u52a9\u7684\u3002\u5728\u8bfe\u7a0b\u7684\u7ed3\u675f\u90e8\u5206\uff0c\u6211\u4eec\u4f1a\u82b1\u51e0\u8282\u8bfe\u65f6\u95f4\u6765\u9605\u8bfb\u4e00\u4e9b\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5173\u7684\u8bba\u6587\uff0c\u5305\u62ec\u4e00\u4e9b\u7814\u7a76\u8bba\u6587\u548c\u4e00\u4e9b\u7ecf\u5178\u8bba\u6587\u3002\u6211\u4eec\u4f1a\u8981\u6c42\u4f60\u5728\u8bfe\u7a0b\u4e4b\u524d\u9605\u8bfb\u8fd9\u4e9b\u8bba\u6587\uff0c\u6211\u4eec\u4e5f\u4f1a\u5728\u8bfe\u5802\u4e0a\u8ba8\u8bba\u8fd9\u4e9b\u8bba\u6587\u3002\u51e0\u4e4e\u5bf9\u4e8e\u6240\u6709\u7684\u8bfe\uff0c\u6211\u4eec\u4f1a\u8981\u6c42\u4f60\u5bf9\u4e8e\u9605\u8bfb\u6750\u6599\u63d0\u51fa\u4e00\u4e9b\u95ee\u9898\uff0c\u6211\u4eec\u4f1a\u8bfb\u53d6\u8fd9\u4e9b\u95ee\u9898\uff0c\u4ee5\u5e2e\u52a9\u6211\u4eec\u51b3\u5b9a\u8bfe\u7a0b\u4e0a\u8bb2\u89e3\u4ec0\u4e48\u5185\u5bb9\uff0c\u5e76\u4e14\u6211\u4eec\u4e5f\u4f1a\u5c3d\u53ef\u80fd\u7684\u56de\u7b54\u8fd9\u4e9b\u95ee\u9898"),(0,l.kt)("h3",{id:"fork"},"fork"),(0,l.kt)("p",null,"fork\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8fdb\u7a0b\uff0c\u4e0b\u9762\u662f\u4f7f\u7528fork\u7684\u4e00\u4e2a\u7b80\u5355\u7528\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'// fork.c create a new process\n#include "kernel/types.h"\n#include "use/user.h"\n\nint main()\n{\n    int pid;\n    pid = fork();                                               //line 12\n    printf("fork() returned %d\\n",pid);\n    if (pid == 0){                                              //line 16\n        printf("child\\n");\n    }else{\n        printf("parent\\n");\n    }\n     exit(0)\n}\n')),(0,l.kt)("p",null,"\u5728\u7b2c12\u884c\uff0c\u6211\u4eec\u8c03\u7528\u4e86fork\u3002fork\u4f1a\u62f7\u8d1d\u5f53\u524d\u8fdb\u7a0b\u7684\u5185\u5b58\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u8fdb\u7a0b\uff0c\u8fd9\u91cc\u7684\u5185\u5b58\u5305\u542b\u4e86\u8fdb\u7a0b\u7684\u6307\u4ee4\u548c\u6570\u636e\u3002\u4e4b\u540e\uff0c\u6211\u4eec\u5c31\u6709\u4e86\u4e24\u4e2a\u62e5\u6709\u5b8c\u5168\u4e00\u6837\u5185\u5b58\u7684\u8fdb\u7a0b\u3002fork\u7cfb\u7edf\u8c03\u7528\u5728\u4e24\u4e2a\u8fdb\u7a0b\u4e2d\u90fd\u4f1a\u8fd4\u56de\uff0c\u5728\u539f\u59cb\u7684\u8fdb\u7a0b\u4e2d\uff0cfork\u7cfb\u7edf\u8c03\u7528\u4f1a\u8fd4\u56de\u5927\u4e8e0\u7684\u6574\u6570\uff0c\u8fd9\u4e2a\u662f\u65b0\u521b\u5efa\u8fdb\u7a0b\u7684ID\u3002\u800c\u5728\u65b0\u521b\u5efa\u7684\u8fdb\u7a0b\u4e2d\uff0cfork\u7cfb\u7edf\u8c03\u7528\u4f1a\u8fd4\u56de0\u3002\u6240\u4ee5\u5373\u4f7f\u4e24\u4e2a\u8fdb\u7a0b\u7684\u5185\u5b58\u662f\u5b8c\u5168\u4e00\u6837\u7684\uff0c\u6211\u4eec\u8fd8\u662f\u53ef\u4ee5\u901a\u8fc7fork\u7684\u8fd4\u56de\u503c\u533a\u5206\u65e7\u8fdb\u7a0b\u548c\u65b0\u8fdb\u7a0b"),(0,l.kt)("p",null,"\u5728\u7b2c16\u884c\uff0c\u4f60\u53ef\u4ee5\u770b\u5230\u4ee3\u7801\u68c0\u67e5pid\u3002\u5982\u679cpid\u7b49\u4e8e0\uff0c\u90a3\u4e48\u8fd9\u5fc5\u7136\u662f\u5b50\u8fdb\u7a0b\u3002\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u8c03\u7528\u8fdb\u7a0b\u901a\u5e38\u79f0\u4e3a\u7236\u8fdb\u7a0b\uff0c\u7236\u8fdb\u7a0b\u770b\u5230\u7684pid\u5fc5\u7136\u5927\u4e8e0\u3002\u6240\u4ee5\u7236\u8fdb\u7a0b\u4f1a\u6253\u5370\u201cparent\u201d\uff0c\u5b50\u8fdb\u7a0b\u4f1a\u6253\u5370\u201cchild\u201d\u3002\u4e4b\u540e\u4e24\u4e2a\u8fdb\u7a0b\u90fd\u4f1a\u9000\u51fa\u3002\u63a5\u4e0b\u6765\u6211\u8fd0\u884c\u8fd9\u4e2a\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u8f93\u51fa\u770b\u8d77\u6765\u50cf\u662f\u5783\u573e\u6570\u636e\u3002\u8fd9\u91cc\u5b9e\u9645\u53d1\u751f\u7684\u662f\uff0cfork\u7cfb\u7edf\u8c03\u7528\u4e4b\u540e\uff0c\u4e24\u4e2a\u8fdb\u7a0b\u90fd\u5728\u540c\u65f6\u8fd0\u884c\uff0cQEMU\u5b9e\u9645\u4e0a\u662f\u5728\u6a21\u62df\u591a\u6838\u5904\u7406\u5668\uff0c\u6240\u4ee5\u8fd9\u4e24\u4e2a\u8fdb\u7a0b\u5b9e\u9645\u4e0a\u5c31\u662f\u540c\u65f6\u5728\u8fd0\u884c\u3002\u6240\u4ee5\u5f53\u8fd9\u4e24\u4e2a\u8fdb\u7a0b\u5728\u8f93\u51fa\u7684\u65f6\u5019\uff0c\u5b83\u4eec\u4f1a\u540c\u65f6\u4e00\u4e2a\u5b57\u8282\u4e00\u4e2a\u5b57\u8282\u7684\u8f93\u51fa\uff0c\u4e24\u4e2a\u8fdb\u7a0b\u7684\u8f93\u51fa\u4ea4\u7ec7\u5728\u4e00\u8d77\uff0c\u6240\u4ee5\u4f60\u53ef\u4ee5\u770b\u5230\u4e24\u4e2af\uff0c\u4e24\u4e2ao\u7b49\u7b49\u3002\u5728\u7b2c\u4e00\u884c\u6700\u540e\uff0c\u4f60\u53ef\u4ee5\u770b\u52300\uff0c\u8fd9\u662f\u5b50\u8fdb\u7a0b\u7684\u8f93\u51fa\u3002\u6211\u731c\u7236\u8fdb\u7a0b\u8fd4\u56de\u4e8619\uff0c\u4f5c\u4e3a\u5b50\u8fdb\u7a0b\u7684\u8fdb\u7a0bID\u3002\u901a\u5e38\u6765\u8bf4\uff0c\u8fd9\u610f\u5473\u7740\u8fd9\u662f\u64cd\u4f5c\u7cfb\u7edf\u542f\u52a8\u4e4b\u540e\u7684\u7b2c19\u4e2a\u8fdb\u7a0b\u3002\u4e4b\u540e\u4e00\u4e2a\u8fdb\u7a0b\u8f93\u51fa\u4e86child\uff0c\u4e00\u4e2a\u8fdb\u7a0b\u8f93\u51fa\u4e86parent\uff0c\u8fd9\u4e24\u4e2a\u8f93\u51fa\u4ea4\u7ec7\u5728\u4e00\u8d77\u3002\u867d\u7136\u8fd9\u53ea\u662f\u5bf9\u4e8efork\u7684\u4e00\u4e2a\u7b80\u5355\u5e94\u7528\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u6e05\u6670\u7684\u4ece\u8f93\u51fa\u770b\u5230\u8fd9\u91cc\u521b\u5efa\u4e86\u4e24\u4e2a\u8fd0\u884c\u7684\u8fdb\u7a0b\uff0c\u5176\u4e2d\u4e00\u4e2a\u8fdb\u7a0b\u6253\u5370\u4e86child\uff0c\u53e6\u4e00\u4e2a\u6253\u5370\u4e86parent\u3002\u6240\u4ee5\uff0cfork\uff08\u5728\u5b50\u7236\u8fdb\u7a0b\u4e2d\uff09\u8fd4\u56de\u4e0d\u540c\u7684\u503c\u662f\u6bd4\u8f83\u91cd\u8981\u7684"),(0,l.kt)("h3",{id:"\u91cd\u5b9a\u5411"},"\u91cd\u5b9a\u5411"),(0,l.kt)("p",null,"\u6587\u4ef6\u63cf\u8ff0\u7b26\u548c fork \u4ea4\u4e92\u4f7f I/O \u91cd\u5b9a\u5411\u6613\u4e8e\u5b9e\u73b0\u3002 Fork \u5c06\u7236\u8fdb\u7a0b\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u8868\u8fde\u540c\u5176\u5185\u5b58\u4e00\u8d77\u590d\u5236\uff0c\u4ee5\u4fbf\u5b50\u8fdb\u7a0b\u4ece\u4e0e\u7236\u8fdb\u7a0b\u5b8c\u5168\u76f8\u540c\u7684\u6253\u5f00\u6587\u4ef6\u5f00\u59cb\u3002 \u7cfb\u7edf\u8c03\u7528 exec \u66ff\u6362\u8c03\u7528\u8fdb\u7a0b\u7684\u5185\u5b58\u4f46\u4fdd\u7559\u5176\u6587\u4ef6\u8868\u3002 \u8fd9\u79cd\u884c\u4e3a\u5141\u8bb8 shell \u901a\u8fc7\u6d3e\u751f\u3001\u91cd\u65b0\u6253\u5f00\u5b50\u8fdb\u7a0b\u4e2d\u9009\u5b9a\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\uff0c\u7136\u540e\u8c03\u7528 exec \u6765\u8fd0\u884c\u65b0\u7a0b\u5e8f\u6765\u5b9e\u73b0 I/O \u91cd\u5b9a\u5411\u3002 \u8fd9\u662f shell \u4e3a\u547d\u4ee4 cat < input.txt \u8fd0\u884c\u7684\u4ee3\u7801\u7684\u7b80\u5316\u7248\u672c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'char *argv[2]; \nargv[0] = "cat"; \nargv[1] = 0;\nif(fork() == 0) {\n    close(0);\n    open("input.txt", O_RDONLY);\n    exec("cat", argv); \n}\n\n')),(0,l.kt)("h3",{id:"lab\u5b9e\u9a8c"},"lab\u5b9e\u9a8c"),(0,l.kt)("p",null,"\u5b9e\u9a8c\u5185\u5bb9\u4ee5\u53ca\u73af\u5883\u642d\u5efa\u4e0d\u6e05\u695a\u7684\u8bdd\u6b22\u8fce\u52a0\u5165CIT\u7ec4\u7ec7"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u90ae\u4ef6\u8054\u7cfb\u6211\u4eec ",(0,l.kt)("a",{parentName:"p",href:"mailto:chaoyueshijian@gmail.com"},"chaoyueshijian@gmail.com")))}k.isMDXComponent=!0}}]);