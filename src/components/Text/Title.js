const className = [
    'text-primary',
    'font-noto-serif text-display-small font-semibold',
    'sm:text-display-large',
].join(' ')

export default ({ text }) => `<h2 class="${className}">${text}</h2>`
