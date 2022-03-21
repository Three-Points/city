const m=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}};m();var l="/assets/User.6b24ff0b.svg",p="/assets/Chat.0d3f1591.svg",v="/assets/Heart.01f0eea9.svg",f="/assets/Heart-Selected.cc3ba56d.svg",h="/assets/Cross.d1c61af8.svg";const g=["h-12 w-12 p-1.5","flex justify-center","rounded-full","hover:bg-gray-hover hover:cursor-pointer","ease-out transition-colors duration-300"].join(" "),w={User:l,Chat:p,Heart:v,HeartLike:f,Cross:h};window.handleClick=e=>e();var i=({id:e,style:s,icon:o,onclick:a})=>`
        <div class="${s||""} ${g}" onclick='handleClick(${a})'>
            <img id="${e}" src="${w[o]}" alt="Icon" />
        </div>`;const y=["textarea","w-full h-40 p-4","bg-gray","rounded-lg","resize-none","text-primary","font-noto-sans text-body-small","border-2 border-gray","cursor-pointer","focus:outline-none focus:border-primary","sm:text-body-large","ease-out transition-[border-color] duration-300"].join(" ");var x=()=>`
    <textarea
        class="${y}"
        maxLength="150"></textarea>`;const $=["min-w-[108px] py-2.5 px-5","text-white","bg-primary","flex flex-row justify-center items-center","border-0 rounded-full","hover:cursor-pointer hover:shadow","active:shadow-none","ease-out transition-shadow duration-300"].join(" ");window.handleClick=e=>e();var d=({text:e,style:s,onclick:o})=>`<button class="${$} ${s||""}" onclick='handleClick(${o})'>${e}</button>`;const b=["flex flex-row items-center"].join(" "),j=["w-12 h-12","rounded-full"].join(" ");var k=({avatar:e,name:s,label:o})=>`
        <div class=${b}>
            <img class="${j}"
                src="${e||l}" alt="Avatar" />
            <div class="ml-3">
                <p>${s}</p>
                <span>${o}</span>
            </div>
        </div>`;const L=["flex flex-col items-end"].join(" "),N=()=>{const e=document.querySelector(".textarea");if(e.value){const s=document.querySelector(".chat"),o=document.createElement("p");o.classList.add("mt-3"),o.innerHTML=e.value,s.appendChild(o),e.value=""}};var C=()=>`
    <div class="${L}">
        ${x()}
        ${d({style:"mt-3",text:"Comment",onclick:N})}
    </div>`;const _=["shadow shadow_hide","z-10 absolute inset-0","bg-shadow","hidden md:block","transition-[opacity_visibility] duration-500 ease-in-out"].join(" "),H=["asside asside_hide","z-20 fixed","w-full top-0 bottom-0 right-0 p-6","bg-white","flex flex-col justify-between items-end","md:w-[397px]  md:p-[72px_36px]","transition-[transform_visibility] duration-500 ease-in-out"].join(" ");var P=({onclick:e})=>`
        <span class="${_}"></span>
        <div class="${H}">
            <div class="chat grid gap-y-[24px] w-full">
                ${i({style:"m-0 sm:mx-0 justify-self-end",icon:"Cross",onclick:e})}
            </div>
            <div class="grid items-end gap-x-[24px] w-full">
                ${C()}
            </div>
        </div>
        `;const S=["flex flex-row justify-center items-center","md:flex-col"].join(" "),I=()=>{window.history.pushState({},"","/login"),window.router()},A=()=>{const e=document.getElementById("button-icon");window.isLike=!window.isLike,e.src=window.isLike?"/src/assets/icons/Heart-Selected.svg":"/src/assets/icons/Heart.svg"};var q=({onclick:e})=>{window.isLike=!1,localStorage.getItem("isLike");const s="m-3 sm:mx-3";return`
    <div class="${S}">
        ${i({icon:"User",style:s,onclick:I})}
        ${i({icon:"Chat",style:s,onclick:e})}
        ${i({id:"button-icon",icon:window.isLike?"HeartLike":"Heart",style:s,onclick:A})}
    </div>`},E="/assets/photo.8e61ae67.jpeg",z="/assets/Pin.8a9f951e.svg";const M=["p-6","grid grid-rows-[repeat(2,_min-content)_48px] gap-y-[36px]","md:h-screen md:p-0","md:grid-cols-[repeat(2,_1fr)_84px] md:grid-rows-1"].join(" "),O=["h-full","object-cover","rounded-lg","md:rounded-none"].join(" "),U=["order-[-1]","grid gap-y-[36px] content-between","md:order-none","md:p-[216px_36px_72px_48px]"].join(" "),c=()=>{const e=document.querySelector(".shadow"),s=document.querySelector(".asside");e.classList.toggle("shadow_show"),e.classList.toggle("shadow_hide"),s.classList.toggle("asside_show"),s.classList.toggle("asside_hide")};var u=()=>`
    <div class='${M}'>
        <img class='${O}' src='${E}' alt='Hero' />
        <div class='${U}'>
            <div class='grid gap-y-6'>
                <div>
                    <img src='${z}' alt='Pin' />
                    <h2>Roy's Peak</h2>
                    <h2>Wanaka, New Zealand</h2>
                </div>
                <h3>New Zealand is famous for its breathtaking hiking trails that wind and weave their way through its beautiful landscapes.</h3>
            </div>
            ${k({avatar:"https://randomuser.me/api/portraits/men/32.jpg",name:"Emmanuel Rodr\xEDguez",label:"Published in Adventure"})}
        </div>
        ${q({onclick:c})}
    </div>
    ${P({onclick:c})}
    `;const B=["w-full","rounded-lg","resize-none","text-primary","font-noto-sans text-body-small","focus:outline-none","sm:text-body-large"].join(" "),D=["w-full","text-primary","text-center","font-noto-sans text-body-small","cursor-pointer","focus:outline-none","sm:text-body-large","peer"].join(" "),F=["h-0.5 mt-1.5","rounded-sm","bg-primary-soft","peer-focus:bg-primary","ease-out transition-colors duration-300"].join(" ");var R=()=>`
    <div class="${B}">
        <input class="${D}" required/>
        <div class="${F}"></div>
    </div>
`;const T=["grid gird-col-1 justify-items-center gap-y-3"].join(" ");var Z=()=>`
    <div class="${T}">
        <label class="text-center">Your email</label>
        ${R()}
        ${d({text:"Enter",style:"self-center"})}
    </div>
`;const J=["h-full max-w-[750px] w-full p-6","grid gap-y-[180px]","rounded","md:h-fit md:p-[36px_24px] md:shadow","text-center"].join(" "),K=()=>{window.history.pushState({},"","/"),window.router()};var W=()=>`
<div class="${J}">
    <div class="grid gap-y-[24px]">
        <div class='justify-self-end'>
            ${i({icon:"Cross",onclick:K})}
        </div>
        <div class="justify-self-center">
            <h2 class="mb-3">Join to City</h2>
            <h3 class="mb-6">All travel starts with a destination</h3>
            ${Z()}
        </div>
    </div>
    <p>\u276E\u276F roremDev</p>
</div>`;const Y=["h-screen","block","sm:flex justify-center items-center"].join(" ");var G=()=>`
    <div class="${Y}">
        ${W()}
    </div>
`;const Q={"/":u,"/login":G},V=async()=>{var s;let e=(s=Q[location.pathname])!=null?s:u;document.querySelector("#app").innerHTML=e()};window.router=()=>V();window.addEventListener("load",window.router);window.addEventListener("popstate",window.router);
