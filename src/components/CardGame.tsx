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
} from "@chakra-ui/react";

import { CgProfile } from "react-icons/cg";

export function CardGame({ isLoaded }) {
  return (
    <Skeleton isLoaded={isLoaded} bg="green.500" color="white" fadeDuration={1}>
      <Card align="center" h="fit-content">
        <CardHeader>
          <Heading size="lg">Assasins Creed: Mirage</Heading>
        </CardHeader>

        <CardBody py="0">
          <Image
            src="https://image.api.playstation.com/vulcan/ap/rnd/202208/1718/NFf86jgU4AeVYgJBEoEKBpxW.jpg"
            alt="gamecover_ac_mirage"
            w="15rem"
            h="40%"
            objectFit="cover"
          ></Image>
        </CardBody>

        <CardFooter>
          <Stack>
            <Button colorScheme="blue" mx="auto">
              Check Prices
            </Button>
          </Stack>
        </CardFooter>
      </Card>
    </Skeleton>
  );
}
