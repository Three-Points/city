import Comment from "."

export default {
    title: "Components/Container/Comment",
    args: {
        name: "John Doe",
        label: "Published in Adventure",
        text: "Simplefly awaseome photo of natural environment. World is beautiful!!",
    },
}

export const Default = ({ ...args }) => {
    return Comment({ ...args })
}
