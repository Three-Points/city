import Button from '@components/Button'
import InputArea from '@components/Input/InputArea'

const className = ['flex flex-col items-end'].join(' ')

export default () => {
    const div = document.createElement('div')

    const button = Button({ text: 'Comment' })
    button.className = `${button.className} mt-3`

    div.appendChild(InputArea({ text: 'Comment' }))
    div.appendChild(button)
    div.className = className
    return div
}
