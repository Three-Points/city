let className = [
    'text-primary',
    'font-noto-sans text-headline-small font-normal',
    'sm:text-headline-large',
].join(' ')

export default ({ color, text }) => {
    const h3 = document.createElement('H3')
    h3.innerText = text ?? 'Headline 3'
    className =
        color !== 'default'
            ? className.replace('text-primary', `text-primary-${color}`)
            : className
    h3.className = className
    return h3
}
