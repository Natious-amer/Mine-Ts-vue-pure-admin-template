var k=(l,f,s)=>new Promise((u,c)=>{var p=t=>{try{m(s.next(t))}catch(i){c(i)}},r=t=>{try{m(s.throw(t))}catch(i){c(i)}},m=t=>t.done?u(t.value):Promise.resolve(t.value).then(p,r);m((s=s.apply(l,f)).next())});import{r as F,a as o,m as O,i as _,e as j,aX as x,aZ as R,gm as z,af as X,ad as J,X as N,L as P,J as C}from"./index-B0Z6rV6K.js";import{_ as V}from"./form.vue_vue_type_script_setup_true_lang-G47R0-ZY.js";import{e as Z}from"./system-CH8F9tCD.js";import{u as q}from"./hooks-C3CvKnUA.js";import"./index-C3WFn8AR.js";function E(){const l=F({name:"",status:null}),f=o(),s=o([]),u=o(!0),{tagStyle:c}=q(),p=[{label:"部门名称",prop:"name",width:180,align:"left"},{label:"排序",prop:"sort",minWidth:70},{label:"状态",prop:"status",minWidth:100,cellRenderer:({row:a,props:e})=>_(j("el-tag"),{size:e.size,style:c.value(a.status)},{default:()=>[a.status===1?"启用":"停用"]})},{label:"创建时间",minWidth:200,prop:"createTime",formatter:({createTime:a})=>x(a).format("YYYY-MM-DD HH:mm:ss")},{label:"备注",prop:"remark",minWidth:320},{label:"操作",fixed:"right",width:210,slot:"operation"}];function r(a){}function m(a){a&&(a.resetFields(),t())}function t(){return k(this,null,function*(){u.value=!0;const{data:a}=yield Z();let e=a;R(l.name)||(e=e.filter(n=>n.name.includes(l.name))),R(l.status)||(e=e.filter(n=>n.status===l.status)),s.value=z(e),setTimeout(()=>{u.value=!1},500)})}function i(a){if(!a||!a.length)return;const e=[];for(let n=0;n<a.length;n++)a[n].disabled=a[n].status===0,i(a[n].children),e.push(a[n]);return e}function H(a="新增",e){var n,d,h,g,D,b,v,y;X({title:`${a}部门`,props:{formInline:{higherDeptOptions:i(J(s.value)),parentId:(n=e==null?void 0:e.parentId)!=null?n:0,name:(d=e==null?void 0:e.name)!=null?d:"",principal:(h=e==null?void 0:e.principal)!=null?h:"",phone:(g=e==null?void 0:e.phone)!=null?g:"",email:(D=e==null?void 0:e.email)!=null?D:"",sort:(b=e==null?void 0:e.sort)!=null?b:0,status:(v=e==null?void 0:e.status)!=null?v:1,remark:(y=e==null?void 0:e.remark)!=null?y:""}},width:"40%",draggable:!0,fullscreen:N(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>P(V,{ref:f,formInline:null}),beforeSure:(S,{options:T})=>{const W=f.value.getRef(),Y=T.props.formInline;function I(){C(`您${a}了部门名称为${Y.name}的这条数据`,{type:"success"}),S(),t()}W.validate($=>{$&&I()})}})}function M(a){C(`您删除了部门名称为${a.name}的这条数据`,{type:"success"}),t()}return O(()=>{t()}),{form:l,loading:u,columns:p,dataList:s,onSearch:t,resetForm:m,openDialog:H,handleDelete:M,handleSelectionChange:r}}export{E as useDept};