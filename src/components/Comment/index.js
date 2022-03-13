import Card from '../Card'
import Message from '../Text/Content'

const className = ['flex flex-col'].join(' ')

export default ({ text, ...card }) => {
    const div = document.createElement('div')
    div.appendChild(Card({ ...card }))

    const message = Message({ text })
    message.className = `${message.className} mt-3`

    div.appendChild(message)
    div.className = className
    return div
}
