import iconUser from '@assets/icons/User.svg'
import iconChat from '@assets/icons/Chat.svg'
import iconHeart from '@assets/icons/Heart.svg'
import iconCross from '@assets/icons/Cross.svg'

const className = [
    'h-12 w-12 p-1.5',
    'flex justify-center',
    'rounded-full',
    'hover:bg-gray-hover hover:cursor-pointer',
    'ease-out transition-colors duration-300',
].join(' ')

const src = {
    User: iconUser,
    Chat: iconChat,
    Heart: iconHeart,
    Cross: iconCross,
}

window.handleClick = (fn) => fn()

export default ({ style, icon, onclick }) => {
    const additionalStyles = style || ''
    const buttonIcon = `
        <div class="${additionalStyles} ${className}" onclick='handleClick(${onclick})'>
            <img src="${src[icon]}" alt="Icon" />
        </div>`
    return buttonIcon
}
