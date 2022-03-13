import Icon from '../Icon'

const className = [
    'h-12 w-12 p-1.5',
    'flex justify-center',
    'rounded-full',
    'hover:bg-gray-hover hover:cursor-pointer',
    'ease-out transition-colors duration-300',
].join(' ')

export default ({ name }) => {
    const div = document.createElement('div')
    div.appendChild(Icon({ name }))
    div.className = className
    return div
}
