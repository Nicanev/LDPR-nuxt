import{q as c,r as o,s as m,t as f,v,o as h,e as y,i as e,E as b,F as n,G as l,u as i,H as r,y as g}from"./entry.d9b3e077.js";import{u as w}from"./useSupabaseClient.f4732b59.js";const E={class:"auth"},x={class:"auth__container"},B={class:"auth__block"},k=e("h1",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",-1),C=e("button",{type:"submit"},"\u0412\u043E\u0439\u0442\u0438",-1),V=c({__name:"register",setup(F){const t=o(""),a=o("");o(!1);const p=w(),_=m();f(()=>{v(()=>{_.value&&g("/profile")})});const d=async()=>{await p.auth.signInWithOtp({email:t.value})};return(M,s)=>(h(),y("section",E,[e("div",x,[e("div",B,[k,e("form",{onSubmit:s[2]||(s[2]=b(u=>d(),["prevent"])),class:"auth__form"},[n(e("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=u=>r(t)?t.value=u:null),placeholder:"Email"},null,512),[[l,i(t)]]),n(e("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=u=>r(a)?a.value=u:null),placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C"},null,512),[[l,i(a)]]),C],32)])])]))}});export{V as default};
