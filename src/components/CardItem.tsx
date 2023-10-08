import * as React from "react";
import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Box,
  Skeleton,
  Text,
  VStack,
  HStack,
  Image,
  ButtonGroup,
  Divider,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";

import { BsCart4, BsCartPlus } from "react-icons/bs";
import { FcLikePlaceholder } from "react-icons/fc";

export default function CardItem() {
  return (
    <Card maxW="sm" w="full">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w="full"
          h="256px"
        />
        <VStack mt="6" spacing="3">
          <Heading size="md">Canabi Sala</Heading>
          <Text>Ahsen fauteuille tnajam tal9ah.</Text>
          <Text color="yellow.700" fontSize="2xl">
            449.990 TND
          </Text>
        </VStack>
      </CardBody>
      <Divider />
      <CardFooter justify="space-between">
        <Tooltip
          hasArrow
          arrowSize={15}
          placement="bottom"
          label="Sajal lwa9t e5er"
          bg="yellow.600"
          color="black"
          // openDelay={300}
          fontSize="md"
        >
          <Button variant="solid" colorScheme="pink">
            <FcLikePlaceholder />
          </Button>
        </Tooltip>
        <Button variant="solid" colorScheme="yellow" leftIcon={<BsCart4 />}>
          Nechri taw
        </Button>
        <Button variant="solid" colorScheme="purple">
          <BsCartPlus />
        </Button>
      </CardFooter>
    </Card>
  );
}
