import{d as k,a as o,aX as C,a_ as I,k as B,i as t,w as e,e as a,A as V,f as p,g as u,B as H,b as N,h as l,u as n,t as Y,_ as O}from"./index-B0Z6rV6K.js";import{R as i}from"./index-C3WFn8AR.js";const z={class:"card-header"},M={style:{display:"inline-flex","align-items":"center"}},R={class:"mt-2"},S=k({name:"Statistic",__name:"statistic",setup(T){const v=o(Date.now()+252e5),r=o(Date.now()+1e3*60*60*24*2),_=o(C().add(1,"month").startOf("month")),m=o(0),f=I(m,{duration:1500});m.value=36e3;function w(){r.value=Date.now()+1e3*60*60*24*2}return(j,s)=>{const d=a("el-link"),h=a("el-statistic"),c=a("el-countdown"),x=a("el-button"),y=a("IconifyIconOnline"),g=a("el-row"),D=a("el-card"),b=V("tippy");return p(),B("div",null,[t(D,{shadow:"never"},{header:e(()=>[u("div",z,[H((p(),N(d,{href:"https://element-plus.org/zh-CN/component/statistic.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:e(()=>s[0]||(s[0]=[l(" 统计组件 ")])),_:1})),[[b,{content:"点击查看详细文档"}]])]),t(d,{class:"mt-2",href:"https://github.com/pure-admin/vue-pure-admin/blob/main/src/views/components/statistic.vue",target:"_blank"},{default:e(()=>s[1]||(s[1]=[l(" 代码位置 src/views/components/statistic.vue ")])),_:1})]),default:e(()=>[t(g,{gutter:24},{default:e(()=>[t(n(i),{value:6,xs:24,sm:24},{default:e(()=>[t(h,{title:"需求人数",value:n(f)},null,8,["value"])]),_:1}),t(n(i),{value:6,xs:24,sm:24},{default:e(()=>[t(c,{title:"距离答疑结束还剩",value:v.value},null,8,["value"])]),_:1}),t(n(i),{value:6,xs:24,sm:24},{default:e(()=>[t(c,{title:"VIP到期时间还剩",format:"HH:mm:ss",value:r.value},null,8,["value"]),t(x,{class:"mt-2",type:"primary",text:"",bg:"",onClick:w},{default:e(()=>s[2]||(s[2]=[l(" 重置 ")])),_:1})]),_:1}),t(n(i),{value:6,xs:24,sm:24},{default:e(()=>[t(c,{format:"DD天 HH时 mm分 ss秒",value:_.value},{title:e(()=>[u("div",M,[t(y,{icon:"ep:calendar",class:"mr-2"}),s[3]||(s[3]=l(" 距离下个月还剩 "))])]),_:1},8,["value"]),u("div",R,Y(_.value.format("YYYY-MM-DD")),1)]),_:1})]),_:1})]),_:1})])}}}),P=O(S,[["__scopeId","data-v-307c130d"]]);export{P as default};
