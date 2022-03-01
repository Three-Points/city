function show(chat, shadow) {
    chat.classList.remove('show')
    chat.classList.add('hide')

    shadow.style.visibility = 'visbile'
}

function hide(chat, shadow) {
    chat.classList.remove('show')
    chat.classList.add('hide')

    shadow.style.visibility = 'hidden'
}

function openChat() {
    const chat = document.querySelector('.chat')
    const shadow = document.querySelector('.shadow')
    chat.getAttribute('hidden') ? show(chat, shadow) : hide(chat, shadow)
}
