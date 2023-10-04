"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[868],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(4137));const a={id:"installation",title:"Installation"},i=void 0,l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"This guide is not intended to provide a comprehensive tour of Docker and its orchestrators. Rather, it's designed to",source:"@site/docs/getting-started/installation.mdx",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/docs/getting-started/installation.mdx",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-7.x",previous:{title:"What is Gotenberg?",permalink:"/docs/getting-started/introduction"},next:{title:"Routes",permalink:"/docs/routes"}},s={},p=[{value:"Live Demo \ud83d\udd25",id:"live-demo-",level:2},{value:"Docker",id:"docker",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Cloud Run",id:"cloud-run",level:2},{value:"Modules Configuration",id:"modules-configuration",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("script",{async:!0,type:"text/javascript",src:"//cdn.carbonads.com/carbon.js?serve=CWYI4KQL&placement=gotenbergdev",id:"_carbonads_js"}),(0,r.kt)("p",null,"This guide is not intended to provide a comprehensive tour of Docker and its orchestrators. Rather, it's designed to\nbe concise enough to assist beginners in getting started while helping power users sidestep potential pitfalls."),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We do not recommend exposing your instances to the external world. In terms of security, you should consider Gotenberg\nas a database.")),(0,r.kt)("h2",{id:"live-demo-"},"Live Demo \ud83d\udd25"),(0,r.kt)("p",null,"Before downloading the Docker image, you might want to experiment with Gotenberg. We offer a demo API for this purpose:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://demo.gotenberg.dev"},"https://demo.gotenberg.dev"))),(0,r.kt)("p",null,"As you navigate through the documentation, feel free to open a terminal or ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/"},"Postman")," and try\nout the routes using the demo URL."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl \\\n--request POST 'https://demo.gotenberg.dev/forms/chromium/convert/url' \\\n--form 'url=\"https://sparksuite.github.io/simple-html-invoice-template/\"' \\\n-o my.pdf\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The demo operates on a ",(0,r.kt)("a",{parentName:"p",href:"https://render.com"},"Render")," instance with 512MB of RAM and 0.5 CPU.")),(0,r.kt)("p",null,"At present, the restrictions are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A maximum of two requests per second per IP."),(0,r.kt)("li",{parentName:"ul"},"A body limit of 5MB.")),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("p",null,"To start a default Docker container of Gotenberg, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --rm -p 3000:3000 gotenberg/gotenberg:7\n")),(0,r.kt)("p",null,"Alternatively, using the historic Docker repository from our sponsor ",(0,r.kt)("a",{parentName:"p",href:"https://www.thecodingmachine.com"},"TheCodingMachine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --rm -p 3000:3000 thecodingmachine/gotenberg:7\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The API will be available at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),".")),(0,r.kt)("h2",{id:"docker-compose"},"Docker Compose"),(0,r.kt)("p",null,"Incorporating Gotenberg into your Docker Compose services stack is as straightforward as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: "3"\n\nservices:\n  # Your other services.\n\n  gotenberg:\n    image: gotenberg/gotenberg:7\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The API will be accessible at ",(0,r.kt)("a",{parentName:"p",href:"http://gotenberg:3000"},"gotenberg:3000")," within your Docker Compose network.\nThis means your other services can interact with Gotenberg using ",(0,r.kt)("a",{parentName:"p",href:"http://gotenberg:3000"},"gotenberg:3000"),".")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"If you want to expose the API to your ",(0,r.kt)("em",{parentName:"p"},"localhost"),", consider adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"ports")," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: "3"\n\nservices:\n  # Your other services.\n\n  gotenberg:\n    image: gotenberg/gotenberg:7\n    ports:\n      - "3000:3000"\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The API will be available at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000"),".")),(0,r.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"The Docker image employs a specific non-root user, named ",(0,r.kt)("em",{parentName:"p"},"gotenberg"),", with a User ID (uid) and Group ID (gid) of ",(0,r.kt)("strong",{parentName:"p"},"1001"),"."),(0,r.kt)("p",null,"When detailing the pod's deployment specification, remember to include:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"securityContext:\n  privileged: false\n  runAsUser: 1001\n")),(0,r.kt)("p",null,"Other than that, ensure to allocate sufficient memory and CPU resources (at least 512Mi for memory and 0.2 for CPU)."),(0,r.kt)("p",null,"A community Helm chart is also available at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MaikuMori/helm-charts"},"MaikuMori/helm-charts")," and on\n",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/maikumori/gotenberg"},"ArtifactHub"),"."),(0,r.kt)("h2",{id:"cloud-run"},"Cloud Run"),(0,r.kt)("p",null,"If cost-efficiency is a priority for you, ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/run"},"Cloud Run")," could be an appealing option."),(0,r.kt)("p",null,"We have a dedicated Docker image tag specifically for this provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"gotenberg/gotenberg:7-cloudrun\n")),(0,r.kt)("p",null,"Alternatively, using the historic Docker repository from our sponsor ",(0,r.kt)("a",{parentName:"p",href:"https://www.thecodingmachine.com"},"TheCodingMachine"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"thecodingmachine/gotenberg:7-cloudrun\n")),(0,r.kt)("p",null,"There are a few limitations to be aware of:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Consider using HTTP/2 to bypass the ",(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/run/quotas?hl=en"},"32MB request size limit"),"."),(0,r.kt)("li",{parentName:"ol"},"Consider disabling the ",(0,r.kt)("a",{parentName:"li",href:"/docs/configuration#webhook"},"webhook feature")," as it does not work on Cloud Run.")),(0,r.kt)("h2",{id:"modules-configuration"},"Modules Configuration"),(0,r.kt)("p",null,"The Docker image internally employs a binary that offers flags to configure its multiple modules (for more detailed\ninformation, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration"},"configuration guide"),")."),(0,r.kt)("p",null,"To set one or more flags, it's necessary to override the Docker image's default command."),(0,r.kt)("p",null,"For example, with the Docker CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --rm -p 3000:3000 gotenberg/gotenberg:7 gotenberg --my-module-property=foo\n")),(0,r.kt)("p",null,"Or with Docker Compose:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: "3"\n\nservices:\n  # Your other services.\n\n  gotenberg:\n    image: gotenberg/gotenberg:7\n    command:\n      - "gotenberg"\n      - "--my-module-property=foo"\n')),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not redefine the Gotenberg Docker image default entrypoint, but override the command instead. See this\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gotenberg/gotenberg/issues/480#issuecomment-1232064017"},"issue")," for more details.")),(0,r.kt)("h2",{id:"whats-next"},"What's next?"),(0,r.kt)("p",null,"Now that you have Gotenberg up and running, you can start using it. Read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/routes"},"routes guide")," to learn more."))}u.isMDXComponent=!0}}]);