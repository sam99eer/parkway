import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Parkway Adult Family Homecare</title>
                <meta name='title' content='Parkway Adult Family Homecare' />
                <meta
                    name='description'
                    content='Parkway Adult Family Homecare is a residential care facility that offers long-term care for elderly or disabled individuals in a home-like setting. Our purpose is to provide potential residents and their families with a comprehensive understanding of the care offered at the home.'
                />
                <meta
                    name='keywords'
                    content='parkway,adult,family,homecare,oldage,home,homes,old,people,care'
                />
                <meta name='robots' content='index, follow' />
                <meta name='language' content='English' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
