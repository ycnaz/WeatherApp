const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sunrise-Coz0rkzM.js","assets/index-u8ehFgPR.js","assets/index-BWxBotvG.css","assets/sunset-CkVD0yg_.js","assets/moonrise-CIE3Q6sQ.js","assets/moonset-CRbsMyG2.js"])))=>i.map(i=>d[i]);
import{i as m,o as n,c as r,a as s,j as t,u as a,t as o,k as p,l as c,_ as l}from"./index-u8ehFgPR.js";import{u as h}from"./MainView-XOQ6OIJZ.js";const x={class:"bg-sky-600 bg-opacity-35 flex flex-col grow w-auto max-w-full sm:min-w-[384px] h-auto rounded-lg p-5 shadow-md text-white"},v=s("span",null,"SUN/MOON",-1),y={key:0,class:"flex flex-col h-full justify-around"},w={class:"flex justify-around"},E={class:"flex flex-col items-center"},g={class:"flex flex-col items-center"},C={class:"flex justify-around"},V={class:"flex flex-col items-center"},A={class:"flex flex-col items-center"},O={class:"flex justify-center gap-x-2"},P=s("span",{class:"text-gray-300"},"Moon Phase:",-1),I={__name:"AstroComp",setup(S){const _=c(()=>l(()=>import("./sunrise-Coz0rkzM.js"),__vite__mapDeps([0,1,2]))),i=c(()=>l(()=>import("./sunset-CkVD0yg_.js"),__vite__mapDeps([3,1,2]))),d=c(()=>l(()=>import("./moonrise-CIE3Q6sQ.js"),__vite__mapDeps([4,1,2]))),u=c(()=>l(()=>import("./moonset-CRbsMyG2.js"),__vite__mapDeps([5,1,2]))),f=h(),e=m(()=>f.forecast);return(j,k)=>(n(),r("div",x,[v,e.value?(n(),r("div",y,[s("div",w,[s("div",E,[t(a(_),{class:"w-16 h-16"}),s("span",null,o(e.value.forecast.forecastday[0].astro.sunrise),1)]),s("div",g,[t(a(i),{class:"w-16 h-16"}),s("span",null,o(e.value.forecast.forecastday[0].astro.sunset),1)])]),s("div",C,[s("div",V,[t(a(d),{class:"w-16 h-16"}),s("span",null,o(e.value.forecast.forecastday[0].astro.moonset),1)]),s("div",A,[t(a(u),{class:"w-16 h-16"}),s("span",null,o(e.value.forecast.forecastday[0].astro.moonrise),1)])]),s("div",O,[P,s("span",null,o(e.value.forecast.forecastday[0].astro.moon_phase),1)])])):p("",!0)]))}};export{I as default};
