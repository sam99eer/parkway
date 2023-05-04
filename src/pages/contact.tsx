import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import ContactDetails from '@/components/page/contact/ContactDetails';
import Hero from '@/components/page/contact/Hero';
import { LINKS } from '@/constants/Links';

const Contact = () => {
    return (
        <>
            <Header activeLink={LINKS.CONTACT} />
            <Hero />
            <ContactDetails />
            <Footer />
        </>
    );
};

export default Contact;
