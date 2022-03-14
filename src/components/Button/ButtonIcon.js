import Icon from '@components/Icon'

const className = [
    'h-12 w-12 m-3 p-1.5',
    'flex justify-center',
    'rounded-full',
    'hover:bg-gray-hover hover:cursor-pointer',
    'sm:mx-3',
    'ease-out transition-colors duration-300',
].join(' ')

export default ({ name }) => {
    const div = document.createElement('div')
    div.appendChild(Icon({ name }))
    div.className = className
    return div
}
