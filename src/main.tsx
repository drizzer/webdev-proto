import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import { App } from './App';
import theme from './theme';
import './styles.css';

const container = document.getElementById('root') as HTMLElement;
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container);

root.render(ReactApp());

function ReactApp() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <ChakraProvider theme={theme}>
                    <ColorModeScript initialColorMode="light" />
                    <App /> {/* <== This represents the whole App */}
                </ChakraProvider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default ReactApp;
