"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[5332],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,y=f["".concat(s,".").concat(d)]||f[d]||l[d]||i;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3322:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Overview",slug:"/ui-keyring"},s=void 0,u={unversionedId:"ui-keyring/intro",id:"ui-keyring/intro",title:"Overview",description:"The @polkadot/ui-keyring package provides a wrapper around the @polkadot/keyring package, specifically for use in browser environments. The ui-keyring only extends the keyring, but does not replace it. All underlying account management functions are provided by the base keyring, the browser-specific extensions allows for transparent management of account state in storage.",source:"@site/docs/ui-keyring/intro.md",sourceDirName:"ui-keyring",slug:"/ui-keyring",permalink:"/docs/ui-keyring",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/ui-keyring/intro.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/ui-keyring"},sidebar:"reference",previous:{title:"Vue",permalink:"/docs/ui-identicon/vue"},next:{title:"Overview",permalink:"/docs/ui-keyring/start"}},p={},l=[],f={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/ui-keyring"},"@polkadot/ui-keyring")," package provides a wrapper around the ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/keyring"},"@polkadot/keyring")," package, specifically for use in browser environments. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ui-keyring")," only extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"keyring"),", but does not replace it. All underlying account management functions are provided by the base keyring, the browser-specific extensions allows for transparent management of account state in storage."),(0,i.kt)("p",null,"Additionally where the base keyring is focussed on accounts, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ui-keyring")," extends this to cater for an address-book, contracts and allows for accounts to be tied to a specific chain. Since UIs are typically split into different parts, it also allows for subscriptions on accounts, so notifications are available when accounts are added or removed."),(0,i.kt)("p",null,"To get started, follow the ",(0,i.kt)("a",{parentName:"p",href:"/docs/ui-keyring/start"},"getting started")," journey for installation and use."))}d.isMDXComponent=!0}}]);