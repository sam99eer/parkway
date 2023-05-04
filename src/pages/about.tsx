import Header from '@/components/common/Header';
import Hero from '@/components/page/about/Hero';
import WhoWeAre from '@/components/page/about/WhoWeAre';
import { LINKS } from '@/constants/Links';

const About = () => {
    return (
        <>
            <Header activeLink={LINKS.ABOUT} />
            <Hero />
            <WhoWeAre />
        </>
    );
};

export default About;
