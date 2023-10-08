import * as React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  Box,
  Text,
} from "@chakra-ui/react";

import { CardGame } from "../components/CardGame";
import {
  RxCheck,
  RxCross2,
  RxCheckCircled,
  RxCrossCircled,
} from "react-icons/rx";

import { AiOutlineInfoCircle } from "react-icons/ai";

/* 
Date - Status - Tel1 - Tel2 - Email
*/

export default function DashboardPage() {
  return (
    <>
      <TableContainer>
        <Table variant="simple" size="sm">
          <TableCaption>Last updated: 03-12-2023 18:21 Tunis</TableCaption>
          <Thead>
            <Tr>
              <Th>Commande N°</Th>
              <Th>Quantity distincts/total</Th>
              <Th>Fullname</Th>
              <Th>Adresse</Th>
              <Th>House N°</Th>
              <Th>Suppl. Address</Th>
              <Th>Code Postal</Th>
              <Th>Ville</Th>
              <Th>Gouvernorat</Th>
              <Th>Cadeau</Th>
              <Th>Rapide</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>112</Td>
              <Td>2/3</Td>
              <Td>Ahmed Mahmoudi</Td>
              <Td>Yasser Arafat</Td>
              <Td>21</Td>
              <Td></Td>
              <Td>2057</Td>
              <Td>Rafraf</Td>
              <Td>Bizerte</Td>
              <Td>
                <Icon boxSize="10">
                  <RxCross2 color="red" />
                </Icon>
              </Td>
              <Td>
                <Icon boxSize="10">
                  <RxCheck color="green" />
                </Icon>
              </Td>
              <Td isNumeric>5.000</Td>
            </Tr>

            <Tr>
              <Td>113</Td>
              <Td>1/1</Td>
              <Td>Sofiene Talbi</Td>
              <Td>Annaba</Td>
              <Td>120</Td>
              <Td>Imm. Narjess 4.Etage App 2</Td>
              <Td>4070</Td>
              <Td>M'saken</Td>
              <Td>Sousse</Td>
              <Td>
                <Icon boxSize="10">
                  <RxCross2 color="red" />
                </Icon>
              </Td>
              <Td>
                <Icon boxSize="10">
                  <RxCrossCircled color="red" />
                </Icon>
              </Td>
              <Td isNumeric>25.450</Td>
            </Tr>

            <Tr>
              <Td>114</Td>
              <Td>3/3</Td>
              <Td>Houssem Mokhtar</Td>
              <Td>Habib Bourgiba</Td>
              <Td>5</Td>
              <Td>2eme Etage</Td>
              <Td>3421</Td>
              <Td>Hammamet</Td>
              <Td>Nabeul</Td>
              <Td>
                <Icon boxSize="10">
                  <RxCheck color="green" />
                </Icon>
              </Td>
              <Td>
                <Icon boxSize="10">
                  <RxCheckCircled color="green" />
                </Icon>
              </Td>
              <Td isNumeric>17.990</Td>
            </Tr>
          </Tbody>

          <Tfoot>
            <Tr>
              <Th>Commande N°</Th>
              <Th>Quantity distincts/total</Th>
              <Th>Fullname</Th>
              <Th>Rue</Th>
              <Th>House N°</Th>
              <Th>Suppl. Address</Th>
              <Th>Code Postal</Th>
              <Th>Ville</Th>
              <Th>Gouvernorat</Th>
              <Th>Cadeau</Th>
              <Th>Rapide</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>

      <TableContainer mt="10rem">
        <Table variant="simple" align="center" size="sm" w="auto">
          <Thead>
            <Tr>
              <Th>Commande N°</Th>
              <Th>Quantity distincts/total</Th>
              <Th>Fullname</Th>
              <Th>Adresse</Th>
              <Th>Cadeau</Th>
              <Th>Rapide</Th>
              <Th isNumeric>Total</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>112</Td>
              <Td>2/3</Td>
              <Td>Ahmed Mahmoudi</Td>
              <Accordion allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                    <Td>Rafraf</Td>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <Text>Rue Yasser Arafat 21 </Text>
                    <Text> 2057 Rafraf - Bizerte</Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Td>
                <Icon boxSize="10">
                  <RxCross2 color="red" />
                </Icon>
              </Td>
              <Td>
                <Icon boxSize="10">
                  <RxCheck color="green" />
                </Icon>
              </Td>
              <Td isNumeric>5.000</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
