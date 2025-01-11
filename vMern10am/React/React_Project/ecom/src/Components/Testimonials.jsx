import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

import { EffectCards, EffectCoverflow, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

export default function Testimonials() {
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
        modules: [EffectCoverflow, Pagination,EffectCards],
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
            <div className="container-fluid testimonial py-5 mb-5">
                <div className="container">
                    <div className="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: "600px" }}>
                        <h5 className="text-primary">Our Testimonial</h5>
                        <h1>Our Client Saying!</h1>
                    </div>

                    <Swiper {...options}>
                        <SwiperSlide>
                            <div className="testimonial-item border p-4">
                                <div className="d-flex align-items-center">
                                    <div className="">
                                        <img src="img/testimonial-1.jpg" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <h4 className="text-secondary">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-3">
                                    <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item border p-4">
                                <div className=" d-flex align-items-center">
                                    <div className="">
                                        <img src="img/testimonial-2.jpg" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <h4 className="text-secondary">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-3">
                                    <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item border p-4">
                                <div className=" d-flex align-items-center">
                                    <div className="">
                                        <img src="img/testimonial-3.jpg" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <h4 className="text-secondary">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-3">
                                    <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-item border p-4">
                                <div className=" d-flex align-items-center">
                                    <div className="">
                                        <img src="img/testimonial-4.jpg" alt="" />
                                    </div>
                                    <div className="ms-4">
                                        <h4 className="text-secondary">Client Name</h4>
                                        <p className="m-0 pb-3">Profession</p>
                                        <div className="d-flex pe-5">
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                            <i className="fas fa-star me-1 text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top mt-4 pt-3">
                                    <p className="mb-0">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum aliquam dolor eget urna. Nam volutpat libero sit amet leo cursus, ac viverra eros morbi quis quam mi.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div >
        </>
    )
}
