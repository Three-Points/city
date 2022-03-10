const className = [
    'text-primary',
    'font-noto-sans text-body-small font-normal',
    'sm:text-body-large',
].join(' ')

export default ({ text }) => {
    const p = document.createElement('p')
    p.innerText = text ?? 'Content'
    p.className = className
    return p
}
