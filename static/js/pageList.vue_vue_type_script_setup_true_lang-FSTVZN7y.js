var d=(f,r,a)=>new Promise((l,i)=>{var n=t=>{try{o(a.next(t))}catch(e){i(e)}},c=t=>{try{o(a.throw(t))}catch(e){i(e)}},o=t=>t.done?l(t.value):Promise.resolve(t.value).then(n,c);o((a=a.apply(f,r)).next())});import{V as h}from"./index-DOhY63qy.js";import{d as _,a as u,p as x,r as b,e as T,A as w,f as C,b as R,w as k,B as z,i as B,u as D}from"./index-B0Z6rV6K.js";const V=_({__name:"pageList",setup(f){const r=u(),a=u(!0),l=u([]),i=x(()=>e=>{switch(e){case"medium":return 531;case"small":return 482;case"mini":return 433}}),n=b({total:0,currentPage:1,pageSize:10,pageSizes:[5,10,15,20]}),c=[{type:"seq",field:"seq",title:"序号",width:100},{field:"name",title:"名称",sortable:!0},{field:"role",title:"角色"},{field:"sex",title:"性别"}];function o(){return d(this,null,function*(){a.value=!0;const e=[];for(let s=0;s<10;s++)e.push({id:s,name:"Test"+s,role:"Developer",sex:"男"});n.total=20,l.value=e,setTimeout(()=>{a.value=!1},500)})}const t=({currentPage:e,pageSize:s})=>{n.currentPage=e,n.pageSize=s,o()};return o(),(e,s)=>{const m=T("vxe-grid"),p=w("loading");return C(),R(D(h),{vxeTableRef:r.value,columns:c,title:"分页表格",onRefresh:o},{default:k(({size:g,dynamicColumns:v})=>[z(B(m,{ref_key:"vxeTableRef",ref:r,"show-overflow":"",height:i.value(g),size:g,"column-config":{resizable:!0},columns:v,pagerConfig:n,data:l.value,onPageChange:t},null,8,["height","size","columns","pagerConfig","data"]),[[p,a.value]])]),_:1},8,["vxeTableRef"])}}});export{V as _};