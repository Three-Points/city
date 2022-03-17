import Chat from "."

export default {
    title: "Components/Container/Chat",
    args: {
        name: "John Doe",
        label: "Published in Adventure",
    },
}

export const Default = ({ ...args }) => {
    return Chat({ ...args })
}
