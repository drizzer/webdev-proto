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

import FormLogin from "../forms/FormLogin";
import FormOrder from "../forms/FormOrder";
import CardItem from "../components/CardItem";
import DashboardPage from "../pages/DashboardPage";

export function StorePage() {
  return (
    <Tabs isFitted variant="soft-rounded" pos="static">
      <TabList mb="2rem">
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
            bg: "gray.500",
            boxShadow: "dark-lg",
          }}
        >
          AuthForm
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

      {/* Tab Content */}

      <TabPanels>
        <TabPanel>
          <CardItem />
        </TabPanel>

        <TabPanel>
          <FormOrder />
        </TabPanel>

        <TabPanel>
          <FormLogin />
        </TabPanel>

        <TabPanel>
          <DashboardPage />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
