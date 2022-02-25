"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[9591],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),u=i,f=p["".concat(c,".").concat(u)]||p[u]||h[u]||r;return t?o.createElement(f,a(a({ref:n},d),{},{components:t})):o.createElement(f,a({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3392:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return d},toc:function(){return h},default:function(){return u}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),a=["components"],s={title:"Blocks"},c=void 0,l={unversionedId:"api/cookbook/blocks",id:"api/cookbook/blocks",title:"Blocks",description:"The building blocks for each blockchain. As such there are a number of examples for working with blocks and headers, that could be useful.",source:"@site/docs/api/cookbook/blocks.md",sourceDirName:"api/cookbook",slug:"/api/cookbook/blocks",permalink:"/docs/api/cookbook/blocks",editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/cookbook/blocks.md",tags:[],version:"current",frontMatter:{title:"Blocks"},sidebar:"reference",previous:{title:"Overview",permalink:"/docs/api/cookbook"},next:{title:"Storage",permalink:"/docs/api/cookbook/storage"}},d={},h=[{value:"How do I retrieve the header/extrinsic hash from blocks?",id:"how-do-i-retrieve-the-headerextrinsic-hash-from-blocks",level:2},{value:"How do I extract the block author?",id:"how-do-i-extract-the-block-author",level:2},{value:"How do I view extrinsic information?",id:"how-do-i-view-extrinsic-information",level:2},{value:"How do I map extrinsics to their events?",id:"how-do-i-map-extrinsics-to-their-events",level:2},{value:"How do I determine if an extrinsic succeeded/failed?",id:"how-do-i-determine-if-an-extrinsic-succeededfailed",level:2}],p={toc:h};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The building blocks for each blockchain. As such there are a number of examples for working with blocks and headers, that could be useful."),(0,r.kt)("h2",{id:"how-do-i-retrieve-the-headerextrinsic-hash-from-blocks"},"How do I retrieve the header/extrinsic hash from blocks?"),(0,r.kt)("p",null,"A block hash refers to the hash over the header, the extrinsic hash refers to the hash of the encoded extrinsic. Since all objects returned by the API implements the ",(0,r.kt)("inlineCode",{parentName:"p"},".hash => Hash")," getter, we can simply use this to view the actual hash."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// returns Hash\nconst blockHash = await api.rpc.chain.getBlockHash(blockNumber);\n// returns SignedBlock\nconst signedBlock = await api.rpc.chain.getBlock(blockHash);\n\n// the hash for the block, always via header (Hash -> toHex()) - will be\n// the same as blockHash above (also available on any header retrieved,\n// subscription or once-off)\nconsole.log(signedBlock.block.header.hash.toHex());\n\n// the hash for each extrinsic in the block\nsignedBlock.block.extrinsics.forEach((ex, index) => {\n  console.log(index, ex.hash.toHex());\n});\n")),(0,r.kt)("h2",{id:"how-do-i-extract-the-block-author"},"How do I extract the block author?"),(0,r.kt)("p",null,"The block author is encoded inside the consensus logs for the block. To extract, you need to decode the log (which the API does do) and then map the index of the validator to the list of session validators. This extraction is however available on the api derive for new head subscriptions, which returns an extended header with the author populated (assuming that the digest logs are known)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// subscribe to all new headers (with extended info)\napi.derive.chain.subscribeNewHeads((header) => {\n  console.log(`#${header.number}: ${header.author}`);\n});\n")),(0,r.kt)("p",null,"For a single header only, the derives also contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"getHeader"),", which once again returns a header extended with the author -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// retrieve the last header (hash optional)\nconst header = await api.derive.chain.getHeader();\n\nconsole.log(`#${header.number}: ${header.author}`);\n")),(0,r.kt)("h2",{id:"how-do-i-view-extrinsic-information"},"How do I view extrinsic information?"),(0,r.kt)("p",null,"The transactions are included in a signed block as part of the extrinsics - some of these will be unsigned and generated by the block author and some of these may be submitted from external sources and be signed. (Some palettes do use unsigned transactions, so signed/unsigned is not an indication of origin). To retrieve the block and display the transaction information, we can do the following -"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// no blockHash is specified, so we retrieve the latest\nconst signedBlock = await api.rpc.chain.getBlock();\n\n// the information for each of the contained extrinsics\nsignedBlock.block.extrinsics.forEach((ex, index) => {\n  // the extrinsics are decoded by the API, human-like view\n  console.log(index, ex.toHuman());\n\n  const { isSigned, meta, method: { args, method, section } } = ex;\n\n  // explicit display of name, args & documentation\n  console.log(`${section}.${method}(${args.map((a) => a.toString()).join(', ')})`);\n  console.log(meta.documentation.map((d) => d.toString()).join('\\n'));\n\n  // signer/nonce info\n  if (isSigned) {\n    console.log(`signer=${ex.signer.toString()}, nonce=${ex.nonce.toString()}`);\n  }\n});\n")),(0,r.kt)("p",null,"In the above ",(0,r.kt)("inlineCode",{parentName:"p"},".toHuman()")," is used to format into a human-readable representation. You can inspect/extract specific fields from the decoded extrinsic as required, for instance ",(0,r.kt)("inlineCode",{parentName:"p"},"ex.method.section")," would return the pallete that executed this transaction."),(0,r.kt)("h2",{id:"how-do-i-map-extrinsics-to-their-events"},"How do I map extrinsics to their events?"),(0,r.kt)("p",null,"While the blocks contain the extrinsics, the system event storage will contain the events and the details needed to allow for a mapping between. For events the ",(0,r.kt)("inlineCode",{parentName:"p"},"phase")," is an enum that would be ",(0,r.kt)("inlineCode",{parentName:"p"},"isApplyExtrinsic")," with the index in the cases where it refers to an extrinsic in a block. This index maps through the order of the extrinsics as found."),(0,r.kt)("p",null,"To perform a mapping between the two, we need information from both sources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// no blockHash is specified, so we retrieve the latest\nconst signedBlock = await api.rpc.chain.getBlock();\nconst allRecords = await api.query.system.events.at(signedBlock.block.header.hash);\n\n// map between the extrinsics and events\nsignedBlock.block.extrinsics.forEach(({ method: { method, section } }, index) => {\n  // filter the specific events based on the phase and then the\n  // index of our extrinsic in the block\n  const events = allRecords\n    .filter(({ phase }) =>\n      phase.isApplyExtrinsic &&\n      phase.asApplyExtrinsic.eq(index)\n    )\n    .map(({ event }) => `${event.section}.${event.method}`);\n\n  console.log(`${section}.${method}:: ${events.join(', ') || 'no events'}`);\n});\n")),(0,r.kt)("h2",{id:"how-do-i-determine-if-an-extrinsic-succeededfailed"},"How do I determine if an extrinsic succeeded/failed?"),(0,r.kt)("p",null,"This is an extension of the above example where extrinsics are mapped to their blocks. However in this example, we will look for specific extrinsic events, in this case the ",(0,r.kt)("inlineCode",{parentName:"p"},"system.ExtrinsicSuccess")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"system.ExtrinsicFailed")," events. The same logic can be applied to inspect any other type of expected event."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// no blockHash is specified, so we retrieve the latest\nconst signedBlock = await api.rpc.chain.getBlock();\nconst allRecords = await api.query.system.events.at(signedBlock.block.header.hash);\n\n// map between the extrinsics and events\nsignedBlock.block.extrinsics.forEach(({ method: { method, section } }, index) => {\n  allRecords\n    // filter the specific events based on the phase and then the\n    // index of our extrinsic in the block\n    .filter(({ phase }) =>\n      phase.isApplyExtrinsic &&\n      phase.asApplyExtrinsic.eq(index)\n    )\n    // test the events against the specific types we are looking for\n    .forEach(({ event }) => {\n      if (api.events.system.ExtrinsicSuccess.is(event)) {\n        // extract the data for this event\n        // (In TS, because of the guard above, these will be typed)\n        const [dispatchInfo] = event.data;\n\n        console.log(`${section}.${method}:: ExtrinsicSuccess:: ${JSON.stringify(dispatchInfo.toHuman())}`);\n      } else if (api.events.system.ExtrinsicFailed.is(event)) {\n        // extract the data for this event\n        const [dispatchError, dispatchInfo] = event.data;\n        let errorInfo;\n\n        // decode the error\n        if (dispatchError.isModule) {\n          // for module errors, we have the section indexed, lookup\n          // (For specific known errors, we can also do a check against the\n          // api.errors.<module>.<ErrorName>.is(dispatchError.asModule) guard)\n          const decoded = api.registry.findMetaError(dispatchError.asModule);\n\n          errorInfo = `${decoded.section}.${decoded.name}`;\n        } else {\n          // Other, CannotLookup, BadOrigin, no extra info\n          errorInfo = dispatchError.toString();\n        }\n\n        console.log(`${section}.${method}:: ExtrinsicFailed:: ${errorInfo}`);\n      }\n    });\n});\n")))}u.isMDXComponent=!0}}]);