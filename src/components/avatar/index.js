const className = ['w-12 h-12', 'rounded-full'].join(' ')

export default ({ src }) => {
    const img = document.createElement('img')
    img.src = src || `/assets/icons/User.svg`
    img.alt = 'Avatar'
    img.className = className
    return img
}
