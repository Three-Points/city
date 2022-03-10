import Text from './Text';

export default {
    title: 'Components/Text',
    args: {
        label: 'Hello World',
        style: 'Headline 1',
        primary: true,
    },
    argTypes: {
        label: {
            name: 'Label',
            description: 'Text inside',
            table: {
                defaultValue: {
                    summary: 'none',
                },
            },
        },
        style: {
            name: 'Style',
            description: 'Hierarchy text',
            options: ['Headline 1', 'Headline 2', 'Link', 'Placeholder'],
            control: {
                type: 'select',
            },
            table: {
                defaultValue: {
                    summary: 'none',
                },
            },
        },
        primary: {
            name: 'Primary',
            description: 'Styling text',
            control: { type: 'boolean' },
            table: {
                defaultValue: {
                    summary: 'true',
                },
            },
        },
    },
};

const Template = ({ label, ...args }) => {
    return Text({ label, ...args });
};

export const Headline1 = Template.bind({});
Headline1.args = {
    label: 'Headline 1',
    style: 'Headline 1',
};
Headline1.parameters = {
    docs: {
        source: {
            language: 'js',
            code: `Text({ label: 'Hello World!', style: 'Headline 1'})`,
        },
    },
};
export const Headline2 = Template.bind({});
Headline2.args = {
    label: 'Headline 2',
    style: 'Headline 2',
};
Headline2.parameters = {
    docs: {
        source: {
            language: 'js',
            code: `Text({ label: 'Hello World!', style: 'Headline 2'})`,
        },
    },
};
export const Link = Template.bind({});
Link.args = {
    label: 'Headline 2',
    style: 'Link',
};
Link.parameters = {
    docs: {
        source: {
            language: 'js',
            code: `Text({ label: 'Hello World!', style: 'Link'})`,
        },
    },
};
export const Placeholder = Template.bind({});
Placeholder.args = {
    label: 'Headline 2',
    style: 'Headline 2',
};
Placeholder.parameters = {
    docs: {
        source: {
            language: 'js',
            code: `Text({ label: 'Hello World!', style: 'Placeholder'})`,
        },
    },
};
