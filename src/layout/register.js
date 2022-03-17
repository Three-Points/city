import ButtonIcon from '@baseComponents/Button/ButtonIcon'
import Form from '@containerComponents/Form'

const className = [
    'h-full max-w-[750px] w-full p-6',
    'grid gap-y-[180px]',
    'rounded',
    'md:h-fit md:p-[36px_24px] md:shadow',
    'text-center',
].join(' ')

const handleLike = () => {
    window.history.pushState({}, '', '/')
    window.router()
}

export default () => `
<div class="${className}">
    <div class="grid gap-y-[24px]">
        <div class='justify-self-end'>
            ${ButtonIcon({
                icon: 'Cross',
                onclick: handleLike,
            })}
        </div>
        <div class="justify-self-center">
            <h2 class="mb-3">Join to City</h2>
            <h3 class="mb-6">All travel starts with a destination</h3>
            ${Form({})}
        </div>
    </div>
    <p>❮❯ roremDev</p>
</div>`
