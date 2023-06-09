import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useRef, useEffect } from 'react';
import Slider, { LazyLoadTypes } from "react-slick";
import CustomSlide from "./CustomSlide";
import NextArrow from "./CustomArrow/NextArrow";
import PrevArrow from "./CustomArrow/PrevArrow";
import playBtn from "../../assets/play.svg"
import pauseBtn from "../../assets/pause.svg"
import { slideData } from "../../mock-data"

function Showcase() {
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true)
  const slider = useRef<Slider | null>(null)

  useEffect(() => {
    if (isAutoPlay) {
      slider.current?.slickPlay()
    }
    else {
      slider.current?.slickPause()
    }
  }, [isAutoPlay])

  const settings = {
    lazyLoad: "progressive" as LazyLoadTypes,
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />

  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  return (
    <div className="relative w-full h-full">
      <Slider ref={slider} {...settings}>
        {slideData.map(slide => {
          return <CustomSlide key={slide.id} data={slide} />
        })}
      </Slider>
      <img src={isAutoPlay ? pauseBtn : playBtn} alt="play btn" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] hover:cursor-pointer" onClick={toggleAutoPlay} />
    </div>
  )
}

export default Showcase