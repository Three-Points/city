const className = [
    "min-w-[108px] py-2.5 px-5",
    "text-white",
    "bg-primary",
    "flex flex-row justify-center items-center",
    "border-0 rounded-full",
    "hover:cursor-pointer hover:shadow",
    "active:shadow-none",
    "ease-out transition-shadow duration-300",
].join(" ")

export default ({ text, style }) =>
    `<button class="${className} ${style || ""}">${text}</button>`
