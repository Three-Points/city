const className = [
    'text-primary',
    'font-noto-serif text-display-small font-semibold',
    'sm:text-display-large',
].join(' ')

export default ({ text }) => {
    const h2 = document.createElement('h2')
    h2.innerText = text || ''
    h2.className = className
    return h2.outerHTML
}
