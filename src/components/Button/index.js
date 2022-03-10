const className = [
    'py-2.5 px-5',
    'text-white',
    'bg-primary',
    'flex flex-row justify-center items-center',
    'border-0 rounded-full',
    'hover:cursor-pointer',
].join(' ')

export default ({ text }) => {
    const button = document.createElement('button')
    button.innerHTML = text || 'Button'
    button.className = className
    return button
}
