!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});class n extends Error{constructor(e,t="errCommon"){if(super(),this.isError=!1,Error.captureStackTrace(this,this.constructor),"errServer"==t&&(t="errCommon",console.log(`\n${(new Date).toUTCString()} :-`),console.log(e)),"object"==typeof e){if(void 0!==e.errCommon&&(this.errCommon=e.errCommon),void 0!==e.errModuleWise&&(this.errModuleWise=e.errModuleWise),void 0!==e.HTTP_R_S_Code&&(this.HTTP_R_S_Code=e.HTTP_R_S_Code),void 0!==e.isError&&(this.isError=e.isError),e.errCommon||e.errModuleWise||e.HTTP_R_S_Code)return this;this[t]=[],e instanceof Error?(console.log(`\n${(new Date).toUTCString()} :-`),console.log(e),this[t].push({strMessage:"SOMETHING_WENT_WRONG"})):this[t].push({strMessage:e.strMessage,objDetails:e.objDetails}),this.isError=!0}else e&&(this[t]=[],this[t].push({strMessage:e}),this.isError=!0)}add(e,t="errCommon"){if("errServer"==t&&(t="errCommon",console.log(`\n${(new Date).toUTCString()} :-`),console.log(e)),"object"==typeof e){if(void 0!==e.errCommon&&(this.errCommon=e.errCommon),void 0!==e.errModuleWise&&(this.errModuleWise=e.errModuleWise),void 0!==e.HTTP_R_S_Code&&(this.HTTP_R_S_Code=e.HTTP_R_S_Code),e.errCommon||e.errModuleWise||e.HTTP_R_S_Code)return this;void 0===this[t]&&(this[t]=[]),e instanceof Error?(console.log(`\n${(new Date).toUTCString()} :-`),console.log(e),this[t].push({strMessage:"SOMETHING_WENT_WRONG"})):this[t].push({strMessage:e.strMessage,objDetails:e.objDetails}),this.isError=!0}else void 0===this[t]&&(this[t]=[]),this[t].push({strMessage:e}),this.isError=!0}setStatus(e){return this.HTTP_R_S_Code=e,this}send({statusCode:e=400}={}){let t={errCommon:this.errCommon,errModuleWise:this.errModuleWise};return Object.keys(t).forEach(e=>void 0===t[e]?delete t[e]:""),this.HTTP_R_S_Code&&(e=this.HTTP_R_S_Code),{body:t,statusCode:e}}}t.default=n},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(14)),n(r(15)),n(r(16)),n(r(17))},function(e,t){e.exports=require("multer")},function(e,t){e.exports=require("aws-sdk")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(5)),s=n(r(2)),i=n(r(6)),a=n(r(0)),u=r(7),c=o.default();try{c.use(i.default()),c.use(u.jwtTokenChecking);const e=s.default.diskStorage({destination:function(e,t,r){r(null,"./upload")},filename:function(e,t,r){r(null,t.fieldname+"_"+Date.now()+"_"+t.originalname)}}),t=s.default({storage:e});c.post("/vedio_upload",t.single("vedio"),(e,t)=>{try{t.send(e.file)}catch(e){t.send(400)}}),c.listen(3001,(function(){console.log("App is listening on port 3001")}))}catch(e){console.log(new a.default(e).send().body)}},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("cors")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(8))},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(9),s=r(1),i=n(r(0));t.jwtTokenChecking=async function(e,t,r){let n={"Content-Type":"application/json","Last-Modified":(new Date).toUTCString()};try{const a=await e.headers["x-access-token"]||e.headers.authorization;if(a){const u=await o.decryptString(s.STR_COMMON_DB_TENANT_ID,a);if(!u)return t.status(401).set(n).send(new i.default("INVALID_TOKEN_PROVIDED").send().body);{const t={issuer:"issuer",subject:"IP",audience:"ABDU"},n=await o.jwtVerify(u,t);e.intUserId=n.intUserId,e.fkPackageId=n.fkPackageId,e.strUserType=n.strUserType,r()}}else{if(console.log("test",s.objOpenAPI[e.originalUrl]),console.log("test",e.originalUrl),!s.objOpenAPI[e.originalUrl])return t.status(401).set(n).send(new i.default("AUTHORIZATION_TOKEN_HEADER_IS_MISSING").send().body);r()}}catch(e){return t.status(401).set(n).send(new i.default(e).send().body)}}},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(10)),n(r(12)),n(r(18)),n(r(21)),n(r(24)),n(r(26)),n(r(27)),n(r(29))},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),s=n(r(11));t.makeController=function(e){return(t,r)=>{try{const n={body:t.body,query:t.query,params:t.params,ip:t.ip,authorization:t.get("x-access-token"),intUserId:t.intUserId,fkPackageId:t.fkPackageId,strUserType:t.strUserType,method:t.method,timReceived:s.default().format("M/D/YYYY hh:m:s a"),path:t.originalUrl,strAudience:(t.get("str-audience")||"").toUpperCase(),headers:{"Content-Type":t.get("Content-Type"),Referer:t.get("referer"),"User-Agent":t.get("User-Agent")}};e(n).then(({headers:e={"Content-Type":"application/json","Last-Modified":(new Date).toUTCString()},type:t="json",statusCode:n=200,body:o})=>{if(!o)throw new Error("EMPTY_RESPONSE");r.set(e),r.type(t),r.status(n).send(o)}).catch(e=>{let t=new o.default(e).send();r.status(t.statusCode).set({"Content-Type":"application/json","Last-Modified":(new Date).toUTCString()}).send(t.body)})}catch(e){let t=new o.default(e).send();r.status(t.statusCode).set({"Content-Type":"application/json","Last-Modified":(new Date).toUTCString()}).send(t.body)}}}},function(e,t){e.exports=require("moment")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(13),s=n(r(0)),i=r(1);t.getPgConnection=async function(){try{if(i.OBJ_DB_CONFIG){let e=await new o.Client(i.OBJ_DB_CONFIG);return await e.connect(),e}throw new s.default({strMessage:"CONFIGURATION_MISSING",objDetails:"DATABASE"},"errCommon")}catch(e){throw new s.default(e,"errServer")}}},function(e,t){e.exports=require("pg")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.USER_MODULE="mdl_user"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.STR_COMMON_DB_TENANT_ID="postgres",t.STR_COMMON_DB="postgres",t.STR_COMMON_DB_USER_NAME="postgres",t.STR_COMMON_DB_PASSWORD="root123",t.STR_BUCKET_URL="",t.INT_ESTIMATE_DELIVERY_DAYS=10,t.INT_MAX_MASTER_IMAGE_SIZE=100,t.INT_MAX_PRODUCT_IMAGE_SIZE=512,t.INT_MAX_PROFILE_IMAGE_SIZE=50,t.AWS_ACCESS_KEY_ID="AKIA444CFGVCED6W7VAA",t.AWS_SECRET_ACCESS_KEY="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",t.AWS_S3_LOCATION="ap-south-1",t.AWS_S3_MASTER_BUCKET="swizbay",t.AWS_BUCKET_URL="https://swizbay.s3.ap-south-1.amazonaws.com/",t.OBJ_DB_CONFIG={user:"ubuntu",host:"localhost",database:"TRD",password:"ubuntu",port:5432},t.OBJ_MASTER_TYPE={expense:!0,vendor:!0,purchase:!0,material:!0,rental_items:!0},t.OBJ_OPEN_TABLE={tbl_materia:!0,tbl_rental:!0},t.OBJ_Account_TYPE={SUPPLIER:!0,PARTY:!0,CASH:!0,BANK:!0,VENDOR:!0,SALARY:!0,PURCHASE_COMMISION:!0,OTHER_EXPENSE:!0,OTHER_INCOME:!0}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TBL_USER="tbl_user",t.TBL_ACCOUNT="tbl_account",t.TBL_Master="tbl_master"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.objOpenAPI={"/user/login_user":!0,"/login_user":!0,"/get_drop_down":!0,"/common/get_drop_down":!0,"/create_user":!0,"/user/create_user":!0}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(19)),s=n(r(20)),i=n(r(0));t.hashString=function(e){return new Promise((function(t,r){try{e.length>0?o.default.genSalt(10,(function(r,n){o.default.hash(e,n,(function(e,r){t(r)}))})):r("NULL_INPUT_RECVD")}catch(e){throw new i.default(e)}}))},t.compareHashAndText=function(e,t){return new Promise((async function(r,n){try{if(e&&t){r(await o.default.compareSync(e,t))}else n("NULL_INPUT_RECVD")}catch(e){throw new i.default(e)}}))},t.encryptString=async function(e){return e?(await s.default.AES.encrypt(e,"ABDR")).toString():e},t.decryptString=async function(e,t){return t?(await s.default.AES.decrypt(t,"ABDR")).toString(s.default.enc.Utf8):t}},function(e,t){e.exports=require("bcryptjs")},function(e,t){e.exports=require("crypto-js")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(22)),s=n(r(0)),i=n(r(23));t.jwtSignIn=async function(e,t){try{let r=await i.default.readFileSync("./config/private.key","utf-8"),n=await({issuer:t.issuer,subject:t.subject,audience:t.audience,algorithm:"RS256"});return await o.default.sign(e,r,n)}catch(e){throw new s.default(e)}},t.jwtVerify=async function(e,t){try{let r=await i.default.readFileSync("./config/public.key","utf-8"),n={issuer:t.issuer,subject:t.subject,audience:t.audience,algorithm:"RS256"};return o.default.verify(e,r,n)}catch(e){throw new s.default(e)}},t.jwtDecode=async function(e){try{return o.default.decode(e,{complete:!0})}catch(e){throw new s.default(e)}}},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("fs")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(25)),s=n(r(0));async function i(){try{let e=await o.default.createClient();return console.log("redis connected"),e}catch(e){throw new s.default(e)}}t.initializeRedisConn=i,t.setRedisData=async function(e,t){let r=await i();try{return await r.on("error",(function(e){console.error(e)})),r.set(e,t,o.default.print)}catch(e){throw new s.default(e)}finally{await r.quit()}},t.getRedisData=async function(e){let t=await i();return new Promise((function(r,n){try{t.get(e,(function(e,t){t&&r(t),r(null)}))}catch(e){n(new s.default(e))}finally{t.quit()}}))},t.checkPartialKeyExist=async function(e){let t=await i();return new Promise((function(r,n){try{return t.keys(e+"*",(function(e,t){t&&r(t),r(null)}))}catch(e){n(new s.default(e))}finally{t.quit()}}))}},function(e,t){e.exports=require("redis")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0));t.makeFileController=function(e){return(t,r)=>{try{const n={body:t.body,file:t.file,files:t.files,query:t.query,params:t.params,ip:t.ip,intUserId:t.intUserId,fkPackageId:t.fkPackageId,strUserType:t.strUserType,authorization:t.get("x-access-token"),method:t.method,timReceived:(new Date).toUTCString(),path:t.originalUrl,strAudience:(t.get("str-audience")||"").toUpperCase(),headers:{"Content-Type":t.get("Content-Type"),Referer:t.get("referer"),"User-Agent":t.get("User-Agent")}};e(n).then(({headers:e={"Content-Type":"text/plain","Last-Modified":(new Date).toUTCString()},type:t="json",statusCode:n=200,body:o})=>{if(!o)throw new Error("EMPTY_RESPONSE");r.set(e),r.type(t),r.status(n).send(o)}).catch(e=>{let t=new o.default(e).send();r.status(t.statusCode).set({"Content-Type":"application/json","Last-Modified":(new Date).toUTCString()}).send(t.body)})}catch(e){let t=new o.default(e).send();r.status(t.statusCode).set({"Content-Type":"application/json","Last-Modified":(new Date).toUTCString()}).send(t.body)}}}},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(1),s=n(r(2)),i=n(r(28)),a=n(r(3));let u=`mdlmaster${Date.now()}.jpg`;a.default.config.update({accessKeyId:o.AWS_ACCESS_KEY_ID,secretAccessKey:o.AWS_SECRET_ACCESS_KEY,region:o.AWS_S3_LOCATION});let c=new a.default.S3,l=s.default({storage:i.default({s3:c,bucket:o.AWS_S3_MASTER_BUCKET,metadata:function(e,t,r){r(null,{fieldName:u})},key:function(e,t,r){r(null,u),e.body[u]="https://masteraxef.s3.ap-south-1.amazonaws.com/"+u}})});t.fileUploadToS3=l},function(e,t){e.exports=require("multer-s3")},function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=r(1),s=n(r(3)),i=n(r(0));t.multiFilesToS3=async function({arrFiles:e}){try{await s.default.config.update({accessKeyId:o.AWS_ACCESS_KEY_ID,secretAccessKey:o.AWS_SECRET_ACCESS_KEY,region:o.AWS_S3_LOCATION});let t=await new s.default.S3,r={},n="mdlmaster"+Date.now(),i=".jpg";return{arrUrls:await Promise.all(e.map(async(e,s)=>{console.log(e.name);let a=await e.name.split(".");return console.log("arrFilename"),console.log(a),i=await a[a.length-1],r["strImgUrl_"+s]=`${o.AWS_BUCKET_URL}${s}${n}.${i}`,await t.putObject({Bucket:o.AWS_S3_MASTER_BUCKET,Body:e.data,Key:`${s}${n}.${i}`,ACL:"public-read"},(function(e,t){e&&console.log("Error uploading data: ",e)})),{status:!0,url:`${o.AWS_BUCKET_URL}${s}${n}.${i}`}})),...r}}catch(e){throw new i.default(e)}}}]);