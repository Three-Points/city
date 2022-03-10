const textStyle = {
    'Headline 1': () => 'font-semibold text-2xl',
    'Headline 2': () => 'font-light text-lg',
    Link: () => 'font-medium text-base underline',
    Placeholder: () => 'font-light text-base',
}

const Text = ({ label, style, primary = true }) => {
    const title = document.createElement('h1')
    title.innerText = label
    // const textColor = primary ? 'text-primary' : 'text-white';
    title.className = ['font-noto-sans'].join(' ')

    return title
}

export default Text
