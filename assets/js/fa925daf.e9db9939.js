"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=i(r),m=a,d=s["".concat(p,".").concat(m)]||s[m]||h[m]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={title:"OAuth",date:new Date("2021-12-10T15:19:23.000Z"),draft:!1},l=void 0,u={permalink:"/knowledge/blog/oauth",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/oauth.md",source:"@site/blog/oauth.md",title:"OAuth",description:"\u573a\u666f",date:"2021-12-10T15:19:23.000Z",formattedDate:"2021\u5e7412\u670810\u65e5",tags:[],readingTime:3.41,hasTruncateMarker:!1,authors:[],frontMatter:{title:"OAuth",date:"2021-12-10T15:19:23.000Z",draft:!1},prevItem:{title:"\u4ea7\u54c1\u7406\u8bba\u5206\u6790",permalink:"/knowledge/blog/design"},nextItem:{title:"\u5386\u7a0b",permalink:"/knowledge/blog/timeline"}},p={authorsImageUrls:[]},i=[{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u539f\u7406",id:"\u539f\u7406",level:3},{value:"\u6ce8\u610f\u70b9",id:"\u6ce8\u610f\u70b9",level:3},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:3}],c={toc:i},s="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),(0,a.kt)("p",null,"\u6709\u8fd9\u6837\u4e00\u79cd\u573a\u666f\uff0c\u4e00\u4e2a\u7528\u6237\uff08\u5047\u8bbe\u662fQQ\uff09\uff0c\u5e0c\u671b\u8ba9\u4e00\u4e2a\u7b2c\u4e09\u65b9\u7684\u5e94\u7528\uff08\u6bd4\u5982\u8bf4\u67d0\u4e2a\u8bba\u575b\uff09\uff0c\u80fd\u591f\u5f97\u5230\u5173\u4e8e\u81ea\u8eab\u7684\u4e00\u4e9b\u4fe1\u606f\uff08\u552f\u4e00\u7528\u6237\u6807\u8bc6\uff0c\u6bd4\u5982\u8bf4QQ\u53f7\uff0c\u7528\u6237\u4e2a\u4eba\u4fe1\u606f\uff0c\u6bd4\u5982\u8bf4\u662f\u4e00\u4e9b\u57fa\u7840\u8d44\u6599\uff0c\u6635\u79f0\u548c\u5934\u50cf\u7b49\uff09\u3002\u4f46\u662f\u5728\u83b7\u5f97\u8fd9\u4e9b\u8d44\u6599\u7684\u540c\u65f6\uff0c\u5374\u4e5f\u4e0d\u80fd\u63d0\u4f9b\u7528\u6237\u540d\u548c\u5bc6\u7801\u4e4b\u7c7b\u7684\u9a8c\u8bc1\u4fe1\u606f\u3002\u6bd4\u5982\u8bf4\u7528\u6237\u4e0d\u53ef\u80fd\u5c06\u81ea\u8eab\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u7ed9\u7b2c\u4e09\u65b9\u8ba9\u7b2c\u4e09\u65b9\u5230\u7528\u6237\u4e2d\u5fc3\u4e4b\u7c7b\u7684\u5730\u65b9\u53bb\u83b7\u53d6\u4fe1\u606f\u3002\u8981\u8fbe\u5230\u8fd9\u6837\u7684\u7ed3\u679c\u80af\u5b9a\u6709\u8bb8\u591a\u7684\u5b9e\u73b0\u65b9\u5f0f\u3002\u800cOatuh2\u5c31\u662f\u5b9e\u73b0\u4e0a\u8ff0\u76ee\u6807\u7684\u4e00\u79cd\u89c4\u8303\uff0c\u6216\u8005\u8bf4\u662f\u5177\u4f53\u5b9e\u73b0\u7684\u6307\u5bfc\u65b9\u6848"),(0,a.kt)("h3",{id:"\u539f\u7406"},"\u539f\u7406"),(0,a.kt)("p",null,"OAuth \u5f15\u5165\u4e86\u4e00\u4e2a\u6388\u6743\u5c42\uff0c\u7528\u6765\u5206\u79bb\u4e24\u79cd\u4e0d\u540c\u7684\u89d2\u8272\uff1a\u5ba2\u6237\u7aef\u548c\u8d44\u6e90\u6240\u6709\u8005\u3002\n\u5ba2\u6237\u7aef\u60f3\u8981\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u83b7\u5f97\u7528\u6237\u6570\u636e\u8d44\u6e90\u8bbf\u95ee\u6743\u9650\uff0c\u9700\u8981\u8bf7\u6c42\u8d44\u6e90\u670d\u52a1\u5668\uff0c\u7531\u8d44\u6e90\u670d\u52a1\u5668\u6765\u8be2\u95ee\u7528\u6237\u662f\u5426\u540c\u610f\u6388\u6743\u3002\u7528\u6237\u540c\u610f\u4ee5\u540e\uff0c\u8d44\u6e90\u670d\u52a1\u5668\u53ef\u4ee5\u5411\u5ba2\u6237\u7aef\u9881\u53d1\u4ee4\u724c\u3002\u5ba2\u6237\u7aef\u901a\u8fc7\u4ee4\u724c\uff0c\u53bb\u8bf7\u6c42\u6570\u636e\uff0c\u8fd9\u79cd\u4e92\u8054\u7f51\u6700\u666e\u904d\u7684\u6388\u6743\u65b9\u5f0f\u88ab\u79f0\u4f5cOAuth"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5bf9oauth\u6d41\u7a0b\u4e0d\u4e86\u89e3\uff0coauth\u539f\u7406\u53ef\u4ee5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://www.ruanyifeng.com/blog/2019/04/oauth_design.html"},"\u962e\u4e00\u5cf0oauth\u4ecb\u7ecd"),"\uff0c\u4ee5\u53ca",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps"},"github\u63a5\u53e3\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"\u8fd9\u91cc\u7b80\u5355\u63cf\u8ff0\u4e0b\u83b7\u53d6token\u6570\u636e\u6d41\u7a0b\uff0c\u5927\u81f4\u6709\u4e24\u4e2a\u9636\u6bb5\uff0c\u5982\u4e0b\u56fe\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/cit965/blog-picture/master/nextjs-oauth-github.png",alt:"xx"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9636\u6bb5\u4e00\uff1a\u524d\u7aef\u8bbf\u95ee\u670d\u52a1\u5668auth\u63a5\u53e3\uff0c\u670d\u52a1\u5668\u8bf7\u6c42 github \u5e76\u4e14\u91cd\u5b9a\u5411\u5230\u7528\u6237\u6388\u6743\u9875\u9762"),(0,a.kt)("li",{parentName:"ul"},"\u9636\u6bb5\u4e8c\uff1a\u7528\u6237\u70b9\u51fb\u6388\u6743\u6309\u94ae\uff0cgithub \u56de\u8c03\u670d\u52a1\u5668 callback \u63a5\u53e3\u5e76\u643a\u5e26 code \u548c state \u53c2\u6570\uff1b\u670d\u52a1\u5668\u7528 code \u53bb\u4ea4\u6362 token\uff0c\u5e76\u91cd\u5b9a\u5411\u5230\u524d\u7aef\u9875\u9762")),(0,a.kt)("h3",{id:"\u6ce8\u610f\u70b9"},"\u6ce8\u610f\u70b9"),(0,a.kt)("p",null,"oauth2\u53ea\u662f\u4e00\u4e2a\u6807\u51c6\uff0c\u5982\u679c\u662f\u65b0\u624b\u5efa\u8bae\u5148\u4e86\u89e3\u4e0b\u539f\u7406\uff0c\u6bcf\u4e2a\u5382\u5546\u7684\u5b9e\u73b0\u7ec6\u8282\u4e0a\u53ef\u80fd\u4f1a\u7565\u6709\u4e0d\u540c\uff0c\u6838\u5fc3\u662f\u6388\u6743\u539f\u7406\u4ee5\u53ca\u5de5\u7a0b\u5316\u6d41\u7a0b\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0b"),(0,a.kt)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u672c\u7ad9\u91c7\u7528\u7684github\u8bc4\u8bba\u7cfb\u7edf\u5176\u5b9e\u5c31\u7528\u5230\u4e86OAuth\uff0c\u5f53\u4f60\u70b9\u51fb\u8bc4\u8bba\u65f6\uff0c\u9700\u8981\u6388\u6743cit965.com\u8fd9\u4e2a\u7f51\u7ad9\u80fd\u591f\u8bbf\u95ee\u4f60\u7684\u7528\u6237\u4fe1\u606f\uff0c\u53ea\u6709\u4f60\u624b\u6307\u70b9\u51fb\u4e86\u540c\u610f\uff0c\u6211\u624d\u80fd\u83b7\u53d6\u5230\u4f60\u7684\u5934\u50cf\u548c\u6635\u79f0\uff0c\u5e76\u4e14\u5728\u4e00\u6bb5\u65f6\u95f4\u5185\uff0c\u4f60\u4e0d\u9700\u8981\u518d\u6b21\u767b\u9646\uff0c\u4f60\u53ef\u4ee5\u601d\u8003\u4e0b\u4e3a\u4ec0\u4e48\u4f60\u518d\u6b21\u6253\u5f00\u7f51\u7ad9\u8bc4\u8bba\u65f6\u4e0d\u9700\u8981\u6388\u6743\uff1f\u5982\u679c\u4f60\u77e5\u9053token\u5b58\u5728\u54ea\u91cc\uff0c\u6b22\u8fce\u5728\u4e0b\u65b9\u8bc4\u8bba\u7ed9\u51fa\u4f60\u7684\u7b54\u6848\uff01"),(0,a.kt)("h3",{id:"\u5f15\u7528"},"\u5f15\u7528"),(0,a.kt)("p",null,"[1][\u962e\u4e00\u5cf0oauth\u4ecb\u7ecd]","(",(0,a.kt)("a",{parentName:"p",href:"https://www.ruanyifeng.com/blog/2019/04/oauth_design.html"},"https://www.ruanyifeng.com/blog/2019/04/oauth_design.html"),")"),(0,a.kt)("p",null,"[2][\u91cd\u6784oauth demo golang\u8bed\u8a00]","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/koderover/zadig/pull/725"},"https://github.com/koderover/zadig/pull/725"),")"),(0,a.kt)("p",null,"[3][github\u63a5\u53e3\u6587\u6863]","(",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps"},"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps"),")"),(0,a.kt)("p",null,"[4][csrf]","(",(0,a.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/c7c8f51713b6"},"https://www.jianshu.com/p/c7c8f51713b6"),")"))}h.isMDXComponent=!0}}]);