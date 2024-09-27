var F=Object.defineProperty,O=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var L=(n,t,e)=>t in n?F(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,_=(n,t)=>{for(var e in t||(t={}))J.call(t,e)&&L(n,e,t[e]);if(x)for(var e of x(t))R.call(t,e)&&L(n,e,t[e]);return n},C=(n,t)=>O(n,q(t));var b=(n,t,e)=>new Promise((v,d)=>{var y=l=>{try{c(e.next(l))}catch(m){d(m)}},u=l=>{try{c(e.throw(l))}catch(m){d(m)}},c=l=>l.done?v(l.value):Promise.resolve(l.value).then(y,u);c((e=e.apply(n,t)).next())});import{aB as G,d as H,a as p,m as K,k as w,g as Q,i,w as g,u as z,B as h,a0 as k,F as S,j as W,e as r,A as X,f,h as Y,l as Z,b as ee,fv as te,J as ae,y as ne}from"./index-B0Z6rV6K.js";import le from"./ListCard-CFzAtJwG.js";import{_ as oe}from"./ListDialogForm.vue_vue_type_script_setup_true_lang-BaoOOKPC.js";import{u as se}from"./hooks-oO3HBjDX.js";import{d as ie}from"./add-circle-line-DOJqVT3s.js";import"./more-2-fill-iTOisMwj.js";const re=n=>G.request("post","/get-card-list",{data:n}),ue={class:"w-full flex justify-between mb-4"},ce=`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `,we=H({name:"CardList",__name:"index",setup(n){const t={name:"",status:"",description:"",type:"",mark:""},e=p({current:1,pageSize:12,total:0}),v=p([]),d=p(!0),y=()=>b(this,null,function*(){try{const{data:a}=yield re();v.value=a.list,e.value=C(_({},e.value),{total:a.list.length})}catch(a){}finally{setTimeout(()=>{d.value=!1},500)}});K(()=>{y()});const u=p(!1),c=p(_({},t)),l=p(""),m=a=>{e.value.pageSize=a,e.value.current=1},I=a=>{e.value.current=a},V=a=>{te.confirm(a?`确认删除后${a.name}的所有产品信息将被清空, 且无法恢复`:"","提示",{type:"warning"}).then(()=>{ae("删除成功",{type:"success"})}).catch(()=>{})},D=a=>{u.value=!0,ne(()=>{c.value=C(_({},a),{status:a!=null&&a.isSetup?"1":"0"})})};return(a,s)=>{const B=r("el-button"),A=r("IconifyIconOffline"),M=r("el-icon"),P=r("el-input"),N=r("el-empty"),T=r("el-col"),$=r("el-row"),j=r("el-pagination"),U=X("loading");return f(),w("div",null,[Q("div",ue,[i(B,{icon:z(se)(z(ie)),onClick:s[0]||(s[0]=o=>u.value=!0)},{default:g(()=>s[4]||(s[4]=[Y(" 新建产品 ")])),_:1},8,["icon"]),i(P,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=o=>l.value=o),style:{width:"300px"},placeholder:"请输入产品名称",clearable:""},{suffix:g(()=>[i(M,{class:"el-input__icon"},{default:g(()=>[h(i(A,{icon:"ri:search-line"},null,512),[[k,l.value.length===0]])]),_:1})]),_:1},8,["modelValue"])]),h((f(),w("div",{"element-loading-svg":ce,"element-loading-svg-view-box":"-10, -10, 50, 50"},[h(i(N,{description:`${l.value} 产品不存在`},null,8,["description"]),[[k,v.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(o=>o.name.toLowerCase().includes(l.value.toLowerCase())).length===0]]),e.value.total>0?(f(),w(S,{key:0},[i($,{gutter:16},{default:g(()=>[(f(!0),w(S,null,Z(v.value.slice(e.value.pageSize*(e.value.current-1),e.value.pageSize*e.value.current).filter(o=>o.name.toLowerCase().includes(l.value.toLowerCase())),(o,E)=>(f(),ee(T,{key:E,xs:24,sm:12,md:8,lg:6,xl:4},{default:g(()=>[i(le,{product:o,onDeleteItem:V,onManageProduct:D},null,8,["product"])]),_:2},1024))),128))]),_:1}),i(j,{currentPage:e.value.current,"onUpdate:currentPage":s[2]||(s[2]=o=>e.value.current=o),class:"float-right","page-size":e.value.pageSize,total:e.value.total,"page-sizes":[12,24,36],background:!0,layout:"total, sizes, prev, pager, next, jumper",onSizeChange:m,onCurrentChange:I},null,8,["currentPage","page-size","total"])],64)):W("",!0)])),[[U,d.value]]),i(oe,{visible:u.value,"onUpdate:visible":s[3]||(s[3]=o=>u.value=o),data:c.value},null,8,["visible","data"])])}}});export{we as default};
