const P = ({ text, weight }) => {
    const p = document.createElement('p')
    p.innerText = text ?? 'Content'
    if (weight) p.className = [`font-${weight}`].join(' ')
    return p
}

export default P
