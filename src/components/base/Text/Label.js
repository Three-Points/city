const className = [
    'text-primary-soft',
    'font-noto-sans text-label-small font-semibold',
    'sm:text-label-large',
].join(' ')

export default ({ text }) => `<span class="${className}">${text}</span>`
