const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/drop-DaG9zvzX.js","assets/index-4221aHVz.js","assets/index-mRoGjf1i.css"])))=>i.map(i=>d[i]);
import{x as f,i as c,o as t,c as o,F as h,q as y,p as v,a as e,t as r,j as x,u as g,k as w,l as b,_ as k}from"./index-4221aHVz.js";import{u as S}from"./MainView-BTAsejly.js";const C={class:"flex flex-col bg-sky-600 bg-opacity-35 w-full overflow-y-hidden h-56 px-5 rounded-lg shadow-md pt-5 shrink-0 text-white scroll-smooth"},T=e("h1",null,"TODAY'S FORECAST",-1),A={key:0,class:"flex overflow-x-scroll overflow-y-hidden scrollbar scrollbar-thumb-sky-200 pb-3"},D={class:"text-gray-300"},E=["src"],F={class:"text-4xl"},V={class:"group flex items-center relative"},z=e("span",{class:"group-hover:scale-100 absolute -top-2 left-20 scale-0 p-2 min-w-max z-30 bg-yellow-500 rounded-lg transition-all duration-100 origin-left"},"Chance of rain",-1),j={__name:"TodayForecast",setup(B){const i=b(()=>k(()=>import("./drop-DaG9zvzX.js"),__vite__mapDeps([0,1,2]))),d=f(),_=c(()=>d.celsius),u=S(),a=c(()=>u.forecast),p=l=>{const[,n]=l.split(" ");return`${n}`};return(l,n)=>(t(),o("div",C,[T,a.value?(t(),o("div",A,[(t(!0),o(h,null,y(a.value.forecast.forecastday[0].hour,(s,m)=>(t(),o("div",{key:s.time_epoch,class:v(["flex flex-col w-32 h-40 shrink-0 items-center justify-center hover:bg-sky-500 transition-all",m<a.value.forecast.forecastday[0].hour.length-1?"border-r border-white":""])},[e("span",D,r(p(s.time)),1),e("img",{loading:"lazy",src:s.condition.icon},null,8,E),e("span",F,r(Math.round(_.value?s.temp_c:s.temp_f))+"°",1),e("div",V,[x(g(i),{class:"w-5 h-5"}),e("span",null,r(s.chance_of_rain)+"%",1),z])],2))),128))])):w("",!0)]))}};export{j as default};