import React from "react";
import LogoImg from '../Assets/comp-logo.png'

const Header = () =>{

    return ( <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto">
                <a href="index.html">
                <img
                    width={50}
                    height={90}
                    src={LogoImg}
                />{" "}
                Security Services
            </a>
            </h1>
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
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <a
            href="mailto:maneetbhatia79@gmail.com"
            className="get-started-btn scrollto"
        >
            Quote
        </a>
        </div>
    </header>
    )
}

export default Header