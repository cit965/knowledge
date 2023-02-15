"use strict";(self.webpackChunkknowledge=self.webpackChunkknowledge||[]).push([[232],{3905:(n,e,t)=>{t.d(e,{Zo:()=>a,kt:()=>p});var r=t(7294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function m(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},m=Object.keys(n);for(r=0;r<m.length;r++)t=m[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(n);for(r=0;r<m.length;r++)t=m[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var o=r.createContext({}),d=function(n){var e=r.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},a=function(n){var e=d(n.components);return r.createElement(o.Provider,{value:e},n.children)},l="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(n,e){var t=n.components,i=n.mdxType,m=n.originalType,o=n.parentName,a=u(n,["components","mdxType","originalType","parentName"]),l=d(t),f=i,p=l["".concat(o,".").concat(f)]||l[f]||c[f]||m;return t?r.createElement(p,s(s({ref:e},a),{},{components:t})):r.createElement(p,s({ref:e},a))}));function p(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var m=t.length,s=new Array(m);s[0]=f;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=n,u[l]="string"==typeof n?n:i,s[1]=u;for(var d=2;d<m;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3302:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>m,metadata:()=>u,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const m={title:"4.median of Two Sorted Arrays",date:new Date("2021-12-27T14:50:08.000Z"),draft:!1},s=void 0,u={unversionedId:"leetcode/median-of-two-sorted-arrays",id:"leetcode/median-of-two-sorted-arrays",title:"4.median of Two Sorted Arrays",description:"\u9898\u76ee",source:"@site/docs/leetcode/4.median-of-two-sorted-arrays.md",sourceDirName:"leetcode",slug:"/leetcode/median-of-two-sorted-arrays",permalink:"/knowledge/en/docs/leetcode/median-of-two-sorted-arrays",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/leetcode/4.median-of-two-sorted-arrays.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"4.median of Two Sorted Arrays",date:"2021-12-27T14:50:08.000Z",draft:!1},sidebar:"tutorialSidebar",previous:{title:"3.longest Substring Without Repeating Characters",permalink:"/knowledge/en/docs/leetcode/longest-substring-without-repeating-characters"},next:{title:"5.longest Palindromic Substring",permalink:"/knowledge/en/docs/leetcode/longest-palindromic-substring"}},o={},d=[{value:"\u9898\u76ee",id:"\u9898\u76ee",level:3},{value:"\u9898\u89e3",id:"\u9898\u89e3",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3}],a={toc:d},l="wrapper";function c(n){let{components:e,...t}=n;return(0,i.kt)(l,(0,r.Z)({},a,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,i.kt)("p",null,"\u7ed9\u5b9a\u4e24\u4e2a\u5927\u5c0f\u5206\u522b\u4e3a m \u548c n \u7684\u6b63\u5e8f\uff08\u4ece\u5c0f\u5230\u5927\uff09\u6570\u7ec4\xa0nums1 \u548c\xa0nums2\u3002\u8bf7\u4f60\u627e\u51fa\u5e76\u8fd4\u56de\u8fd9\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684 \u4e2d\u4f4d\u6570 \u3002"),(0,i.kt)("p",null,"\u7b97\u6cd5\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u5e94\u8be5\u4e3a O(log (m+n))"),(0,i.kt)("h3",{id:"\u9898\u89e3"},"\u9898\u89e3"),(0,i.kt)("p",null,"\u7ed9\u51fa\u4e24\u4e2a\u6709\u5e8f\u6570\u7ec4\uff0c\u8981\u6c42\u627e\u51fa\u8fd9\u4e24\u4e2a\u6570\u7ec4\u5408\u5e76\u4ee5\u540e\u7684\u6709\u5e8f\u6570\u7ec4\u4e2d\u7684\u4e2d\u4f4d\u6570\u3002\u8981\u6c42\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(log (m+n))\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e00\u9898\u6700\u5bb9\u6613\u60f3\u5230\u7684\u529e\u6cd5\u662f\u628a\u4e24\u4e2a\u6570\u7ec4\u5408\u5e76\uff0c\u7136\u540e\u53d6\u51fa\u4e2d\u4f4d\u6570\u3002\u4f46\u662f\u5408\u5e76\u6709\u5e8f\u6570\u7ec4\u7684\u64cd\u4f5c\u662f O(m+n) \u7684\uff0c\u4e0d\u7b26\u5408\u9898\u610f\u3002\u770b\u5230\u9898\u76ee\u7ed9\u7684 log \u7684\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u5f88\u5bb9\u6613\u8054\u60f3\u5230\u4e8c\u5206\u641c\u7d22\u3002"),(0,i.kt)("p",null,"\u7531\u4e8e\u8981\u627e\u5230\u6700\u7ec8\u5408\u5e76\u4ee5\u540e\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570\uff0c\u4e24\u4e2a\u6570\u7ec4\u7684\u603b\u5927\u5c0f\u4e5f\u77e5\u9053\uff0c\u6240\u4ee5\u4e2d\u95f4\u8fd9\u4e2a\u4f4d\u7f6e\u4e5f\u662f\u77e5\u9053\u7684\u3002\u53ea\u9700\u8981\u4e8c\u5206\u641c\u7d22\u4e00\u4e2a\u6570\u7ec4\u4e2d\u5207\u5206\u7684\u4f4d\u7f6e\uff0c\u53e6\u4e00\u4e2a\u6570\u7ec4\u4e2d\u5207\u5206\u7684\u4f4d\u7f6e\u4e5f\u80fd\u5f97\u5230\u3002\u4e3a\u4e86\u4f7f\u5f97\u65f6\u95f4\u590d\u6742\u5ea6\u6700\u5c0f\uff0c\u6240\u4ee5\u4e8c\u5206\u641c\u7d22\u4e24\u4e2a\u6570\u7ec4\u4e2d\u957f\u5ea6\u8f83\u5c0f\u7684\u90a3\u4e2a\u6570\u7ec4\u3002"),(0,i.kt)("p",null,"\u5173\u952e\u7684\u95ee\u9898\u662f\u5982\u4f55\u5207\u5206\u6570\u7ec4 1 \u548c\u6570\u7ec4 2 \u3002\u5176\u5b9e\u5c31\u662f\u5982\u4f55\u5207\u5206\u6570\u7ec4 1 \u3002\u5148\u968f\u4fbf\u4e8c\u5206\u4ea7\u751f\u4e00\u4e2a midA\uff0c\u5207\u5206\u7684\u7ebf\u4f55\u65f6\u7b97\u6ee1\u8db3\u4e86\u4e2d\u4f4d\u6570\u7684\u6761\u4ef6\u5462\uff1f\u5373\uff0c\u7ebf\u5de6\u8fb9\u7684\u6570\u90fd\u5c0f\u4e8e\u53f3\u8fb9\u7684\u6570\uff0c\u5373\uff0cnums1","[midA-1]"," \u2264 nums2","[midB]"," && nums2","[midB-1]"," \u2264 nums1","[midA]"," \u3002\u5982\u679c\u8fd9\u4e9b\u6761\u4ef6\u90fd\u4e0d\u6ee1\u8db3\uff0c\u5207\u5206\u7ebf\u5c31\u9700\u8981\u8c03\u6574\u3002\u5982\u679c nums1","[midA]"," < nums2","[midB-1]","\uff0c\u8bf4\u660e midA \u8fd9\u6761\u7ebf\u5212\u5206\u51fa\u6765\u5de6\u8fb9\u7684\u6570\u5c0f\u4e86\uff0c\u5207\u5206\u7ebf\u5e94\u8be5\u53f3\u79fb\uff1b\u5982\u679c nums1","[midA-1]"," > nums2","[midB]","\uff0c\u8bf4\u660e midA \u8fd9\u6761\u7ebf\u5212\u5206\u51fa\u6765\u5de6\u8fb9\u7684\u6570\u5927\u4e86\uff0c\u5207\u5206\u7ebf\u5e94\u8be5\u5de6\u79fb\u3002\u7ecf\u8fc7\u591a\u6b21\u8c03\u6574\u4ee5\u540e\uff0c\u5207\u5206\u7ebf\u603b\u80fd\u627e\u5230\u6ee1\u8db3\u6761\u4ef6\u7684\u89e3\u3002"),(0,i.kt)("p",null,"\u5047\u8bbe\u73b0\u5728\u627e\u5230\u4e86\u5207\u5206\u7684\u4e24\u6761\u7ebf\u4e86\uff0c\u6570\u7ec4 1 \u5728\u5207\u5206\u7ebf\u4e24\u8fb9\u7684\u4e0b\u6807\u5206\u522b\u662f midA - 1 \u548c midA\u3002\u6570\u7ec4 2 \u5728\u5207\u5206\u7ebf\u4e24\u8fb9\u7684\u4e0b\u6807\u5206\u522b\u662f midB - 1 \u548c midB\u3002\u6700\u7ec8\u5408\u5e76\u6210\u6700\u7ec8\u6570\u7ec4\uff0c\u5982\u679c\u6570\u7ec4\u957f\u5ea6\u662f\u5947\u6570\uff0c\u90a3\u4e48\u4e2d\u4f4d\u6570\u5c31\u662f max(nums1","[midA-1]",", nums2","[midB-1]",")\u3002\u5982\u679c\u6570\u7ec4\u957f\u5ea6\u662f\u5076\u6570\uff0c\u90a3\u4e48\u4e2d\u95f4\u4f4d\u7f6e\u7684\u4e24\u4e2a\u6570\u4f9d\u6b21\u662f\uff1amax(nums1","[midA-1]",", nums2","[midB-1]",") \u548c min(nums1","[midA]",", nums2","[midB]",")\uff0c\u90a3\u4e48\u4e2d\u4f4d\u6570\u5c31\u662f (max(nums1","[midA-1]",", nums2","[midB-1]",") + min(nums1","[midA]",", nums2","[midB]",")) / 2\u3002\u56fe\u793a\u89c1\u4e0b\u56fe\uff1a\n",(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/cit965/blog-picture/master/Screen%20Shot%202021-12-27%20at%2011.03.58%20PM.png",alt:null})),(0,i.kt)("h3",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"/*\n * @lc app=leetcode.cn id=4 lang=golang\n *\n * [4] \u5bfb\u627e\u4e24\u4e2a\u6b63\u5e8f\u6570\u7ec4\u7684\u4e2d\u4f4d\u6570\n */\n\n// @lc code=start\nfunc findMedianSortedArrays(nums1 []int, nums2 []int) float64 {\n    // \u5047\u8bbe nums1 \u7684\u957f\u5ea6\u5c0f\n    if len(nums1) > len(nums2) {\n        return findMedianSortedArrays(nums2, nums1)\n    }\n    low, high, k, nums1Mid, nums2Mid := 0, len(nums1), (len(nums1)+len(nums2)+1)>>1, 0, 0\n    for low <= high {\n        // nums1:  \u2026\u2026\u2026\u2026\u2026\u2026 nums1[nums1Mid-1] | nums1[nums1Mid] \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\n        // nums2:  \u2026\u2026\u2026\u2026\u2026\u2026 nums2[nums2Mid-1] | nums2[nums2Mid] \u2026\u2026\u2026\u2026\u2026\u2026\u2026\u2026\n        nums1Mid = low + (high-low)>>1 // \u5206\u754c\u9650\u53f3\u4fa7\u662f mid\uff0c\u5206\u754c\u7ebf\u5de6\u4fa7\u662f mid - 1\n        nums2Mid = k - nums1Mid\n        if nums1Mid > 0 && nums1[nums1Mid-1] > nums2[nums2Mid] { // nums1 \u4e2d\u7684\u5206\u754c\u7ebf\u5212\u591a\u4e86\uff0c\u8981\u5411\u5de6\u8fb9\u79fb\u52a8\n            high = nums1Mid - 1\n        } else if nums1Mid != len(nums1) && nums1[nums1Mid] < nums2[nums2Mid-1] { // nums1 \u4e2d\u7684\u5206\u754c\u7ebf\u5212\u5c11\u4e86\uff0c\u8981\u5411\u53f3\u8fb9\u79fb\u52a8\n            low = nums1Mid + 1\n        } else {\n            // \u627e\u5230\u5408\u9002\u7684\u5212\u5206\u4e86\uff0c\u9700\u8981\u8f93\u51fa\u6700\u7ec8\u7ed3\u679c\u4e86\n            // \u5206\u4e3a\u5947\u6570\u5076\u6570 2 \u79cd\u60c5\u51b5\n            break\n        }\n    }\n    midLeft, midRight := 0, 0\n    if nums1Mid == 0 {\n        midLeft = nums2[nums2Mid-1]\n    } else if nums2Mid == 0 {\n        midLeft = nums1[nums1Mid-1]\n    } else {\n        midLeft = max(nums1[nums1Mid-1], nums2[nums2Mid-1])\n    }\n    if (len(nums1)+len(nums2))&1 == 1 {\n        return float64(midLeft)\n    }\n    if nums1Mid == len(nums1) {\n        midRight = nums2[nums2Mid]\n    } else if nums2Mid == len(nums2) {\n        midRight = nums1[nums1Mid]\n    } else {\n        midRight = min(nums1[nums1Mid], nums2[nums2Mid])\n    }\n    return float64(midLeft+midRight) / 2\n}\n\nfunc max(a int, b int) int {\n    if a > b {\n        return a\n    }\n    return b\n}\n\nfunc min(a int, b int) int {\n    if a < b {\n        return a\n    }\n    return b\n}\n\n// @lc code=end\n\n\n")))}c.isMDXComponent=!0}}]);