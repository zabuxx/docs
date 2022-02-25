"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[8373],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},235:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Overview",slug:"/extension"},s=void 0,c={unversionedId:"extension/intro",id:"extension/intro",title:"Overview",description:"The @polkadot/extension-dapp package provides an extractor that manipulates the window.injectedWeb3 to retrieve all the providers added to the page. It has a number of utilities",source:"@site/docs/extension/intro.md",sourceDirName:"extension",slug:"/extension",permalink:"/docs/extension",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/extension/intro.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/extension"},sidebar:"reference",previous:{title:"Loading saved pairs",permalink:"/docs/ui-keyring/start/loading"},next:{title:"Usage",permalink:"/docs/extension/usage"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/extension-dapp"},"@polkadot/extension-dapp")," package provides an extractor that manipulates the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.injectedWeb3")," to retrieve all the providers added to the page. It has a number of utilities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web3Enable(dappName: string): Promise<InjectedExtension[]>")," - to be called before anything else, retrieves the list of all injected extensions/providers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web3Accounts(): Promise<InjectedAccountWithMeta[]>")," - returns a list of all the injected accounts, accross all extensions (source in meta)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web3AccountsSubscribe(cb: (accounts: InjectedAccountWithMeta[]) => any): Promise<Unsubcall>")," - subscribes to the accounts accross all extensions, returning a full list as changes are made"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web3FromAddress(address: string): Promise<InjectedExtension>")," - Retrieves a provider for a specific address"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web3FromSource(name: string): Promise<InjectedExtension>")," - Retrieves a provider identified by the name"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isWeb3Injected: boolean")," - boolean to indicate if ",(0,i.kt)("inlineCode",{parentName:"li"},"injectedWeb3")," was found on the page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web3EnablePromise: Promise<InjectedExtension[]> | null")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," or the promise as a result of the last call to ",(0,i.kt)("inlineCode",{parentName:"li"},"web3Enable"))),(0,i.kt)("p",null,"To get started, follow the ",(0,i.kt)("a",{parentName:"p",href:"/docs/extension/usage"},"installation and usage")," walk through."))}m.isMDXComponent=!0}}]);