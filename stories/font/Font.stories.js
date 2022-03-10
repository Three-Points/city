import H1 from './H1'
import H3 from './H3'
import P from './P'

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

export const Content = () => {
    const div = document.createElement('div')
    div.appendChild(H1({ text: 'Headline 1' }))
    div.appendChild(H3({ text: 'Headline 3' }))
    div.appendChild(P({ text: 'Content' }))
    return div
}

export const Headline1 = ({ ...args }) => {
    return H1({ ...args })
}

export const Headline3 = ({ ...args }) => {
    return H3({ ...args })
}

export const Paragraph = ({ ...args }) => {
    return P({ ...args })
}
