import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Facilities from '@/components/page/facility/Facilities';
import Hero from '@/components/page/facility/Hero';
import { LINKS } from '@/constants/Links';

const Facility = () => {
    return (
        <>
            <Header activeLink={LINKS.FACILITY} />
            <Hero />
            <Facilities />
            <Footer />
        </>
    );
};

export default Facility;
