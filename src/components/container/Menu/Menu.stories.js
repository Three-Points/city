import Menu from '.'

export default {
    title: 'Components/Container/Menu',
    args: {
        onclick: () => console.log('onclick'),
    },
}

export const Default = ({ ...args }) => {
    return Menu({ ...args })
}
