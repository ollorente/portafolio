import{r as a,w as f,o as p,a as _,c as d,b as v,d as g,u as h}from"./index-Bom_8Ya-.js";import{_ as w}from"./Post-B9ufwQSL.js";import{_ as V}from"./ListFeed-BkSgZelq.js";import{u as x}from"./useGraf-_4JF2ppm.js";import"./index-CfBlVH4R.js";import"./paginator-BvNNbeRL.js";const y="Videos",C={__name:"Videos",setup(G){const{GetAllGrafs:c}=x(),i=h(),l=a(),n=a(!1),s=a(!0),u=a(10),m=a(0),r=a([]),o=async()=>{s.value=!0;try{const t=await c({limit:u.value,page:m.value});r.value=t.map(e=>({...e,url:{name:"Video",params:{id:e.id}}}))}catch(t){n.value=!0,l.value=t}finally{s.value=!1}};return f(()=>i.fullPath,()=>o()),p(()=>o()),(t,e)=>(_(),d(w,{title:y},{default:v(()=>[g(V,{grafs:r.value,compact:""},null,8,["grafs"])]),_:1}))}};export{C as default};
