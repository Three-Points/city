import Btn from '.'
import BtnIcon from './ButtonIcon'

export default {
    title: 'Components/Button',
    args: {
        text: 'Button',
        icon: 'Chat',
    },
    argTypes: {
        icon: {
            name: 'Icon',
            description: 'Icon to show in the button',
            options: ['Chat', 'Cross', 'Heart', 'Heart-Selected', 'User'],
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
