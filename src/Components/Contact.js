import React from "react";

const Contact = () => {

    return (
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          <div className="row">
            <p></p>
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <h1 className="contact-heading">
                  Security Services 
                </h1>
                <hr></hr>
                <div className="address">
                  <i className="icofont-google-map" />
                  <h4>Location:</h4>
                  <p>123 Main Street, Vancouver B.C</p>
                </div>
                <div className="email">
                  <i className="icofont-envelope" />
                  <h4>Email:</h4>
                  <p>
                    {" "}
                    <a href="mailto:maneetbhatia79@gmail.com">
                      security@services.com
                    </a>
                  </p>
                </div>
                <div className="phone">
                  <i className="icofont-phone" />
                  <h4>Call:</h4>
                  <p>1800-securityservices</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height={500}
                  src="https://maps.google.com/maps?width=100%&height=600&hl=en&coord=56.1304,106.3468&q=canada&ie=UTF8&t=&z=4&iwloc=B&output=embed"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                >
                  &lt;a
                  href="https://www.maps.ie/draw-radius-circle-map/"&gt;km
                  radius map&lt;/a&gt;
                </iframe>
              </div>
              <br />
            </div>
          </div>
        </div>
      </section>
    )
}

export default Contact