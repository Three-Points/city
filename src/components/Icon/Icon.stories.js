import Icon from '.'

export default {
    title: 'Components/Icon',
    argTypes: {
        name: {
            name: 'Name',
            description: 'Icon name',
            options: ['Chat', 'Cross', 'Heart', 'Heart-Selected','User'],
            control: {
                type: 'select',
            },
            table: {
                defaultValue: {
                    summary: 'Chat',
                },
            },
        },
    },
}

export const Default = ({ ...args }) => {
    return Icon({ ...args })
}
