import InputText from '.'
import InputArea from './InputArea'

export default {
    title: 'Components/Base/Input',
    args: {
        placeholder: 'Type something...',
    },
}

export const Text = ({ ...args }) => {
    return InputText({ ...args })
}

export const TextArea = ({ ...args }) => {
    return InputArea({ ...args })
}
