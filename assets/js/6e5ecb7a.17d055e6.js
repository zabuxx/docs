"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[9784],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3959:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),a=["components"],i={title:"Generate a Multisig Account"},c=void 0,l={unversionedId:"util-crypto/examples/create-multisig",id:"util-crypto/examples/create-multisig",title:"Generate a Multisig Account",description:"Substrate provides a multisig dispatch function in its",source:"@site/docs/util-crypto/examples/create-multisig.md",sourceDirName:"util-crypto/examples",slug:"/util-crypto/examples/create-multisig",permalink:"/docs/util-crypto/examples/create-multisig",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/util-crypto/examples/create-multisig.md",tags:[],version:"current",frontMatter:{title:"Generate a Multisig Account"},sidebar:"reference",previous:{title:"Encrypt & Decrypt Messages",permalink:"/docs/util-crypto/examples/encrypt-decrypt"},next:{title:"Verify Signature",permalink:"/docs/util-crypto/examples/verify-signature"}},u={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Substrate provides a multisig dispatch function in its\n",(0,s.kt)("a",{parentName:"p",href:"https://crates.parity.io/pallet_utility/index.html"},"Utility pallet"),". This example generates the\naddress that would correspond to a set of addresses and threshold."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"import {\n  createKeyMulti,\n  encodeAddress,\n  sortAddresses\n} from '@polkadot/util-crypto';\n\nconst SS58Prefix = 0;\n\n// Input the addresses that will make up the multisig account.\nconst addresses = [\n  '1nUC7afqmo7zwRFWxDjrUQu9skk6fk99pafb4SiyGSRc8z3',\n  '1ZX2XntfLEHrBPy73DpfQp9rG7pbLyvrFjEpi7mNKQgyga5',\n  '14b1kB7CrqzRUeMsKc26FJ73f8FCpxAX6sNieu9gfYSfJuoL'\n];\n\n// The number of accounts that must approve. Must be greater than 0 and less than\n// or equal to the total number of addresses.\nconst threshold = 2;\n\n// The address (as index in `addresses`) that will submit a transaction.\nconst index = 0;\n\nfunction main () {\n  // Address as a byte array.\n  const multiAddress = createKeyMulti(addresses, threshold);\n\n  // Convert byte array to SS58 encoding.\n  const Ss58Address = encodeAddress(multiAddress, SS58Prefix);\n\n  console.log(`\\nMultisig Address: ${Ss58Address}`);\n\n  // Take addresses and remove the sender.\n  const otherSignatories = addresses.filter((who) => who !== addresses[index]);\n\n  // Sort them by public key.\n  const otherSignatoriesSorted = sortAddresses(otherSignatories, SS58Prefix);\n\n  console.log(`\\nOther Signatories: ${otherSignatoriesSorted}\\n`);\n\n  process.exit();\n}\n\nmain();\n")))}f.isMDXComponent=!0}}]);