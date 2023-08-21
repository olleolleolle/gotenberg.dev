"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[624],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),h=o,m=f["".concat(l,".").concat(h)]||f[h]||p[h]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const i={id:"troubleshooting",title:"Troubleshooting"},a=void 0,s={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"This page comprises a selection of frequently encountered problems and their corresponding solutions associated with",source:"@site/docs/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/troubleshooting.mdx",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"version-7.x",previous:{title:"Configuration",permalink:"/docs/configuration"}},l={},u=[{value:"Chromium",id:"chromium",level:2},{value:"Oversized PDF Files",id:"oversized-pdf-files",level:3},{value:"Dealing with Timeouts",id:"timeouts-chromium",level:3},{value:"LibreOffice",id:"libreoffice",level:2},{value:"Filenames with Non-Latin Characters",id:"filenames-with-non-latin-characters",level:3},{value:"Internal Server Error",id:"internal-server-error",level:3},{value:"Dealing with Timeouts",id:"timeouts-libreoffice",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page comprises a selection of frequently encountered problems and their corresponding solutions associated with\nGotenberg. Given the wide array of tools integrated within Gotenberg, it can sometimes be challenging to pinpoint the\nroot of an issue."),(0,o.kt)("p",null,"However, should you encounter an issue not addressed here, kindly take the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Verify whether your issue has already been discussed or identified within the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gotenberg/gotenberg/issues"},"GitHub issues"),"\nor the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/gotenberg/gotenberg/discussions"},"GitHub discussions"),"."),(0,o.kt)("li",{parentName:"ol"},"If it hasn't been addressed, feel free to open a new issue or initiate a discussion, based on the nature of your\npredicament.")),(0,o.kt)("h2",{id:"chromium"},"Chromium"),(0,o.kt)("p",null,"Gotenberg internally employs the same protocol as ",(0,o.kt)("a",{parentName:"p",href:"https://pptr.dev/"},"Puppeteer"),' for communication with Chromium.\nTherefore, it may be useful to include "puppeteer" as a keyword when searching for solutions to your issue. More often\nthan not, you\'re likely to find an answer to your problem.'),(0,o.kt)("h3",{id:"oversized-pdf-files"},"Oversized PDF Files"),(0,o.kt)("p",null,"The usage of webfonts tends to considerably enlarge the PDF file size. If you wish to use a custom font, please refer\nto the ",(0,o.kt)("a",{parentName:"p",href:"configuration#fonts"},"fonts configuration section")," to learn how to install them directly into the Docker container."),(0,o.kt)("p",null,"For additional details, see issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gotenberg/gotenberg/issues/521"},"#521"),"."),(0,o.kt)("h3",{id:"timeouts-chromium"},"Dealing with Timeouts"),(0,o.kt)("p",null,"If you are experiencing timeouts (i.e., ",(0,o.kt)("em",{parentName:"p"},"503 Service Unavailable"),"), consider the following steps to troubleshoot your issue:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Assess whether your Gotenberg instance is overloaded. If this is the case, consider increasing the number of instances."),(0,o.kt)("li",{parentName:"ol"},"Ensure that the page you are attempting to convert doesn't require resources inaccessible from the Gotenberg instance."),(0,o.kt)("li",{parentName:"ol"},"Consider increasing the API timeout. See the ",(0,o.kt)("a",{parentName:"li",href:"configuration#api"},"API module configuration")," for guidance.")),(0,o.kt)("h2",{id:"libreoffice"},"LibreOffice"),(0,o.kt)("h3",{id:"filenames-with-non-latin-characters"},"Filenames with Non-Latin Characters"),(0,o.kt)("p",null,"Ensure that filenames are encoded in ",(0,o.kt)("em",{parentName:"p"},"UTF-8"),"."),(0,o.kt)("p",null,"For additional details, refer to issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gotenberg/gotenberg/issues/427"},"#427"),"."),(0,o.kt)("h3",{id:"internal-server-error"},"Internal Server Error"),(0,o.kt)("p",null,"If you consistently encounter a ",(0,o.kt)("em",{parentName:"p"},"500 Internal Server Error")," while attempting to convert an Office document, a common\nsolution is to boost the memory and CPU resources allocated to Gotenberg."),(0,o.kt)("p",null,"For additional details, refer to issue ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gotenberg/gotenberg/issues/465"},"#465"),"."),(0,o.kt)("h3",{id:"timeouts-libreoffice"},"Dealing with Timeouts"),(0,o.kt)("p",null,"If you are experiencing timeouts (i.e., ",(0,o.kt)("em",{parentName:"p"},"503 Service Unavailable"),"), consider the following steps to resolve your issue:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Check if your Gotenberg instance is overloaded. If so, consider increasing the number of instances or enhancing the\nmemory and CPU resources allocated to Gotenberg."),(0,o.kt)("li",{parentName:"ol"},"Consider increasing the API timeout. Refer to the ",(0,o.kt)("a",{parentName:"li",href:"configuration#api"},"API module configuration")," for guidance."),(0,o.kt)("li",{parentName:"ol"},"Consider increasing the LibreOffice listener startup timeout. Refer to the\n",(0,o.kt)("a",{parentName:"li",href:"configuration#libreoffice"},"LibreOffice module configuration")," for guidance.")))}p.isMDXComponent=!0}}]);