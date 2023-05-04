import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Hero from '@/components/page/about/Hero';
import Vision from '@/components/page/about/Vision';
import WhoWeAre from '@/components/page/about/WhoWeAre';
import { LINKS } from '@/constants/Links';

const About = () => {
    return (
        <>
            <Header activeLink={LINKS.ABOUT} />
            <Hero />
            <WhoWeAre />
            <Vision />
            <Footer />
        </>
    );
};

export default About;
