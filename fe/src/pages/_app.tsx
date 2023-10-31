import '../assets/styles/main.sass';
import { Grid, ChakraProvider, Flex } from '@chakra-ui/react';

import Header from '../components/header';
import Footer from '../components/footer';
import Sidebar from '../components/sidebar';

export default function App({ Component, pageProps }: any) {
    return (
        <>
            <ChakraProvider>
                <Grid
                    minHeight="100vh"
                    templateColumns={{ sm: '250px 1fr', base: '1fr' }}
                >
                    <Flex
                        display={{ sm: 'block', base: 'none' }}
                        bg="gray.100"
                        color="gray.400"
                    >
                        <Sidebar />
                    </Flex>
                    <Flex
                        flex="1"
                        flexDirection="column"
                    >
                        <Header />
                        <Flex
                            as="main"
                            flex="1"
                            padding="24px"
                        >
                            <Component {...pageProps} />
                        </Flex>
                        <Footer />
                    </Flex>
                </Grid>
            </ChakraProvider>
        </>
    );
}
