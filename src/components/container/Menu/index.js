import ButtonIcon from '@baseComponents/Button/ButtonIcon'

const className = [
    'flex flex-row justify-center items-center',
    'md:flex-col',
].join(' ')

const handleNavigator = () => {
    window.history.pushState({}, '', '/login')
    window.router()
}

const handleLike = () => {
    console.log('handleLike')
}

export default ({ onclick }) => {
    const style = 'm-3 sm:mx-3'
    return `
    <div class="${className}">
        ${ButtonIcon({ icon: 'User', style, onclick: handleNavigator })}
        ${ButtonIcon({ icon: 'Chat', style, onclick })}
        ${ButtonIcon({ icon: 'Heart', style, onclick: handleLike })}
    </div>`
}
