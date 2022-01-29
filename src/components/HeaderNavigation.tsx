import { Box, Flex } from "@chakra-ui/layout";
import Link from "next/link";
import * as React from "react";

export const HeaderNavigation: React.FC = () => {
  return (
    <Flex alignItems="center" justifyContent="flex-end" my={3}>
      <Box mr={3}>
        <Link href="/about">About</Link>
      </Box>
      <Link href="/contact">Contact</Link>
    </Flex>
  );
};
