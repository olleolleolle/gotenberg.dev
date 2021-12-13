"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[8017],{5093:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return m},metadata:function(){return s},toc:function(){return d},default:function(){return h}});var n=a(7462),i=a(3366),o=(a(7294),a(4137)),r=["components"],l={id:"environment_variables",title:"Environment Variables"},m=void 0,s={unversionedId:"environment_variables",id:"version-6.x/environment_variables",isDocsHomePage:!1,title:"Environment Variables",description:"You may customize the API behaviour thanks to environment variables.",source:"@site/versioned_docs/version-6.x/environment_variables.md",sourceDirName:".",slug:"/environment_variables",permalink:"/docs/6.x/environment_variables",editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/versioned_docs/version-6.x/environment_variables.md",tags:[],version:"6.x",frontMatter:{id:"environment_variables",title:"Environment Variables"},sidebar:"version-6.x",previous:{title:"Clients",permalink:"/docs/6.x/clients"},next:{title:"HTML",permalink:"/docs/6.x/html"}},d=[{value:"Log level",id:"log-level",children:[],level:2},{value:"Default listen port",id:"default-listen-port",children:[],level:2},{value:"Root path",id:"root-path",children:[],level:2},{value:"Disable Google Chrome",id:"disable-google-chrome",children:[],level:2},{value:"Default Google Chrome rpcc buffer size",id:"default-google-chrome-rpcc-buffer-size",children:[],level:2},{value:"Google Chrome ignore certificate errors",id:"google-chrome-ignore-certificate-errors",children:[],level:2},{value:"Disable LibreOffice (unoconv)",id:"disable-libreoffice-unoconv",children:[],level:2},{value:"Default wait timeout",id:"default-wait-timeout",children:[],level:2},{value:"Maximum wait timeout",id:"maximum-wait-timeout",children:[],level:2},{value:"Default webhook URL timeout",id:"default-webhook-url-timeout",children:[],level:2},{value:"Maximum webhook URL timeout",id:"maximum-webhook-url-timeout",children:[],level:2},{value:"Maximum wait delay",id:"maximum-wait-delay",children:[],level:2}],p={toc:d};function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may customize the API behaviour thanks to environment variables."),(0,o.kt)("h2",{id:"log-level"},"Log level"),(0,o.kt)("p",null,"The API provides structured logging allowing you to have relevant information\nabout what's going on."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a TTY is attached, the log entries are displayed in text format with colors, otherwise in JSON format."))),(0,o.kt)("p",null,"You may customize the severity of the log entries thanks to the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG_LEVEL"),"."),(0,o.kt)("p",null,"It accepts one of the following severities: ",(0,o.kt)("inlineCode",{parentName:"p"},'"DEBUG"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'"INFO"')," (default) and ",(0,o.kt)("inlineCode",{parentName:"p"},'"ERROR"'),"."),(0,o.kt)("h2",{id:"default-listen-port"},"Default listen port"),(0,o.kt)("p",null,"By default, the API will listen on port ",(0,o.kt)("inlineCode",{parentName:"p"},"3000"),"."),(0,o.kt)("p",null,"You may customize this value with the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DEFAULT_LISTEN_PORT"),"."),(0,o.kt)("p",null,"This environment variable accepts any string that can be turned into a port number."),(0,o.kt)("h2",{id:"root-path"},"Root path"),(0,o.kt)("p",null,"By default, the API root path is ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,o.kt)("p",null,"You may customize this value with the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"ROOT_PATH"),"."),(0,o.kt)("p",null,"This environment variable accepts a string starting and ending with ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,o.kt)("p",null,"For instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"/gotenberg/")," is a valid value while ",(0,o.kt)("inlineCode",{parentName:"p"},"gotenberg")," is not."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is useful if you wish to do service discovery via URL paths."))),(0,o.kt)("h2",{id:"disable-google-chrome"},"Disable Google Chrome"),(0,o.kt)("p",null,"In order to save some resources, the Gotenberg image accepts the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DISABLE_GOOGLE_CHROME"),"\nfor disabling Google Chrome."),(0,o.kt)("p",null,"It takes the strings ",(0,o.kt)("inlineCode",{parentName:"p"},'"0"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"1"')," as value where ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," means ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If Google Chrome is disabled, the following conversions will ",(0,o.kt)("strong",{parentName:"p"},"not")," be available anymore:\n",(0,o.kt)("a",{parentName:"p",href:"html"},"HTML"),", ",(0,o.kt)("a",{parentName:"p",href:"url"},"URL")," and ",(0,o.kt)("a",{parentName:"p",href:"markdown"},"Markdown")))),(0,o.kt)("h2",{id:"default-google-chrome-rpcc-buffer-size"},"Default Google Chrome rpcc buffer size"),(0,o.kt)("p",null,"When performing a ",(0,o.kt)("a",{parentName:"p",href:"html"},"HTML"),", ",(0,o.kt)("a",{parentName:"p",href:"url"},"URL")," or ",(0,o.kt)("a",{parentName:"p",href:"markdown"},"Markdown")," conversion, the API might return\na ",(0,o.kt)("inlineCode",{parentName:"p"},"400")," HTTP code with the message ",(0,o.kt)("inlineCode",{parentName:"p"},"increase the Google Chrome rpcc buffer size"),"."),(0,o.kt)("p",null,"If so, you may increase this buffer size with the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DEFAULT_GOOGLE_CHROME_RPCC_BUFFER_SIZE"),"."),(0,o.kt)("p",null,"It takes a string representation of an int as value (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'"1048576"')," for 1 MB).\nThe hard limit is 100 MB and is defined by Google Chrome itself."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default Google Chrome rpcc buffer size may also be overridden per request thanks to the form field ",(0,o.kt)("inlineCode",{parentName:"p"},"googleChromeRpccBufferSize"),".\nSee the ",(0,o.kt)("a",{parentName:"p",href:"html#rpcc-buffer-size"},"rpcc buffer size section"),"."))),(0,o.kt)("h2",{id:"google-chrome-ignore-certificate-errors"},"Google Chrome ignore certificate errors"),(0,o.kt)("p",null,"When performing a ",(0,o.kt)("a",{parentName:"p",href:"url"},"URL")," conversion, Google Chrome will not accept certificate errors."),(0,o.kt)("p",null,"You may allow insecure connections by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"GOOGLE_CHROME_IGNORE_CERTIFICATE_ERRORS")," environment variable to ",(0,o.kt)("inlineCode",{parentName:"p"},'"1"'),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You should be careful with this feature and only enable it in your development environment.")),(0,o.kt)("h2",{id:"disable-libreoffice-unoconv"},"Disable LibreOffice (unoconv)"),(0,o.kt)("p",null,"You may also disable LibreOffice (unoconv) with ",(0,o.kt)("inlineCode",{parentName:"p"},"DISABLE_UNOCONV"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If LibreOffice (unoconv) is disabled, the following conversion will ",(0,o.kt)("strong",{parentName:"p"},"not")," be available anymore:\n",(0,o.kt)("a",{parentName:"p",href:"office"},"Office")))),(0,o.kt)("h2",{id:"default-wait-timeout"},"Default wait timeout"),(0,o.kt)("p",null,"By default, the API will wait 10 seconds before it considers the conversion to be unsuccessful.\nIf unsucessful, it returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"504")," HTTP code."),(0,o.kt)("p",null,"You may customize this timeout thanks to the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DEFAULT_WAIT_TIMEOUT"),"."),(0,o.kt)("p",null,"It takes a string representation of a float as value (e.g ",(0,o.kt)("inlineCode",{parentName:"p"},'"2.5"')," for 2.5 seconds)."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default timeout may also be overridden per request thanks to the form field ",(0,o.kt)("inlineCode",{parentName:"p"},"waitTimeout"),".\nSee the ",(0,o.kt)("a",{parentName:"p",href:"timeout"},"timeout section"),"."))),(0,o.kt)("h2",{id:"maximum-wait-timeout"},"Maximum wait timeout"),(0,o.kt)("p",null,"By default, the value of the form field ",(0,o.kt)("inlineCode",{parentName:"p"},"waitTimeout")," cannot be more than 30 seconds."),(0,o.kt)("p",null,"You may increase or decrease this limit thanks to the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"MAXIMUM_WAIT_TIMEOUT"),"."),(0,o.kt)("p",null,"It takes a string representation of a float as value (e.g ",(0,o.kt)("inlineCode",{parentName:"p"},'"2.5"')," for 2.5 seconds)."),(0,o.kt)("h2",{id:"default-webhook-url-timeout"},"Default webhook URL timeout"),(0,o.kt)("p",null,"By default, the API will wait 10 seconds before it considers the sending of the resulting PDF to be unsuccessful."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See the ",(0,o.kt)("a",{parentName:"p",href:"webhook"},"webhook section"),"."))),(0,o.kt)("p",null,"You may customize this timeout thanks to the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"DEFAULT_WEBHOOK_URL_TIMEOUT"),"."),(0,o.kt)("p",null,"It takes a string representation of a float as value (e.g ",(0,o.kt)("inlineCode",{parentName:"p"},'"2.5"')," for 2.5 seconds)."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The default timeout may also be overridden per request thanks to the form field ",(0,o.kt)("inlineCode",{parentName:"p"},"webhookURLTimeout"),".\nSee the ",(0,o.kt)("a",{parentName:"p",href:"webhook#timeout"},"webhook timeout section"),"."))),(0,o.kt)("h2",{id:"maximum-webhook-url-timeout"},"Maximum webhook URL timeout"),(0,o.kt)("p",null,"By default, the value of the form field ",(0,o.kt)("inlineCode",{parentName:"p"},"webhookURLTimeout")," cannot be more than 30 seconds."),(0,o.kt)("p",null,"You may increase or decrease this limit thanks to the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"MAXIMUM_WEBHOOK_URL_TIMEOUT"),"."),(0,o.kt)("p",null,"It takes a string representation of a float as value (e.g ",(0,o.kt)("inlineCode",{parentName:"p"},'"2.5"')," for 2.5 seconds)."),(0,o.kt)("h2",{id:"maximum-wait-delay"},"Maximum wait delay"),(0,o.kt)("p",null,"By default, the value of the form field ",(0,o.kt)("inlineCode",{parentName:"p"},"waitDelay")," cannot be more than 10 seconds."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"See the ",(0,o.kt)("a",{parentName:"p",href:"html#wait-delay"},"wait delay section"),"."))),(0,o.kt)("p",null,"You may increase or decrease this limit thanks to the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"MAXIMUM_WAIT_DELAY"),"."),(0,o.kt)("p",null,"It takes a string representation of a float as value (e.g ",(0,o.kt)("inlineCode",{parentName:"p"},'"2.5"')," for 2.5 seconds)."))}h.isMDXComponent=!0}}]);