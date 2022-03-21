const className = [
    "text-primary-soft",
    "font-noto-sans text-headline-small font-normal",
    "sm:text-headline-large",
].join(" ")

export default ({ text }) => `<h3 class="${className}">${text}</h3>`
