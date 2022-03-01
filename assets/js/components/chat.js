document.querySelector('#app').appendChild(
    Text({
        label: 'Hello World!',
        style: 'Headline 1',
    })
)

const addComment = (e) => {
    e.preventDefault()
    const chatList = document.querySelector('.chat-list')
    const textArea = document.querySelector('.input-message')

    const message = document.createElement('div')
    message.class = 'message body-2'
    addone.value = textArea.value

    chatList.appendChild(message)
}
