import React from 'react';
import NextLink from 'next/link';

import { Flex, Hide, Link } from '@chakra-ui/react';

export default function Sidebar() {
    return (
        <Flex
            padding="24px"
            flexDirection="column"
            gap="16px"
        >
            <Hide below="sm">
                <Link
                    as={NextLink}
                    href="/"
                    color="gray.300"
                >
                    All Posts
                </Link>

                <Link
                    as={NextLink}
                    href="/posts-create"
                    color="gray.300"
                >
                    Create Posts
                </Link>
            </Hide>
        </Flex>
    );
}
