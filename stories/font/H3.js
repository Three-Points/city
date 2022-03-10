const H3 = ({ text, weight }) => {
    const h3 = document.createElement('H3')
    h3.innerText = text ?? 'Headline 3'
    if (weight) h3.className = [`font-${weight}`].join(' ')
    return h3
}

export default H3
