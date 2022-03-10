let className = [
    'text-primary',
    'font-noto-serif text-display-small font-semibold',
    'sm:text-display-large',
].join(' ')

export default ({ color, text, weight }) => {
    const h1 = document.createElement('h1')
    h1.innerText = text ?? 'Headline 1'
    className =
        color !== 'default'
            ? className.replace('text-primary', `text-primary-${color}`)
            : className
    className = weight
        ? className.replace('font-semibold', 'font-light')
        : className
    h1.className = className
    return h1
}
