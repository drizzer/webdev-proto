import * as React from 'react';
import {
    Heading,
    Center,
    Image,
    Button,
    HStack,
    VStack,
    Menu,
    MenuButton,
    MenuGroup,
    MenuList,
    MenuItem,
    MenuDivider,
    Kbd,
    Box,
    Text,
    Flex,
} from '@chakra-ui/react';

import { CgProfile } from 'react-icons/cg';

export function Header() {
    return (
        <HStack
            p=".5rem"
            // h="10%"
            align="center"
            justify="space-around"
            boxShadow="md"
            pos="fixed"
            w="100%"
            top="0"
            bg="blackAlpha.700"
            borderBottom="2px solid yellow"
        >
            <Button textAlign="center">yalla.com.tn</Button>
            <Button textAlign="center">NewReleases.games</Button>
            <Menu>
                <MenuButton
                    as={Button}
                    colorScheme="yellow"
                    leftIcon={<CgProfile />}
                    size="auto"
                    p=".25rem"
                    // command="⌘⇧N"
                >
                    <Flex
                        align="center"
                        gap=".25rem"
                    >
                        Account
                        <Text fontSize="xs">
                            <Flex
                                flexDir="column"
                                align="center"
                            >
                                <Kbd>Ctrl</Kbd> + <Kbd>P</Kbd>
                            </Flex>
                        </Text>
                    </Flex>
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
                            <span>Profile</span>
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
    );
}
