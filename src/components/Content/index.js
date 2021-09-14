import { StarIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Badge, Box } from "@chakra-ui/layout";
import { Table, TableCaption, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/table";
import React from "react";

import styles from "./styles.module.css";

function Content() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <div className={styles.content}>
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Box p="6">
          <Box mt="1" fontWeight="medium" as="h4" fontSize={20} isTruncated>
            {property.title}
          </Box>

          <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
            {property.beds} apis
          </Box>
        </Box>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>API</Th>
              <Th>Description</Th>
              <Th>Auth</Th>
              <Th>CORS</Th>
              <Th>HTTPS</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
              <Td>millimetres (mm)</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td>centimetres (cm)</Td>
              <Td>centimetres (cm)</Td>
              <Td>centimetres (cm)</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td>metres (m)</Td>
              <Td>metres (m)</Td>
              <Td>metres (m)</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </div>
  );
}

export { Content };
