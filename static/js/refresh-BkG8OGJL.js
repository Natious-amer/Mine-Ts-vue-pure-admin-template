var re=Object.defineProperty;var N=Object.getOwnPropertySymbols;var ue=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var O=(e,i,t)=>i in e?re(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,I=(e,i)=>{for(var t in i||(i={}))ue.call(i,t)&&O(e,t,i[t]);if(N)for(var t of N(i))ie.call(i,t)&&O(e,t,i[t]);return e};var G=(e,i,t)=>new Promise((T,s)=>{var x=o=>{try{c(t.next(o))}catch(h){s(h)}},g=o=>{try{c(t.throw(o))}catch(h){s(h)}},c=o=>o.done?T(o.value):Promise.resolve(o.value).then(x,g);c((t=t.apply(e,i)).next())});import{S as oe}from"./sortable.esm-Br3T5NCo.js";import{d as ce,a as v,ad as b,fI as se,ab as de,ao as S,p as _,i as a,a3 as fe,F as H,B as w,A as E,e as u,h as B,u as K,aa as m,fP as ve,fG as he,aF as be,aP as ge,y as pe,Z as me,V as xe}from"./index-B0Z6rV6K.js";import{u as ye}from"./epTheme-lTgS2KrK.js";import{E as Ce,R as ke,C as we,D as Ee,S as Re}from"./collapse-B0x3JZOY.js";function Ae(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!be(e)}const De={title:{type:String,default:"列表"},tableRef:{type:Object},columns:{type:Array,default:()=>[]},isExpandAll:{type:Boolean,default:!0},tableKey:{type:[String,Number],default:"0"}},Se=ce({name:"PureTableBar",props:De,emits:["refresh","fullscreen"],setup(e,{emit:i,slots:t,attrs:T}){const s=v("default"),x=v(!1),g=v(!0),c=v(!1),o=v(!1),h=me(),y=v(e.isExpandAll),$=b(e==null?void 0:e.columns).filter(l=>se(l==null?void 0:l.hide)?!l.hide:!(de(l==null?void 0:l.hide)&&(l!=null&&l.hide())));let p=S(b(e==null?void 0:e.columns),"label");const R=v(S(b($),"label")),d=v(b(e==null?void 0:e.columns)),z=_(()=>l=>({background:l===s.value?ye().epThemeColor:"",color:l===s.value?"#fff":"var(--el-text-color-primary)"})),C=_(()=>["text-black","dark:text-white","duration-100","hover:!text-primary","cursor-pointer","outline-none"]),L=_(()=>["flex","justify-between","pt-[3px]","px-[11px]","border-b-[1px]","border-solid","border-[#dcdfe6]","dark:border-[#303030]"]);function U(){x.value=!0,i("refresh"),ge(500).then(()=>x.value=!1)}function Z(){y.value=!y.value,M(e.tableRef.data,y.value)}function q(){c.value=!c.value,i("fullscreen",c.value)}function M(l,r){l.forEach(n=>{e.tableRef.toggleRowExpansion(n,r),n.children!==void 0&&n.children!==null&&M(n.children,r)})}function J(l){R.value=l?p:[],o.value=!1,d.value.map(r=>l?r.hide=!1:r.hide=!0)}function Q(l){R.value=l;const r=l.length;g.value=r===p.length,o.value=r>0&&r<p.length}function W(l,r){d.value.filter(n=>m(n.label)===m(r))[0].hide=!l}function X(){return G(this,null,function*(){g.value=!0,o.value=!1,d.value=b(e==null?void 0:e.columns),p=[],p=yield S(b(e==null?void 0:e.columns),"label"),R.value=S(b($),"label")})}const Y={dropdown:()=>a(u("el-dropdown-menu"),{class:"translation"},{default:()=>[a(u("el-dropdown-item"),{style:z.value("large"),onClick:()=>s.value="large"},{default:()=>[B("宽松")]}),a(u("el-dropdown-item"),{style:z.value("default"),onClick:()=>s.value="default"},{default:()=>[B("默认")]}),a(u("el-dropdown-item"),{style:z.value("small"),onClick:()=>s.value="small"},{default:()=>[B("紧凑")]})]})},ee=l=>{l.preventDefault(),pe(()=>{var n;const r=((n=h==null?void 0:h.proxy)==null?void 0:n.$refs[`GroupRef${K(e.tableKey)}`]).$el.firstElementChild;oe.create(r,{animation:300,handle:".drag-btn",onEnd:({newIndex:k,oldIndex:f,item:te})=>{const F=te,V=F.parentNode,j=d.value[f],P=d.value[k];if(j!=null&&j.fixed||P!=null&&P.fixed){const D=V.children[f];k>f?V.insertBefore(F,D):V.insertBefore(F,D&&D.nextElementSibling);return}const ne=d.value.splice(f,1)[0];d.value.splice(k,0,ne)}})})},le=l=>!!d.value.filter(r=>m(r.label)===m(l))[0].fixed,A=l=>({content:l,offset:[0,18],duration:[300,0],followCursor:!0,hideOnClick:"toggle"}),ae={reference:()=>w(a(Re,{class:["w-[16px]",C.value]},null),[[E("tippy"),A("列设置")]])};return()=>{var r;let l;return a(H,null,[a("div",fe(T,{class:["w-[99/100]","px-2","pb-2","bg-bg_color",c.value?["!w-full","!h-full","z-[2002]","fixed","inset-0"]:"mt-2"]}),[a("div",{class:"flex justify-between w-full h-[60px] p-4"},[t!=null&&t.title?t.title():a("p",{class:"font-bold truncate"},[e.title]),a("div",{class:"flex items-center justify-around"},[t!=null&&t.buttons?a("div",{class:"flex mr-4"},[t.buttons()]):null,(r=e.tableRef)!=null&&r.size?a(H,null,[w(a(Ce,{class:["w-[16px]",C.value],style:{transform:y.value?"none":"rotate(-90deg)"},onClick:()=>Z()},null),[[E("tippy"),A(y.value?"折叠":"展开")]]),a(u("el-divider"),{direction:"vertical"},null)]):null,w(a(ke,{class:["w-[16px]",C.value,x.value?"animate-spin":""],onClick:()=>U()},null),[[E("tippy"),A("刷新")]]),a(u("el-divider"),{direction:"vertical"},null),w(a(u("el-dropdown"),{trigger:"click"},I({default:()=>[a(we,{class:["w-[16px]",C.value]},null)]},Y)),[[E("tippy"),A("密度")]]),a(u("el-divider"),{direction:"vertical"},null),a(u("el-popover"),{placement:"bottom-start","popper-style":{padding:0},width:"200",trigger:"click"},I({default:()=>[a("div",{class:[L.value]},[a(u("el-checkbox"),{class:"!-mr-1",label:"列展示",modelValue:g.value,"onUpdate:modelValue":n=>g.value=n,indeterminate:o.value,onChange:n=>J(n)},null),a(u("el-button"),{type:"primary",link:!0,onClick:()=>X()},{default:()=>[B("重置")]})]),a("div",{class:"pt-[6px] pl-[11px]"},[a(u("el-scrollbar"),{"max-height":"36vh"},{default:()=>[a(u("el-checkbox-group"),{ref:`GroupRef${K(e.tableKey)}`,modelValue:R.value,onChange:n=>Q(n)},{default:()=>[a(u("el-space"),{direction:"vertical",alignment:"flex-start",size:0},Ae(l=p.map((n,k)=>a("div",{class:"flex items-center"},[a(Ee,{class:["drag-btn w-[16px] mr-2",le(n)?"!cursor-no-drop":"!cursor-grab"],onMouseenter:f=>ee(f)},null),a(u("el-checkbox"),{key:k,label:n,value:n,onChange:f=>W(f,n)},{default:()=>[a("span",{title:m(n),class:"inline-block w-[120px] truncate hover:text-text_color_primary"},[m(n)])]})])))?l:{default:()=>[l]})]})]})])]},ae)),a(u("el-divider"),{direction:"vertical"},null),w(a(u("iconifyIconOffline"),{class:["w-[16px]",C.value],icon:c.value?ve:he,onClick:()=>q()},null),[[E("tippy"),c.value?"退出全屏":"全屏"]])])]),t.default({size:s.value,dynamicColumns:d.value})])])}}}),je=xe(Se),Pe={width:1024,height:1024,body:'<path fill="currentColor" d="M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"/>'};export{je as P,Pe as d};
