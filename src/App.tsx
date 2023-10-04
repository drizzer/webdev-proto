import * as React from "react";
import { VStack, Center } from "@chakra-ui/react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { TabCategoryContent } from "./TabCategoryContent";

export function App() {
  return (
    <>
      <Header />
      <VStack>
        <TabCategoryContent />
      </VStack>
      <Footer />
    </>
  );
}
