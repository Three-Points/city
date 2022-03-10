const H1 = ({ text, weight }) => {
    const h1 = document.createElement('h1')
    h1.innerText = text ?? 'Headline 1'
    if (weight) h1.className = [`font-${weight}`].join(' ')
    return h1
}

export default H1
