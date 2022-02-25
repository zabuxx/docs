"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[9575],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3552:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return l},toc:function(){return m},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={title:"Simple Connect"},s=void 0,p={unversionedId:"api/examples/promise/simple-connect",id:"api/examples/promise/simple-connect",title:"Simple Connect",description:"The following example shows how to instantiate a Polkadot API object and use it to connect to a node using ApiPromise.",source:"@site/docs/api/examples/promise/simple-connect.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/simple-connect",permalink:"/docs/api/examples/promise/simple-connect",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/simple-connect.md",tags:[],version:"current",frontMatter:{title:"Simple Connect"},sidebar:"reference",previous:{title:"ApiPromise Examples",permalink:"/docs/api/examples/promise"},next:{title:"Listen to new blocks",permalink:"/docs/api/examples/promise/listen-to-blocks"}},l={},m=[],u={toc:m};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following example shows how to instantiate a Polkadot API object and use it to connect to a node using ApiPromise."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// Required imports\nconst { ApiPromise, WsProvider } = require('@polkadot/api');\n\nasync function main () {\n  // Initialise the provider to connect to the local node\n  const provider = new WsProvider('ws://127.0.0.1:9944');\n\n  // Create the API and wait until ready\n  const api = await ApiPromise.create({ provider });\n\n  // Retrieve the chain & node information information via rpc calls\n  const [chain, nodeName, nodeVersion] = await Promise.all([\n    api.rpc.system.chain(),\n    api.rpc.system.name(),\n    api.rpc.system.version()\n  ]);\n\n  console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);\n}\n\nmain().catch(console.error).finally(() => process.exit());\n")))}d.isMDXComponent=!0}}]);