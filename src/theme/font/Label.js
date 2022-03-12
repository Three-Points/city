let className = [
    'text-primary-soft',
    'font-noto-sans text-label-small font-semibold',
    'sm:text-label-large',
].join(' ')

export default ({ text }) => {
    const span = document.createElement('span')
    span.innerText = text ?? 'Label'
    span.className = className
    return span
}
