var B=Object.defineProperty,R=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var N=(n,e,t)=>e in n?B(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,P=(n,e)=>{for(var t in e||(e={}))D.call(e,t)&&N(n,t,e[t]);if(_)for(var t of _(e))$.call(e,t)&&N(n,t,e[t]);return n},k=(n,e)=>R(n,V(e));var E=(n,e,t)=>new Promise((v,u)=>{var c=s=>{try{i(t.next(s))}catch(d){u(d)}},o=s=>{try{i(t.throw(s))}catch(d){u(d)}},i=s=>s.done?v(s.value):Promise.resolve(s.value).then(c,o);i((t=t.apply(n,e)).next())});import{d as I,a as g,P as p,p as X,n as h,k as Y,i as j,s as S,u as C,b as z,w as M,j as O,F as G,g5 as H,g6 as J,y as K,f as L,g as y,h as Q,_ as U}from"./index-B0Z6rV6K.js";import{P as q,u as W,d as Z,g as ee,e as te,f as ae}from"./vue-flow-core-z7PDadvJ.js";const ne=I({__name:"animationEdge",props:{id:{type:String,required:!0},source:{type:String,required:!0},target:{type:String,required:!0},sourceX:{type:Number,required:!0},sourceY:{type:Number,required:!0},targetX:{type:Number,required:!0},targetY:{type:Number,required:!0},sourcePosition:{type:String,default:q.Right},targetPosition:{type:String,default:q.Left}},setup(n){const e=n,{findEdge:t}=W(),v=Z([e.target,e.source]),u=g(0),c=g(),o=g({x:0,y:0}),i=g(0),s=p(()=>v.value[0].data),d=p(()=>v.value[1].data),A=p(()=>d.value.isFinished),F=p(()=>s.value.isCancelled),l=g(!1),T=p(()=>s.value.hasError?"#f87171":s.value.isFinished?"#42B983":s.value.isCancelled||s.value.isSkipped?"#fbbf24":s.value.isRunning||l.value?"#2563eb":"#6b7280"),w=X(()=>ee(e));h(F,r=>{r&&x()}),h(l,r=>{const a=t(e.id);a&&(a.data=k(P({},a.data),{isAnimating:r}))}),h(u,r=>{var f;const a=(f=c.value)==null?void 0:f.pathEl;if(!a||r===0||!l.value)return;const m=a.getTotalLength();if(i.value!==m){b();return}o.value=a.getPointAtLength(r)}),h(A,r=>{r&&b()});function b(){return E(this,null,function*(){var f;const r=(f=c.value)==null?void 0:f.pathEl;if(!r)return;const a=r.getTotalLength(),m=u.value||0;o.value=r.getPointAtLength(m),l.value=!0,i.value!==a&&(i.value=a),yield H(u,m,a,{transition:J.easeInOutCubic,duration:Math.max(1500,a/2),abort:()=>!l.value}),x()})}function x(){K(()=>{u.value=0,i.value=0,o.value={x:0,y:0},l.value=!1})}return(r,a)=>(L(),Y(G,null,[j(C(te),{id:n.id,ref_key:"edgeRef",ref:c,path:w.value[0],style:S({stroke:T.value})},null,8,["id","path","style"]),l.value?(L(),z(C(ae),{key:0},{default:M(()=>[y("div",{style:S({transform:`translate(-50%, -50%) translate(${o.value.x}px,${o.value.y}px)`}),class:"nodrag nopan animated-edge-label"},a[0]||(a[0]=[y("span",{class:"truck"},[y("span",{class:"box"},"📦"),Q(" 🚚 ")],-1)]),4)]),_:1})):O("",!0)],64))}}),ue=U(ne,[["__scopeId","data-v-2aba1cee"]]);export{ue as default};
