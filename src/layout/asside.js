import ButtonIcon from "@baseComponents/Button/ButtonIcon"
import Chat from "@containerComponents/Chat"

const classNameShadow = [
    "shadow shadow_hide",
    "z-10 absolute inset-0",
    "bg-shadow",
    "hidden md:block",
    "transition-[opacity_visibility] duration-500 ease-in-out",
].join(" ")
const classNameAsside = [
    "asside asside_hide",
    "z-20 fixed",
    "w-full top-0 bottom-0 right-0 p-6",
    "bg-white",
    "flex flex-col justify-between items-end",
    "md:w-[397px]  md:p-[72px_36px]",
    "transition-[transform_visibility] duration-500 ease-in-out",
].join(" ")

export default ({ onclick }) => {
    return `
        <span class="${classNameShadow}"></span>
        <div class="${classNameAsside}">
            <div class="chat grid gap-y-[24px] w-full">
                ${ButtonIcon({
                    style: "m-0 sm:mx-0 justify-self-end",
                    icon: "Cross",
                    onclick,
                })}
            </div>
            <div class="grid items-end gap-x-[24px] w-full">
                ${Chat()}
            </div>
        </div>
        `
}
