require("dotenv").config();const{CHROME_PATH:CHROME_PATH,SESSION_ID:SESSION_ID}=process.env,path=require("path"),fs=require("fs"),{waitFor:waitFor}=require("./utils"),{Client:Client,MessageMedia:MessageMedia}=require("whatsapp-web.js"),STATUS_BROADCAST="status@broadcast",QRCODE_FILE_PATH=path.join(path.resolve("./session"),`qr_code_${SESSION_ID}.png`),client=new Client({puppeteer:{headless:!0,executablePath:CHROME_PATH},clientId:SESSION_ID}),{signalRClient:signalRClient,serverHub:serverHub}=require("./signalr.util"),qr=require("qr-image");client.on("qr",e=>{const s="- Scan QRCode...";console.log(s);var n=qr.imageSync(e,{type:"png"});fs.writeFileSync(QRCODE_FILE_PATH,n),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:s,sessionId:SESSION_ID})),signalRClient.connection.hub.invoke(serverHub,"ScanMe",JSON.stringify({qrcodePath:QRCODE_FILE_PATH,sessionId:SESSION_ID}))}),client.on("authenticated",()=>{const e="- Authenticated";console.log(e),fs.existsSync(QRCODE_FILE_PATH)&&fs.unlink(QRCODE_FILE_PATH,e=>{e&&console.log(e),console.log(`${QRCODE_FILE_PATH} is deleted!`)}),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:e,sessionId:SESSION_ID}))}),client.on("auth_failure",e=>{const s="- Authentication Failure\n- Session has been reset, please try again";console.log(s),console.log(`msg_failure: ${e}`),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:s,sessionId:SESSION_ID}))}),client.on("ready",async()=>{let e="- WhatsApp Client Library for .NET Developer";console.log(e),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:e,sessionId:SESSION_ID})),e=`- Copyright (C) 2020-${(new Date).getFullYear()}. Kamarudin`,console.log(e),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:e,sessionId:SESSION_ID})),e="- http://wa-net.coding4ever.net/",console.log(e),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:e,sessionId:SESSION_ID})),e=`- WhatsApp Web version ${await client.getWWebVersion()}`,console.log(e),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:e,sessionId:SESSION_ID})),e=`- Chrome version ${(await client.pupPage.browser().version()).toString().split("/")[1]}`,console.log(e),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:e,sessionId:SESSION_ID})),e=`- Current Phone Number:${client.info.wid.user}`,console.log(e),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:e,sessionId:SESSION_ID})),e="- Multi-device BETA",console.log(e),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:e,sessionId:SESSION_ID})),await waitFor(4e3),e="- Ready",console.log(e),signalRClient.connection.hub.invoke(serverHub,"Startup",JSON.stringify({message:e,sessionId:SESSION_ID}))}),client.on("disconnected",e=>{console.log("Client was logged out",e)}),client.on("change_state",e=>{console.log("CHANGE STATE",e),signalRClient.connection.hub.invoke(serverHub,"ChangeState",JSON.stringify({state:e,sessionId:SESSION_ID}))});const isStatusBroadcast=e=>!!e&&e===STATUS_BROADCAST,generateMessageId=()=>(new Date).getTime().toString(36)+Math.random().toString(36).slice(2),replyAsync=async(e,s,n,t)=>{let i=generateMessageId();try{if(!(!e.endsWith("@g.us")&&!isStatusBroadcast(e))||await t.isRegisteredUser(e)){const o=await t.sendMessage(e,s,{quotedMessageId:n}),{id:a}=o;return`true_${e}_${s}_${i=a.id}`}return`false_${e}_${s}_${i}`}catch(e){console.log("error ...."),console.log(e)}return`false_${e}_${s}_${i}`},getContact=async(e,s)=>{let n=void 0;try{n=await s.getContactById(e)}catch(e){console.log(`ex: ${e}`)}return n},getMentions=async(e,s)=>{let n=[];for(const t of e){const e=await getContact(t,s);e&&n.push(e)}return n},sendTextAsync=async(e,s,n,t)=>{let i=generateMessageId();try{if(!(!e.endsWith("@g.us")&&!isStatusBroadcast(e))||await t.isRegisteredUser(e)){let o=[];n&&(o=await getMentions(n,t));const a=await t.sendMessage(e,s,{mentions:o}),{id:r}=a;return`true_${e}_${s}_${i=r.id}`}return`false_${e}_${s}_${i}`}catch(e){console.log("error ...."),console.log(e)}return`false_${e}_${s}_${i}`},sendListOrButtonAsync=async(e,s,n,t,i,o)=>{let a=generateMessageId();try{if(!(!e.endsWith("@g.us")&&!isStatusBroadcast(e))||await o.isRegisteredUser(e)){let r=[];i&&(r=await getMentions(i,o));const l=await o.sendMessage(e,s,{caption:t,mentions:r}),{id:c}=l;return`true_${e}_${n}_${a=c.id}`}return`false_${e}_${n}_${a}`}catch(e){console.log("error ...."),console.log(e)}return`false_${e}_${n}_${a}`},sendImageOrFileAsync=async(e,s,n,t,i)=>{let o=generateMessageId();try{if(!(!e.endsWith("@g.us")&&!isStatusBroadcast(e))||await i.isRegisteredUser(e)){let a=[];t&&(a=await getMentions(t,i));const r=MessageMedia.fromFilePath(s),l=await i.sendMessage(e,r,{caption:n,mentions:a}),{id:c}=l;return`true_${e}_${n}_${o=c.id}`}return`false_${e}_${n}_${o}`}catch(e){console.log(e)}return`false_${e}_${n}_${o}`},sendImageOrFileFromUrlAsync=async(e,s,n,t,i)=>{let o=generateMessageId();try{if(!(!e.endsWith("@g.us")&&!isStatusBroadcast(e))||await i.isRegisteredUser(e))try{let a=[];t&&(a=await getMentions(t,i));const r=await MessageMedia.fromUrl(s),l=await i.sendMessage(e,r,{caption:n,mentions:a}),{id:c}=l;return`true_${e}_${n}_${o=c.id}`}catch(e){console.log(e)}return`false_${e}_${n}_${o}`}catch(e){console.log(e)}return`false_${e}_${n}_${o}`};module.exports={client:client,sendTextAsync:sendTextAsync,sendListOrButtonAsync:sendListOrButtonAsync,sendImageOrFileAsync:sendImageOrFileAsync,sendImageOrFileFromUrlAsync:sendImageOrFileFromUrlAsync,replyAsync:replyAsync,getContact:getContact};