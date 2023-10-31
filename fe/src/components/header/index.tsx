import React from 'react';
import Drawer from '../drawer';

import {
    Flex,
    Container,
    useColorModeValue,
} from '@chakra-ui/react';

export default function Header() {
    const bg = useColorModeValue('whiteAlpha.900', 'darkHighlight');

    return (
        <Flex
            as="header"
            position="sticky"
            top="0"
            bg={bg}
            shadow="sm"
            zIndex="100500"
        >
            <Container
                display="flex"
                alignItems="center"
                justifyContent={{ base: 'space-between', sm: 'center' }}
                flexWrap="wrap"
                padding="10px"
            >
                <Drawer />
                <div>Header</div>
            </Container>
        </Flex>
    );
}
