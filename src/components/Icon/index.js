export default ({ name }) => {
    const img = document.createElement('img')
    img.src = `/src/assets/icons/${name}.svg`
    img.alt = 'Icon'
    return img
}
