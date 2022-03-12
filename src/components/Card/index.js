import Avatar from '../avatar'
import CardName from '../../theme/font/Content'
import CardLabel from '../../theme/font/Label'

const className = ['flex flex-row items-center'].join(' ')
const classNameColumn = ['ml-3'].join(' ')

export default ({ name, label }) => {
    const div = document.createElement('div')
    div.appendChild(
        Avatar({ src: 'https://randomuser.me/api/portraits/men/32.jpg' })
    )

    const col = document.createElement('div')
    col.appendChild(CardName({ text: name }))
    col.appendChild(CardLabel({ text: label }))
    col.className = classNameColumn

    div.appendChild(col)
    div.className = className
    return div
}
