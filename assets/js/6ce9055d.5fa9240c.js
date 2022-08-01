"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[761],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const a={id:"cloud-run",title:"Cloud Run"},i=void 0,u={unversionedId:"get-started/cloud-run",id:"get-started/cloud-run",title:"Cloud Run",description:"If you're looking for cost savings, you might be interested in using Cloud Run.",source:"@site/docs/get-started/cloud-run.md",sourceDirName:"get-started",slug:"/get-started/cloud-run",permalink:"/docs/get-started/cloud-run",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/get-started/cloud-run.md",tags:[],version:"current",frontMatter:{id:"cloud-run",title:"Cloud Run"},sidebar:"version-7.x",previous:{title:"Kubernetes",permalink:"/docs/get-started/kubernetes"},next:{title:"API",permalink:"/docs/modules/api"}},s={},l=[],c={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you're looking for cost savings, you might be interested in using ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/run"},"Cloud Run"),"."),(0,o.kt)("p",null,"If so, prefer the ",(0,o.kt)("inlineCode",{parentName:"p"},"gotenberg/gotenberg:7-cloudrun")," Docker image tag."),(0,o.kt)("p",null,"Alternatively, you may also use ",(0,o.kt)("inlineCode",{parentName:"p"},"thecodingmachine/gotenberg:7-cloudrun")," from our\nsponsor, ",(0,o.kt)("a",{parentName:"p",href:"https://www.thecodingmachine.com"},"TheCodingMachine"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For security reasons, the non-root user ",(0,o.kt)("inlineCode",{parentName:"p"},"gotenberg")," does not own the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/krallin/tini"},"Tini"),"\nbinary by default. However, some providers like Cloud Run from Google Cloud cannot start a Docker container in that case.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Consider using HTTP/2 to bypass the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/run/quotas?hl=en"},"32 MB request size limit"),".")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You should disable the ",(0,o.kt)("a",{parentName:"p",href:"../modules/webhook"},"webhook feature")," as it does not work on Cloud Run."),(0,o.kt)("p",{parentName:"admonition"},"Indeed, as a request ends early with this feature, Cloud Run might stop your container before Gotenberg calls your\nwebhook.")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"We don't recommend exposing your instances to the external world. In terms of security, you should consider Gotenberg\nas a database.")))}d.isMDXComponent=!0}}]);