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
  Stack,
  Image,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";

import { CgProfile } from "react-icons/cg";

export default function CardItem() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w="128px"
          h="128px"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>Best Toothbrush you can have.</Text>
          <Text color="blue.600" fontSize="2xl">
            11.990 TND
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="yellow">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
