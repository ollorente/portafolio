import{r as a,w as v,o as h,a as i,c as y,b as u,u as P,e as m,d as k,f as x,t as b,g}from"./index-Bp2Xhef2.js";import{_ as w,U as B}from"./Content-Bbbs21Xo.js";import{u as M}from"./usePost-JQH49Ea0.js";import"./index-DYtBGSOW.js";import"./paginator-Dks_t7Pf.js";const C={class:""},D={key:0,class:"text-2xl font-semibold mb-4"},E=["innerHTML"],I="Proyecto",G={__name:"Project",setup(L){const{GetOnePost:_}=M(),o=P(),d=o.params.id,f=a(),p=a(!1),s=a(!0),t=a(),r=async()=>{s.value=!0;try{const e=await _(d);t.value=e}catch(e){p.value=!0,f.value=e}finally{s.value=!1}};return v(()=>o.fullPath,()=>r()),h(()=>r()),(e,N)=>(i(),y(w,{back:{name:"Projects"},title:I},{default:u(()=>[m("div",C,[k(B,null,{default:u(()=>{var n,c,l;return[(n=t.value)!=null&&n.title?(i(),x("h1",D,b((c=t.value)==null?void 0:c.title),1)):g("",!0),m("div",{innerHTML:(l=t.value)==null?void 0:l.content},null,8,E)]}),_:1})])]),_:1}))}};export{G as default};
