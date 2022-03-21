import ButtonIcon from "@baseComponents/Button/ButtonIcon"

const className = [
    "flex flex-row justify-center items-center",
    "md:flex-col",
].join(" ")

const handleNavigator = () => {
    window.history.pushState({}, "", "/login")
    window.router()
}

const handleLike = () => {
    const iconHeart = document.getElementById("button-icon")
    window.isLike = !window.isLike
    iconHeart.src = window.isLike
        ? "/src/assets/icons/Heart-Selected.svg"
        : "/src/assets/icons/Heart.svg"
}

export default ({ onclick }) => {
    window.isLike = false
    const isLike = localStorage.getItem("isLike")
    const style = "m-3 sm:mx-3"
    return `
    <div class="${className}">
        ${ButtonIcon({ icon: "User", style, onclick: handleNavigator })}
        ${ButtonIcon({ icon: "Chat", style, onclick })}
        ${ButtonIcon({
            id: "button-icon",
            icon: window.isLike ? "HeartLike" : "Heart",
            style,
            onclick: handleLike,
        })}
    </div>`
}
