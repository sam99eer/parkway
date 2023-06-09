import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import AutoSlider from '@/components/page/home/AutoSlider';
import GMap from '@/components/page/home/GMap';
import Hero from '@/components/page/home/Hero';
import Mission from '@/components/page/home/Mission';
import PhotoGallery from '@/components/page/home/PhotoGallery';
import Reach from '@/components/page/home/Reach';
import Tags from '@/components/page/home/Tags';
import Welcome from '@/components/page/home/Welcome';
import { LINKS } from '@/constants/Links';
import { useRef } from 'react';

const Home = () => {
    const contactSectionRef = useRef<HTMLDivElement>(null);

    const scrollHandler = () => {
        contactSectionRef.current?.scrollIntoView();
    };

    return (
        <>
            <Header activeLink={LINKS.HOME} />
            <Hero onScroll={scrollHandler} />
            <Tags />
            <Welcome />
            <AutoSlider />
            <Mission />
            <PhotoGallery />
            <Reach contactRef={contactSectionRef} />
            <GMap />
            <Footer />
        </>
    );
};

export default Home;
