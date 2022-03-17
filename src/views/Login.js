import register from "@layout/register"

const className = [
    "h-screen",
    "block",
    "sm:flex justify-center items-center",
].join(" ")

export default () => `
    <div class="${className}">
        ${register()}
    </div>
`
