import { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg1 from "../../assets/1.jpg";
import sliderImg2 from "../../assets/7.jpg";
import sliderImg3 from "../../assets/3.webp";


const data = [
    {
        img: "../../assets/1.jpg",
        title:
            "Open your Plus Saver account today using ENBD X App or Online Banking",
        desc: `Earn up to 4% until 31 <sup>st</sup> March 2024 when you save with the Emirates NBD Plus Saver Account.`,
    },
    {
        img: "../../assets/2.jpg",
        title: "Float on Cloud 9 with prizes of AED 9,000,000+",
        desc: "Grow your balances with Emirates NBD and you could be one of the 3 lucky winners to WIN AED 1,000,000",
    },
    {
        img: "../../assets/3.webp",
        title: "Report fraud. Don’t let fraudsters survive.",
        desc: "Fighting fraud isn’t just the responsibility of banks, the police, or the government. It is the responsibility of every individual. So, let’s all come together and report fraud to stop fraud.",
    },
    {
        img: "../../assets/1.jpg",
        title: "Instant Payments Service",
        desc: "Introducing Aani on ENBD X , a simple and faster way to move money using mobile numbers.",
    },
];
const Image =[
    {
        img:"https://www.startech.com.bd/image/cache/catalog/home/banner/mobile-meal/mobile-mela-home-banner-982x500.png"
    },
    {
        img:"https://www.startech.com.bd/image/cache/catalog/home/banner/ek-ekke-dui/notepad-2-home-banner-982x500.png"
    },
  
]

const SliderCarousel = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const settings = {
        dots: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    };

    return (
        <>
            {isMounted && (
                <Slider {...settings}>
                
                    {Image.map((el, index) => (
                        <div key={index} className="relative hidden">
                            <div
                                style={{
                                    backgroundImage: `url(${el.img})`,
                                }}
                                className="bg-cover bg-no-repeat text-white bg-center h-[360px] w-full lg:h-[400px]  h1-white relative"
                            >
                               
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </>
    );
};

export default SliderCarousel;
