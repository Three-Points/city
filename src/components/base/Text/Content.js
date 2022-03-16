const className = [
    'text-primary',
    'font-noto-sans text-body-small font-normal',
    'sm:text-body-large',
].join(' ')

export default ({ text }) => `<p class="${className}">${text}</p>`
