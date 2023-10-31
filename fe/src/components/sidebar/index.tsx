import React from 'react';
import NextLink from 'next/link';

import { Flex, Hide, Link } from '@chakra-ui/react';

export default function Sidebar() {
    return (
        <Hide below="sm">
            <Flex
                padding="24px"
                flexDirection="column"
                gap="16px"
                as="aside"
            >

                <Link
                    as={NextLink}
                    href="/"
                    color="gray.400"
                >
                    All Posts
                </Link>

                <Link
                    as={NextLink}
                    href="/posts-create"
                    color="gray.400"
                >
                    Create Posts
                </Link>

            </Flex>
        </Hide>
    );
}
