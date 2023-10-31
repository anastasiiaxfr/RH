import React from 'react';
import NextLink from 'next/link';
import truncate from '../utils';

import { Text, SimpleGrid, Card, CardBody, CardFooter, Button, Image, AspectRatio, useColorModeValue, Link } from '@chakra-ui/react'

function HomePage({ posts }: any) {
    console.log('posts', posts)
    return (
        <div className="container">
            <Text
                as="h1"
                fontSize={{ base: '1.5rem', md: '1.5rem', lg: '1.5rem' }}
                lineHeight={1}
                mb={5}
                fontWeight="bold"
                letterSpacing="wider"
            >
                All Posts
            </Text>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                {posts.map((i: any, k: number) => (
                    <Link as={NextLink} href={`/posts/${i.attributes.slug}`} key={k} className='card' _hover={{
                        textDecoration: 'none',
                    }}>
                        <Card maxW='md'>
                            <AspectRatio
                                ratio={2}
                                width="full"
                                bg={useColorModeValue('gray.100', 'black.4')}
                                overflow="hidden"
                                position="relative">
                                <Image
                                    objectFit='cover'
                                    src={`${process.env.NEXT_SITE_URL}${i.attributes.thumbnail.data.attributes.url}`}
                                    alt='Chakra UI'
                                />
                            </AspectRatio>
                            <CardBody>
                                <Text fontWeight="bold" mb={0} textTransform="uppercase">{i.attributes.title}</Text>
                                <Text mb={4}><small>{new Date(i.attributes.createdAt).toLocaleDateString()} / {new Date(i.attributes.createdAt).toLocaleTimeString()} </small>{i.attributes.authors.data.length !== 0 ? <small>/ {i.attributes.authors?.data.map((i: any) => i.attributes.name)}</small> : null}</Text>


                                <Text mb={4}>
                                    {truncate(i.attributes.content, 20)}
                                </Text>




                            </CardBody>
                            <CardFooter
                                justify='space-between'
                                flexWrap='wrap'
                                gap={4}
                                paddingTop={0}
                                sx={{
                                    '& > button': {
                                        minW: '20px',
                                    },
                                }}
                            >
                                <Button flex='1' size="sm">
                                    Like
                                </Button>
                                <Button flex='1' size="sm">
                                    Delete
                                </Button>
                                <Button flex='1' size="sm">
                                    Edit
                                </Button>
                            </CardFooter>

                        </Card>
                    </Link>

                ))}
            </SimpleGrid>


        </div>
    );
}

export async function getStaticProps() {
    const query = await fetch(
        `${process.env.NEXT_API_URL}/posts?populate=*`,
    )
    const response = await query.json();
    return {
        props: {
            posts: response.data,
        },
        revalidate: 60 * 1
    }


}

export default HomePage;
