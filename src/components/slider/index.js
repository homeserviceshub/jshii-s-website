import React, { useRef } from "react";
import "./mainSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Container } from "react-bootstrap";
import ThmBtn from "../thmButton";
import { Link } from "react-router-dom";

const MainSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const data = [1, 2, 3];
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Mousewheel, Keyboard]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="sliderDiv"
              style={{
                backgroundImage: `url("/assets/images/main-slider-test-image.jpg")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Container className="centerContainer">
                <div className="textOnImg">
                  <p className="sliderSubTitle">
                    Welcome to interior & exterior painting
                  </p>
                  <h2 className="sliderTitle">
                    Best Quality <br /> Paints
                  </h2>
                  <br />
                  <Link to="/gallery">
                    <ThmBtn text={"View Our Gallery"} />
                  </Link>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default MainSlider;
