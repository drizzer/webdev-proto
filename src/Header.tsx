import * as React from "react";
import {
  Heading,
  Center,
  Image,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuGroup,
  MenuList,
  MenuItem,
  MenuDivider,
  Kbd,
  Box,
  Text,
} from "@chakra-ui/react";

import { CgProfile } from "react-icons/cg";

export function Header() {
  return (
    <Center>
      <HStack mt="1rem" alignContent="center" spacing="15%">
        <Heading textAlign="center" mb="1em" size={"40%"} fontSize={"lg"}>
          NewReleases.games
        </Heading>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="yellow"
            boxSize="15%"
            leftIcon={<CgProfile />}
            // command="⌘⇧N"
            px={"2"}
          >
            <Text>Profile</Text> {}
            <Text fontSize={"xs"}><Kbd>Ctrl</Kbd> + <Kbd>P</Kbd></Text>
          </MenuButton>
          <MenuList>
            <MenuGroup>
              <MenuItem minH="48px">
                <Image
                  boxSize="2rem"
                  borderRadius="full"
                  src="https://placekitten.com/100/100"
                  alt="Fluffybuns the destroyer"
                  mr="12px"
                />
                <span>My Account</span>
              </MenuItem>
              <MenuItem>Wishlist</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>FAQ</MenuItem>
              <MenuItem>API</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </HStack>
    </Center>
  );
}
