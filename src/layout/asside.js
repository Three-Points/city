import ButtonIcon from '@baseComponents/Button/ButtonIcon'
import Comment from '@containerComponents/Comment'
import Chat from '@containerComponents/Chat'

const classNameShadow = [
    'shadow shadow_hide',
    'z-10 absolute inset-0',
    'bg-shadow',
    'hidden md:block',
    'transition-[opacity_visibility] duration-500 ease-in-out',
].join(' ')
const classNameAsside = [
    'asside asside_hide',
    'z-20 fixed',
    'w-full top-0 bottom-0 right-0 p-6',
    'bg-white',
    'flex flex-col justify-between items-end',
    'md:w-[397px]  md:p-[72px_36px]',
    'transition-[transform_visibility] duration-500 ease-in-out',
].join(' ')

export default ({ onclick }) => {
    return `
        <span class="${classNameShadow}"></span>
        <div class="${classNameAsside}">
            <div class="grid justify-end justify-items-end gap-x-[24px] w-full">
                ${ButtonIcon({
                    style: 'm-0 sm:mx-0',
                    icon: 'Cross',
                    onclick,
                })}
                ${Comment({
                    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                    name: 'John Doe',
                    label: 'Published in Adventure',
                    text: 'Simplefly awaseome photo of natural environment. World is beautiful!!',
                })}
            </div>
            <div class="grid items-end gap-x-[24px] w-full">
                ${Chat()}
            </div>
        </div>
        `
}
