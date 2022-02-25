"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[2039],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8883:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],i={title:"Read storage, at a specific blockhash"},c=void 0,l={unversionedId:"api/examples/promise/read-storage-at",id:"api/examples/promise/read-storage-at",title:"Read storage, at a specific blockhash",description:"In addition to querying the latest storage, you can make storage queries at a specific blockhash. Be aware that the node applies a pruning strategy and typically only keeps the last 256 blocks, unless run in archive mode.",source:"@site/docs/api/examples/promise/read-storage-at.md",sourceDirName:"api/examples/promise",slug:"/api/examples/promise/read-storage-at",permalink:"/docs/api/examples/promise/read-storage-at",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/examples/promise/read-storage-at.md",tags:[],version:"current",frontMatter:{title:"Read storage, at a specific blockhash"},sidebar:"reference",previous:{title:"Read storage",permalink:"/docs/api/examples/promise/read-storage"},next:{title:"Make a simple transfer",permalink:"/docs/api/examples/promise/make-transfer"}},p={},u=[],m={toc:u};function d(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In addition to querying the latest storage, you can make storage queries at a specific blockhash. Be aware that the node applies a pruning strategy and typically only keeps the last 256 blocks, unless run in archive mode."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Import the API\nconst { ApiPromise } = require('@polkadot/api');\n\n// Our address for Alice on the dev chain\nconst ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';\nconst BOB = '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty';\n\nasync function main () {\n  // Create our API with a default connection to the local node\n  const api = await ApiPromise.create();\n\n  // Retrieve the last block header, extracting the hash and parentHash\n  const { hash, parentHash } = await api.rpc.chain.getHeader();\n\n  console.log(`last header hash ${hash.toHex()}`);\n\n  // Retrieve the balance at the preceding block for Alice. For at queries\n  // the format is always `.at(<blockhash>, ...params)`\n  const balance = await api.query.system.account.at(parentHash, ALICE);\n\n  console.log(`Alice's balance at ${parentHash.toHex()} was ${balance.data.free}`);\n\n  // Now perform a multi query, returning multiple balances at once\n  const balances = await api.query.system.account.multi([ALICE, BOB]);\n\n  console.log(`Current balances for Alice and Bob are ${balances[0].data.free} and ${balances[1].data.free}`);\n}\n\nmain().catch(console.error).finally(() => process.exit());\n")))}d.isMDXComponent=!0}}]);