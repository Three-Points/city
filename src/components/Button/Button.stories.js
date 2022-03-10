import Btn from '.'
import BtnIcon from './ButtonIcon'

export default {
    title: 'Components/Button',
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
    return Btn({ ...args })
}

export const ButtonIcon = ({ ...args }) => {
    return BtnIcon({ ...args })
}
