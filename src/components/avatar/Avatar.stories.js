import Avatar from '.'

export default {
    title: 'Components/Avatar',
    args: {
        src: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
}

export const Default = ({ src }) => {
    return Avatar({ src })
}
