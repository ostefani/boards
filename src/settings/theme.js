export default {
    colors: {
        error: '#B00020',
        // error: '#e42404',
        // error: '#d50000',
        background: '#ffffff',
        surface: '#ffffff',
        onBackground: '#000000',
        dark: '#cccccc',
    },
    secondary: {
        base: '#d81b60',
        onBase: '#ffffff',
        onBaseLarge: '#000000',
        light: '#ff5c8d', // rgba(255, 92, 141, 0.2);
        onLight: '#000000',
        dark: '#a00037',
        onDark: '#ffffff',
    },
    shadow: {
        primary: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
        onActive: '0px 5px 3px -3px rgba(0,0,0,0.2), 0px 4px 5px 1px rgba(0,0,0,0.14), 0px 3px 8px 2px rgba(0,0,0,0.12)',
    },

    font: {
        lato: 'Lato-Bold',
        latoRegular: 'Lato-Regular',
        roboto: 'Roboto-Regular',
        robotoMedium: 'Roboto-Medium',
    },
    size: {
        tiny: '0.75rem', // 12px
        small: '0.875rem', // 14px
        medium: '1rem', // 16px
        large: '2em', // 32px
        extra: '3rem', // 48px
    },
    radius: {
        regular: '40px',
        secondary: '4px',
    },
    animation: {
        timing: {
            regular: 'cubic-bezier(0.4, 0, 0.2, 1)',
            smooth: 'cubic-bezier(0.0, 0, 0.2, 1)',
            bounce: 'cubic-bezier(0.311, 0.441, 0.444, 1)',
            // regular: 'cubic-bezier(0.311, 0.441, 0.444, 1.649)',
        },
        duration: {
            regular: 0.5,
            quick: 0.3,
            slow: 5,
        },
    },
};
