!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=r(o(1)),i=r(o(2)),s=r(o(3)),d=r(o(4)),a=r(o(5)),u=n.default();try{u.use(s.default());const e=i.default.diskStorage({destination:function(e,t,o){o(null,"./upload")},filename:function(e,t,o){o(null,t.fieldname+"_"+Date.now()+"_"+t.originalname)}}),t=i.default({storage:e});u.post("/vedio_upload",t.single("vedio"),(e,t)=>{try{t.send(e.file)}catch(e){t.send(400)}}),u.get("/",(function(e,t){t.send(l)})),u.get("/video",(function(e,t){const o=e.headers.range;o||t.status(400).send("Requires Range header");const r="upload/"+e.query.videoPath,n=a.default.statSync(r).size,i=Number(o.replace(/\D/g,"")),s=Math.min(i+10**6,n-1),d={"Content-Range":`bytes ${i}-${s}/${n}`,"Accept-Ranges":"bytes","Content-Length":s-i+1,"Content-Type":"video/mp4"};t.writeHead(206,d);a.default.createReadStream(r,{start:i,end:s}).pipe(t)})),u.listen(3001,(function(){console.log("App is listening on port 3001")}))}catch(e){console.log(new d.default(e).send().body)}const l='<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n    <style>\n      body {\n        margin: 40px auto;\n        max-width: 650px;\n        line-height: 1.6;\n        font-size: 18px;\n        font-family: "Courier New", Courier, monospace;\n        color: #444;\n        padding: 0 10px;\n      }\n      h2 {\n        line-height: 1.2;\n      }\n    </style>\n  </head>\n\n  <body>\n    <h2>HTTP Video Streaming</h2>\n    <p>This video is 61MB and is being streamed instead of downloaded.</p>\n    <p>\n      Feel free to seek through the video and it only loads the part you want to\n      watch\n    </p>\n    <video id="videoPlayer" width="650" controls muted="muted" autoplay>\n      <source src="/video?videoPath=vedio_1630175472482_videoplayback (1).mp4" type="video/mp4" />\n    </video>\n    <i>Big Buck Bunny</i>\n  </body>\n</html>'},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("multer")},function(e,t){e.exports=require("cors")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r extends Error{constructor(e,t="errCommon"){if(super(),this.isError=!1,Error.captureStackTrace(this,this.constructor),"errServer"==t&&(t="errCommon",console.log(`\n${(new Date).toUTCString()} :-`),console.log(e)),"object"==typeof e){if(void 0!==e.errCommon&&(this.errCommon=e.errCommon),void 0!==e.errModuleWise&&(this.errModuleWise=e.errModuleWise),void 0!==e.HTTP_R_S_Code&&(this.HTTP_R_S_Code=e.HTTP_R_S_Code),void 0!==e.isError&&(this.isError=e.isError),e.errCommon||e.errModuleWise||e.HTTP_R_S_Code)return this;this[t]=[],e instanceof Error?(console.log(`\n${(new Date).toUTCString()} :-`),console.log(e),this[t].push({strMessage:"SOMETHING_WENT_WRONG"})):this[t].push({strMessage:e.strMessage,objDetails:e.objDetails}),this.isError=!0}else e&&(this[t]=[],this[t].push({strMessage:e}),this.isError=!0)}add(e,t="errCommon"){if("errServer"==t&&(t="errCommon",console.log(`\n${(new Date).toUTCString()} :-`),console.log(e)),"object"==typeof e){if(void 0!==e.errCommon&&(this.errCommon=e.errCommon),void 0!==e.errModuleWise&&(this.errModuleWise=e.errModuleWise),void 0!==e.HTTP_R_S_Code&&(this.HTTP_R_S_Code=e.HTTP_R_S_Code),e.errCommon||e.errModuleWise||e.HTTP_R_S_Code)return this;void 0===this[t]&&(this[t]=[]),e instanceof Error?(console.log(`\n${(new Date).toUTCString()} :-`),console.log(e),this[t].push({strMessage:"SOMETHING_WENT_WRONG"})):this[t].push({strMessage:e.strMessage,objDetails:e.objDetails}),this.isError=!0}else void 0===this[t]&&(this[t]=[]),this[t].push({strMessage:e}),this.isError=!0}setStatus(e){return this.HTTP_R_S_Code=e,this}send({statusCode:e=400}={}){let t={errCommon:this.errCommon,errModuleWise:this.errModuleWise};return Object.keys(t).forEach(e=>void 0===t[e]?delete t[e]:""),this.HTTP_R_S_Code&&(e=this.HTTP_R_S_Code),{body:t,statusCode:e}}}t.default=r},function(e,t){e.exports=require("fs")}]);