import{u as p}from"./MainView-XOQ6OIJZ.js";import{x as f,i,o as s,c as o,a as t,F as x,q as h,p as g,t as a,k as w}from"./index-u8ehFgPR.js";const v={class:"flex grow w-auto max-w-full h-auto bg-sky-600 bg-opacity-35 rounded-lg shadow-md text-white lg:min-w-[384px]"},y={class:"flex flex-col w-full h-full p-5"},b=t("h1",null,"3-DAY FORECAST",-1),k={key:0,class:"flex flex-col grow"},S={class:"flex items-center max-sm:flex-col"},C=["src"],F={class:"min-w-max"},B={class:"text-gray-300"},M={__name:"ForecastComp",setup(D){const m=p(),d=f(),n=i(()=>d.celsius),l=i(()=>m.forecast),u=c=>{const[,r,e]=c.split("-");return`${r}/${e}`};return(c,r)=>(s(),o("div",v,[t("div",y,[b,l.value?(s(),o("div",k,[(s(!0),o(x,null,h(l.value.forecast.forecastday,(e,_)=>(s(),o("div",{key:e.date,class:g(["flex justify-between items-center grow px-5 hover:bg-sky-500 max-sm:px-0 transition-all",_<l.value.forecast.forecastday.length-1?"border-b border-white":""])},[t("span",null,a(u(e.date)),1),t("div",S,[t("img",{src:e.day.condition.icon},null,8,C),t("span",F,a(e.day.condition.text),1)]),t("div",null,[t("span",null,a(Math.round(n.value?e.day.maxtemp_c:e.day.maxtemp_f))+"°/",1),t("span",B,a(Math.round(n.value?e.day.mintemp_c:e.day.mintemp_f))+"°",1)])],2))),128))])):w("",!0)])]))}};export{M as default};
