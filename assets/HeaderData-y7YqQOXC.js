import{u as n}from"./MainView-BTAsejly.js";import{x as l,i as a,o as m,c as u,a as t,t as s,k as i}from"./index-4221aHVz.js";const _={key:0,class:"flex justify-between w-auto grow items-center py-5 max-sm:flex-col pb-0"},x={class:"flex flex-col max-sm:mr-auto"},d={class:"text-6xl min-w-max max-sm:text-5xl"},p={class:"mt-1"},h=["src"],f={class:"text-8xl max-sm:text-7xl"},g={__name:"HeaderData",setup(v){const o=l(),c=a(()=>o.celsius),r=n(),e=a(()=>r.current);return(w,S)=>e.value?(m(),u("div",_,[t("div",x,[t("h1",d,s(e.value.location.name),1),t("h2",p,s(e.value.location.country),1),t("img",{class:"w-24 h-24",src:e.value.current.condition.icon},null,8,h)]),t("span",f,s(Math.round(c.value?e.value.current.temp_c:e.value.current.temp_f))+"°",1)])):i("",!0)}};export{g as default};