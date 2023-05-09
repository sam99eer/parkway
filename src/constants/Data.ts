import home1 from '@/assets/images/home1.jpg';
import home2 from '@/assets/images/home2.jpg';
import home3 from '@/assets/images/home3.jpg';
import home4 from '@/assets/images/home4.jpg';
import MomDaughter from '@/assets/images/mom_and_daughter.jpg';
import SmilingMan from '@/assets/images/smiling_man.jpg';
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
        img: SmilingMan,
        alt: 'Old Man Smiling',
    },
    {
        img: MomDaughter,
        alt: 'Mom and Daughter',
    },
    {
        img: home1,
        alt: 'Slide3',
    },
    {
        img: home2,
        alt: 'Slide4',
    },
];
