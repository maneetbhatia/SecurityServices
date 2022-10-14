import React from "react";
import styled from "styled-components"

const BackToTop = () => {
    return (
        <>
            <A href="#" className="back-to-top">
                <I className="ri-arrow-up-line" />
            </A>
        </>
    )
}

export default BackToTop

const A = styled.a`
    position: fixed;
    display: none;
    right: 15px;
    bottom: 15px;
    z-index: 99999;
`

const I = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background: #47b2e4;
    color: #fff;
    transition: all 0.4s;

    &:hover{
        background: #209dd8;
        color: #fff;
    }
`

const Preloader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    overflow: hidden;
    background: #37517e;

    &::after{
        content: "";
        position: fixed;
        top: calc(50% - 30px);
        left: calc(50% - 30px);
        border: 6px solid #37517e;
        border-top-color: #fff;
        border-bottom-color: #fff;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        -webkit-animation: animate-preloader 1s linear infinite;
        animation: animate-preloader 1s linear infinite;
    }
`