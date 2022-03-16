import ButtonIcon from '@components/Button/ButtonIcon'

const className = [
    'flex flex-row justify-center items-center',
    'md:flex-col',
].join(' ')

export default ({ onclick }) => `
    <div class="${className}">
        ${ButtonIcon({ icon: 'User', onclick })}
        ${ButtonIcon({ icon: 'Chat', onclick })}
        ${ButtonIcon({ icon: 'Heart', onclick })}
    </div>`
