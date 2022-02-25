"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[9671],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),h=n,d=f["".concat(p,".").concat(h)]||f[h]||c[h]||a;return r?o.createElement(d,i(i({ref:t},u),{},{components:r})):o.createElement(d,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return h}});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],l={title:"Overview",slug:"/"},p=void 0,s={unversionedId:"intro",id:"intro",title:"Overview",description:"Got here looking for the Apps UI (Wallet)? Just follow the preceding link. Looking for developer documentation? Then you are at the right place.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/intro.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/"},sidebar:"reference",next:{title:"Overview",permalink:"/docs/api"}},u={},c=[{value:"Help us help others",id:"help-us-help-others",level:2},{value:"Contributing",id:"contributing",level:2}],f={toc:c};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Got here looking for the ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Apps UI (Wallet)"),"? Just follow the preceding link. Looking for developer documentation? Then you are at the right place."),(0,a.kt)("p",null,"This is an effort to provide a collection of tools, utilities and libraries for interacting with the ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.network"},"Polkadot network")," from JavaScript. All code is made available on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/"},"Github")," with a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Apache_License#Version_2.0"},"permissive Apache-2.0 license"),"."),(0,a.kt)("p",null,"While there is a slant towards developer tools, providing libraries to allow others to build tools on top of, a collection of applications are made available that allows for interaction with the network from a pure user perspective. The documentation contained here has a focus on the developer libraries."),(0,a.kt)("p",null,"If you are a end-user looking to interact with the network, you can interact with ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot/Substrate (latest, project hosted)")," or ",(0,a.kt)("a",{parentName:"p",href:"https://dotapps.io/"},"IPFS (stable, weekly releases)")),(0,a.kt)("h2",{id:"help-us-help-others"},"Help us help others"),(0,a.kt)("p",null,"If you spot gaps in the information provided, or are uncertain about any specific area, please do ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/docs/issues"},"log an issue")," or if you are that way inclined, make a pull-request. We really want to have good documentation in these areas and allow people to be productive right from the start."),(0,a.kt)("h2",{id:"contributing"},"Contributing"),(0,a.kt)("p",null,"This is a community effort to trial tooling while the network is being developed. Contributions are welcome. Feel free to use the tools and libraries, log issues as you find them or create pull requests for your bug-bears or features."),(0,a.kt)("p",null,"As a new collection of projects, we take quality seriously - library code should be comprehensively ",(0,a.kt)("a",{parentName:"p",href:"https://facebook.github.io/jest/"},"unit tested")," and interfaces should have ",(0,a.kt)("a",{parentName:"p",href:"http://typescriptlang.org"},"full type definitions"),"."))}h.isMDXComponent=!0}}]);