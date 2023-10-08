import * as React from "react";
import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Button,
  Box,
  Checkbox,
  Flex,
  Input,
  VStack,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";

import { Formik, Field } from "formik";

import { FaRegFaceSadTear } from "react-icons/fa6";

export default function OrderForm() {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="auto">
      <Box bg="white" p={2} m="2" rounded="md" w="full">
        <Formik
          initialValues={{
            name: "",
            password: "",
            rememberMe: false,
            shipping: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl isRequired>
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
                    placeholder="Foulen Ben Foulen"
                  />
                </FormControl>
                {/* Date of Birth Address City Postal-Code State Country E-Mail Phone Number Couponcode*/}
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 6) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Cadeau?
                </Field>

                <RadioGroup id="my-radio-group" defaultValue="1">
                  <HStack
                    spacing={5}
                    direction="row"
                    role="group"
                    aria-labelledby="my-radio-group"
                  >
                    <label>
                      <Field type="radio" name="picked" value="One" />
                      {} Simple
                    </label>
                    <label>
                      <Field type="radio" name="picked" value="Two" /> {} Rapide
                      (1-2 Jour)
                    </label>
                  </HStack>
                </RadioGroup>

                <Button type="submit" colorScheme="purple" width="full">
                  3adi commande
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
