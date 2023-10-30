"use strict";(self.webpackChunkopa_on_aws_website=self.webpackChunkopa_on_aws_website||[]).push([[967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8654:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={},i="Workshop",l={type:"mdx",permalink:"/opa-test/workshop",source:"@site/src/pages/workshop.md",title:"Workshop",description:"We can offer customers a hands-on workshop to get familiar with OPA on AWS platform.",frontMatter:{}},p=[{value:"Target Audience",id:"target-audience",level:2},{value:"Logistics",id:"logistics",level:2},{value:"Workshop Offering",id:"workshop-offering",level:2},{value:"Workshop Content",id:"workshop-content",level:2}],s={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"workshop"},"Workshop"),(0,r.kt)("p",null,"We can offer customers a hands-on workshop to get familiar with OPA on AWS platform.\nIf you wish to run the workshop on your own - you will first need to ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/getting-started"},"deploy the platform"),"."),(0,r.kt)("p",null,"For scheduled events please reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:fsi-pace-pe@amazon.com"},"fsi-pace-pe@amazon.com")),(0,r.kt)("h2",{id:"target-audience"},"Target Audience"),(0,r.kt)("p",null,"We currently address the workshop for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application Developers"),(0,r.kt)("li",{parentName:"ul"},"Platform /Dev-ops Engineers")),(0,r.kt)("h2",{id:"logistics"},"Logistics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Timing - about 1 hour."),(0,r.kt)("li",{parentName:"ul"},"A room that supports the number of attendees - each will log-in to their own account/platform."),(0,r.kt)("li",{parentName:"ul"},"Optional: Whiteboard to illustrate answers/questions.")),(0,r.kt)("h2",{id:"workshop-offering"},"Workshop Offering"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hands-on experience with OPA on AWS"),(0,r.kt)("li",{parentName:"ul"},"Conduct the workshop across multiple teams up to 30+ attendees at a time"),(0,r.kt)("li",{parentName:"ul"},"Pre-configured platform environment so you can experience with OPA on AWS - with no prior cloud experience needed"),(0,r.kt)("li",{parentName:"ul"},"Bootstrap cloud development and test your application with your own code")),(0,r.kt)("h2",{id:"workshop-content"},"Workshop Content"),(0,r.kt)("p",null,"The workshop is an opportunity to learn about OPA on AWS and some of it\u2019s major capabilities. Participants of this workshop will assume the role of two personas (Platform Engineer and Application Developer) to deploy a runtime environment and application using the OPA on AWS platform. Specifically participants will walk through the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Platform Engineers",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Creating Environments and environment providers "),(0,r.kt)("li",{parentName:"ol"},"Deploying an environment provider"),(0,r.kt)("li",{parentName:"ol"},"Deploying an environment")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application Developers",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Deploying an application to an environment that has already been created"),(0,r.kt)("li",{parentName:"ol"},"Adding environment variables via the UI"),(0,r.kt)("li",{parentName:"ol"},"Interacting with code repository (pushing and pulling code changes and executing pipelines)"),(0,r.kt)("li",{parentName:"ol"},"Interacting with environment via the UI (starting/stopping task, View logs, related infrastructure etc)"),(0,r.kt)("li",{parentName:"ol"},"Optional: Deploy an application to another environment (i.e. dev \u2192 prod)"),(0,r.kt)("li",{parentName:"ol"},"Optional: Bind application to an existing resource (i.e. database)")))))}u.isMDXComponent=!0}}]);