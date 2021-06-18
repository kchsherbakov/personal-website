import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import styled from 'styled-components';

const ScrollDiv = styled.div`
  bottom: ${props => props.bottom};
`;

export function ScrollToTop() {
    const [bottom, setBottom] = useState('-100px');
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const {t} = useTranslation();

    const toggleVisibility = () => {
        if (window.pageYOffset > viewportHeight) {
            let topBorder = document.getElementsByClassName('borders__top')[0];
            setBottom(topBorder.getBoundingClientRect().height - 10 + 'px');
        } else {
            setBottom('-100px');
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
        <ScrollDiv bottom={bottom} className="scroll-to-top d-none d-lg-block">
            <a onClick={scrollToTop}>
                    <span className="__console-font">
                        <img src="/img/left-arrow-black-icon.svg" alt="Scroll to top"/>
                        {t('to_top')}
                    </span>
            </a>
        </ScrollDiv>
    )
}