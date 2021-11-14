!function(e){var t={};function o(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const s=r(o(1)),n=r(o(2)),i=r(o(3)),l=r(o(4)),d=r(o(5)),u=s.default();try{u.use(i.default());const e=n.default.diskStorage({destination:function(e,t,o){o(null,"./upload")},filename:function(e,t,o){o(null,t.fieldname+"_"+Date.now()+"_"+t.originalname)}}),t=n.default({storage:e});u.post("/vedio_upload",t.single("vedio"),(e,t)=>{try{t.send(e.file)}catch(e){t.send(400)}}),u.get("/video",(function(e,t){try{const o={};let r,s;const n="upload/"+e.query.videoPath,i=e.headers.range;if(i){const e="bytes=";if(i.startsWith(e)){const t=i.substring(e.length).split("-");if(2===t.length){const e=t[0]&&t[0].trim();e&&e.length>0&&(o.start=r=parseInt(e));const n=t[1]&&t[1].trim();n&&n.length>0&&(o.end=s=parseInt(n))}}}t.setHeader("content-type","video/mp4"),d.default.stat(n,(l,u)=>{if(l)return console.error(`File stat error for ${n}.`),console.error(l),void t.sendStatus(500);let a=u.size;if("HEAD"===e.method)t.statusCode=200,t.setHeader("accept-ranges","bytes"),t.setHeader("content-length",a),t.end();else{let e;e=void 0!==r&&void 0!==s?s+1-r:void 0!==r?a-r:void 0!==s?s+1:a,t.statusCode=void 0!==r||void 0!==s?206:200,t.setHeader("content-length",e),void 0!==i&&(t.setHeader("content-range",`bytes ${r||0}-${s||a-1}/${a}`),t.setHeader("accept-ranges","bytes"));const l=d.default.createReadStream(n,o);l.on("error",e=>{console.log(`Error reading file ${n}.`),console.log(e),t.sendStatus(500)}),l.pipe(t)}})}catch(e){console.log("error"),console.log(e)}})),u.listen(3001,(function(){console.log("App is listening on port 3001")}))}catch(e){console.log(new l.default(e).send().body)}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("multer")},function(e,t){e.exports=require("cors")},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class r extends Error{constructor(e,t="errCommon"){if(super(),this.isError=!1,Error.captureStackTrace(this,this.constructor),"errServer"==t&&(t="errCommon",console.log(`\n${(new Date).toUTCString()} :-`),console.log(e)),"object"==typeof e){if(void 0!==e.errCommon&&(this.errCommon=e.errCommon),void 0!==e.errModuleWise&&(this.errModuleWise=e.errModuleWise),void 0!==e.HTTP_R_S_Code&&(this.HTTP_R_S_Code=e.HTTP_R_S_Code),void 0!==e.isError&&(this.isError=e.isError),e.errCommon||e.errModuleWise||e.HTTP_R_S_Code)return this;this[t]=[],e instanceof Error?(console.log(`\n${(new Date).toUTCString()} :-`),console.log(e),this[t].push({strMessage:"SOMETHING_WENT_WRONG"})):this[t].push({strMessage:e.strMessage,objDetails:e.objDetails}),this.isError=!0}else e&&(this[t]=[],this[t].push({strMessage:e}),this.isError=!0)}add(e,t="errCommon"){if("errServer"==t&&(t="errCommon",console.log(`\n${(new Date).toUTCString()} :-`),console.log(e)),"object"==typeof e){if(void 0!==e.errCommon&&(this.errCommon=e.errCommon),void 0!==e.errModuleWise&&(this.errModuleWise=e.errModuleWise),void 0!==e.HTTP_R_S_Code&&(this.HTTP_R_S_Code=e.HTTP_R_S_Code),e.errCommon||e.errModuleWise||e.HTTP_R_S_Code)return this;void 0===this[t]&&(this[t]=[]),e instanceof Error?(console.log(`\n${(new Date).toUTCString()} :-`),console.log(e),this[t].push({strMessage:"SOMETHING_WENT_WRONG"})):this[t].push({strMessage:e.strMessage,objDetails:e.objDetails}),this.isError=!0}else void 0===this[t]&&(this[t]=[]),this[t].push({strMessage:e}),this.isError=!0}setStatus(e){return this.HTTP_R_S_Code=e,this}send({statusCode:e=400}={}){let t={errCommon:this.errCommon,errModuleWise:this.errModuleWise};return Object.keys(t).forEach(e=>void 0===t[e]?delete t[e]:""),this.HTTP_R_S_Code&&(e=this.HTTP_R_S_Code),{body:t,statusCode:e}}}t.default=r},function(e,t){e.exports=require("fs")}]);