// import React from 'react
// import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from "../../styles/LandingPage/Testimonials.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../public/icons/istockphoto-1007763808-612x612.jpg'
// import img1 from '../../public/images/dropdown-arrow2-512-1@2x.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image'

function Testimonials() {
  const data = [
    {},
    {},
    {},
    {}]
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonials_heading}>
        <p>
          Testimonials
        </p>
        <h1>
          What people say about FOSSMeet 
        </h1>
      </div>
      <div className={styles.testimonials_swiper_css}>
        <Swiper
          // breakpoints={{
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={3}
          navigation
          loop={true}
          showsPagination={false}
          pagination={false}
          className={styles.swiperstyles}
          scrollbar={false}
        // centeredSlides
        // centerInsufficientSlides={true}
        // centeredSlides={true}
        >

          <SwiperSlide className={styles.swiperstyle}>
            <div className={styles.testimonials_testimony}>
              <div className={styles.testimonials_testimony_para}>
                <div>
                  <p>
                    Sem imperdiet quam id commodo. Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
                    Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
                  </p>
                </div>
              </div>
              <div className={styles.testimonials_testimony_author}>
                <div className={styles.testimonials_testimony_author_image}>
                  <Image
                    src={img1}
                    alt="image"
                    width="65"
                    height="65"
                    className={styles.Image} />
                </div>
                <div className={styles.testimonials_testimony_author_name}>
                  Sem imperdiet
                  <br />
                  Fourth grade student,India
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperstyle}>
            <div className={styles.testimonials_testimony}>
              <div className={styles.testimonials_testimony_para}>
                <div><p>
                  Sem imperdiet quam id commodo. Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
                  Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
                </p>
                </div>
              </div>
              <div className={styles.testimonials_testimony_author}>
                <div className={styles.testimonials_testimony_author_image}>
                  <Image
                    src={img1}
                    alt="image"
                    width="65"
                    height="65"
                    className={styles.Image} />
                </div>
                <div className={styles.testimonials_testimony_author_name}>
                  Sem imperdiet
                  <br />
                  Fourth grade student,India
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperstyle}>
            <div className={styles.testimonials_testimony}>
              <div className={styles.testimonials_testimony_para}>
                <div><p>
                  Sem imperdiet quam id commodo. Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
                  Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
                </p> </div>
              </div>
              <div className={styles.testimonials_testimony_author}>
                <div className={styles.testimonials_testimony_author_image}>
                  <Image
                    src={img1}
                    alt="image"
                    width="65"
                    height="65" 
                    className={styles.Image}/>
                </div>
                <div className={styles.testimonials_testimony_author_name}>
                  Sem imperdiet
                  <br />
                  Fourth grade student,India
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperstyle}>
            <div className={styles.testimonials_testimony}>
              <div className={styles.testimonials_testimony_para}>
                <div><p>
                  Sem imperdiet quam id commodo. Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
                  Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
                </p>  </div>
              </div>
              <div className={styles.testimonials_testimony_author}>
                <div className={styles.testimonials_testimony_author_image}>
                  <Image
                    src={img1}
                    alt="image"
                    width="65"
                    height="65"
                    className={styles.Image} />
                </div>
                <div className={styles.testimonials_testimony_author_name}>
                  <div>
                    Sem imperdiet
                  </div>
                  <div>
                    Fourth grade student,India
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
      {/*
        Mobile View
      */}
      <div className={styles.mobview}>
        <div className={styles.mob_testimony}>
          <div className={styles.mob_testimony_para}>
            <div>
              Sem imperdiet quam id commodo. Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
              Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
            </div>
          </div>
          <div className={styles.mob_testimony_author}>
            <div className={styles.mob_testimony_author_image}>
              <Image
                src={img1}
                alt="image"
                width="39"
                height="39"
                className={styles.Image} />
            </div>
            <div className={styles.mob_testimony_author_name}>
              <div>
                Sem imperdiet
              </div>
              <div>
                Fourth grade student,India
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mob_testimony}>
          <div className={styles.mob_testimony_para}>
            <div>
              Sem imperdiet quam id commodo. Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
              Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
            </div>
          </div>
          <div className={styles.mob_testimony_author}>
            <div className={styles.mob_testimony_author_image}>
              <Image
                src={img1}
                alt="image"
                width="39"
                height="39"
                className={styles.Image} />
            </div>
            <div className={styles.mob_testimony_author_name}>
              <div>
                Sem imperdiet
              </div>
              <div>
                Fourth grade student,India
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.mob_testimony}>
          <div className={styles.mob_testimony_para}>
            <div>
             Sem imperdiet quam id commodo. Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
            Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
            </div>
          </div>
          <div className={styles.mob_testimony_author}>
            <div className={styles.mob_testimony_author_image}>
              <Image
              src={img1}
              alt="image"
              width="39"
              height="39"/>
            </div>
            <div className={styles.mob_testimony_author_name}>
              <div>
                Sem imperdiet
                </div>
                <div>
              Fourth grade student,India 
                </div>
            </div>
          </div> */}
        {/* </div> */}
        <div className={styles.mob_testimony}>
          <div className={styles.mob_testimony_para}>
            <div>
              Sem imperdiet quam id commodo. Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
              Rhoncus gravida nisi posuere duis.Sem imperdiet quam id commodo.
            </div>
          </div>
          <div className={styles.mob_testimony_author}>
            <div className={styles.mob_testimony_author_image}>
              <Image
                src={img1}
                alt="image"
                width="39"
                height="39"
                className={styles.Image} />
            </div>
            <div className={styles.mob_testimony_author_name}>
              <div>
                Sem imperdiet
              </div>
              <div>
                Fourth grade student,India
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials