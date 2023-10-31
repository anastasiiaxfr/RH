import React from 'react';
import { Flex, Container, useColorModeValue } from '@chakra-ui/react';
export default function Footer() {
    const bg = useColorModeValue('whiteAlpha.700', 'darkHighlight');

    return (
        <Flex
            as="footer"
            bg={bg}
            borderTopWidth="1px"
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
