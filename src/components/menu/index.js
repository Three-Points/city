import ButtonIcon from '../Button/ButtonIcon'

const className = ['flex flex-row justify-around', 'sm:flex-col'].join(' ')

export default () => {
    const div = document.createElement('div')
    div.appendChild(ButtonIcon({ name: 'User' }))
    div.appendChild(ButtonIcon({ name: 'Chat' }))
    div.appendChild(ButtonIcon({ name: 'Heart' }))
    div.className = className
    return div
}
