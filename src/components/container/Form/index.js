import Input from "@baseComponents/Input"
import Button from "@baseComponents/Button"

const className = ["grid gird-col-1 justify-items-center gap-y-3"].join(" ")

const handleEnter = () => {
    window.history.pushState({}, "", "/")
    window.router()
}

export default () => `
    <div class="${className}">
        <label class="text-center">Your email</label>
        ${Input()}
        ${Button({ text: "Enter", style: "self-center", onclick: handleEnter })}
    </div>
`
