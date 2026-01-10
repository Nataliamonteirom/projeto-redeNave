tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#8e44ad",
                "primary-dark": "#620fb5",
                "background-light": "#f7f6f8",
                "background-dark": "#191022",
                "card-light": "#ffffff",
                "card-dark": "#251b2e",
                "text-main": "#141118",
                "text-muted": "#756189",
            },
            fontFamily: {
                "display": ["Lexend", "sans-serif"]
            },
            borderRadius: { 
                "DEFAULT": "0.25rem", 
                "lg": "0.5rem", 
                "xl": "0.75rem", 
                "2xl": "1rem", 
                "full": "9999px" 
            },
        },
    },
}
