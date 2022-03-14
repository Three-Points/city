import Avatar from '@components/Avatar'
import cardName from '@components/Text/Content'
import cardLabel from '@components/Text/Label'

const className = ['flex flex-row items-center'].join(' ')

const cardDescription = ({ name, label }) => {
    const col = document.createElement('div')
    col.className = ['ml-3'].join(' ')
    col.appendChild(cardName({ text: name }))
    col.appendChild(cardLabel({ text: label }))
    return col
}

export default ({ name, label }) => {
    const card = document.createElement('div')
    card.className = className
    card.appendChild(
        Avatar({ src: 'https://randomuser.me/api/portraits/men/32.jpg' })
    )
    card.appendChild(cardDescription({ name, label }))
    return card.outerHTML
}
