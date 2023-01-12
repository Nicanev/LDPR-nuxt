import{s as H,r as C,t as O,v as U,x as A,y as M,u as k,z as E,A as R,B as T,q as L,C as N,D as K,E as I,F as W,o as z,e as P,i as $,G as V,H as J,I as q,J as G}from"./entry.147117f6.js";const Q=()=>null;function X(...n){var f,B,x,S,m,w,_;const s=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(s);let[r,t,e={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=(f=e.server)!=null?f:!0,e.default=(B=e.default)!=null?B:Q,e.lazy=(x=e.lazy)!=null?x:!1,e.immediate=(S=e.immediate)!=null?S:!0;const a=H(),o=()=>a.isHydrating?a.payload.data[r]:a.static.data[r],u=()=>o()!==void 0;a._asyncData[r]||(a._asyncData[r]={data:C((_=(w=o())!=null?w:(m=e.default)==null?void 0:m.call(e))!=null?_:null),pending:C(!u()),error:C(a.payload._errors[r]?O(a.payload._errors[r]):null)});const i={...a._asyncData[r]};i.refresh=i.execute=(l={})=>{if(a._asyncDataPromises[r]){if(l.dedupe===!1)return a._asyncDataPromises[r];a._asyncDataPromises[r].cancelled=!0}if(l._initial&&u())return o();i.pending.value=!0;const p=new Promise((c,g)=>{try{c(t(a))}catch(D){g(D)}}).then(c=>{if(p.cancelled)return a._asyncDataPromises[r];e.transform&&(c=e.transform(c)),e.pick&&(c=Y(c,e.pick)),i.data.value=c,i.error.value=null}).catch(c=>{var g,D;if(p.cancelled)return a._asyncDataPromises[r];i.error.value=c,i.data.value=k((D=(g=e.default)==null?void 0:g.call(e))!=null?D:null)}).finally(()=>{p.cancelled||(i.pending.value=!1,a.payload.data[r]=i.data.value,i.error.value&&(a.payload._errors[r]=O(i.error.value)),delete a._asyncDataPromises[r])});return a._asyncDataPromises[r]=p,a._asyncDataPromises[r]};const h=()=>i.refresh({_initial:!0}),d=e.server!==!1&&a.payload.serverRendered;{const l=E();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const c=l._nuxtOnBeforeMountCbs;l&&(U(()=>{c.forEach(g=>{g()}),c.splice(0,c.length)}),A(()=>c.splice(0,c.length)))}d&&a.isHydrating&&u()?i.pending.value=!1:l&&(a.payload.serverRendered&&a.isHydrating||e.lazy)&&e.immediate?l._nuxtOnBeforeMountCbs.push(h):e.immediate&&h(),e.watch&&M(e.watch,()=>i.refresh());const p=a.hook("app:data:refresh",c=>{if(!c||c.includes(r))return i.refresh()});l&&A(p)}const y=Promise.resolve(a._asyncDataPromises[r]).then(()=>i);return Object.assign(y,i),y}function Y(n,s){const r={};for(const t of s)r[t]=n[t];return r}const Z={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function tt(n,s={}){s={...Z,...s};const r=F(s);return r.dispatch(n),r.toString()}function F(n){const s=[];let r=[];const t=e=>{s.push(e)};return{toString(){return s.join("")},getContext(){return r},dispatch(e){return n.replacer&&(e=n.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const a=/\[object (.*)]/i,o=Object.prototype.toString.call(e),u=a.exec(o),i=u?u[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let h=null;if((h=r.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+h+"]");if(r.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")if(this["_"+i])this["_"+i](e);else{if(n.ignoreUnknown)return t("["+i+"]");throw new Error('Unknown object type "'+i+'"')}else{let d=Object.keys(e);n.unorderedObjects&&(d=d.sort()),n.respectType!==!1&&!j(e)&&d.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(d=d.filter(function(y){return!n.excludeKeys(y)})),t("object:"+d.length+":");for(const y of d)this.dispatch(y),t(":"),n.excludeValues||this.dispatch(e[y]),t(",")}},_array(e,a){if(a=typeof a<"u"?a:n.unorderedArrays!==!1,t("array:"+e.length+":"),!a||e.length<=1){for(const i of e)this.dispatch(i);return}const o=[],u=e.map(i=>{const h=F(n);return h.dispatch(i),o.push(h.getContext()),h.toString()});return r=[...r,...o],u.sort(),this._array(u,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),j(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const a=[...e];return this._array(a,n.unorderedSets!==!1)},_set(e){t("set:");const a=[...e];return this._array(a,n.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function j(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class v{constructor(s,r){s=this.words=s||[],this.sigBytes=r!==void 0?r:s.length*4}toString(s){return(s||et).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let r=0;r<s.sigBytes;r++){const t=s.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<s.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=s.words[r>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new v([...this.words])}}const et={stringify(n){const s=[];for(let r=0;r<n.sigBytes;r++){const t=n.words[r>>>2]>>>24-r%4*8&255;s.push((t>>>4).toString(16),(t&15).toString(16))}return s.join("")}},rt={stringify(n){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,a=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,o=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,u=e<<16|a<<8|o;for(let i=0;i<4&&t*8+i*6<n.sigBytes*8;i++)r.push(s.charAt(u>>>6*(3-i)&63))}return r.join("")}},st={parse(n){const s=n.length,r=[];for(let t=0;t<s;t++)r[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new v(r,s)}},nt={parse(n){return st.parse(unescape(encodeURIComponent(n)))}};class at{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new v,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=nt.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,r){}_process(s){let r,t=this._data.sigBytes/(this.blockSize*4);s?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let o=0;o<e;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,e),this._data.sigBytes-=a}return new v(r,a)}}class it extends at{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const ot=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ct=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],b=[];class ut extends it{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new v([...ot])}_doProcessBlock(s,r){const t=this._hash.words;let e=t[0],a=t[1],o=t[2],u=t[3],i=t[4],h=t[5],d=t[6],y=t[7];for(let f=0;f<64;f++){if(f<16)b[f]=s[r+f]|0;else{const l=b[f-15],p=(l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3,c=b[f-2],g=(c<<15|c>>>17)^(c<<13|c>>>19)^c>>>10;b[f]=p+b[f-7]+g+b[f-16]}const B=i&h^~i&d,x=e&a^e&o^a&o,S=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),m=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),w=y+m+B+ct[f]+b[f],_=S+x;y=d,d=h,h=i,i=u+w|0,u=o,o=a,a=e,e=w+_|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+o|0,t[3]=t[3]+u|0,t[4]=t[4]+i|0,t[5]=t[5]+h|0,t[6]=t[6]+d|0,t[7]=t[7]+y|0}finalize(s){super.finalize(s);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function lt(n){return new ut().finalize(n).toString(rt)}function ft(n,s={}){const r=typeof n=="string"?n:tt(n,s);return lt(r).slice(0,10)}function ht(n,s,r){const[t={},e]=typeof s=="string"?[{},s]:[s,r],a=t.key||ft([e,k(t.baseURL),typeof n=="string"?n:"",k(t.params)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const o=a===e?"$f"+a:a,u=R(()=>{let p=n;return typeof p=="function"&&(p=p()),k(p)}),{server:i,lazy:h,default:d,transform:y,pick:f,watch:B,immediate:x,...S}=t,m=T({...S,cache:typeof t.cache=="boolean"?void 0:t.cache}),w={server:i,lazy:h,default:d,transform:y,pick:f,immediate:x,watch:[m,u,...B||[]]};let _;return X(o,()=>{var p;return(p=_==null?void 0:_.abort)==null||p.call(_),_=typeof AbortController<"u"?new AbortController:{},$fetch(u.value,{signal:_.signal,...m})},w)}function dt(n){return{}}const pt={class:"profile"},yt={class:"profile__container"},gt=L({__name:"profile",async setup(n){let s,r;const t=N();K(()=>{I(()=>{t.value||G("/register")})});const{data:e}=([s,r]=W(()=>ht("../server/api/profiles",{key:`profiles for ${t.value.id}`,headers:dt()},"$gvemVwytwC")),s=await s,r(),s);return(a,o)=>(z(),P("div",pt,[$("div",yt,[(z(!0),P(V,null,J(k(e),u=>(z(),P("div",{class:"profile__title",key:u.id},q(u.content),1))),128))])]))}});export{gt as default};
