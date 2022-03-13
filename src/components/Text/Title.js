const className = [
    'text-primary',
    'font-noto-serif text-display-small font-semibold',
    'sm:text-display-large',
].join(' ')

export default ({ text }) => {
    const h1 = document.createElement('h1')
    h1.innerText = text || ''
    h1.className = className
    return h1
}
