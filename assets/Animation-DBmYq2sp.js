import{u as m,r as t,w as y,o as F,a,c as B,b as A,e as s,f as d,g as C,F as G,t as M,n as b,h as E}from"./index-fbP7BbS_.js";import{_ as D}from"./Detail.vue_vue_type_script_setup_true_lang-Bji0HtTO.js";import{u as I}from"./useGraf-CtxTm4O_.js";import{u as L}from"./useMediaFile-BbYKg46_.js";import{u as z}from"./index-O6bvpSQB.js";import"./Default-CLkq1ifi.js";const N={class:""},O=["src"],P={class:"flex-shrink font-medium text-gray-800 w-auto dark:text-hite p-4"},R="Animación",K={__name:"Animation",setup(S){const f=m(),{twitterBorderColor:_}=z(),{GetOneGraf:p}=I(),{GetAllMediaFiles:v}=L(),o=f.params.id,h=t(),x=t(!1),r=t(!0),g=t(10),w=t(0),n=t(),i=t(),l=async()=>{r.value=!0;try{const e=await p(o);n.value=e,await k()}catch(e){x.value=!0,h.value=e}finally{r.value=!1}},k=async()=>{const e=await v(o,{limit:g.value,page:w.value});i.value=e};return y(()=>m().fullPath,()=>l()),F(()=>l()),(e,T)=>(a(),B(D,{back:{name:"Animations"},title:R},{default:A(()=>{var c;return[s("div",N,[(a(!0),d(G,null,C(i.value,u=>(a(),d("div",{key:u.id,class:b(["flex mt-4 mx-4 border-2 rounded-2xl",E(_)])},[s("img",{src:u.url,class:"w-full rounded-2xl"},null,8,O)],2))),128)),s("p",P,M((c=n.value)==null?void 0:c.text),1)])]}),_:1}))}};export{K as default};
