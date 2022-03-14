import ButtonIcon from '@components/Button/ButtonIcon'

const className = [
    'flex flex-row justify-center items-center',
    'md:flex-col',
].join(' ')

export default () => {
    const div = document.createElement('div')
    div.appendChild(ButtonIcon({ name: 'User' }))
    div.appendChild(ButtonIcon({ name: 'Chat' }))
    div.appendChild(ButtonIcon({ name: 'Heart' }))
    div.className = className
    return div.outerHTML
}
