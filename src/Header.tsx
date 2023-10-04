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
} from "@chakra-ui/react";

import { CgProfile } from "react-icons/cg";

export function Header() {
  return (
    <Center>
      <HStack mt="1rem" alignContent="center" alignItems="space-around">
        <Heading textAlign="center" mb="1em">
          NewReleases.games
        </Heading>
        <Menu>
          <MenuButton
            as={Button}
            colorScheme="yellow"
            leftIcon={<CgProfile />}
            // command="⌘⇧N"
          >
            Profile {}
            <Kbd>Ctrl</Kbd> + <Kbd>P</Kbd>
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
