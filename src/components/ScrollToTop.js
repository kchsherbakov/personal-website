import React, {useEffect, useState} from "react";

function ScrollToTop() {
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const icon = document.getElementById('scroll-to-top-icon');
    const topBorder = document.getElementsByClassName('borders__top')[0];

    const toggleVisibility = () => {
        if (window.pageYOffset > viewportHeight) {
            icon.style.bottom = topBorder.getBoundingClientRect().height - 10 + 'px';
        } else {
            icon.style.bottom = '-100px';
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div id="scroll-to-top-icon" className="scroll-to-top d-none d-lg-block">
            <a onClick={scrollToTop}>
                    <span className="__console-font">
                        <img src="/img/left-arrow-black-icon.svg" alt="Scroll to top"/>
                        top
                    </span>
            </a>
        </div>
    )
}

export {ScrollToTop}