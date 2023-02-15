"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2201:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"1.two Sum",date:new Date("2021-12-16T16:54:46.000Z"),draft:!1,categories:"leetcode"},l=void 0,i={unversionedId:"leetcode/two-sum",id:"leetcode/two-sum",title:"1.two Sum",description:"\u9898\u76ee",source:"@site/docs/leetcode/1.two-sum.md",sourceDirName:"leetcode",slug:"/leetcode/two-sum",permalink:"/knowledge/docs/leetcode/two-sum",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/1.two-sum.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1.two Sum",date:"2021-12-16T16:54:46.000Z",draft:!1,categories:"leetcode"},sidebar:"tutorialSidebar",previous:{title:"LeetCode",permalink:"/knowledge/docs/category/leetcode"},next:{title:"2.add Two Number",permalink:"/knowledge/docs/leetcode/add-two-number"}},c={},u=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"\u89c6\u9891",id:"\u89c6\u9891",level:3}],s={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,o.kt)("p",null,"\u7ed9\u5b9a\u4e00\u4e2a\u6574\u6570\u6570\u7ec4\u548c\u4e00\u4e2a\u76ee\u6807\u503c\uff0c\u627e\u51fa\u6570\u7ec4\u4e2d\u548c\u4e3a\u76ee\u6807\u503c\u7684\u4e24\u4e2a\u6570\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u4f60\u53ef\u4ee5\u5047\u8bbe\u6bcf\u4e2a\u8f93\u5165\u53ea\u5bf9\u5e94\u4e00\u79cd\u7b54\u6848\uff0c\u4e14\u540c\u6837\u7684\u5143\u7d20\u4e0d\u80fd\u88ab\u91cd\u590d\u5229\u7528"),(0,o.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e24\u6b21\u5faa\u73af\u66b4\u529b\u7834\u89e3")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"func twoSum(nums []int, target int) []int {\n    for i:=0;i<len(nums);i++{\n        for j:=i+1;j<len(nums);j++{\n            if nums[i]+nums[j] == target {\n                return []int{i,j}\n            }\n        }\n    }\n    return nil\n}\n//\u65f6\u95f4\u590d\u6742\u5ea6\u4e3ao(n^2)\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5c06\u6240\u6709\u7684\u952e\u5b58\u50a8\u5230\u4e00\u4e2amap\u4e2d\u4ee5\u503c\u4e3a\u952e\uff0c\u5728\u5b58\u653e\u524d\u5148\u8fdb\u884c\u4e00\u6b21\u8ba1\u7b97\uff0c\u5047\u5b9a\u5f53\u524d\u503c\u4e3ax,\u672a\u77e5\u503c\u4e3ay\uff0ctarget-x=y\uff0c\u518d\u4ecemap\u4e2d\u5c1d\u8bd5\u83b7\u53d6\u952e\u4e3ay\u7684\u503c\uff0c\u82e5\u80fd\u83b7\u53d6\u5230\u5219\u76f4\u63a5\u8fd4\u56dex\u7684\u952e\u53camap\u4e2dy\u7684\u503c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},"func twoSum(nums []int, target int) []int {\n    maps := map[int]int{}\n    for index, value := range nums {\n        member := target - value\n        if key,ok := maps[member];ok{\n            return []int{key,index}\n        }else{\n            maps[value] = index   \n        }\n    }\n    return nil\n}\n//\u65f6\u95f4\u590d\u6742\u5ea6\u4e3ao(n)\n")),(0,o.kt)("h3",{id:"\u89c6\u9891"},"\u89c6\u9891"),(0,o.kt)("p",null,"{{< bilibili BV1KP4y1t7NH >}}"))}m.isMDXComponent=!0}}]);