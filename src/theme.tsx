import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        primary_blue: '#00407C',
        title_gray: '#2B2B2B',
        secondary_gray: '#E6E6E6',
        hss_green: '#B4C624',
    },
    fonts: {
        body: `'Source Sans Pro', Arial`,
    },
    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
    },
    styles: {
        global: {
            Text: {
                '.ellip': { 'text-overflow': 'ellipsis', 'white-space': 'nowrap', overflow: 'hidden' },
            },
        },
    },
});

export default theme;
