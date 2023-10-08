import * as React from 'react';
import { FormErrorMessage, FormControl, FormLabel, Button, Box, Checkbox, Flex, Input, VStack, Link, Text, HStack, Divider } from '@chakra-ui/react';

import { Formik, Field } from 'formik';

import { FaRegFaceSadTear } from 'react-icons/fa6';

export default function LoginForm() {
    return (
        <Flex
            bg="gray.100"
            align="center"
            justify="center"
            h="auto"
        >
            <Box
                bg="white"
                p="2"
                m="2"
                rounded="md"
                w="full"
            >
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        rememberMe: false,
                    }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <form onSubmit={handleSubmit}>
                            <VStack
                                spacing={4}
                                align="flex-start"
                            >
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Field
                                        as={Input}
                                        id="email"
                                        name="email"
                                        type="email"
                                        variant="filled"
                                    />
                                </FormControl>
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
                                                error = 'Password must contain at least 6 characters';
                                            }

                                            return error;
                                        }}
                                    />
                                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                                    <Link
                                        href=""
                                        isExternal
                                    >
                                        <HStack justify="end">
                                            <Text color="grey">Pff! nsitou</Text>
                                            <FaRegFaceSadTear color="grey" />
                                        </HStack>
                                    </Link>
                                </FormControl>

                                <Field
                                    as={Checkbox}
                                    id="rememberMe"
                                    name="rememberMe"
                                    colorScheme="purple"
                                >
                                    Netdhakrek?
                                </Field>
                                <Button
                                    type="submit"
                                    colorScheme="teal"
                                    width="full"
                                >
                                    Conecti
                                </Button>
                                <Divider />
                                <Button
                                    type="submit"
                                    colorScheme="yellow"
                                    width="full"
                                >
                                    N7eb naamal compte
                                </Button>
                            </VStack>
                        </form>
                    )}
                </Formik>
            </Box>
        </Flex>
    );
}
