import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { EffectCards, EffectCoverflow, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

export default function ProductSlider() {
    let [slidesPerView, setSlidesPerView] = useState(window.innerWidth < 1000 ? 1 : 3)
    let [slideType, setSlideType] = useState(window.innerWidth < 1000 ? 'cards' : 'coverflow')
    let navigate = useNavigate()
    let options = {
        effect: slideType,
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: slidesPerView,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        pagination: true,
        modules: [EffectCoverflow, Pagination, EffectCards],
        className: "mySwiper"
    }
    function handelWindoResize() {
        setSlidesPerView(window.innerWidth < 1000 ? 1 : 3)
        setSlideType(window.innerWidth < 1000 ? 'cards' : 'coverflow')
        navigate(0)
    }
    window.addEventListener("resize", handelWindoResize);
    return (
        <>
            <div className="container-fluid py-5 mb-5 team">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "600px" }}>
                        <h5 className="text-primary">Our Team</h5>
                        <h1>Meet our expert Team</h1>
                    </div>
                    <Swiper {...options}>
                        <SwiperSlide>
                            <div className="rounded team-item">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle">
                                            <img src="img/team-1.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4 className="">Full Name</h4>
                                            <p className="m-0">Designation</p>
                                        </div>
                                        <div className="team-icon d-flex justify-content-center pb-4">
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded team-item">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle">
                                            <img src="img/team-2.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4 className="">Full Name</h4>
                                            <p className="m-0">Designation</p>
                                        </div>
                                        <div className="team-icon d-flex justify-content-center pb-4">
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded team-item">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle">
                                            <img src="img/team-3.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4 className="">Full Name</h4>
                                            <p className="m-0">Designation</p>
                                        </div>
                                        <div className="team-icon d-flex justify-content-center pb-4">
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="rounded team-item">
                                <div className="team-content">
                                    <div className="team-img-icon">
                                        <div className="team-img rounded-circle">
                                            <img src="img/team-4.jpg" className="img-fluid w-100 rounded-circle" alt="" />
                                        </div>
                                        <div className="team-name text-center py-3">
                                            <h4 className="">Full Name</h4>
                                            <p className="m-0">Designation</p>
                                        </div>
                                        <div className="team-icon d-flex justify-content-center pb-4">
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-instagram"></i></a>
                                            <a className="btn btn-square btn-secondary text-white rounded-circle m-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}
