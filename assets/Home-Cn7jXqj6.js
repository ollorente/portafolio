import{r as t,w as p,o as _,a as f,c as d,b as v,d as h,u as g}from"./index-DKahm1t1.js";import{_ as w}from"./Post-CeM0bMC2.js";import{_ as y}from"./ListFeed-z3RHfT53.js";import{u as $}from"./usePost-DPegzFq0.js";import"./index-CTVPZ0bv.js";import"./paginator-Bspj9f55.js";const x="Home",C={__name:"Home",setup(P){const{GetAllPosts:c}=$(),l=g(),u=t(),n=t(!1),e=t(!0),i=t(20),m=t(0),o=t(),r=async()=>{e.value=!0;try{const a=await c({limit:i.value,page:m.value});o.value=a.map(s=>({...s,url:`/${s.type}/${s.id}`}))}catch(a){n.value=!0,u.value=a}finally{e.value=!1}};return p(()=>l.fullPath,()=>r()),_(()=>r()),(a,s)=>(f(),d(w,{title:x},{default:v(()=>[h(y,{posts:o.value,compact:""},null,8,["posts"])]),_:1}))}};export{C as default};
