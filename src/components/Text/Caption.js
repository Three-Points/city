const className = [
    'text-primary-soft',
    'font-noto-sans text-headline-small font-normal',
    'sm:text-headline-large',
].join(' ')

export default ({ text }) => {
    const h3 = document.createElement('h3')
    h3.innerText = text || ''
    h3.className = className
    return h3
}
