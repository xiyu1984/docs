"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9781:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],c={id:"walletconnect_tutorial",title:"WalletConnect Example",sidebar_label:"WalletConnect"},i=void 0,s={unversionedId:"walletconnect_tutorial",id:"walletconnect_tutorial",isDocsHomePage:!1,title:"WalletConnect Example",description:"What is the WalletConnect Protocol",source:"@site/../docs/WalletConnect\u6559\u7a0b.md",sourceDirName:".",slug:"/walletconnect_tutorial",permalink:"/docs/en/walletconnect_tutorial",editUrl:"https://github.com/PlatONnetwork/docs/tree/master/docs/WalletConnect\u6559\u7a0b.md",version:"current",frontMatter:{id:"walletconnect_tutorial",title:"WalletConnect Example",sidebar_label:"WalletConnect"},sidebar:"docs",previous:{title:"PlatOn WASM contract (9) -- Build-in Type Performance Test",permalink:"/docs/en/WASM_Contract_9"},next:{title:"DApp integration with WalletConnect for ATON",permalink:"/docs/en/DApp_integration_with_WalletConnect_for_ATON"}},p=[{value:"What is the WalletConnect Protocol",id:"what-is-the-walletconnect-protocol",children:[]},{value:"Core Architecture",id:"core-architecture",children:[{value:"Request connection",id:"request-connection",children:[]},{value:"Establish connection",id:"establish-connection",children:[]}]},{value:"Example",id:"example",children:[]}],d={toc:p};function u(e){var t=e.components,c=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-the-walletconnect-protocol"},"What is the WalletConnect Protocol"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://walletconnect.org/"},"WalletConnect")," is an open protocol to communicate securely between Dapps and Wallets. The protocol establishes a remote pairing between two apps and/or devices using a Relay server to relay payloads. These payloads are symmetrically encrypted through a shared key between the two peers. The pairing is initiated by one peer displaying a QR Code or deep link with a standard WalletConnect URI and is established when the counter-party approves this pairing request."),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"ATON v1.1.0 starts to support the WalletConnect protocol. Users can realize the connection with the DApp and transaction signature with the private key kept in the mobile device and away from being exposed to the connected DApp."),(0,o.kt)("li",{parentName:"ul"},"As a DApp developer, you need to understand the basics of Walletconnect integration so that your users can sign transactions generated by your DApp locally in the ATON wallet. "))),(0,o.kt)("h2",{id:""}),(0,o.kt)("h2",{id:"core-architecture"},"Core Architecture"),(0,o.kt)("p",null,"The architecture mainly consists of a websocket server (bridge) between two peers (Dapp and wallet) using the client. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"arch",src:n(8975).Z})),(0,o.kt)("h3",{id:"request-connection"},"Request connection"),(0,o.kt)("p",null,"The initiator is the first node (Dapp) to request connection. Dapp uses the standard WalletConnect URI format (",(0,o.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1328"},"EIP-1328"),") address to send a connection request to the bridge server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"wc:{topic...}@{version...}?bridge={url...}&key={key...}\n// Example URL\nwc:8a5e5bdc-a0e4-4702-ba63-8f1a5655744f@1?bridge=https%3A%2F%2Fbridge.walletconnect.org&key=41791102999c339c844880b23950704cc43aa840f3739e365323cda4dfa89e7a\n")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"wc"),(0,o.kt)("td",{parentName:"tr",align:null},"Protocol prefix ",(0,o.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-1328"},"EIP-1328"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"topic"),(0,o.kt)("td",{parentName:"tr",align:null},"Topic (only for handshake)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"version"),(0,o.kt)("td",{parentName:"tr",align:null},"Version")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"bridge"),(0,o.kt)("td",{parentName:"tr",align:null},"Bridge server address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"key"),(0,o.kt)("td",{parentName:"tr",align:null},"Symmetric key")))),(0,o.kt)("h3",{id:"establish-connection"},"Establish connection"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"establishing connection",src:n(1870).Z})),(0,o.kt)("p",null,"The second node (wallet) will use a QR code or deep link to read the URI. Then the peer will immediately receive and decrypt the request data connected."),(0,o.kt)("p",null,"The wallet will then show the user the request details provided by the Dapp. The user will then approve or reject the connection. If rejected, the Dapp will immediately disconnect from the bridge server and throw an error message provided by the wallet (if any). If approved, the Dapp will receive the provided account and ChainID from the wallet."),(0,o.kt)("p",null,"After the connection is established, the Dapp will be able to send any JSON-RPC call request processed by the wallet to read data from its node or issue a signature request for a transaction or message. "),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PlatONnetwork/WalletConnect-Example"},"Detailed source code"),", ",(0,o.kt)("a",{parentName:"p",href:"https://docs.walletconnect.com/1.0/client-api"},"JSON-RPC description"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import WalletConnect from "@walletconnect/client";\nimport QRCodeModal from "@walletconnect/qrcode-modal";\n\n// Establish connection\nconst connector = new WalletConnect({\n  bridge: "https://bridge.walletconnect.org",\n  qrcodeModal: QRCodeModal,\n});\n\n// Check if connection is established\nif (!connector.connected) {\n  // Create a dialogue\n  connector.createSession();\n}\n\n// Subscribe to connection events \nconnector.on("connect", (error, payload) => {\n  if (error) {\n    throw error;\n  }\n    // After the connection is successful, the wallet account and chain ID will be returned \n  const { accounts, chainId } = payload.params[0];\n});\n\nconnector.on("session_update", (error, payload) => {\n  if (error) {\n    throw error;\n  }\n  const { accounts, chainId } = payload.params[0];\n});\n\nconnector.on("disconnect", (error, payload) => {\n  if (error) {\n    throw error;\n  }\n});\n\n// For the calling method, please refer to: https://docs.walletconnect.com/1.0/client-api\n// Example of how to send a transaction\nconnector.sendTransaction({\n  data: "0x",\n  from: "0xc115ceadf9e5923330e5f42903fe7f926dda65d2",\n  gasLimit: "0x5208",\n  gasPrice: "0x746a528800",\n  nonce: "0x12",\n  to: "0xc115ceadf9e5923330e5f42903fe7f926dda65d2",\n  value: "0x00"\n}).then(txHash => {\n  // hash If the transaction is sent successfully, the wallet will return the transaction hash \n  console.log(\'txHash: \', txHash)\n})\n\n')))}u.isMDXComponent=!0},1870:function(e,t,n){t.Z=n.p+"assets/images/establishing-connection-121e17f010e4b61a7995b823bd590327.png"},8975:function(e,t,n){t.Z=n.p+"assets/images/walletconnect-header-efbfd1fbd6de5bd770cf2f7e91d5cd7a.png"}}]);