import Title from './Title'
import Caption from './Caption'
import Content from './Content'
import Label from './Label'

export default {
    title: 'Theme/Font',
    args: {
        weight: 'normal',
    },
    argTypes: {
        text: {
            name: 'Text',
            description: 'Text inside',
            control: {
                type: 'text',
            },
            table: {
                defaultValue: {
                    summary: 'none',
                },
            },
        },
        color: {
            name: 'Color',
            description: 'Color text',
            options: ['default', 'soft'],
            control: {
                type: 'select',
            },
            table: {
                defaultValue: {
                    summary: 'default',
                },
            },
        },
        weight: {
            name: 'Weight',
            description: 'Weight text',
            options: ['bold', 'semibold', 'normal', 'light'],
            control: {
                type: 'select',
            },
            table: {
                defaultValue: {
                    summary: 'none',
                },
            },
        },
    },
}

export const Headline1 = ({ ...args }) => {
    return Title({ ...args })
}

export const Headline3 = ({ ...args }) => {
    return Caption({ ...args })
}

export const Paragraph = ({ ...args }) => {
    return Content({ ...args })
}

export const Auxiliar = ({ ...args }) => {
    return Label({ ...args })
}
