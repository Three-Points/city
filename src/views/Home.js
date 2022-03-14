import Card from '@components/Card'
import Menu from '@components/Menu'

import imagePlace from '@assets/img/photo.jpeg'

const classNameHome = [
    'm-3',
    'grid grid-rows-[repeat(2,_min-content)_48px] gap-y-[36px]',
    'md:h-screen md:m-0',
    'md:grid-cols-[repeat(2,_1fr)_84px] md:grid-rows-1',
].join(' ')
const classNameImage = [
    'h-full w-full',
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

export default () => {
    const namePlace = "Roy's Peak"
    const locationPlace = 'Wanaka, New Zealand'
    const introductionPlace =
        'New Zealand is famous for its breathtaking hiking trails that wind and weave their way through its beautiful landscapes.'

    const home = `
        <div class='${classNameHome}'>
            <img class='${classNameImage}' src='${imagePlace}' alt='Hero' />
            <div class='${classNameDescription}'>
                <div class='grid gap-y-6'>
                    <div>
                        <img class='' src='./src/assets/icons/Pin.svg' alt='Pin' />
                        <h2>${namePlace}</h2>
                        <h2 class='text-primary-soft font-light'>${locationPlace}</h2>
                    </div>
                    <h3>${introductionPlace}</h3>
                </div>
                ${Card({
                    name: 'Emmanuel Rodríguez',
                    label: 'Published in Adventure',
                })}
            </div>
            ${Menu()}
        </div>
    `
    return home
}
