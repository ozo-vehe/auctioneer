(this["webpackJsonpnear-marketplace"]=this["webpackJsonpnear-marketplace"]||[]).push([[0],{288:function(e,t){},290:function(e,t){},315:function(e,t){},364:function(e,t){},366:function(e,t){},367:function(e,t){},373:function(e,t){},375:function(e,t){},395:function(e,t){},411:function(e,t){},414:function(e,t){},442:function(e,t){},443:function(e,t,n){},448:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(32),s=n.n(r),o=n(457),l=n(462);const i=Object({NODE_ENV:"production",PUBLIC_URL:"/auctioneer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"mycontract.ozo_vehe.testnet";var d=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:i,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:i,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},j=n(38),b=n(71);const u=d("testnet"),h={networkId:"testnet",keyStore:new j.keyStores.BrowserLocalStorageKeyStore,nodeUrl:"https://rpc.testnet.near.org",walletUrl:"https://testnet.mynearwallet.com/",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://testnet.nearblocks.io"};function m(){return window.walletConnection.requestSignIn({contractId:u.contractName})}function x(){window.walletConnection.signOut(),window.location.reload()}var O=n(459),p=n(454),g=n(464),w=n(1);var f=e=>{let{address:t,amount:n,symbol:c,destroy:a}=e;return t?Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(O.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:n?Object(w.jsxs)(w.Fragment,{children:[n," ",Object(w.jsxs)("span",{className:"ms-1",children:[" ",c]})]}):Object(w.jsx)(p.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(w.jsxs)(O.a.Menu,{className:"shadow-lg border-0",children:[Object(w.jsx)(O.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(w.jsxs)(g.a,{direction:"horizontal",gap:2,children:[Object(w.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(w.jsx)("span",{className:"font-monospace",children:t})]})}),Object(w.jsx)(O.a.Divider,{}),Object(w.jsxs)(O.a.Item,{as:"button",className:"d-flex align-items-center",onClick:()=>{a()},children:[Object(w.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},y=n(219),N=n(458),v=n(460),C=n(221);var k=e=>{let{save:t}=e;const[n,a]=Object(c.useState)(""),[r,s]=Object(c.useState)(""),[o,l]=Object(c.useState)(""),[i,d]=Object(c.useState)(""),[j,b]=Object(c.useState)(0),[u,h]=Object(c.useState)(!1),m=()=>h(!1);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y.a,{onClick:()=>h(!0),variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(w.jsx)("i",{class:"bi bi-plus"})}),Object(w.jsxs)(N.a,{show:u,onHide:m,centered:!0,children:[Object(w.jsx)(N.a.Header,{closeButton:!0,children:Object(w.jsx)(N.a.Title,{children:"New Product"})}),Object(w.jsx)(v.a,{children:Object(w.jsxs)(N.a.Body,{children:[Object(w.jsx)(C.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(w.jsx)(v.a.Control,{type:"text",onChange:e=>{a(e.target.value)},placeholder:"Enter name of product"})}),Object(w.jsx)(C.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(w.jsx)(v.a.Control,{type:"text",placeholder:"Image URL",onChange:e=>{s(e.target.value)}})}),Object(w.jsx)(C.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(w.jsx)(v.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:e=>{l(e.target.value)}})}),Object(w.jsx)(C.a,{controlId:"inputDuration",label:"Duration (in minutes)",className:"mb-3",children:Object(w.jsx)(v.a.Control,{type:"text",placeholder:"Duration",onChange:e=>{d(e.target.value)}})}),Object(w.jsx)(C.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(w.jsx)(v.a.Control,{type:"text",placeholder:"Price",onChange:e=>{b(e.target.value)}})})]})}),Object(w.jsxs)(N.a.Footer,{children:[Object(w.jsx)(y.a,{variant:"outline-secondary",onClick:m,children:"Close"}),Object(w.jsx)(y.a,{variant:"dark",disabled:!(n&&r&&o&&i&&j),onClick:()=>{t({name:n,image:r,description:o,duration:i,price:j,created:Date.now().toString()}),m()},children:"Save product"})]})]})]})},S=n(220),I=n(461),B=n(455);var P=e=>{let{bid:t,product:n}=e;const[a,r]=Object(c.useState)(0),s=j.utils.format.formatNearAmount(n.price),o=n.bid&&j.utils.format.formatNearAmount(n.bid),l=()=>a>o&&a>s,[i,d]=Object(c.useState)(!1),b=()=>d(!1);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y.a,{variant:"outline-dark",onClick:()=>d(!0),className:"w-100 py-3",children:"Place Bid"}),Object(w.jsxs)(N.a,{show:i,onHide:b,centered:!0,children:[Object(w.jsx)(N.a.Header,{closeButton:!0,children:Object(w.jsx)(N.a.Title,{children:"Bid Modal"})}),Object(w.jsxs)(v.a,{children:[Object(w.jsx)(N.a.Header,{children:Object(w.jsx)("p",{className:"p-0 m-0",children:"Highest Bid: ".concat(n.bid?o:s," NEAR")})}),Object(w.jsx)(N.a.Body,{children:Object(w.jsx)(C.a,{controlId:"inputBid",label:"Bid",className:"mb-3",children:Object(w.jsx)(v.a.Control,{type:"text",placeholder:"Bid",onChange:e=>{r(e.target.value)}})})})]}),Object(w.jsxs)(N.a.Footer,{children:[Object(w.jsx)(y.a,{variant:"outline-secondary",onClick:b,children:"Close"}),Object(w.jsx)(y.a,{variant:"dark",disabled:!l(),onClick:()=>{console.log(l()),l()?t(n.id,a):alert("Bid should be higher then the current bid amount")},children:"Bid"})]})]})]})};var F=e=>{let{product:t,bid:n,withdraw:c}=e;const{id:a,name:r,description:s,sold:o,image:l,owner:i}=t;console.log(t);const d=Number(t.created)+6e4*Number(t.duration),b=Math.round((d-Date.now())/1e3/60),u=b<0,h=t.owner===window.accountId,m=()=>{c(a)};return Object(w.jsx)(S.a,{children:Object(w.jsxs)(I.a,{className:" h-100",children:[Object(w.jsx)(I.a.Header,{children:Object(w.jsxs)(g.a,{className:"d-flex flex-wrap",direction:"horizontal",gap:2,children:[Object(w.jsxs)("span",{className:"font-monospace text-secondary",children:["Owner: ",i]}),Object(w.jsx)(B.a,{bg:"secondary",className:"ms-auto",children:o&&Object(w.jsx)(w.Fragment,{children:"Sold"})}),!o&&Object(w.jsxs)("div",{className:"w-100 d-flex flex-wrap justify-content-between",children:[Object(w.jsxs)("span",{className:"font-monospace text-secondary",children:["Highest bid:"," ",t.bid?"".concat(j.utils.format.formatNearAmount(t.bid)," NEAR"):0]}),Object(w.jsx)("span",{className:"font-monospace text-secondary",children:u?"Bid ended":"Time left: ".concat(b," minutues")})]})]})}),Object(w.jsx)("div",{className:" ratio ratio-4x3",children:Object(w.jsx)("img",{src:l,alt:r,style:{objectFit:"cover"}})}),Object(w.jsxs)(I.a.Body,{className:"d-flex  flex-column text-center",children:[Object(w.jsx)(I.a.Title,{children:r}),Object(w.jsx)(I.a.Text,{className:"flex-grow-1 ",children:s}),(()=>{if(h){if(u&&!o)return Object(w.jsx)(y.a,{variant:"outline-dark",onClick:m,className:"w-100 py-3",children:"Withdraw bid"})}else if(!h&&!u)return Object(w.jsx)(P,{bid:n,product:t})})()]})]})},a)};var E=()=>Object(w.jsx)("div",{className:"d-flex justify-content-center",children:Object(w.jsx)(p.a,{animation:"border",role:"status",className:"opacity-25",children:Object(w.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),U=n(456),T=(n(442),n(463));const A=1e14;function H(e){return e.id=Object(T.a)(),e.price=Object(b.parseNearAmount)(e.price+""),window.contract.setProduct({product:e})}function D(){return window.contract.getProducts()}async function _(e){let{id:t}=e;await window.contract.withdrawBid({id:t},A),console.log("Withdraw bid...")}var R=()=>{const[e,t]=Object(c.useState)([]),[n,a]=Object(c.useState)(!1),r=Object(c.useCallback)((async()=>{try{a(!0),t(await D())}catch(e){console.log({error:e})}finally{a(!1)}}),[]),s=async(e,t)=>{console.log("Placing bid...");try{await async function(e){let{id:t,price:n}=e;console.log("Placing bid on marketplace.js...");const c=Object(b.parseNearAmount)(n+"");await window.contract.placeBid({productId:t},A,c)}({id:e,price:t}).then((e=>r())),console.log("Bid placed successfully")}catch(n){}finally{a(!1)}},o=async e=>{try{await _({id:e}).then((e=>r()))}catch(t){}finally{a(!1)}};return Object(c.useEffect)((()=>{r()}),[]),Object(w.jsx)(w.Fragment,{children:n?Object(w.jsx)(E,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(w.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Street Food"}),Object(w.jsx)(k,{save:async e=>{console.log(e);try{a(!0),H(e).then((e=>{r()}))}catch(t){console.log({error:t})}finally{a(!1)}}})]}),Object(w.jsx)(U.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:e.map((e=>Object(w.jsx)(F,{product:{...e},bid:s,withdraw:o})))})]})})};const L=e=>{let{name:t,login:n,coverImg:c}=e;return c?Object(w.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(w.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(w.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(w.jsx)("img",{src:c,alt:""})}),Object(w.jsx)("h1",{children:t}),Object(w.jsx)("p",{children:"Please connect your wallet to continue."}),Object(w.jsx)(y.a,{onClick:n,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(w.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};L.defaultProps={name:""};var W=L,M=n.p+"static/media/sandwich.2d312449.jpg";n(443);var z=e=>{let{user:t}=e;const[n,a]=Object(c.useState)([]),[r,s]=Object(c.useState)(!1),o=Object(c.useCallback)((async()=>{try{s(!0);const e=await D(),n=[];e.forEach((e=>{e.owner===t&&n.push(e)})),a(n)}catch(e){console.log({error:e})}finally{s(!1)}}),[]),l=async e=>{try{await _({id:e}).then((e=>o()))}catch(t){}finally{s(!1)}};return Object(c.useEffect)((()=>{o()}),[]),Object(w.jsx)(w.Fragment,{children:r?Object(w.jsx)(E,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(w.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:t}),Object(w.jsx)(k,{save:async e=>{console.log(e);try{s(!0),H(e).then((e=>{o()}))}catch(t){console.log({error:t})}finally{s(!1)}}})]}),n.length>0?Object(w.jsx)(U.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:n.map((e=>Object(w.jsx)(F,{product:{...e},withdraw:l})))}):Object(w.jsx)("p",{className:"fs-5",children:"No products available"})]})})};var K=function(){const[e,t]=Object(c.useState)(!1),n=Object(c.useRef)(window.walletConnection.account()),a=()=>t(!e),[r,s]=Object(c.useState)("0"),i=Object(c.useCallback)((async()=>{n.current.accountId&&s(await async function(){return Object(b.formatNearAmount)((await window.walletConnection.account().getAccountBalance()).total,2)}())}),[]),d=Object(c.useCallback)((async()=>{n.current.accountId&&(n.current=window.walletConnection.account())}),[]);return Object(c.useEffect)((()=>{i();(async()=>{d()})()}),[i,d]),Object(w.jsx)(w.Fragment,{children:n.current.accountId?Object(w.jsxs)(o.a,{fluid:"md",children:[Object(w.jsxs)(l.a,{className:"justify-content-end align-items-center gap-4 pt-3 pb-5",children:[Object(w.jsx)(l.a.Item,{children:Object(w.jsx)("button",{onClick:a,type:"button",className:"border px-3 py-1 rounded-pill btn btn-outline-dark",children:"Home"})}),Object(w.jsx)(l.a.Item,{children:Object(w.jsx)("button",{onClick:a,type:"button",className:"border px-3 py-1 rounded-pill btn btn-outline-dark",children:"Profile"})}),Object(w.jsx)(l.a.Item,{children:Object(w.jsx)(f,{address:n.current.accountId,amount:r,symbol:"NEAR",destroy:x})})]}),Object(w.jsx)("main",{children:e?Object(w.jsx)(z,{user:n.current.accountId}):Object(w.jsx)(R,{})})]}):Object(w.jsx)(W,{name:"Street Food",login:m,coverImg:M})})};var J=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,465)).then((t=>{let{getCLS:n,getFID:c,getFCP:a,getLCP:r,getTTFB:s}=t;n(e),c(e),a(e),r(e),s(e)}))};n(449),n(446),n(447);window.nearInitPromise=async function(){const e=await Object(j.connect)(h);window.walletConnection=new j.WalletConnection(e,"mycontract.ozo_vehe.testnet"),window.accountId=window.walletConnection.getAccountId(),window.contract=new j.Contract(window.walletConnection.account(),u.contractName,{viewMethods:["getProduct","getProducts","getHighestBid","getHighestBidder"],changeMethods:["placeBid","setProduct","withdrawBid"]})}().then((()=>{s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(K,{})}),document.getElementById("root"))})).catch(console.error),J()}},[[448,1,2]]]);
//# sourceMappingURL=main.d42c9c8c.chunk.js.map