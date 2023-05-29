import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const agencyFont = localFont({ src: '../../public/fonts/AgencyFB.woff' });
const papyrusFont = localFont({
    src: '../../public/fonts/papyrus-webfont.woff',
});

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            delay: 0,
            mirror: true,
        });
    }, []);

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
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/favicon/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon/favicon-16x16.png'
                />
                <link rel='manifest' href='/favicon/site.webmanifest' />
            </Head>
            <style jsx global>{`
                :root {
                    /* ... */
                    --font-papyrus: ${papyrusFont.style.fontFamily};
                    --font-agency: ${agencyFont.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}
