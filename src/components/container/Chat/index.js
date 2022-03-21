import InputArea from "@baseComponents/Input/InputArea"
import Button from "@baseComponents/Button"

import Comment from "@containerComponents/Comment"

const className = ["flex flex-col items-end"].join(" ")

const handleMessage = () => {
    const textArea = document.querySelector(".textarea")
    if (textArea.value) {
        const chat = document.querySelector(".chat")
        const comment = document.createElement("p")
        comment.classList.add("mt-3")
        comment.innerHTML = textArea.value
        chat.appendChild(comment)
        textArea.value = ""
    }
}

export default () => {
    return `
    <div class="${className}">
        ${InputArea({ text: "Comment" })}
        ${Button({
            style: "mt-3",
            text: "Comment",
            onclick: handleMessage,
        })}
    </div>`
}
