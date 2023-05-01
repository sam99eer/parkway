import Header from '@/components/common/Header';
import { LINKS } from '@/constants/Links';

const Home = () => {
    return (
        <div>
            <Header activeLink={LINKS.HOME} />
        </div>
    );
};

export default Home;
