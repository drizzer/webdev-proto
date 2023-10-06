import * as React from "react";
import { Box, Text } from "@chakra-ui/react";

import { CgProfile } from "react-icons/cg";

export function Footer() {
  return (
    <Box
      p="1rem"
      // boxShadow="md"
      pos="fixed"
      w="100%"
      bottom="0"
      backgroundColor="gray.300"
      borderTop="2px solid yellow"
    >
      <Text textAlign="center">Powered by CodePlay Masters</Text>
    </Box>
  );
}
