import React from 'react';

import {
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

export default function MenuMob() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const placement = 'left';

    return (
        <>
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

        </>
    );
}
