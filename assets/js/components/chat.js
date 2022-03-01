function addComment() {
    const chatList = document.querySelector('.chat-list')
    const textArea = document.querySelector('.input-message')

    const message = document.createElement('div')
    message.className = 'message body-2'
    message.textContent = textArea.value

    chatList.appendChild(message)
}
