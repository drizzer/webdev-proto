import { Formik, Field } from "formik";
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
} from "@chakra-ui/react";

export default function FormOrder() {
  return (
    <Flex bg="gray.100" align="center" justify="center" h="auto">
      <Box bg="white" p={6} m="6" rounded="md" w={64}>
        <Formik
          initialValues={{
            name: "",
            password: "",
            rememberMe: false,
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="name">Full Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="text"
                    variant="filled"
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
                  Package as a Gift?
                </Field>

                <Button type="submit" colorScheme="purple" width="full">
                  Order
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
