import React from 'react';
import { Flex, Container, useColorModeValue } from '@chakra-ui/react';
export default function Footer() {
    const bg = useColorModeValue('gray.100', 'gray.800');

    return (
        <Flex
            as="footer"
            bg={bg}
        >
            <Container
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                padding="10px"
            >
                Footer
            </Container>
        </Flex>
    );
}
