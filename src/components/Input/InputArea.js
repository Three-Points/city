const className = [
    'w-full h-40 p-4',
    'bg-gray',
    'rounded-lg',
    'resize-none',
    'text-primary',
    'font-noto-sans text-body-small',
    'border-2 border-gray',
    'focus:outline-none focus:border-primary',
    'sm:text-body-large',
    'ease-out transition-[border-color] duration-300',
].join(' ')

export default () => {
    const textarea = document.createElement('textarea')
    textarea.maxLength = 150
    textarea.className = className
    return textarea
}
