import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import apiServices, { BASE_URL_IMG } from "../ApiServices/ApiServices"; 
import { toast } from "react-toastify";
// const testimonials = [
//     {
//       img: './assets/img/testimonial-1.jpg',
//       name: 'Client Name 1',
//       profession: 'Profession 1',
//       review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
//     },
//     {
//       img: './assets/img/testimonial-2.jpg',
//       name: 'Client Name 2',
//       profession: 'Profession 2',
//       review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
//     },
//     {
//       img: './assets/img/testimonial-3.jpg',
//       name: 'Client Name 3',
//       profession: 'Profession 3',
//       review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
//     },
//     {
//       img: './assets/img/testimonial-4.jpg',
//       name: 'Client Name 4',
//       profession: 'Profession 4',
//       review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
//     },
//     {
//         img: './assets/img/testimonial-4.jpg',
//         name: 'Client Name 4',
//         profession: 'Profession 4',
//         review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
//       },
//       {
//         img: './assets/img/testimonial-4.jpg',
//         name: 'Client Name 4',
//         profession: 'Profession 4',
//         review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
//       },
//       {
//         img: './assets/img/testimonial-4.jpg',
//         name: 'Client Name 4',
//         profession: 'Profession 4',
//         review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
//       },
//       {
//         img: './assets/img/testimonial-4.jpg',
//         name: 'Client Name 4',
//         profession: 'Profession 4',
//         review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.',
//       },
//   ];
  
  
const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiServices
      .getallTestimonial()
      .then((response) => {
        if (response.data.success) {
          setTestimonials(response.data.data);
        } else {
          toast.error(response.data.msg);
        }
      })
      .catch((error) => {
        // console.error("Error fetching testimonials:", error);
        toast.error("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); 

  return (
    <div className="container-xxl bg-light my-6 py-6 pb-0 mx-auto">
    <div className="container center">
      <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
        <p className="text-primary text-uppercase mb-2">// Client's Review</p>
        <h1 className="display-6 mb-4">More Than 20000+ Customers Trusted Us</h1>
      </div>
      <div className="testimonial-carousel wow fadeInUp " data-wow-delay="0.1s">
      <Swiper
       
        slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-item bg-black rounded p-4 " style={{background:"#EAA636"}}>
                <div className="d-flex align-items-center mb-4">
                  <img className="flex-shrink-0 rounded-circle border p-1" src={BASE_URL_IMG+ testimonial?.Image} alt={testimonial.UserName} />
                  <div className="ms-4">
                    <h5 className="mb-1">{testimonial?.UserName}</h5>
                    {/* <span>{testimonial.profession}</span> */}
                  </div>
                </div>
                <p className="mb-0"> {testimonial?.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-primary text-light rounded-top p-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 text-light mb-0">Subscribe to Our Newsletter</h1>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="position-relative">
              <input className="form-control bg-transparent border-light w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-dark py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial
