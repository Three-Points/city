import Card from '.'

export default {
    title: 'Components/Card',
    args: {
        avatar: '',
        name: 'John Doe',
        label: 'Published in Adventure',
    },
}

export const Default = ({ ...args }) => {
    return Card({ ...args })
}
