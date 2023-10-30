"use strict";(self.webpackChunkopa_on_aws_website=self.webpackChunkopa_on_aws_website||[]).push([[19],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(a),g=n,k=s["".concat(p,".").concat(g)]||s[g]||f[g]||i;return a?r.createElement(k,l(l({ref:e},d),{},{components:a})):r.createElement(k,l({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2672:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:8},l="Features",o={unversionedId:"features",id:"features",title:"Features",description:"Version 0.2",source:"@site/docs/features.md",sourceDirName:".",slug:"/features",permalink:"/opa-test/docs/features",draft:!1,editUrl:"https://github.com/awslabs/app-development-for-backstage-io-on-aws/blob/main/website/docs/features.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Migration from OpenShift to OPA on AWS",permalink:"/opa-test/docs/migrations/migration-openshift"},next:{title:"Videos",permalink:"/opa-test/docs/videos"}},p={},m=[{value:"Version 0.2",id:"version-02",level:2},{value:"Coming up",id:"coming-up",level:2},{value:"Provider examples and templates",id:"provider-examples-and-templates",level:2},{value:"Backlog",id:"backlog",level:2}],d={toc:m},s="wrapper";function f(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"features"},"Features"),(0,n.kt)("h2",{id:"version-02"},"Version 0.2"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Scope"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Dynamic environment provider provisioning")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create unlimited number of providers on multiple accounts and regions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"ECS environment provider")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create an ECS(Elastic container servicer) based provider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Serverless environment provider")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a serverless based provider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Abstracted AWS environment")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a environment of which applications and resources can be created")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Application pipeline")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a pipeline for each application to support IAC provisioning and code change stage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Environment Deployment pipeline")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a pipeline to deploy the code base of an application to another environment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Resource Binding")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow Binding resources to application to provide access and sharing capabilities for AWS resources")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Deploy to additional environments")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow the deployment of an application to additional environments")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Environments selector")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Toggle between the environments of which the application is deployed and present relevant information for the current selected environment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Segregated auditing")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Audit actions from platform and pipeline to a segregated auditing table of the target environment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Environment level")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow to define a number representing the level of the environment thus creates hierarchies that are used for deployments")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Deployment requires approval")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Configure how the pipelines should execute against an environment automatic / require approval")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Delete app")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove an application from an environment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Delete provider")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove a provider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Centralized pipelines")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Load pipelines dynamically from a centralized repository")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Component Pending page")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Present a partial page while the component IAC pipeline is still processing")))),(0,n.kt)("h2",{id:"coming-up"},"Coming up"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Scope"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Timeline"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"EKS environment provider")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Create a Kubernetes based provider"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Jan 2024")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"td"},"Environment Binding")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Platform Engineer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bind Environments to allow network communication across multiple VPC's through AWS Transit gateway"),(0,n.kt)("td",{parentName:"tr",align:"left"},"February 2024")))),(0,n.kt)("h2",{id:"provider-examples-and-templates"},"Provider examples and templates"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS ECS Environment Provider"),(0,n.kt)("td",{parentName:"tr",align:"left"},"a provider IAC for ECS runtime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Provider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS Serverless Environment Provider"),(0,n.kt)("td",{parentName:"tr",align:"left"},"a provider IAC for Serverless runtime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Provider")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AWS RDS Database"),(0,n.kt)("td",{parentName:"tr",align:"left"},"an RDS database template"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Resource")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node.js Terraform Web App"),(0,n.kt)("td",{parentName:"tr",align:"left"},"a node.js application provisioning by terraform"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node.js Express Web App With RDS"),(0,n.kt)("td",{parentName:"tr",align:"left"},"a node.js application with a baked in starter code to connect to RDS database"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Node.js Express Web App"),(0,n.kt)("td",{parentName:"tr",align:"left"},"a node.js application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Python Flask starter application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"a python flask web server application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Serverless REST API (TypeScript)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"a lambda based serverless REST API application template for typescript"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Java Spring Boot Web Service"),(0,n.kt)("td",{parentName:"tr",align:"left"},"a java springboot application"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Application")))),(0,n.kt)("h2",{id:"backlog"},"Backlog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Scope"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description")))))}f.isMDXComponent=!0}}]);