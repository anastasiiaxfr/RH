import React from 'react';
import { Text } from '@chakra-ui/react'

function Page() {
    return (
        <div className="container">
            <Text
                as="h1"
                fontSize={{ base: '1.5rem', md: '1.5rem', lg: '1.5rem' }}
                lineHeight={1}
                mb={4}
                fontWeight="bold"
                letterSpacing="wider"
            >
                Create  Posts
            </Text>
        </div>
    );
}

export default Page;
