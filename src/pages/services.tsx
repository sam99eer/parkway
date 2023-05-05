import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Hero from '@/components/page/services/Hero';
import ServiceDetails from '@/components/page/services/ServiceDetails';
import ServiceHighlights from '@/components/page/services/ServiceHighlights';
import { LINKS } from '@/constants/Links';

const Services = () => {
    return (
        <>
            <Header activeLink={LINKS.SERVICES} />
            <Hero />
            <ServiceDetails />
            <ServiceHighlights />
            <Footer />
        </>
    );
};

export default Services;
