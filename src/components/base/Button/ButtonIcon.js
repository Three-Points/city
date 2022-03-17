const className = [
    'h-12 w-12 p-1.5',
    'flex justify-center',
    'rounded-full',
    'hover:bg-gray-hover hover:cursor-pointer',
    'ease-out transition-colors duration-300',
].join(' ')

window.handleClick = (fn) => fn()

export default ({ style, icon, onclick }) => {
    const src = `/src/assets/icons/${icon}.svg`
    const additionalStyles = style || ''
    const buttonIcon = `
        <div class="${additionalStyles} ${className}" onclick="handleClick(${onclick})">
            <img src="${src}" alt="Icon" />
        </div>`
    return buttonIcon
}
