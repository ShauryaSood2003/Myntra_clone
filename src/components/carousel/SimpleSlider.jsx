import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItems from "./CorouselItems";
import { MenCarouselImage,MenBrandLogo1,MenBrandLogo2,WomenCarouselImage,WomenBrandLogo1,WomenBrandLogo2,KidsCarouselImage,KidsBrandLogo1,KidsBrandLogo2,HomeCarouselImage,HomeBrandLogo1,HomeBrandLogo2,BeautyCarouselImage,BeautyBrandLogo1,BeautyBrandLogo2} from "../../constants/data";

const SimpleSlider=()=> {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000
  };
  return (
    <Slider {...settings}>
      <div>
        <CarouselItems image={MenCarouselImage} brand1={MenBrandLogo1} brand2={MenBrandLogo2} title="Men" off="45%" ></CarouselItems>
      </div>
      <div>
        <CarouselItems image={WomenCarouselImage} brand1={WomenBrandLogo1} brand2={WomenBrandLogo2} title="Women" off="75%" ></CarouselItems>
      </div>
      <div>
        <CarouselItems image={KidsCarouselImage} brand1={KidsBrandLogo1} brand2={KidsBrandLogo2} title="Kids" off="30%" ></CarouselItems>
      </div>
      <div>
        <CarouselItems image={HomeCarouselImage} brand1={HomeBrandLogo1} brand2={HomeBrandLogo2} title="Home & Living" off="55%" ></CarouselItems>
      </div>
      <div>
        <CarouselItems image={BeautyCarouselImage} brand1={BeautyBrandLogo1} brand2={BeautyBrandLogo2} title="Beauty" off="80%" ></CarouselItems>
      </div>

    </Slider>
  );
}
export default SimpleSlider;