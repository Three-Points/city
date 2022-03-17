import asside from '@layout/asside'

import Card from '@baseComponents/Card'
import Menu from '@containerComponents/Menu'

import imagePlace from '@assets/img/photo.jpeg'
import iconPin from '@assets/icons/Pin.svg'

const classNameHome = [
    'p-6',
    'grid grid-rows-[repeat(2,_min-content)_48px] gap-y-[36px]',
    'md:h-screen md:p-0',
    'md:grid-cols-[repeat(2,_1fr)_84px] md:grid-rows-1',
].join(' ')
const classNameImage = [
    'h-full',
    'object-cover',
    'rounded-lg',
    'md:rounded-none',
].join(' ')
const classNameDescription = [
    'order-[-1]',
    'grid gap-y-[36px] content-between',
    'md:order-none',
    'md:p-[216px_36px_72px_48px]',
].join(' ')

const handleAsside = () => {
    const shadow = document.querySelector('.shadow')
    const asside = document.querySelector('.asside')

    shadow.classList.toggle('shadow_show')
    shadow.classList.toggle('shadow_hide')
    asside.classList.toggle('asside_show')
    asside.classList.toggle('asside_hide')
}

export default () => {
    const namePlace = "Roy's Peak"
    const locationPlace = 'Wanaka, New Zealand'
    const introductionPlace =
        'New Zealand is famous for its breathtaking hiking trails that wind and weave their way through its beautiful landscapes.'

    return `
    <div class='${classNameHome}'>
        <img class='${classNameImage}' src='${imagePlace}' alt='Hero' />
        <div class='${classNameDescription}'>
            <div class='grid gap-y-6'>
                <div>
                    <img src='${iconPin}' alt='Pin' />
                    <h2>${namePlace}</h2>
                    <h2>${locationPlace}</h2>
                </div>
                <h3>${introductionPlace}</h3>
            </div>
            ${Card({
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                name: 'Emmanuel Rodríguez',
                label: 'Published in Adventure',
            })}
        </div>
        ${Menu({ onclick: handleAsside })}
    </div>
    ${asside({ onclick: handleAsside })}
    `
}
