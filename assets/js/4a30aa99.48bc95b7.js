"use strict";(self.webpackChunkgotenberg_dev=self.webpackChunkgotenberg_dev||[]).push([[1446],{8448:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},7225:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),o=n(1048),l=n(2713);var i=function(){var e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(3309),u=n(6010),c="tabItem_1uMI";function d(e){var t,n,a,o=e.lazy,l=e.block,d=e.defaultValue,p=e.values,m=e.groupId,h=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),N=b.tabGroupChoices,T=b.setTabGroupChoices,w=(0,r.useState)(k),C=w[0],R=w[1],y=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var L=N[m];null!=L&&L!==C&&g.some((function(e){return e.value===L}))&&R(L)}var H=function(e){var t=e.currentTarget,n=y.indexOf(t),a=g[n].value;a!==C&&(x(t),R(a),null!=m&&T(m,a))},q=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=y.indexOf(e.currentTarget)+1;n=y[a]||y[0];break;case"ArrowLeft":var r=y.indexOf(e.currentTarget)-1;n=y[r]||y[y.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},h)},g.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":C===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:q,onFocus:H,onClick:H},null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function p(e){var t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},2713:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},2503:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),l=n(7225),i=n(8448),s=["components"],u={id:"url",title:"URL"},c=void 0,d={unversionedId:"url",id:"version-6.x/url",isDocsHomePage:!1,title:"URL",description:"Gotenberg provides the endpoint /convert/url for remote URL conversions.",source:"@site/versioned_docs/version-6.x/url.mdx",sourceDirName:".",slug:"/url",permalink:"/docs/6.x/url",editUrl:"https://github.com/gotenberg/gotenberg.dev/edit/main/versioned_docs/version-6.x/url.mdx",tags:[],version:"6.x",frontMatter:{id:"url",title:"URL"},sidebar:"version-6.x",previous:{title:"HTML",permalink:"/docs/6.x/html"},next:{title:"Markdown",permalink:"/docs/6.x/markdown"}},p=[{value:"Basic",id:"basic",children:[],level:2},{value:"Custom HTTP headers",id:"custom-http-headers",children:[],level:2}],m={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Gotenberg provides the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"/convert/url")," for remote URL conversions."),(0,o.kt)("p",null,"It accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"POST")," requests with a ",(0,o.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," Content-Type."),(0,o.kt)("h2",{id:"basic"},"Basic"),(0,o.kt)("p",null,"This endpoint does not accept an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file nor assets files but a form field\nnamed ",(0,o.kt)("inlineCode",{parentName:"p"},"remoteURL")," instead. Otherwise, URL conversions work the same as HTML conversions."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When converting a website to PDF, you should remove all margins.\nIf not, some of the content of the page might be hidden."),(0,o.kt)("p",{parentName:"div"},"If you try to convert a URL from a Docker Compose service named ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," (i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"removeURL")," = ",(0,o.kt)("inlineCode",{parentName:"p"},"http://app/an/entrypoint"),"),\nthe resulting PDF will be blank. Make sure to rename your service to avoid this issue."))),(0,o.kt)(l.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/url \\\n     --header 'Content-Type: multipart/form-data' \\\n     --form remoteURL=https://google.com \\\n     --form marginTop=0 \\\n     --form marginBottom=0 \\\n     --form marginLeft=0 \\\n     --form marginRight=0 \\\n     -o result.pdf\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nreq := gotenberg.NewURLRequest("https://google.com")\nreq.Margins(gotenberg.NoMargins)\ndest := "result.pdf"\nc.Store(req, dest)\n'))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\URLRequest;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$request = new URLRequest('https://google.com');\n$request->setMargins(Request::NO_MARGINS);\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))),(0,o.kt)("h2",{id:"custom-http-headers"},"Custom HTTP headers"),(0,o.kt)("p",null,"You may send your own HTTP headers to the ",(0,o.kt)("inlineCode",{parentName:"p"},"remoteURL"),"."),(0,o.kt)("p",null,"For instance, by adding the HTTP header ",(0,o.kt)("inlineCode",{parentName:"p"},"Gotenberg-Remoteurl-Your-Header")," to your request,\nthe API will send a request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"remoteURL")," with the HTTP header ",(0,o.kt)("inlineCode",{parentName:"p"},"Your-Header"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The API uses a canonical format for the HTTP headers:\nit transforms the first\nletter and any letter following a hyphen to upper case;\nthe rest are converted to lowercase. For example, the\ncanonical key for ",(0,o.kt)("inlineCode",{parentName:"p"},"accept-encoding")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Accept-Encoding"),"."))),(0,o.kt)(l.Z,{defaultValue:"curl",values:[{label:"cURL",value:"curl"},{label:"Go",value:"go"},{label:"PHP",value:"php"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"curl",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl --request POST \\\n     --url http://localhost:3000/convert/url \\\n     --header 'Content-Type: multipart/form-data' \\\n     --header 'Gotenberg-Remoteurl-Your-Header: Foo' \\\n     --form remoteURL=https://google.com \\\n     -o result.pdf\n"))),(0,o.kt)(i.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/thecodingmachine/gotenberg-go-client/v7"\n\nc := &gotenberg.Client{Hostname: "http://localhost:3000"}\nreq := gotenberg.NewURLRequest("https://google.com")\nreq.AddRemoteURLHTTPHeader("Your-Header", "Foo")\ndest := "result.pdf"\nc.Store(req, dest)\n'))),(0,o.kt)(i.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\Gotenberg\\Client;\nuse TheCodingMachine\\Gotenberg\\URLRequest;\n\n$client = new Client('http://localhost:3000', new \\Http\\Adapter\\Guzzle6\\Client());\n$request = new URLRequest('https://google.com');\n$request->addRemoteURLHTTPHeader('Your-Header', 'Foo')\n$dest = 'result.pdf';\n$client->store($request, $dest);\n")))))}h.isMDXComponent=!0}}]);