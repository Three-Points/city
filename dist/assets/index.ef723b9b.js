var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var c=(e,s)=>{var n={};for(var o in e)f.call(e,o)&&s.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&l)for(var o of l(e))s.indexOf(o)<0&&h.call(e,o)&&(n[o]=e[o]);return n};const g=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}};g();var u="/assets/User.6b24ff0b.svg",w="/assets/Chat.0d3f1591.svg",y="/assets/Heart.01f0eea9.svg",x="/assets/Cross.d1c61af8.svg";const $=["h-12 w-12 p-1.5","flex justify-center","rounded-full","hover:bg-gray-hover hover:cursor-pointer","ease-out transition-colors duration-300"].join(" "),b={User:u,Chat:w,Heart:y,Cross:x};window.handleClick=e=>e();var i=({style:e,icon:s,onclick:n})=>`
        <div class="${e||""} ${$}" onclick='handleClick(${n})'>
            <img src="${b[s]}" alt="Icon" />
        </div>`;const j=["flex flex-row items-center"].join(" "),N=["w-12 h-12","rounded-full"].join(" ");var m=({avatar:e,name:s,label:n})=>`
        <div class=${j}>
            <img class="${N}"
                src="${e||u}" alt="Avatar" />
            <div class="ml-3">
                <p>${s}</p>
                <span>${n}</span>
            </div>
        </div>`;const C=["flex flex-col"].join(" ");var L=n=>{var o=n,{text:e}=o,s=c(o,["text"]);return`
        <div class="${C}">
            ${m(s)}
            <p class="mt-3">${e}</p>
        </div>
    `};const _=["w-full h-40 p-4","bg-gray","rounded-lg","resize-none","text-primary","font-noto-sans text-body-small","border-2 border-gray","cursor-pointer","focus:outline-none focus:border-primary","sm:text-body-large","ease-out transition-[border-color] duration-300"].join(" ");var k=()=>`
    <textarea
        class="${_}"
        maxLength="150"></textarea>`;const P=["min-w-[108px] py-2.5 px-5","text-white","bg-primary","flex flex-row justify-center items-center","border-0 rounded-full","hover:cursor-pointer hover:shadow","active:shadow-none","ease-out transition-shadow duration-300"].join(" ");var p=({text:e,style:s})=>`<button class="${P} ${s||""}">${e}</button>`;const S=["flex flex-col items-end"].join(" ");var A=()=>`
    <div class="${S}">
        ${k()}
        ${p({style:"mt-3",text:"Comment"})}
    </div>`;const I=["shadow shadow_hide","z-10 absolute inset-0","bg-shadow","hidden md:block","transition-[opacity_visibility] duration-500 ease-in-out"].join(" "),H=["asside asside_hide","z-20 fixed","w-full top-0 bottom-0 right-0 p-6","bg-white","flex flex-col justify-between items-end","md:w-[397px]  md:p-[72px_36px]","transition-[transform_visibility] duration-500 ease-in-out"].join(" ");var q=({onclick:e})=>`
        <span class="${I}"></span>
        <div class="${H}">
            <div class="grid justify-end justify-items-end gap-x-[24px] w-full">
                ${i({style:"m-0 sm:mx-0",icon:"Cross",onclick:e})}
                ${L({avatar:"https://randomuser.me/api/portraits/men/32.jpg",name:"John Doe",label:"Published in Adventure",text:"Simplefly awaseome photo of natural environment. World is beautiful!!"})}
            </div>
            <div class="grid items-end gap-x-[24px] w-full">
                ${A()}
            </div>
        </div>
        `;const z=["flex flex-row justify-center items-center","md:flex-col"].join(" "),E=()=>{window.history.pushState({},"","/login"),window.router()},O=()=>{console.log("handleLike")};var U=({onclick:e})=>{const s="m-3 sm:mx-3";return`
    <div class="${z}">
        ${i({icon:"User",style:s,onclick:E})}
        ${i({icon:"Chat",style:s,onclick:e})}
        ${i({icon:"Heart",style:s,onclick:O})}
    </div>`},D="/assets/photo.8e61ae67.jpeg",M="/assets/Pin.8a9f951e.svg";const B=["p-6","grid grid-rows-[repeat(2,_min-content)_48px] gap-y-[36px]","md:h-screen md:p-0","md:grid-cols-[repeat(2,_1fr)_84px] md:grid-rows-1"].join(" "),F=["h-full","object-cover","rounded-lg","md:rounded-none"].join(" "),J=["order-[-1]","grid gap-y-[36px] content-between","md:order-none","md:p-[216px_36px_72px_48px]"].join(" "),d=()=>{const e=document.querySelector(".shadow"),s=document.querySelector(".asside");e.classList.toggle("shadow_show"),e.classList.toggle("shadow_hide"),s.classList.toggle("asside_show"),s.classList.toggle("asside_hide")};var v=()=>`
    <div class='${B}'>
        <img class='${F}' src='${D}' alt='Hero' />
        <div class='${J}'>
            <div class='grid gap-y-6'>
                <div>
                    <img src='${M}' alt='Pin' />
                    <h2>Roy's Peak</h2>
                    <h2>Wanaka, New Zealand</h2>
                </div>
                <h3>New Zealand is famous for its breathtaking hiking trails that wind and weave their way through its beautiful landscapes.</h3>
            </div>
            ${m({avatar:"https://randomuser.me/api/portraits/men/32.jpg",name:"Emmanuel Rodr\xEDguez",label:"Published in Adventure"})}
        </div>
        ${U({onclick:d})}
    </div>
    ${q({onclick:d})}
    `;const R=["w-full","rounded-lg","resize-none","text-primary","font-noto-sans text-body-small","focus:outline-none","sm:text-body-large"].join(" "),W=["w-full","text-primary","text-center","font-noto-sans text-body-small","cursor-pointer","focus:outline-none","sm:text-body-large","peer"].join(" "),Z=["h-0.5 mt-1.5","rounded-sm","bg-primary-soft","peer-focus:bg-primary","ease-out transition-colors duration-300"].join(" ");var K=()=>`
    <div class="${R}">
        <input class="${W}" required/>
        <div class="${Z}"></div>
    </div>
`;const T=["grid gird-col-1 justify-items-center gap-y-3"].join(" ");var Y=()=>`
    <div class="${T}">
        <label class="text-center">Your email</label>
        ${K()}
        ${p({text:"Enter",style:"self-center"})}
    </div>
`;const G=["h-full max-w-[750px] w-full p-6","grid gap-y-[180px]","rounded","md:h-fit md:p-[36px_24px] md:shadow","text-center"].join(" "),Q=()=>{window.history.pushState({},"","/"),window.router()};var V=()=>`
<div class="${G}">
    <div class="grid gap-y-[24px]">
        <div class='justify-self-end'>
            ${i({icon:"Cross",onclick:Q})}
        </div>
        <div class="justify-self-center">
            <h2 class="mb-3">Join to City</h2>
            <h3 class="mb-6">All travel starts with a destination</h3>
            ${Y()}
        </div>
    </div>
    <p>\u276E\u276F roremDev</p>
</div>`;const X=["h-screen","block","sm:flex justify-center items-center"].join(" ");var ee=()=>`
    <div class="${X}">
        ${V()}
    </div>
`;const se={"/":v,"/login":ee},te=async()=>{var s;let e=(s=se[location.pathname])!=null?s:v;document.querySelector("#app").innerHTML=e()};window.router=()=>te();window.addEventListener("load",window.router);window.addEventListener("popstate",window.router);
