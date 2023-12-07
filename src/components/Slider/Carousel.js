import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none'}}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let {slider, slider1, slider2} = props
  const [nav, setNav] = useState({nav1: null, nav2: null})

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2
    })
  }, [])

  const settings = {
    loop:true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 
  const next = () =>  {
    slider1.slickNext();
  }
  const previous = () => {
    slider2.slickPrev();
  }

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2}
                    ref={slider => (slider1 = slider)} 
                    {...settings} >
              <div key={1}>
                <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/690-300-max-iphone15-promax-th1102.jpg"></img>
                
              </div>
              <div key={2}>
                <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/sliding-dienthoai-xiaomi-13c.jpg"></img>
              </div>
              <div key={3}>
                <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/sliding-sinhvien-rogphone.png"></img>
              </div>
              <div key={4}>
                <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/gia-dung-bear-sliding.png"></img>
              </div>
              <div key={4}>
                <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/jbl-authentics-series-01-12-2023.jpg"></img>
              </div>
            </Slider>
            <div className='carousel-left-move' onClick={() => previous()}>
                <div className="prev">
                    <LeftOutlined></LeftOutlined>
                </div>
                <div className="next" onClick={() => next()}>
                    <RightOutlined></RightOutlined>
                </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider asNavFor={nav.nav1}
                    ref={slider => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                     >
              
              <div>
                IPHONE 15 SERIES <br></br> Sẵn sàng mua ngay
              </div>
              <div>
                XIAOMI REDMI 13C  <br></br>  Hotsale giảm sập sàn
              </div>
              <div>
              ROG PHONE  <br></br>  Giá mới cực tốt
              </div>
              <div>
              GIA DỤNG BEAR  <br></br>  Mua đi chờ chi
              </div>
              <div>
              ĐẠI TIỆC ÂM THANH   <br></br>   Loa sale bung nóc
              </div>

            </Slider>
          </div>
        </div>
        <div className="carousel-right">
          <div className="carousel-right-item">
            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/m14.png"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/2023/11/banner/Vivo-Y17s-720-220-720x220-3.png"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:10/plain/https://dashboard.cellphones.com.vn/storage/rb%20laptop.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
