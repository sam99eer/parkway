import home1 from '@/assets/images/home1.jpg';
import home2 from '@/assets/images/home2.jpg';
import home3 from '@/assets/images/home3.jpg';
import home4 from '@/assets/images/home4.jpg';
import Slide2 from '@/assets/images/old_people1.jpg';
import Slide3 from '@/assets/images/old_people2.jpg';
import Slide4 from '@/assets/images/old_people3.jpg';
import Slide1 from '@/assets/images/smiling_man.jpg';
import { ISliderImage } from '@/models/ImageModel';

export const GalleryImages: ISliderImage[] = [
    {
        alt: 'Home 1',
        img: home1,
    },
    {
        alt: 'Home 2',
        img: home2,
    },
    {
        alt: 'Home 3',
        img: home3,
    },
    {
        alt: 'Home 4',
        img: home4,
    },
];

export const BannerImages: ISliderImage[] = [
    {
        img: Slide1,
        alt: 'Old Man Smiling',
    },
    {
        img: Slide2,
        alt: 'Grandpa and Grandmother watching laptop',
    },
    {
        img: Slide3,
        alt: 'Nurse taking care of Grandma',
    },
    {
        img: Slide4,
        alt: 'Laughing people',
    },
];
