(this["webpackJsonpnear-marketplace"]=this["webpackJsonpnear-marketplace"]||[]).push([[0],{288:function(e,t){},290:function(e,t){},315:function(e,t){},364:function(e,t){},366:function(e,t){},367:function(e,t){},373:function(e,t){},375:function(e,t){},395:function(e,t){},411:function(e,t){},414:function(e,t){},442:function(e,t){},443:function(e,t,c){},448:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(33),s=c.n(r),l=c(457),o=c(462);const i=Object({NODE_ENV:"production",PUBLIC_URL:"/auctioneer",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).CONTRACT_NAME||"mycontract.ozo_vehe.testnet";var d=function(e){switch(e){case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:i,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:i,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};default:throw Error("Unknown environment '".concat(e,"'."))}},j=c(23),b=c(71);const h=d("testnet"),u={networkId:"testnet",keyStore:new j.keyStores.BrowserLocalStorageKeyStore,nodeUrl:"https://rpc.testnet.near.org",walletUrl:"https://testnet.mynearwallet.com/",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://testnet.nearblocks.io"};function x(){return window.walletConnection.requestSignIn({contractId:h.contractName})}function m(){window.walletConnection.signOut(),window.location.reload()}var O=c(459),p=c(454),g=c(464),w=c(1);var f=e=>{let{address:t,amount:c,symbol:n,destroy:a}=e;return t?Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(O.a,{children:[Object(w.jsx)(O.a.Toggle,{variant:"light",align:"end",id:"dropdown-basic",className:"d-flex align-items-center border rounded-pill py-1",children:c?Object(w.jsxs)(w.Fragment,{children:[c," ",Object(w.jsxs)("span",{className:"ms-1",children:[" ",n]})]}):Object(w.jsx)(p.a,{animation:"border",size:"sm",className:"opacity-25"})}),Object(w.jsxs)(O.a.Menu,{className:"shadow-lg border-0",children:[Object(w.jsx)(O.a.Item,{href:"https://explorer.testnet.near.org/accounts/".concat(t),target:"_blank",children:Object(w.jsxs)(g.a,{direction:"horizontal",gap:2,children:[Object(w.jsx)("i",{className:"bi bi-person-circle fs-4"}),Object(w.jsx)("span",{className:"font-monospace",children:t})]})}),Object(w.jsx)(O.a.Divider,{}),Object(w.jsxs)(O.a.Item,{as:"button",className:"d-flex align-items-center",onClick:()=>{a()},children:[Object(w.jsx)("i",{className:"bi bi-box-arrow-right me-2 fs-4"}),"Disconnect"]})]})]})}):null},N=c(219),y=c(458),v=c(460),C=c(221);var S=e=>{let{save:t}=e;const[c,a]=Object(n.useState)(""),[r,s]=Object(n.useState)(""),[l,o]=Object(n.useState)(""),[i,d]=Object(n.useState)(""),[j,b]=Object(n.useState)(0),[h,u]=Object(n.useState)(!1),x=()=>u(!1);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N.a,{onClick:()=>u(!0),variant:"dark",className:"rounded-pill px-0",style:{width:"38px"},children:Object(w.jsx)("i",{class:"bi bi-plus"})}),Object(w.jsxs)(y.a,{show:h,onHide:x,centered:!0,children:[Object(w.jsx)(y.a.Header,{closeButton:!0,children:Object(w.jsx)(y.a.Title,{children:"New Product"})}),Object(w.jsx)(v.a,{children:Object(w.jsxs)(y.a.Body,{children:[Object(w.jsx)(C.a,{controlId:"inputName",label:"Product name",className:"mb-3",children:Object(w.jsx)(v.a.Control,{type:"text",onChange:e=>{a(e.target.value)},placeholder:"Enter name of product"})}),Object(w.jsx)(C.a,{controlId:"inputUrl",label:"Image URL",className:"mb-3",children:Object(w.jsx)(v.a.Control,{type:"text",placeholder:"Image URL",onChange:e=>{s(e.target.value)}})}),Object(w.jsx)(C.a,{controlId:"inputDescription",label:"Description",className:"mb-3",children:Object(w.jsx)(v.a.Control,{as:"textarea",placeholder:"description",style:{height:"80px"},onChange:e=>{o(e.target.value)}})}),Object(w.jsx)(C.a,{controlId:"inputDuration",label:"Duration (in minutes)",className:"mb-3",children:Object(w.jsx)(v.a.Control,{type:"text",placeholder:"Duration",onChange:e=>{d(e.target.value)}})}),Object(w.jsx)(C.a,{controlId:"inputPrice",label:"Price",className:"mb-3",children:Object(w.jsx)(v.a.Control,{type:"text",placeholder:"Price",onChange:e=>{b(e.target.value)}})})]})}),Object(w.jsxs)(y.a.Footer,{children:[Object(w.jsx)(N.a,{variant:"outline-secondary",onClick:x,children:"Close"}),Object(w.jsx)(N.a,{variant:"dark",disabled:!(c&&r&&l&&i&&j),onClick:()=>{t({name:c,image:r,description:l,duration:i,price:j,created:Date.now().toString()}),x()},children:"Save product"})]})]})]})},k=c(220),I=c(461),B=c(455);var F=e=>{let{bid:t,product:c}=e;const[a,r]=Object(n.useState)(0),s=j.utils.format.formatNearAmount(c.price),l=c.bid&&j.utils.format.formatNearAmount(c.bid),o=()=>a>l&&a>s,[i,d]=Object(n.useState)(!1),b=()=>d(!1);return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N.a,{variant:"outline-dark",onClick:()=>d(!0),className:"w-100 py-3",children:"Place Bid"}),Object(w.jsxs)(y.a,{show:i,onHide:b,centered:!0,children:[Object(w.jsx)(y.a.Header,{closeButton:!0,children:Object(w.jsx)(y.a.Title,{children:"Bid Modal"})}),Object(w.jsxs)(v.a,{children:[Object(w.jsx)(y.a.Header,{children:Object(w.jsx)("p",{className:"p-0 m-0",children:"Highest Bid: ".concat(c.bid?l:s," NEAR")})}),Object(w.jsx)(y.a.Body,{children:Object(w.jsx)(C.a,{controlId:"inputBid",label:"Bid",className:"mb-3",children:Object(w.jsx)(v.a.Control,{type:"text",placeholder:"Bid",onChange:e=>{r(e.target.value)}})})})]}),Object(w.jsxs)(y.a.Footer,{children:[Object(w.jsx)(N.a,{variant:"outline-secondary",onClick:b,children:"Close"}),Object(w.jsx)(N.a,{variant:"dark",disabled:!o(),onClick:()=>{console.log(o()),o()?t(c.id,a):alert("Bid should be higher then the current bid amount")},children:"Bid"})]})]})]})};var P=e=>{let{product:t,productDetails:c}=e;const{id:n,name:a,description:r,sold:s,image:l,owner:o,price:i,bidders:d,bids:b,created:h}=t;console.log(t);const u=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],x=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=Number(t.created)+6e4*Number(t.duration),O=new Date(Number(m)),p=new Date(Number(h)),g=e=>"".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds()),f=e=>"".concat(u[e.getDay()]," ").concat(e.getDate()," ").concat(x[e.getMonth()],", ").concat(e.getFullYear());return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("p",{onClick:()=>{c(!1)},style:{cursor:"pointer"},children:"Back"}),Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"",children:Object(w.jsx)("img",{src:l,width:400,height:300,alt:a,style:{objectFit:"cover"}})}),Object(w.jsx)("div",{className:"mt-4",style:{width:"400px"},children:Object(w.jsx)("table",{children:Object(w.jsxs)("tbody",{children:[Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Product ID:"}),Object(w.jsx)("td",{children:n})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Owner:"}),Object(w.jsx)("td",{children:o})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Name:"}),Object(w.jsx)("td",{children:a})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Description:"}),Object(w.jsx)("td",{children:r})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Created:"}),Object(w.jsxs)("td",{children:[f(p)," ",g(p)]})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Ends:"}),Object(w.jsxs)("td",{children:[f(O)," ",g(O)]})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Duration:"}),Object(w.jsxs)("td",{children:[t.duration," minutes"]})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Price:"}),Object(w.jsxs)("td",{children:[j.utils.format.formatNearAmount(i)," NEAR"]})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Sold:"}),Object(w.jsx)("td",{children:s.toString().toUpperCase()})]}),Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:"Bidders:"}),Object(w.jsx)("td",{children:d.length>0?Object(w.jsx)(w.Fragment,{children:(()=>{let e=[];for(let t=0;t<d.length;t++){let c={};c.bidder=d[t],c.bid=b[t],e.push(c)}return e})().map(((e,t)=>Object(w.jsxs)("p",{className:"m-0",children:[Object(w.jsxs)("span",{className:"",children:["Bidder: ",e.bidder]}),Object(w.jsxs)("span",{children:["Bid: ",j.utils.format.formatNearAmount(e.bid)," NEAR"]})]},t)))}):Object(w.jsx)("p",{className:"m-0",children:"No bidders"})})]})]})})})]},n)]})};var D=e=>{let{product:t,bid:c,withdraw:a}=e;const[r,s]=Object(n.useState)(!1),{id:l,name:o,description:i,sold:d,image:b,owner:h,created:u,duration:x}=t;console.log(t);const m=Number(u)+6e4*Number(x),O=Math.round((m-Date.now())/1e3/60),p=O<0,f=h===window.accountId,y=()=>{a(l)};return Object(w.jsx)(w.Fragment,{children:r?Object(w.jsx)(P,{product:t,productDetails:e=>{console.log(e),s(e)}}):Object(w.jsx)(k.a,{children:Object(w.jsxs)(I.a,{className:" h-100",children:[Object(w.jsx)(I.a.Header,{children:Object(w.jsxs)(g.a,{className:"d-flex flex-wrap",direction:"horizontal",gap:2,children:[Object(w.jsxs)("span",{className:"font-monospace text-secondary",children:["Owner: ",h]}),Object(w.jsx)(B.a,{bg:"secondary",className:"ms-auto",children:d&&Object(w.jsx)(w.Fragment,{children:"Sold"})}),!d&&Object(w.jsxs)("div",{className:"w-100 d-flex flex-wrap justify-content-between",children:[Object(w.jsxs)("span",{className:"font-monospace text-secondary",children:["Highest bid:"," ",t.bid?"".concat(j.utils.format.formatNearAmount(t.bid)," NEAR"):0]}),Object(w.jsx)("span",{className:"font-monospace text-secondary",children:p?"Bid ended":"Time left: ".concat(O," minutues")})]})]})}),Object(w.jsx)("div",{className:" ratio ratio-4x3",children:Object(w.jsx)("img",{src:b,alt:o,style:{objectFit:"cover"}})}),Object(w.jsxs)(I.a.Body,{className:"d-flex  flex-column text-center",children:[Object(w.jsx)(I.a.Title,{children:o}),Object(w.jsx)(I.a.Text,{className:"flex-grow-1 ",children:i}),Object(w.jsxs)("div",{className:"d-flex gap-4 align-items-center justify-content-center",children:[(()=>{if(f){if(p&&!d)return Object(w.jsx)(N.a,{variant:"outline-dark",onClick:y,className:"w-100 py-3",children:"Withdraw bid"})}else if(!f&&!p)return Object(w.jsx)(F,{bid:c,product:t})})(),Object(w.jsx)(N.a,{variant:"outline-dark",onClick:()=>s(!r),className:"w-100 py-3",children:"See more"})]})]})]})},l)})};var A=()=>Object(w.jsx)("div",{className:"d-flex justify-content-center",children:Object(w.jsx)(p.a,{animation:"border",role:"status",className:"opacity-25",children:Object(w.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),E=c(456),T=(c(442),c(463));const U=1e14;function H(e){return e.id=Object(T.a)(),e.price=Object(b.parseNearAmount)(e.price+""),window.contract.setProduct({product:e})}function R(){return window.contract.getProducts()}async function _(e){let{id:t}=e;await window.contract.withdrawBid({id:t},U),console.log("Withdraw bid...")}var M=()=>{const[e,t]=Object(n.useState)([]),[c,a]=Object(n.useState)(!1),r=Object(n.useCallback)((async()=>{try{a(!0),t(await R())}catch(e){console.log({error:e})}finally{a(!1)}}),[]),s=async(e,t)=>{console.log("Placing bid...");try{await async function(e){let{id:t,price:c}=e;console.log("Placing bid on marketplace.js...");const n=Object(b.parseNearAmount)(c+"");await window.contract.placeBid({productId:t},U,n)}({id:e,price:t}).then((e=>r())),console.log("Bid placed successfully")}catch(c){}finally{a(!1)}},l=async e=>{try{await _({id:e}).then((e=>r()))}catch(t){}finally{a(!1)}};return Object(n.useEffect)((()=>{r()}),[]),Object(w.jsx)(w.Fragment,{children:c?Object(w.jsx)(A,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(w.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:"Street Food"}),Object(w.jsx)(S,{save:async e=>{console.log(e);try{a(!0),H(e).then((e=>{r()}))}catch(t){console.log({error:t})}finally{a(!1)}}})]}),Object(w.jsx)(E.a,{xs:1,sm:2,lg:3,className:"g-3  mb-5 g-xl-4 g-xxl-5",children:e.map((e=>Object(w.jsx)(D,{product:{...e},bid:s,withdraw:l},e.id)))})]})})};const W=e=>{let{name:t,login:c,coverImg:n}=e;return n?Object(w.jsxs)("div",{className:"d-flex justify-content-center flex-column text-center ",style:{background:"#000",minHeight:"100vh"},children:[Object(w.jsxs)("div",{className:"mt-auto text-light mb-5",children:[Object(w.jsx)("div",{className:" ratio ratio-1x1 mx-auto mb-2",style:{maxWidth:"320px"},children:Object(w.jsx)("img",{src:n,alt:""})}),Object(w.jsx)("h1",{children:t}),Object(w.jsx)("p",{children:"Please connect your wallet to continue."}),Object(w.jsx)(N.a,{onClick:c,variant:"outline-light",className:"rounded-pill px-3 mt-3",children:"Connect Wallet"})]}),Object(w.jsx)("p",{className:"mt-auto text-secondary",children:"Powered by NEAR"})]}):null};W.defaultProps={name:""};var L=W,z=c.p+"static/media/sandwich.2d312449.jpg";c(443);var J=e=>{let{user:t}=e;const[c,a]=Object(n.useState)([]),[r,s]=Object(n.useState)(!1),l=Object(n.useCallback)((async()=>{try{s(!0);const e=await R(),c=[];e.forEach((e=>{e.owner===t&&c.push(e)})),a(c)}catch(e){console.log({error:e})}finally{s(!1)}}),[]),o=async e=>{try{await _({id:e}).then((e=>l()))}catch(t){}finally{s(!1)}};return Object(n.useEffect)((()=>{l()}),[]),Object(w.jsx)(w.Fragment,{children:r?Object(w.jsx)(A,{}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("div",{className:"d-flex justify-content-between align-items-center mb-4",children:[Object(w.jsx)("h1",{className:"fs-4 fw-bold mb-0",children:t}),Object(w.jsx)(S,{save:async e=>{console.log(e);try{s(!0),H(e).then((e=>{l()}))}catch(t){console.log({error:t})}finally{s(!1)}}})]}),c.length>0?Object(w.jsx)(E.a,{xs:1,sm:2,lg:3,className:"g-3 mb-5 g-xl-4 g-xxl-5",children:c.map((e=>Object(w.jsx)(D,{product:{...e},withdraw:o})))}):Object(w.jsx)("p",{className:"fs-5",children:"No products available"})]})})};var K=function(){const[e,t]=Object(n.useState)(!1),[c,a]=Object(n.useState)(!0),r=Object(n.useRef)(window.walletConnection.account()),[s,i]=Object(n.useState)("0"),d=Object(n.useCallback)((async()=>{r.current.accountId&&i(await async function(){return Object(b.formatNearAmount)((await window.walletConnection.account().getAccountBalance()).total,2)}())}),[]),j=Object(n.useCallback)((async()=>{r.current.accountId&&(r.current=window.walletConnection.account())}),[]);return Object(n.useEffect)((()=>{d();(async()=>{j()})()}),[d,j]),Object(w.jsx)(w.Fragment,{children:r.current.accountId?Object(w.jsxs)(l.a,{fluid:"md",children:[Object(w.jsxs)(o.a,{className:"justify-content-end align-items-center gap-4 pt-3 pb-5",children:[Object(w.jsx)(o.a.Item,{children:Object(w.jsx)("button",{onClick:()=>{t(!1),a(!0)},type:"button",className:"border px-3 py-1 rounded-pill btn btn-outline-dark",children:"Home"})}),Object(w.jsx)(o.a.Item,{children:Object(w.jsx)("button",{onClick:()=>{t(!0),a(!1)},type:"button",className:"border px-3 py-1 rounded-pill btn btn-outline-dark",children:"Profile"})}),Object(w.jsx)(o.a.Item,{children:Object(w.jsx)(f,{address:r.current.accountId,amount:s,symbol:"NEAR",destroy:m})})]}),Object(w.jsxs)("main",{children:[e&&Object(w.jsx)(J,{user:r.current.accountId}),c&&Object(w.jsx)(M,{})]})]}):Object(w.jsx)(L,{name:"Street Food",login:x,coverImg:z})})};var q=e=>{e&&e instanceof Function&&c.e(3).then(c.bind(null,465)).then((t=>{let{getCLS:c,getFID:n,getFCP:a,getLCP:r,getTTFB:s}=t;c(e),n(e),a(e),r(e),s(e)}))};c(449),c(446),c(447);window.nearInitPromise=async function(){const e=await Object(j.connect)(u);window.walletConnection=new j.WalletConnection(e,"mycontract.ozo_vehe.testnet"),window.accountId=window.walletConnection.getAccountId(),window.contract=new j.Contract(window.walletConnection.account(),h.contractName,{viewMethods:["getProduct","getProducts","getHighestBid","getHighestBidder"],changeMethods:["placeBid","setProduct","withdrawBid"]})}().then((()=>{s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(K,{})}),document.getElementById("root"))})).catch(console.error),q()}},[[448,1,2]]]);
//# sourceMappingURL=main.1a220eb0.chunk.js.map