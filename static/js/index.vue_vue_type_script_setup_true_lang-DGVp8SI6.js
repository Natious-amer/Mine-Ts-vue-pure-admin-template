import{useColumns as T}from"./columns-hF4jwWbB.js";import{d as z,a as p,e as n,f as i,b as k,w as t,g as F,i as o,u as e,k as N,F as U,l as P,h as d,aH as E}from"./index-B0Z6rV6K.js";const H={class:"m-4"},q=z({__name:"index",setup(L){const f=p(),_=p(),g=p(),{searchForm:r,sexOptions:x,columns:C,pagination:s,selectValue:u,tableData:V,onSure:v,onClear:y,onReset:R,onSearch:h,removeTag:Y,handleSelectionChange:D}=T(g,f,_);return(O,l)=>{const S=n("el-option"),b=n("el-select"),c=n("el-form-item"),w=n("el-date-picker"),m=n("el-button"),B=n("el-form"),M=n("pure-table");return i(),k(b,{ref_key:"selectRef",ref:g,modelValue:e(u),"onUpdate:modelValue":l[2]||(l[2]=a=>E(u)?u.value=a:null),class:"!w-[200px]",placeholder:"请选择",clearable:"",multiple:"","collapse-tags":"","value-key":"id",onRemoveTag:e(Y),onClear:e(y)},{empty:t(()=>[F("div",H,[o(B,{ref_key:"formRef",ref:f,inline:!0,model:e(r)},{default:t(()=>[o(c,{prop:"sexValue"},{default:t(()=>[o(b,{modelValue:e(r).sexValue,"onUpdate:modelValue":l[0]||(l[0]=a=>e(r).sexValue=a),class:"!w-[120px]",placeholder:"请选择性别",teleported:!1,clearable:""},{default:t(()=>[(i(!0),N(U,null,P(e(x),a=>(i(),k(S,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(c,{prop:"searchDate"},{default:t(()=>[o(w,{modelValue:e(r).searchDate,"onUpdate:modelValue":l[1]||(l[1]=a=>e(r).searchDate=a),class:"!w-[150px]",type:"date",placeholder:"请选择日期",format:"YYYY/MM/DD","value-format":"YYYY-MM-D"},null,8,["modelValue"])]),_:1}),o(c,{class:"float-right !mr-0"},{default:t(()=>[o(m,{type:"primary",text:"",bg:"",onClick:e(h)},{default:t(()=>l[3]||(l[3]=[d(" 查询 ")])),_:1},8,["onClick"]),o(m,{text:"",bg:"",onClick:e(R)},{default:t(()=>l[4]||(l[4]=[d(" 重置 ")])),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"]),o(M,{ref_key:"tableRef",ref:_,"row-key":"id",alignWhole:"center","header-cell-style":{background:"var(--el-fill-color-light)",color:"var(--el-text-color-primary)"},data:e(V).slice((e(s).currentPage-1)*e(s).pageSize,e(s).currentPage*e(s).pageSize),columns:e(C),pagination:e(s),onSelectionChange:e(D)},null,8,["data","columns","pagination","onSelectionChange"]),o(m,{class:"absolute bottom-[25px] left-[20px]",type:"primary",size:"small",text:"",bg:"",onClick:e(v)},{default:t(()=>l[5]||(l[5]=[d(" 确定 ")])),_:1},8,["onClick"])])]),_:1},8,["modelValue","onRemoveTag","onClear"])}}});export{q as _};
