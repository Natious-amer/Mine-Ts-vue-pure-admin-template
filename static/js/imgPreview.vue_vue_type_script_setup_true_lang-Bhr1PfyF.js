import{d as a}from"./data-CF6zTjLd.js";import{d as c,e as o,f as u,b as _,w as t,g as i,i as g,u as r}from"./index-B0Z6rV6K.js";const x=c({__name:"imgPreview",setup(v){const s=[{label:"日期",prop:"date"},{label:"姓名",prop:"name"},{label:"地址",prop:"address"},{label:"视频",slot:"video"},{label:"图像",slot:"image"}];return(b,e)=>{const l=o("el-image"),p=o("pure-table");return u(),_(p,{data:r(a),columns:s},{video:t(()=>e[0]||(e[0]=[i("video",{width:"180",height:"180",controls:""},[i("source",{src:"https://pure-admin.github.io/pure-admin-doc/video/url.mov",type:"video/mp4"})],-1)])),image:t(({row:n,index:m})=>[g(l,{"preview-teleported":"",loading:"lazy",src:n.image,"preview-src-list":r(a).map(d=>d.image),"initial-index":m,fit:"cover",class:"w-[100px] h-[100px]"},null,8,["src","preview-src-list","initial-index"])]),_:1},8,["data"])}}});export{x as _};
