import Card from "."

export default {
    title: "Components/Base/Card",
    args: {
        avatar: "",
        name: "John Doe",
        label: "Published in Adventure",
    },
}

export const Default = ({ ...args }) => {
    return Card({ ...args })
}
