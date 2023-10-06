import * as React from "react";
import {
  VStack,
  Center,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
  Box,
  Button,
  Spinner,
  Text,
} from "@chakra-ui/react";

import { CardItem } from "../components/CardItem";

export function CardItem() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <Tabs isFitted variant="soft-rounded">
      <TabList>
        <Tab
          _selected={{
            color: "white",
            bg: "gray.500",
            boxShadow: "dark-lg",
          }}
        >
          Category
        </Tab>
        <Tab
          _selected={{
            color: "white",
            bg: "green.500",
            boxShadow: "dark-lg",
          }}
        >
          Item
        </Tab>
        <Tab
          _selected={{
            color: "white",
            bg: "blue.500",
            boxShadow: "dark-lg",
          }}
        >
          Order
        </Tab>
        <Tab
          _selected={{
            color: "white",
            bg: "red.500",
            boxShadow: "dark-lg",
          }}
        >
          Dashboard
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Heading size="md">Last Releases for PC</Heading>
        </TabPanel>

        <TabPanel>
          <Center>
            <VStack>
              <Text mb="1em">Last Releases for Xbox One and Series S|X</Text>
            </VStack>
          </Center>
        </TabPanel>

        <TabPanel>
          <Stack padding={2} spacing=".5rem" align="center">
            <Box textAlign="center">
              <Button onClick={() => setIsLoaded((v) => !v)}>ready</Button>
            </Box>
            <CardItem isLoaded={isLoaded} />
          </Stack>
        </TabPanel>

        <TabPanel>
          <p>Last Releases for Switch</p>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="yellow.500"
            size="xl"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
