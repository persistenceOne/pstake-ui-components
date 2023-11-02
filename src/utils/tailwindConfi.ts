const colors = {
    primary:{
        "100": "#F5D6D8",
        "200": "#EAAEB0",
        "300": "#DF8184",
        "400": "#D5585C",
        "500": "#C73238",
        "600": "#9F282C",
        "700": "#751E21",
    },
    white:{
        "100": "#FCFCFC",
        "200": "#ECECEC",
        "300": "#E0E0E0",
        "400": "#C4C4C4",
        "500": "#BABABA",
        "600": "#A6A6A6",
        "700": "#787878",
    },
    black:{
        "100": "#383838",
        "200": "#282828",
        "300": "#1F1F1F",
        "400": "#1B1B1B",
        "500": "#181818",
        "600": "#0F0F0F",
        "700": "#0A0A0A",
    },
    red:{
        "100": "#F8D3D7",
        "200": "#F1A7B0",
        "300": "#E97C88",
        "400": "#E25061",
        "500": "#DB2438",
        "600": "#AF1D2E",
        "700": "#831622",
    },
    green:{
        "100": "#D9F2E7",
        "200": "#B6E7D1",
        "300": "#8FDAB9",
        "400": "#6CCFA3",
        "500": "#47C28B",
        "600": "#35A170",
        "700": "#287753",
    },
    yellow: {
        "100": "#FDEFDC",
        "200": "#FDE0BB",
        "300": "#FBD096",
        "400": "#FAC075",
        "500": "#F9B053",
        "600": "#F79410",
        "700": "#C07006",
    },
    blue:{
        "100": "#D9E4FC",
        "200": "#B3C8F9",
        "300": "#8DADF6",
        "400": "#638EF3",
        "500": "#3E73F0",
        "600": "#114FDE",
        "700": "#0F3CAA",
    },
    transparent: "transparent",
    body:'#030303',
}

export const tailwindConfigTheme =  {
    colors: {...colors},
    backgroundImage: {
        gradientLine:
            "linear-gradient(270deg, #A6A6A6 0%, rgba(53, 53, 53, 0.51) 100%)",
        atomBanner:
            "url('/images/bg_images/atomBanner2.svg'), url('/images/bg_images/atomBanner1.svg') ",
        Banner:
            "url('/images/bg_images/binance_bg.svg'), radial-gradient(100% 311.1% at 97.81% 0,#fff 0,#fffef8 45.83%,#fffffd 100%)",
        errorToastBg: "linear-gradient(136.45deg, #271818 -0.06%, #191519 100%)",
        warningToastBg:
            "linear-gradient(136.45deg, #18271B -0.06%, #191519 100%)",
        successToastBg:
            "linear-gradient(136.45deg, #18271B -0.06%, #191519 100%)",
        infoToastBg: "linear-gradient(136.45deg, #1c1d1e -0.06%, #221f22 100%)",
    },
    backgroundColor: {
        ...colors,
        none: "none",
        transparent: "transparent",
        disabled: "#A9A9A9"
    },
    fontFamily: {
        primary: ["Poppins", "sans-serif"]
    },
    fontSize: {
        xsm: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", //16px
        lg: "1.125rem", //18px
        xl: "1.25rem", // 20px
        "2xl": "1.375rem", // 22px
        "3xl": "1.5rem", //24px
        "4xl": "2.25rem", // 36px
        h1: ["6rem", { lineHeight: "7rem" }],
        h2: ["3.75rem", { lineHeight: "4.5rem" }],
        h3: ["3rem", { lineHeight: "3.5rem" }],
        h4: ["2.25rem", { lineHeight: "2.25rem" }],
        h5: ["1.5rem", { lineHeight: "2rem" }],
        h6: ["1.25rem", { lineHeight: "1.5rem" }],
        subtitle1: ["1rem", { lineHeight: "1.5rem" }],
        subtitle2: ["0.875rem", { lineHeight: "1.5rem" }],
        body1: ["1rem", { lineHeight: "1.5rem" }],
        body2: ["0.875rem", { lineHeight: "1.25rem" }],
        button: ["0.875rem", { lineHeight: "1rem" }],
        caption: ["0.75rem", { lineHeight: "0.875rem" }],
        overline: ["0.625rem", { lineHeight: "1rem" }]
    },
    screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1536px) { ... }
        "1.5xl": { max: "1407px" },
        xl: { max: "1279px" },
        "1.5lg": { max: "1151px" },
        lg: { max: "1023px" },
        "1.5md": { max: "895px" },
        md: { max: "767px" },
        "1.5xs": { max: "639px" },
        sm: { max: "511px" },
    },
    extend: {
        transitionProperty: {
            height: "height",
        },
        keyframes: {
            "menu-open": {
                "0%": {
                    opacity: "0",
                    transform: "scale(0.9)",
                },
                "100%": {
                    opacity: "1",
                    transform: "scale(1)",
                },
            },
        },
        animation: {
            "menu-open": "menu-open 200ms ease-in-out",
        },
        screens: {
            "-2xl": { min: "1536px" },
            // => @media (min-width: 1535px) { ... }
            "-1.5xl": { min: "1408px" },
            "-xl": { min: "1280px" },
            "-1.5lg": { min: "1152px" },
            "-lg": { min: "1024px" },
            "-1.5md": { min: "896px" },
            "-md": { min: "768px" },
            "-1.5sm": { min: "640px" },
            "-sm": { min: "512px" },
        },
        height: {
            navbar: "89px",
            "navbar-mobile": "72px",
            content: "calc(100vh - 89px)",
            "content-mobile": "calc(100vh - 72px)",
        },
    },
}