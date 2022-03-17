module.exports = {
    content: ["./*.{html,js}", "./src/**/*.{js,mdx}"],
    theme: {
        fontFamily: {
            "noto-sans": ["Noto Sans Display"],
            "pt-serif": ["PT Serif"],
        },
        fontSize: {
            "label-small": "12px",
            "label-large": "14px",
            "body-small": "16px",
            "body-large": "18px",
            "headline-small": "18px",
            "headline-large": "24px",
            "display-small": "30px",
            "display-large": "48px",
        },
        colors: {
            primary: {
                DEFAULT: "#3B4252",
                soft: "#7B88A1",
            },
            gray: {
                DEFAULT: "#F8F9FB",
                hover: "#DBE4F3",
            },
            white: "#FFFFFF",
            shadow: "#3b425240",
        },
        extend: {
            boxShadow: {
                DEFAULT: "0px 4px 4px #403B4252",
            },
        },
    },
    plugins: [
        require("./src/theme/index.base"),
        require("./src/theme/index.util"),
    ],
}
