// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from 'components/layouts/main';

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default Website;
