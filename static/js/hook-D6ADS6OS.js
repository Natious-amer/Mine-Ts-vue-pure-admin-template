var A=(i,m,l)=>new Promise((c,u)=>{var h=a=>{try{f(l.next(a))}catch(s){u(s)}},g=a=>{try{f(l.throw(a))}catch(s){u(s)}},f=a=>a.done?c(a.value):Promise.resolve(a.value).then(h,g);f((l=l.apply(i,m)).next())});import{_ as Q}from"./form.vue_vue_type_script_setup_true_lang-BbKIQDb7.js";import{r as U,a as T,m as W,i as d,L as N,aa as p,F as Y,e as E,aZ as V,gm as w,af as ee,ad as ne,X as te,J as H,aF as ae}from"./index-B0Z6rV6K.js";import{f as ie}from"./system-CH8F9tCD.js";import{u as le}from"./hooks-oO3HBjDX.js";import"./index-C3WFn8AR.js";import"./index-C9dzHoyr.js";import"./index-CBMe5t8j.js";function se(i){return typeof i=="function"||Object.prototype.toString.call(i)==="[object Object]"&&!ae(i)}function Te(){const i=U({title:""}),m=T(),l=T([]),c=T(!0),u=(n,e=!1)=>{switch(n){case 0:return e?"菜单":"primary";case 1:return e?"iframe":"warning";case 2:return e?"外链":"danger";case 3:return e?"按钮":"info"}},h=[{label:"菜单名称",prop:"title",align:"left",cellRenderer:({row:n})=>d(Y,null,[d("span",{class:"inline-block mr-1"},[N(le(n.icon),{style:{paddingTop:"1px"}})]),d("span",null,[p(n.title)])])},{label:"菜单类型",prop:"menuType",width:100,cellRenderer:({row:n,props:e})=>{let t;return d(E("el-tag"),{size:e.size,type:u(n.menuType),effect:"plain"},se(t=u(n.menuType,!0))?t:{default:()=>[t]})}},{label:"路由路径",prop:"path"},{label:"组件路径",prop:"component",formatter:({path:n,component:e})=>V(e)?n:e},{label:"权限标识",prop:"auths"},{label:"排序",prop:"rank",width:100},{label:"隐藏",prop:"showLink",formatter:({showLink:n})=>n?"否":"是",width:100},{label:"操作",fixed:"right",width:210,slot:"operation"}];function g(n){}function f(n){n&&(n.resetFields(),a())}function a(){return A(this,null,function*(){c.value=!0;const{data:n}=yield ie();let e=n;V(i.title)||(e=e.filter(t=>p(t.title).includes(i.title))),l.value=w(e),setTimeout(()=>{c.value=!1},500)})}function s(n){if(!n||!n.length)return;const e=[];for(let t=0;t<n.length;t++)n[t].title=p(n[t].title),s(n[t].children),e.push(n[t]);return e}function J(n="新增",e){var t,r,v,b,y,k,I,M,R,S,F,D,O,_,j,x,C,P,$,o,L;ee({title:`${n}菜单`,props:{formInline:{menuType:(t=e==null?void 0:e.menuType)!=null?t:0,higherMenuOptions:s(ne(l.value)),parentId:(r=e==null?void 0:e.parentId)!=null?r:0,title:(v=e==null?void 0:e.title)!=null?v:"",name:(b=e==null?void 0:e.name)!=null?b:"",path:(y=e==null?void 0:e.path)!=null?y:"",component:(k=e==null?void 0:e.component)!=null?k:"",rank:(I=e==null?void 0:e.rank)!=null?I:99,redirect:(M=e==null?void 0:e.redirect)!=null?M:"",icon:(R=e==null?void 0:e.icon)!=null?R:"",extraIcon:(S=e==null?void 0:e.extraIcon)!=null?S:"",enterTransition:(F=e==null?void 0:e.enterTransition)!=null?F:"",leaveTransition:(D=e==null?void 0:e.leaveTransition)!=null?D:"",activePath:(O=e==null?void 0:e.activePath)!=null?O:"",auths:(_=e==null?void 0:e.auths)!=null?_:"",frameSrc:(j=e==null?void 0:e.frameSrc)!=null?j:"",frameLoading:(x=e==null?void 0:e.frameLoading)!=null?x:!0,keepAlive:(C=e==null?void 0:e.keepAlive)!=null?C:!1,hiddenTag:(P=e==null?void 0:e.hiddenTag)!=null?P:!1,fixedTag:($=e==null?void 0:e.fixedTag)!=null?$:!1,showLink:(o=e==null?void 0:e.showLink)!=null?o:!0,showParent:(L=e==null?void 0:e.showParent)!=null?L:!1}},width:"45%",draggable:!0,fullscreen:te(),fullscreenIcon:!0,closeOnClickModal:!1,contentRenderer:()=>N(Q,{ref:m,formInline:null}),beforeSure:(Z,{options:q})=>{const B=m.value.getRef(),G=q.props.formInline;function z(){H(`您${n}了菜单名称为${p(G.title)}的这条数据`,{type:"success"}),Z(),a()}B.validate(K=>{K&&z()})}})}function X(n){H(`您删除了菜单名称为${p(n.title)}的这条数据`,{type:"success"}),a()}return W(()=>{a()}),{form:i,loading:c,columns:h,dataList:l,onSearch:a,resetForm:f,openDialog:J,handleDelete:X,handleSelectionChange:g}}export{Te as useMenu};
