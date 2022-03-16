import Card from '@baseComponents/Card'

const className = ['flex flex-col'].join(' ')

export default ({ text, ...card }) => {
    const comment = `
        <div class="${className}">
            ${Card(card)}
            <p class="mt-3">${text}</p>
        </div>
    `
    return comment
}
