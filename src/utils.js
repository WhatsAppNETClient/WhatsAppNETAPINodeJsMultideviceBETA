const fs=require("fs"),mime=require("mime"),fetch=require("node-fetch"),vcardToJSON=e=>{const o={},r=e.split("\n");for(const e of r){const[r,a]=e.split(":");"BEGIN"!==r&&"END"!==r&&"PHOTO;BASE64"!==r&&("VERSION"===r&&(o.version=a),"N"===r&&(o.n=a),"FN"===r&&(o.fn=a),"ORG"===r&&(o.org=a),"TITLE"===r&&(o.title=a),r.toLowerCase().indexOf("waid")>=0&&(o.waid=a),"TEL;type=Work"===r&&(o.telWork=a),"TEL;type=Home"===r&&(o.telHome=a),"EMAIL;TYPE=Work"===r&&(o.emailWork=a),"EMAIL;TYPE=Home"===r&&(o.emailHome=a),r.indexOf("ADR;type=Work")>=0&&(o.adrWork=a),r.indexOf("ADR;type=Home")>=0&&(o.adrHome=a))}return o},waitFor=e=>new Promise(o=>setTimeout(o,e)),asyncForEach=async(e,o)=>{for(let r=0;r<e.length;r++)await o(e[r],r,e)},saveMedia=(e,o,r)=>{fs.writeFile(`${e}\\${o}`,r,e=>{e&&console.log(e),console.log(`The file '${o}' was saved!`)})};module.exports={vcardToJSON:vcardToJSON,waitFor:waitFor,asyncForEach:asyncForEach,saveMedia:saveMedia};