import * as React from "react";
import { VStack, Center } from "@chakra-ui/react";

import { Header } from "./ui/Header";
import { Footer } from "./ui/Footer";
import { GamesPage } from "./pages/GamesPage";

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
