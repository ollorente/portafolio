const l=async()=>await fetch("/portafolio/data.json").then(e=>e.json()),o=e=>({id:e.id,url:e.url,providerPublicId:e.providerPublicId,userId:e.userId,isActive:e.isActive,isLock:e.isLock,createdAt:e.createdAt,updatedAt:e.updatedAt}),A=e=>({id:e.id,url:e.url,isActive:e.isActive,createdAt:e.createdAt}),u="mediaFiles",p=()=>({GetAllMediaFiles:async(i,s)=>{const{limit:r=10,page:a=0}=s;return await l().then(async d=>await d[u].filter(t=>t.isLock===!1).filter(t=>t.isActive===!0).filter(t=>t.grafId===i).sort(function(t,n){return t.createdAt>n.createdAt?1:t.createdAt<n.createdAt?-1:0}).splice(a,r).map(t=>A(t)))},GetOneMediaFile:async i=>await l().then(async r=>{const a=await r[u].find(c=>c.id===i);return o(a)})});export{l as H,p as u};
