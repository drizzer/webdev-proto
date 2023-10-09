import * as React from 'react';
import { VStack, Center } from '@chakra-ui/react';

import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { StorePage } from './pages/StorePage';
import { GamesPage } from './pages/GamesPage';

export function App() {
    return (
        <Center>
            <Header />
            <VStack mt="10vh">
                <GamesPage /> 
            </VStack>
            <Footer />
        </Center>
    );
}
