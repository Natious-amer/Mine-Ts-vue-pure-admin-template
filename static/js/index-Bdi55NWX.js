var y=(t,e,o)=>new Promise((n,r)=>{var s=l=>{try{a(o.next(l))}catch(c){r(c)}},i=l=>{try{a(o.throw(l))}catch(c){r(c)}},a=l=>l.done?n(l.value):Promise.resolve(l.value).then(s,i);a((o=o.apply(t,e)).next())});import{d as C,a as p,b3 as ht,n as M,m as P,o as lt,f as b,k as z,B as pt,a0 as At,g as m,Q as x,i as E,t as D,j as H,y as T,b4 as vt,b5 as yt,b6 as F,b7 as wt,p as B,b8 as bt,b9 as _t,u as w,F as Et,l as Ot,s as zt,ba as K,r as It,b as St,w as j,bb as Rt,e as W,q as xt,a3 as Dt,_ as Ct}from"./index-B0Z6rV6K.js";import{B as Nt}from"./back_top-DSp-QbWF.js";function Ft(t=6){return Number(Math.random().toString().substr(3,t)+Date.now()).toString(36)}const Bt=["#409EFF","#67C23A","#E6A23C","#F56C6C","#909399"];function jt(t,e){return Math.floor(Math.random()*(e-t+1))+t}function Lt(){return Bt[jt(0,4)]}const Mt="https://www.getphotoblanket.com",Pt=({page:t=1,pageSize:e=20})=>{const o=`${Mt}/products.json?page=${t}&limit=${e}`;return fetch(o).then(n=>n.json()).then(n=>n.products).then(n=>n.map(r=>({id:Ft(),star:!1,price:r.variants[0].price,src:{original:r.images[0].src},backgroundColor:Lt(),name:r.title})))},Tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABbFJREFUaEPtWV1sFFUUPufOLmjpD7G0nXtm11igD0Q0CpqImsiDEcGoIVEReeBBNGgkEQSjwUR4MQZ/MBr/MeFFFIkxYAR9MGr84cFijBJ9UFPD7r3TqtWWLsVuO3PM3ew20+3uzizTxpDsTSa7e+ec75zvnPtz7l2E87zhee4/NAj83xlsZKCRgZgRaAyhmAGMrV4zA5lM5sJEItGcz+dbhBDN5gGAZkRsQcTCd/Mwc0vpu+k3v5l5yHGcDUEPtdY7AeAsIp4t/5yYmCj0myefz//LzGfNY/p7enrGqjGtSEAp9ZgQYgsz07mGiJk3OY7zVklfKbULEZ88FzxE1L7vv+Q4ztPl+tMIZLPZFUKIb87FUFBHCLHQtu2+Up/WmuNi+r5/bSqVOh7EmUZAa70VAJ6PYwwRJ6SUyRKG67odzPxHHMyi7jYi2luTgOu6O5h5T1xjiLhDSvlsIAOfAcDKOLiI+KiU8pmwDGwGgFfjGCrqDhLRgkAWHmTml2PiPkBEr4URuAcA3o5pqKR+PxG9aX7M0DDaQEQHahJQSt2KiEdmiMA7RGQCUmha61jDiJlvcxznw7A5cAMzfz4TBHzfvzGVSn1qsDKZzErLsgyBac0skwBwwvf9HCKuBoD5VeRWSim/CMvAMkQ8MQME+ohoYZToE9HkapjNZq9AxFcQcUW5D8y83HGc72oSyGQyiy3L+qUeAsx8yMgj4p0BvZ1E9FRY9Jl5t+M4u4L2tNaPA0BBN9g8z+tJp9O/1iTQ39/f6fv+QB0ExoQQS4aGhv5qa2s7zsyXGl0hRJdt24W1P2TsbyWiF4L2lFL3IuK+ch+CmKV30zYyU/9YljVaB4EDRFSoeUrj3CwCUsrbw6JftPE9EV1ZloFhAGitkIGmdDpt6qjJVrEWcl03z8yTO2kImTuI6P2STDabfUQIsYqIbjJ91aJZhjkCANuZeSkArEbExeU2EXFcSjlnWn8l55RSg4h4UVgWELHPtu1FiDilzlFKmaxsNEa11ksA4KcwrLD3zPy34zjtkQhorU0RdkkYqJloRGRK5ClNKXUxIposFDax8kIOEfczcxsArI1goyTyOxF1RyKglPoBES+LAH4VEVVccrXWa4nogyKBXgBYXnR8DxH9XOz/EgCuj2AHmPlHx3Euj0RAa/0VAFwXAvw1EdU03tfXN7+7u3tIa73X87zD6XR6ygaZzWavEUJMKY9r2Kxor9okPsrMZkes1TYT0etRoldLxnXdF5l5SxgOIh6TUq6JlAGl1EFEvKsWqO/7C1Kp1GCY4bD3zDzHdd2TANBTS5aZ33McZ10kAlprM/k2VQNExENSypoEwxwPvndddyMz7w/R2UdE90UlYE5k5mRWsVWqCutxuJKs1tqUyetr4Owlom2RCLiuu4uZqx3A/yGi0D2iXkKnTp1amkgkTKVZERsRd0spp9RMxkbFSVzcTSePg2XOFNbjwcFBs9W35vP5Vs/z2oQQrYjY6vt+4dOs86ZI01o/AQA5Zs5ZljUyMTGRE0KMmN/JZHJkdHQ019TUNNLZ2ZmrVTP5vr89lUo9FykDWmsz1t6oN4pBeSHE+vHx8cN11lW1TE6e7oJCFTPQ39+/zvf9d+MQYOZlxc2rsBvHbUKIu23bPhgpA67rrmHmj2IY/bNYihiMWDcRJR8Q8RYp5dFIBAYGBhZ5njfl4FAvGSnlBUqph4QQ1eZSXZCWZS3u6ur6LRIBI6S1/hgAVkW0wsx8GhFPA8AIIuYA4OTw8PDDLS0txxBxXukutXiPOi8ibknsEyK6uZJO1ctds8qMjY2Zc+nVAFBwzjjJzCOJRCKXz+fPJJNJ46h5zti2fSaqU729vcmOjo5my7LmBS6MDSlzcdzseV7w8vjbuXPnHm9vbzfBmdYa/w9EjfpsyTUyMFuRjYrbyEDUSM2WXCMDsxXZqLjnfQb+A8eWU0/QfZYsAAAAAElFTkSuQmCC",kt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABNBJREFUaEPtmV1oXEUUx//n3g1JRGqL9k1RsFq/6IMgSky8c2YTQyONiojWYumTQrWKSNH6oO1TS1EQFcTiQwsaK4qIbVdod+/M3Y0IteJDwVr1oVYFEfFFwUY2c2TCbrhZNptNduvuQgf2Ze85M+c359w5Z84l9PigHrcflwCqHrTWsoiUmLn8f3q1bR4wxggRlZxz00EQlCowf19smLYAxHF8NxFNA/gUgAKwGsApD5GC+eNiwLQL4GUi2gNgDIA31ENEKZhzIvK5h5mZmZkeHx//uV0wbQEwxpQADDPzgvny+fyNYRhO1MB42w9674RhWIqi6IdWYFoGMMbcBuA0ER1RSk3GcbyViB4HcBTAMWb+0RtYKpXWlMvlSSKaFBFdCTP/yIrIRxWY08uFaQfAswAeAPAaMx81xhwmojVpQ0TkSxH5QGt9tvp/kiQTzrlJAOsroeYfnXPOHQrD8JhS6qtmYFoGaGaRRjKFQuF6IhononsB+N9gSv4ggENKqYSIpN48cwCFQmF3EARPt2rMcvWZ+ao4ju/TWh+r6hpjRkVkYwXIh+d8qvEw/f39Hw4NDf1T/TMN8AqA/HKNWKk8EWmlVFjZvG0iUiSiIjO/W52zWCyuLZfLm4hoE4DxlHfmQi2bze6uBbih+tKt1LBm9Ky17wN4NAXgN29uiMi/HsS/2FrrA+n5isXi7bOzsx5mdyaTWT8yMvJ9XQC/K80YshIZv2uNAOrM+bWIHKjCWGuPi8g9zDzgZesC+LJgJcYtpeOc27MCAD/taWbeYIy5i4gKzjnvnW29BLCLmfcZY54H8GoQBONRFB3vGYByuXzt2NjYeWPMJwAeTGf8rg8hIvpTKXVlHMe3AogBnNFa+1prbnQ9gIi8rbXeHsfxE0T0DhE9qZSaP526HgDACDNPW2sPicjWvr6+VcPDw3/1jAd8vJ84ceKKTCbjj1NordelT7tu98BRZt5krd0sIlNEtFcp9VLPAIjIFq31lDHmLQBPBUGwIYqiBSV3xz1gjPFlRN3MXz0ujTHf+LKbmS+rTZZdC0BEJ5VSdxYKBR0EQYGIppRSW3oGAEA1++4F8KK/ySmljvQMQDX7Wmt9ZeqP0rqXr24NoZ+Y+TpjzDoiOuvvCszM9YrFbgV4nZmfi+N4JxHtJ6JnlFJv9hLAXPY1xuQAbASwlpnrNsY67oHKlXL+RgbgAjMP5nK5/oGBgd+DIPhNKeU7F3VHxwFq80Cl/fKYMeYRAIdFZL/W+oWeAQDwMDN/7PtLADzEHcx8qmcAUtn3FxFZrbW+vNFVteMhFMexj+/7faKqxP9okiRDzrkvALzHzL5NuejoOEDasiRJJqMo+sxau19EdgZB8FAURf4auTyARgrteJZuq9SbzxhzBsBNi2XfJcvpdhjZaI5GAEmSXOOcO09EsVIqu5QtHe/M1Rpord0hIm8A2MHM/h7QcHQjQMF/P3DOXZ3NZn/teoBKJr4AYLpSPviu4HfMfPNSxvvnCzzgnNvejFKrMmEYDi/S3LWVjx37mHlXM+vUhlAzOm2RISLnu9N+slwut2pwcHCCiCZExH+5mchmsyebWWgOwBgz3+lqRqldMszsd3zByOfzt4yOjn7b7Bod/8TUrKGLyV0CaHUHW9X/D9N93V6azvezAAAAAElFTkSuQmCC";function Ht(t,e=null){if(!t)return!1;const o=t.getBoundingClientRect(),n=e?e.getBoundingClientRect():{top:0,left:0,bottom:window.innerHeight,right:window.innerWidth};return o.bottom>=n.top&&o.top<=n.bottom&&o.right>=n.left&&o.left<=n.right}function Kt(t){return y(this,null,function*(){return t?(yield T(),t.value instanceof HTMLElement?t.value:t.value?document.querySelector(t.value):null):null})}function Wt(t){let e=`0px 0px ${t.distance}px 0px`;t.top&&(e=`${t.distance}px 0px 0px 0px`);const o=new IntersectionObserver(n=>{n[0].isIntersecting&&(t.firstload&&t.emit(),t.firstload=!0)},{root:t.parentEl,rootMargin:e});return t.infiniteLoading.value&&o.observe(t.infiniteLoading.value),o}function Q(t,e){return y(this,null,function*(){if(yield T(),!t.top)return;const o=t.parentEl||document.documentElement;o.scrollTop=o.scrollHeight-e})}const ct=(t,e)=>{const o=t.__vccOpts||t;for(const[n,r]of e)o[n]=r;return o},Qt={},Gt=t=>(vt("data-v-d3e37633"),t=t(),yt(),t),Ut={class:"container"},Yt=Gt(()=>m("div",{class:"spinner"},null,-1)),Vt=[Yt];function Zt(t,e){return b(),z("div",Ut,Vt)}const Xt=ct(Qt,[["render",Zt],["__scopeId","data-v-d3e37633"]]),Jt={class:"state-error"},qt=C({__name:"InfiniteLoading",props:{top:{type:Boolean,default:!1},target:{},distance:{default:0},identifier:{},firstload:{type:Boolean,default:!0},slots:{}},emits:["infinite"],setup(t,{emit:e}){const o=t;let n=null,r=0;const s=p(null),i=p(""),{top:a,firstload:l,distance:c}=o,{identifier:u,target:f}=ht(o),d={infiniteLoading:s,top:a,firstload:l,distance:c,parentEl:null,emit(){r=(d.parentEl||document.documentElement).scrollHeight,g.loading(),e("infinite",g)}},g={loading(){i.value="loading"},loaded(){return y(this,null,function*(){i.value="loaded",yield Q(d,r),Ht(s.value,d.parentEl)&&d.emit()})},complete(){return y(this,null,function*(){i.value="complete",yield Q(d,r),n==null||n.disconnect()})},error(){i.value="error"}};function h(){n==null||n.disconnect(),n=Wt(d)}return M(u,h),P(()=>y(this,null,function*(){d.parentEl=yield Kt(f),h()})),lt(()=>n==null?void 0:n.disconnect()),(A,R)=>(b(),z("div",{ref_key:"infiniteLoading",ref:s,class:"v3-infinite-loading"},[pt(m("div",null,[x(A.$slots,"spinner",{},()=>[E(Xt)],!0)],512),[[At,i.value=="loading"]]),i.value=="complete"?x(A.$slots,"complete",{key:0},()=>{var v;return[m("span",null,D(((v=A.slots)==null?void 0:v.complete)||"No more results!"),1)]},!0):H("",!0),i.value=="error"?x(A.$slots,"error",{key:1,retry:d.emit},()=>{var v;return[m("span",Jt,[m("span",null,D(((v=A.slots)==null?void 0:v.error)||"Oops something went wrong!"),1),m("button",{class:"retry",onClick:R[0]||(R[0]=(...N)=>d.emit&&d.emit(...N))},"retry")])]},!0):H("",!0)],512))}}),$t=ct(qt,[["__scopeId","data-v-4bdee133"]]);function te(t){return bt()?(_t(t),!0):!1}const ut=typeof window!="undefined";function ee(t,e){function o(...n){t(()=>e.apply(this,n),{fn:e,thisArg:this,args:n})}return o}function ne(t,e={}){let o,n;return s=>{const i=w(t),a=w(e.maxWait);if(o&&clearTimeout(o),i<=0||a!==void 0&&a<=0)return n&&(clearTimeout(n),n=null),s();a&&!n&&(n=setTimeout(()=>{o&&clearTimeout(o),n=null,s()},a)),o=setTimeout(()=>{n&&clearTimeout(n),n=null,s()},i)}}function oe(t,e=200,o={}){return ee(ne(e,o),t)}function re(t){var e;const o=w(t);return(e=o==null?void 0:o.$el)!=null?e:o}const ie=ut?window:void 0,G=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},U="__vueuse_ssr_handlers__";G[U]=G[U]||{};var Y=Object.getOwnPropertySymbols,se=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,le=(t,e)=>{var o={};for(var n in t)se.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(t!=null&&Y)for(var n of Y(t))e.indexOf(n)<0&&ae.call(t,n)&&(o[n]=t[n]);return o};function ce(t,e,o={}){const n=o,{window:r=ie}=n,s=le(n,["window"]);let i;const a=r&&"ResizeObserver"in r,l=()=>{i&&(i.disconnect(),i=void 0)},c=M(()=>re(t),f=>{l(),a&&r&&f&&(i=new ResizeObserver(e),i.observe(f,s))},{immediate:!0,flush:"post"}),u=()=>{l(),c()};return te(u),{isSupported:a,stop:u}}var V,Z;ut&&(window!=null&&window.navigator)&&((V=window==null?void 0:window.navigator)!=null&&V.platform)&&/iP(ad|hone|od)/.test((Z=window==null?void 0:window.navigator)==null?void 0:Z.platform);const ue=({breakpoints:t,wrapperWidth:e,gutter:o,hasAroundGutter:n,initWidth:r})=>{const s=Object.keys(t).map(u=>Number(u)).sort((u,f)=>u-f);let i=e,a=!1;for(const u of s)if(e<=u){i=u,a=!0;break}if(!a)return r;let l=0;const c=t[i].rowPerView;return n?l=(e-o)/c-o:l=(e-(c-1)*o)/c,Math.floor(l)};function de(t){const e=p(0),o=p(null);ce(o,i=>{const a=i[0],{width:l}=a.contentRect;e.value=l});const n=B(()=>ue({wrapperWidth:e.value,breakpoints:t.breakpoints,gutter:t.gutter,hasAroundGutter:t.hasAroundGutter,initWidth:t.width})),r=B(()=>{const i=t.hasAroundGutter?-t.gutter:t.gutter,a=(e.value+i)/(n.value+t.gutter);return Math.floor(a)}),s=B(()=>{if(t.align==="left")return 0;if(t.align==="center"){const i=t.hasAroundGutter?t.gutter:-t.gutter,a=r.value*(n.value+t.gutter)+i;return(e.value-a)/2}else{const i=t.hasAroundGutter?t.gutter:-t.gutter,a=r.value*(n.value+t.gutter)+i;return e.value-a}});return{waterfallWrapper:o,wrapperWidth:e,colWidth:n,cols:r,offsetX:s}}function dt(t,e){return new RegExp(`(^|\\s)${e}(\\s|$)`).test(t.className)}function X(t,e){if(dt(t,e))return;const o=t.className.split(/\s+/);o.push(e),t.className=o.join(" ")}const fe=document.createElement("div").style,L=(()=>{const t={standard:"transform",webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform"};for(const e in t){const o=t[e];if(fe[o]!==void 0)return e}return!1})();function S(t){return L===!1?!1:L==="standard"?t:L+t.charAt(0).toUpperCase()+t.substr(1)}const J=S("transform"),q=S("animation-duration"),$=S("animation-delay"),tt=S("transition"),et=S("animation-fill-mode");function me(t,e,o,n,r){const s=p([]),i=p(0),a=f=>{const d=t.hasAroundGutter?f+1:f;return t.gutter*d+e.value*f+n.value},l=()=>{s.value=new Array(o.value).fill(t.hasAroundGutter?t.gutter:0)},c=ge(t);return{wrapperHeight:i,layoutHandle:()=>y(this,null,function*(){return new Promise(f=>{l();const d=[];if(r&&r.value&&r.value.childNodes.forEach(g=>{g.className==="waterfall-item"&&d.push(g)}),d.length===0)return!1;for(let g=0;g<d.length;g++){const h=d[g],_=Math.min.apply(null,s.value),A=s.value.indexOf(_),R=a(A),v=h.style;J&&(v[J]=`translate3d(${R}px,${_}px, 0)`),v.width=`${e.value}px`,v.visibility="visible";const{height:N}=h.getBoundingClientRect();s.value[A]+=N+t.gutter,t.animationCancel||c(h,()=>{const gt=t.posDuration/1e3;tt&&(v[tt]=`transform ${gt}s`)})}i.value=Math.max.apply(null,s.value),setTimeout(()=>{f(!0)},t.posDuration)})})}}function ge(t){return(e,o)=>{const n=e.firstChild;if(n&&!dt(n,t.animationPrefix)){const r=`${t.animationDuration/1e3}s`,s=`${t.animationDelay/1e3}s`,i=n.style;X(n,t.animationPrefix),X(n,t.animationEffect),q&&(i[q]=r),$&&(i[$]=s),et&&(i[et]="both"),o&&setTimeout(()=>{o()},t.animationDuration+t.animationDelay)}}}const he=typeof window!="undefined"&&window!==null,nt=ve(),pe=Object.prototype.propertyIsEnumerable,ot=Object.getOwnPropertySymbols;function Ae(t,...e){return e.map(n=>n.replace(/\[(\w+)\]/g,".$1").split(".").reduce((r,s)=>r&&r[s],t))}function ve(){return he&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function I(t){return typeof t=="function"||toString.call(t)==="[object Object]"}function ye(t){return typeof t=="object"?t===null:typeof t!="function"}function we(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}function be(t,...e){if(!I(t))throw new TypeError("expected the first argument to be an object");if(e.length===0||typeof Symbol!="function"||typeof ot!="function")return t;for(const o of e){const n=ot(o);for(const r of n)pe.call(o,r)&&(t[r]=o[r])}return t}function ft(t,...e){let o=0;for(ye(t)&&(t=e[o++]),t||(t={});o<e.length;o++)if(I(e[o])){for(const n of Object.keys(e[o]))we(n)&&(I(t[n])&&I(e[o][n])?ft(t[n],e[o][n]):t[n]=e[o][n]);be(t,e[o])}return t}function rt(t,e){return new Promise((o,n)=>{const r=new Image;r.onload=()=>{o(r)},r.onerror=()=>{n(new Error("Image load error"))},e&&(r.crossOrigin="Anonymous"),r.src=t})}var O;(function(t){t.LOADING="loading",t.LOADED="loaded",t.ERROR="error"})(O||(O={}));const _e={rootMargin:"0px",threshold:0},it="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Ee="";class Oe{constructor(e=!0,o,n=!0){this.lazyActive=!0,this.crossOrigin=!0,this.options={loading:it,error:Ee,observerOptions:_e,log:!0,ratioCalculator:(r,s)=>s/r},this._images=new WeakMap,this.lazyActive=e,this.crossOrigin=n,this.config(o)}config(e={}){ft(this.options,e),e.ratioCalculator&&(this.options.ratioCalculator=e.ratioCalculator)}mount(e,o,n){const{src:r,loading:s,error:i}=this._valueFormatter(o);e.setAttribute("lazy",O.LOADING),e.setAttribute("src",s||it),this.lazyActive?(nt||(this._setImageSrc(e,r,n,i),this._log(()=>{throw new Error("Not support IntersectionObserver!")})),this._initIntersectionObserver(e,r,n,i)):this._setImageSrc(e,r,n,i)}resize(e,o){const n=e.getAttribute("lazy"),r=e.getAttribute("src");n&&n===O.LOADED&&r&&rt(r,this.crossOrigin).then(s=>{const{width:i,height:a}=s,l=e.width/i*a;e.height=l;const c=e.style;c.height=`${l}px`,o()})}unmount(e){const o=this._realObserver(e);o&&o.unobserve(e),this._images.delete(e)}_setImageSrc(e,o,n,r){!o||e.getAttribute("src")===o||rt(o,this.crossOrigin).then(i=>{var a,l;const{width:c,height:u}=i,f=((l=(a=this.options).ratioCalculator)==null?void 0:l.call(a,c,u))||u/c,d=e.parentNode.parentNode;d.style.paddingBottom=`${f*100}%`,e.setAttribute("lazy",O.LOADED),e.removeAttribute("src"),e.src=i.src,n(!0)}).catch(()=>{const i=this._realObserver(e);i&&i.disconnect(),r&&(e.setAttribute("lazy",O.ERROR),e.setAttribute("src",r),n(!1)),this._log(()=>{throw new Error(`Image failed to load!And failed src was: ${o} `)})})}_isOpenLazy(){return nt&&this.lazyActive}_initIntersectionObserver(e,o,n,r){const s=this.options.observerOptions;this._images.set(e,new IntersectionObserver(a=>{Array.prototype.forEach.call(a,l=>{if(l.isIntersecting){const c=this._realObserver(e);c&&c.unobserve(l.target),this._setImageSrc(e,o,n,r)}})},s));const i=this._realObserver(e);i&&i.observe(e)}_valueFormatter(e){let o=e,n=this.options.loading,r=this.options.error;return I(e)&&(o=e.src,n=e.loading||this.options.loading,r=e.error||this.options.error),{src:o,loading:n,error:r}}_log(e){this.options.log&&e()}_realObserver(e){return this._images.get(e)}}var mt=(t,e)=>{for(const[o,n]of e)t[o]=n;return t};const k=C({props:{list:{type:Array,default:()=>[]},rowKey:{type:String,default:"id"},imgSelector:{type:String,default:"src"},width:{type:Number,default:200},breakpoints:{type:Object,default:()=>({1200:{rowPerView:3},800:{rowPerView:2},500:{rowPerView:1}})},gutter:{type:Number,default:10},hasAroundGutter:{type:Boolean,default:!0},posDuration:{type:Number,default:300},animationPrefix:{type:String,default:"animate__animated"},animationEffect:{type:String,default:"fadeIn"},animationDuration:{type:Number,default:1e3},animationDelay:{type:Number,default:300},animationCancel:{type:Boolean,default:!1},backgroundColor:{type:String,default:"#fff"},lazyload:{type:Boolean,default:!0},loadProps:{type:Object,default:()=>{}},crossOrigin:{type:Boolean,default:!0},delay:{type:Number,default:300},align:{type:String,default:"center"}},setup(t,e){const o=new Oe(t.lazyload,t.loadProps,t.crossOrigin);F("lazy",o);const{waterfallWrapper:n,wrapperWidth:r,colWidth:s,cols:i,offsetX:a}=de(t),{wrapperHeight:l,layoutHandle:c}=me(t,s,i,a,n),u=oe(()=>{c().then(()=>{e.emit("afterRender")})},t.delay);M(()=>[r,s,t.list],()=>{r.value>0&&u()},{deep:!0});const f=p(0);return F("sizeChangeTime",f),F("imgLoaded",u),{colWidth:s,waterfallWrapper:n,wrapperHeight:l,getRenderURL:h=>Ae(h,t.imgSelector)[0],getKey:(h,_)=>h[t.rowKey]||_,renderer:u}}}),st=()=>{wt(t=>({"304003ce":t.backgroundColor}))},at=k.setup;k.setup=at?(t,e)=>(st(),at(t,e)):st;const ze=k,Ie={class:"waterfall-card"};function Se(t,e,o,n,r,s){return b(),z("div",{ref:"waterfallWrapper",class:"waterfall-list",style:zt({height:`${t.wrapperHeight}px`})},[(b(!0),z(Et,null,Ot(t.list,(i,a)=>(b(),z("div",{key:t.getKey(i,a),class:"waterfall-item"},[m("div",Ie,[x(t.$slots,"default",{item:i,index:a,url:t.getRenderURL(i)},void 0,!0)])]))),128))],4)}var Re=mt(ze,[["render",Se],["__scopeId","data-v-1c4c57b0"]]);const xe=C({props:{url:{type:String,default:""},title:{type:String,default:""},alt:{type:String,default:""}},setup(t,e){const o=K("imgLoaded"),n=K("lazy"),r=p(null);P(()=>{s()}),lt(()=>{i()});function s(){r.value&&n.mount(r.value,t.url,l=>{o(),l?e.emit("success",t.url):e.emit("error",t.url)})}function i(){r.value&&n.unmount(r.value)}function a(){e.emit("load",t.url)}return{lazyRef:r,imageLoad:a}}}),De={class:"lazy__box"},Ce={class:"lazy__resource"},Ne=["title","alt"];function Fe(t,e,o,n,r,s){return b(),z("div",De,[m("div",Ce,[m("img",{ref:"lazyRef",class:"lazy__img",title:t.title,alt:t.alt,onLoad:e[0]||(e[0]=(...i)=>t.imageLoad&&t.imageLoad(...i))},null,40,Ne)])])}var Be=mt(xe,[["render",Fe],["__scopeId","data-v-640f8d40"]]);const je=["onClick"],Le={class:"overflow-hidden"},Me={class:"px-4 pt-2 pb-4 border-t border-t-gray-800"},Pe={class:"pb-4 text-gray-50 group-hover:text-yellow-300"},Te={class:"pt-3 flex justify-between items-center border-t border-t-gray-600 border-opacity-50"},ke={class:"text-gray-50"},He=["onClick"],Ke=C({__name:"index",setup(t){const e=It({rowKey:"id",gutter:10,hasAroundGutter:!0,width:320,breakpoints:{1200:{rowPerView:4},800:{rowPerView:3},500:{rowPerView:2}},animationEffect:"animate__zoomInUp",animationDuration:1e3,animationDelay:300,imgSelector:"src.original",loadProps:{loading:kt,error:Tt},lazyload:!0}),o=p(1),n=p([]),r=p(),s=p();function i(){s.value=Rt.service({target:".content",background:"transparent",text:"加载中"}),Pt({page:o.value,pageSize:r.value}).then(c=>{setTimeout(()=>{n.value.push(...c),o.value+=1,T(()=>{s.value.close()})},500)})}function a(c,u){n.value.splice(u,1)}function l(c){}return P(()=>{i()}),(c,u)=>{const f=W("el-backtop"),d=W("el-scrollbar");return b(),St(d,{"max-height":"calc(100vh - 120px)",class:"content"},{default:j(()=>[E(w(Re),Dt({list:n.value},e),{item:j(({item:g,url:h,index:_})=>[m("div",{class:"bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-linear hover:shadow-lg hover:shadow-gray-600 group",onClick:A=>void 0},[m("div",Le,[E(w(Be),{url:h,class:"cursor-pointer transition-all duration-300 ease-linear group-hover:scale-105"},null,8,["url"])]),m("div",Me,[m("h4",Pe,D(g.name),1),m("div",Te,[m("div",ke,"$ "+D(g.price),1),m("div",null,[m("button",{class:"px-3 h-7 rounded-full bg-red-500 text-sm text-white shadow-lg transition-all duration-300 hover:bg-red-600",onClick:xt(A=>a(g,_),["stop"])}," 删除 ",8,He)])])])],8,je)]),_:1},16,["list"]),E(f,{title:"回到顶部",right:35,bottom:50,"visibility-height":400,target:".content .el-scrollbar__wrap"},{default:j(()=>[E(w(Nt))]),_:1}),E(w($t),{firstload:!1,onInfinite:i})]),_:1})}}}),Ue=Ct(Ke,[["__scopeId","data-v-06e29e61"]]);export{Ue as default};
