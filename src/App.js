import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo mr-auto">
            {/* <div class="bounce">
              <p>SPEACIAL OFFER 20% OFF... </p>
            </div> */}
            <a href="index.html">
              <img
                width={50}
                height={90}
                src={require("./img/comp-logo.png")}
              />{" "}
              Security Services
            </a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#Solutions">Career</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
          <a
            href="mailto:7starsecurity@gmail.com"
            className="get-started-btn scrollto"
          >
            Quote
          </a>
        </div>
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h1>"Let Us protect while you work or you rest!"</h1>
              {/* <div class="bounce">
                <p>~~~SPECIAL OFFER SERVICES 20% OFF~~~ </p>
              </div> */}
              <div className="d-lg-flex">
                <a href="#contact" className="btn-get-started scrollto">
                  Contact
                </a>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <img
                src={require("./img/3740777.jpg")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero */}
      <main id="main">
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="ri-check-double-line" />
                    <b>Liability</b>
                    <br />
                    We do carry Five Million worth of liability insurance as per
                    norms set for security industry.
                  </li>
                  <li>
                    <i className="ri-check-double-line" />
                    <b>Bonded</b> <br />
                    We are fully bonded (for $ 15,000) according to the
                    regulatory requirements.
                  </li>
                  <li>
                    <i className="ri-check-double-line" />{" "}
                    <b>Trained Officers</b>
                    <br />
                    At Security Services Inc. we have a band of most
                    efficient, intelligent and well-trained security officers
                    physically and mentally capable of handling any kind of
                    security problem responsibly and tactfully to safeguard the
                    interests of our clients always remains in mind of every
                    security officer. We leave no stone unturned to satisfy our
                    clients. Our team is always ready to go beyond our agreement
                    in order to meet the requirements and expectations of our
                    clients.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <ul>
                  <li>
                    <i className="ri-check-double-line" />
                    <b>Licensed</b>
                    <br />
                    <p>
                      Security Services Inc. is legally registered and
                      licensed by Security Programs Division under the Private
                      Investigators and Security Agencies Act. We are one of the
                      fast growing and reputed name in the security providiFor
                      us, being a one-stop shop for security guard services
                      means being able to meet and adapt to our clients’
                      needs—whether they are in North America, South America,
                      Europe, Africa or the Middle East.ng industry of BC.
                      <br />
                    </p>
                  </li>
                  <br />
                  <br />
                  <li>
                    <i className="ri-check-double-line" />
                    <b>Offers</b>
                    <br />
                    We offer a variety of security services inclusive of
                    security guard services, security products, emergency
                    preparedness, Private investigators, mobile patrol and
                    alarm, Bicycle Patrol, Value Added Security Service and lots
                    more. These services are available in the Greater Vancouver
                    and adjoining areas in BC. We provider services in the
                    Greater Vancouver Area in regions including Vancouver,
                    Surrey, Delta, Richmond, Burnaby, White rock and Coquitlam.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* ======= Skills Section ======= */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services section-bg">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              <p>
                Security Services is a full service Professional security provider
                that is able to effectively meet your commercial, industrial and
                retail security needs. We offer a complete range security
                services in greater Vancouver area including Vancouver, Surrey,
                Delta, Richmond, Burnaby, White rock and Coquitlam. We offer our
                security services to a diverse clientele across different
                sectors. Our services are available to the retail sector,
                commercial set ups and industrial clients as well. Our security
                guards offer patrolling, manning and guard services at retail
                centers, commercial outlets, industrial houses, factories and
                other commercial properties. You can take a closer look at the
                security solutions offered by us on the “solutions” page. You
                can read about the different solutions and also about our
                featured security solution.
              </p>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch"
                data-aos="zoom-in"
                data-aos-delay={100}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bxl-dribbble" />
                  </div>
                  <h4>Technical Security</h4>
                  <p>
                    For us, being a one-stop shop for security guard services
                    means being able to meet and adapt to our clients’
                    needs—whether they are in anywere.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-file" />
                  </div>
                  <h4>CCTV Systems Network</h4>
                  <p>
                    If you need help defining the unique security requirements
                    of your organization, look no further than our account
                    managers. They work with you to determine your needs, then
                    put a bespoke security plan in place.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay={300}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-tachometer" />
                  </div>
                  <h4>Password Security</h4>
                  <p>
                    Our security guards are supported by the latest
                    technological innovations, including GTrack—which improves
                    response times in the event of an emergency, allowing you to
                    make better security-related decisions.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                data-aos="zoom-in"
                data-aos-delay={400}
              >
                <div className="icon-box">
                  <div className="icon">
                    <i className="bx bx-layer" />
                  </div>
                  <h4>Remote Security</h4>
                  <p>
                    Enjoy total confidence in our security guards knowing they
                    have the training, as well as the health and safety
                    certifications they need to protect what is important to
                    you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        {/* ======= Why Us Section ======= */}

        <section id="Solutions" className="career section-bg">
          <div className="section-title">
            <h2>Jobs</h2>
          </div>
          
          <p>
            <div className="li">
              <div className="p">
                <p>
                  <b>Title:</b> Manager
                </p>
                <p>
                  <b>Location:</b> Surrey
                </p>
                <p>
                  <b>Type:</b> Full Time
                </p>

                <p>
                  <div class="myDIV">
                    <b>Requirements</b>
                  </div>
                  <div class="hide">
                    <ul>
                      <li>Security License</li>
                      <li>Atleast 5 years Experience</li>
                      <li>Must have your own Vehicle</li>
                      <li>Class 5 license</li>
                      <li>Eligible to work in Canada</li>
                    </ul>
                  </div>
                </p>
                <a href="mailto:7starsecurity@gmail.com" class="button button2">
                  Apply
                </a>
              </div>

              <div className="p">
                <p>
                  <b>Title:</b> Security Guard
                </p>
                <p>
                  <b>Location:</b> Langley
                </p>
                <p>
                  <b>Type:</b> Part Time
                </p>
                <p>
                  <div class="myDIV">
                    <b>Requirements</b>
                  </div>
                  <div class="hide">
                    <ul>
                      <li>Security License</li>
                      <li>Atleast 2 years Experience</li>
                      <li>Must have your own Vehicle</li>
                      <li>Class 5 license</li>
                      <li>Eligible to work in Canada</li>
                    </ul>
                  </div>
                </p>
                <a href="mailto:7starsecurity@gmail.com" class="button button2">
                  Apply
                </a>
              </div>

              <div className="p">
                <p>
                  <b>Title:</b> Supervisor
                </p>
                <p>
                  <b>Location:</b> Vancouver
                </p>
                <p>
                  <b>Type:</b> Full Time
                </p>
                <p>
                  <div class="myDIV">
                    <b>Requirements</b>
                  </div>
                  <div class="hide">
                    <ul>
                      <li>Security License</li>
                      <li>Atleast 3 years Experience</li>
                      <li>Must have your own Vehicle</li>
                      <li>Class 5 license</li>
                      <li>Eligible to work in Canada</li>
                    </ul>
                  </div>
                </p>
                <a href="mailto:7starsecurity@gmail.com" class="button button2">
                  Apply
                </a>
              </div>
            </div>

                 
          </p>

        
          
        </section>
        {/* End Why Us Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
            </div>
            <div className="row">
              <p />
              <div className="col-lg-5 d-flex align-items-stretch">
                <div className="info">
                  <hi className="contact-heading">
                    Security Services 
                  </hi>
                  <hr></hr>
                  <div className="address">
                    <i className="icofont-google-map" />
                    <h4>Location:</h4>
                    <p>1234 00 Street, XYZ City</p>
                  </div>
                  <div className="email">
                    <i className="icofont-envelope" />
                    <h4>Email:</h4>
                    <p>
                      {" "}
                      <a href="mailto:7starsecurity@gmail.com">
                        securityservices@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="phone">
                    <i className="icofont-phone" />
                    <h4>Call:</h4>
                    <p>123-123-1234</p>
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
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>Security Services</h3>
                <p>
                <strong>Address:</strong> 1234 00 Street,
                 XYZ City
                  <br />
                 
                  <br />
                  <br />
                  <strong>Phone:</strong> 123-123-1234
                  <br />
                  <strong>Email:</strong> securityservices@gmail.com
                  <br />
                </p>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#Solutions">Career</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#services">Technical Security</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#services">CCTV Systems Network</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#services">Password Security</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#services">Remote Security</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bx bxl-skype" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Security Services</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
          </div>
        </div>
      </footer>
      {/* End Footer */}
      <a href="#" className="back-to-top">
        <i className="ri-arrow-up-line" />
      </a>
      <div id="preloader" />
    </div>
  );
}

export default App;
