(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[669],{1135:function(e,t,n){"use strict";n.d(t,{bZ:function(){return f},X:function(){return b},zM:function(){return v},Cd:function(){return T}});var a=n(8732),i=n(1425),r=n(2034),s=n(2784),u=n(2381);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}var o=function(e){return s.createElement(u.JO,p({viewBox:"0 0 24 24"},e),s.createElement("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"}))},y=["status"],l={info:{icon:function(e){return s.createElement(u.JO,p({viewBox:"0 0 24 24"},e),s.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"}))},colorScheme:"blue"},warning:{icon:o,colorScheme:"orange"},success:{icon:function(e){return s.createElement(u.JO,p({viewBox:"0 0 24 24"},e),s.createElement("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"}))},colorScheme:"green"},error:{icon:o,colorScheme:"red"}},d=(0,r.kr)({name:"AlertContext",errorMessage:"useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"}),m=d[0],c=d[1],f=(0,a.Gp)((function(e,t){var n,r=(0,a.Lr)(e),u=r.status,o=void 0===u?"info":u,d=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(r,y),c=null!=(n=e.colorScheme)?n:l[o].colorScheme,f=(0,a.jC)("Alert",p({},e,{colorScheme:c})),T=p({width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden"},f.container);return s.createElement(m,{value:{status:o}},s.createElement(a.Fo,{value:f},s.createElement(a.m$.div,p({role:"alert",ref:t},d,{className:(0,i.cx)("chakra-alert",e.className),__css:T}))))})),T=(0,a.Gp)((function(e,t){var n=(0,a.yK)();return s.createElement(a.m$.div,p({ref:t},e,{className:(0,i.cx)("chakra-alert__title",e.className),__css:n.title}))})),b=(0,a.Gp)((function(e,t){var n=p({display:"inline"},(0,a.yK)().description);return s.createElement(a.m$.div,p({ref:t},e,{className:(0,i.cx)("chakra-alert__desc",e.className),__css:n}))})),v=function(e){var t=c().status,n=l[t].icon,r=(0,a.yK)();return s.createElement(a.m$.span,p({display:"inherit"},e,{className:(0,i.cx)("chakra-alert__icon",e.className),__css:r.icon}),s.createElement(n,{w:"100%",h:"100%"}))}},4845:function(e){e.exports=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"previousAdmin",type:"address"},{indexed:!1,internalType:"address",name:"newAdmin",type:"address"}],name:"AdminChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"beacon",type:"address"}],name:"BeaconUpgraded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{inputs:[],name:"LOWER248",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MAINTAINER_TOKEN",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"METADATA_CONFIG_TOKEN",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"MINTER_TOKEN",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ROLE_GIVER_TOKEN",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"SUPERUSER_TOKEN",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"TRANSFERER_TOKEN",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"addSuperuser",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"burnBatch",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address[]",name:"to",type:"address[]"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"distributeSingles",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"exists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_name",type:"string"},{internalType:"string",name:"_symbol",type:"string"}],name:"initialize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"metadata",type:"string"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mint",outputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"proxiableUUID",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"newuri",type:"string"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"tokenTypeCount",outputs:[{internalType:"uint256",name:"numTypes",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"id",type:"uint256"}],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"}],name:"upgradeTo",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newImplementation",type:"address"},{internalType:"bytes",name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}]},3920:function(e){e.exports="0x61c9A48AEC648a09fF4F4C956540D408a36EB9D7"},8566:function(e,t,n){"use strict";n.d(t,{F:function(){return a},U:function(){return i}});var a=n(4406).env.IPFS_LINK_PATTERN||"https://ipfs.infura.io/ipfs/{cid}/{path}",i="https://metafam.github.io/chievemints/view"},508:function(e,t,n){"use strict";n.d(t,{_m:function(){return s},kC:function(){return u},xb:function(){return p}});var a=n(8529),i=n(5361),r=n(8566),s=function(e){var t,n=null!==(t=null===e||void 0===e?void 0:e.match(/^(?:ipfs|dweb):(?:\/\/)?([^/]+)(?:\/(.*))?$/))&&void 0!==t?t:[],s=(0,a.Z)(n,3),u=s[1],p=s[2];if(u){var o=i.CID.parse(u),y=o.toV0().toString(),l=o.toV1().toString();return r.F.replace(/{cid}/g,u).replace(/{v0cid}/g,y).replace(/{v1cid}/g,l).replace(/{path}/g,null!==p&&void 0!==p?p:"")}return null!==e&&void 0!==e?e:void 0},u=function(e){return null!==e&&void 0!==e&&e.split?e.trim().split(/\s+/g).map((function(e){var t,n,a,i;return"".concat(null!==(t=null===(n=e[0])||void 0===n?void 0:n.toUpperCase())&&void 0!==t?t:"").concat(null!==(a=null===(i=e.substring(1))||void 0===i?void 0:i.toLowerCase())&&void 0!==a?a:"")})).join(" "):e},p=function(e){return Array.isArray(e)?0===e.length:e instanceof Object?0===Object.keys(e).length:""===e}},7635:function(e,t,n){"use strict";n.r(t);var a=n(406),i=n(8526),r=n.n(i),s=n(2784),u=n(1135),p=n(4033),o=n(7960),y=n(4634),l=n(4997),d=n(7729),m=n(5632),c=n(508),f=n(3920),T=n.n(f),b=n(4845),v=n.n(b),h=n(2322);t.default=function(){var e=(0,m.useRouter)().query.nft_id,t=(0,s.useState)(),n=t[0],i=t[1],f=(0,s.useState)(),b=f[0],w=f[1],x=null,M=window;x=M.ethereum;var g=(0,s.useMemo)((function(){return x?new o.Qg(x):null}),[x]),_=(0,s.useMemo)((function(){return g?new y.CH(T(),v(),g.getSigner()):null}),[g]);return(0,s.useEffect)((function(){var t=function(){var t=(0,a.Z)(r().mark((function t(){var n,a,s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!_||!e){t.next=21;break}return t.prev=1,t.next=4,_.uri(l.O$.from(Number(e)));case 4:if(n=t.sent,a=(0,c._m)(n)){t.next=8;break}throw new Error("Couldn't find metadata for token #".concat(e,"."));case 8:return t.next=10,fetch(a);case 10:return s=t.sent,t.t0=i,t.next=14,s.json();case 14:t.t1=t.sent,(0,t.t0)(t.t1),t.next=21;break;case 18:t.prev=18,t.t2=t.catch(1),w(t.t2.message);case 21:case"end":return t.stop()}}),t,null,[[1,18]])})));return function(){return t.apply(this,arguments)}}();t()}),[_,e]),b?(0,h.jsxs)(u.bZ,{status:"error",children:[(0,h.jsx)(u.zM,{}),(0,h.jsx)(u.Cd,{mr:2,children:"Error: Loading NFT"}),(0,h.jsx)(u.X,{children:b})]}):(0,h.jsxs)(p.W2,{children:[(0,h.jsxs)(d.default,{children:[(0,h.jsx)("title",{children:"View NFT"}),(0,h.jsx)("meta",{name:"description",content:"MetaGame\u2019s \u2019Chievemint NFTs"})]}),(0,h.jsx)("pre",{children:JSON.stringify(n,null,2)})]})}},3026:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/view/[nft_id]",function(){return n(7635)}])},5632:function(e,t,n){e.exports=n(5564)},3196:function(){}},function(e){e.O(0,[575,774,888,179],(function(){return t=3026,e(e.s=t);var t}));var t=e.O();_N_E=t}]);