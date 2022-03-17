import InputArea from "@baseComponents/Input/InputArea"
import Button from "@baseComponents/Button"

const className = ["flex flex-col items-end"].join(" ")

export default () => `
    <div class="${className}">
        ${InputArea({ text: "Comment" })}
        ${Button({ style: "mt-3", text: "Comment" })}
    </div>`
