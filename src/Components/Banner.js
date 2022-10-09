import React from "react";
import BannerImg from '../Assets/3740777.jpg'

const Banner = () => {
    return (
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                            data-aos="fade-up"
                            data-aos-delay={200}>
                            <h1>"Let Us protect while you work or you rest!"</h1>
                            <div className="d-lg-flex">
                                <a href="#contact" className="btn-get-started scrollto">
                                Contact
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img"
                            data-aos="zoom-in"
                            data-aos-delay={200}>
                            <img
                                src={BannerImg}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default Banner