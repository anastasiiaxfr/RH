import React from 'react';
import {
    Flex,
    Container,
    useColorModeValue,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Show,
} from '@chakra-ui/react';
export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const placement = 'left';
    const bg = useColorModeValue('gray.100', 'gray.800');

    return (
        <Flex
            as="header"
            position="sticky"
            top="0"
            bg={bg}
        >
            <Container
                display="flex"
                alignItems="center"
                justifyContent={{ base: 'space-between', sm: 'center' }}
                flexWrap="wrap"
                padding="10px"
            >
                <Show below="sm">
                    <Button
                        colorScheme="blue"
                        onClick={onOpen}
                    >
                        Open
                    </Button>
                </Show>
                <Drawer
                    placement={placement}
                    onClose={onClose}
                    isOpen={isOpen}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader borderBottomWidth="1px">
                            Basic Drawer
                        </DrawerHeader>
                        <DrawerBody>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>

                <div>Header</div>
            </Container>
        </Flex>
    );
}
