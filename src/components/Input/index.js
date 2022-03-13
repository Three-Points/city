const className = [
    'rounded-lg',
    'resize-none',
    'text-primary',
    'font-noto-sans text-body-small',
    'focus:outline-none',
    'sm:text-body-large',
].join(' ')
const classNameInput = [
    'w-full',
    'text-primary',
    'text-center',
    'font-noto-sans text-body-small',
    'cursor-pointer',
    'focus:outline-none',
    'sm:text-body-large',
    'peer',
].join(' ')
const classNameLine = [
    'h-0.5 mt-1.5',
    'rounded-sm',
    'bg-primary-soft',
    'peer-focus:bg-primary',
    'ease-out transition-colors duration-300',
].join(' ')

export default () => {
    const div = document.createElement('div')

    const input = document.createElement('input')
    input.className = classNameInput

    const line = document.createElement('div')
    line.className = classNameLine

    div.appendChild(input)
    div.appendChild(line)
    div.className = className
    return div
}
