import iconUser from "@assets/icons/User.svg"

const className = ["flex flex-row items-center"].join(" ")
const classNameAvatar = ["w-12 h-12", "rounded-full"].join(" ")

export default ({ avatar, name, label }) => {
    const src = avatar || iconUser
    const card = `
        <div class=${className}>
            <img class="${classNameAvatar}"
                src="${src}" alt="Avatar" />
            <div class="ml-3">
                <p>${name}</p>
                <span>${label}</span>
            </div>
        </div>`

    return card
}
