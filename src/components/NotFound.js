import React from "react";
import {useTranslation} from "react-i18next";
import {useSpring, animated} from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const foregroundTrans = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const backgroundTrans = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`;

const NotFound = () => {
    const {t} = useTranslation();
    const [props, set] = useSpring(() => ({xy: [0, 0], config: {mass: 10, tension: 450, friction: 140}}));

    return (
        <div className="page-not-found d-flex flex-column justify-content-center align-items-center __padding"
             onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})}>
            <div className="page-not-found__scene">
                <BackgroundElement style={{transform: props.xy.to(backgroundTrans)}}/>
                <ForegroundElement style={{transform: props.xy.to(foregroundTrans)}}/>
            </div>
            <h2 className="page-not-found__title __title-font">{t('notFound.title')}</h2>
            <p className="page-not-found__text" dangerouslySetInnerHTML={{__html: t('notFound.text')}}/>
            <div className="page-not-found__buttons d-flex justify-content-center">
                <a className="page-not-found__link page-not-found__link_accent __console-font"
                   href="/">
                    {t('notFound.goHome')}
                </a>
            </div>
        </div>
    )
}

const ForegroundElement = ({style}) => {
    return (
        <animated.div className="page-not-found__404" style={style}>
            <Svg/>
        </animated.div>
    )
}

const BackgroundElement = ({style}) => {
    return (
        <animated.div className="page-not-found__404 page-not-found__404_color_accent" style={style}>
            <Svg/>
        </animated.div>
    )
}

const Svg = () => {
    return (
        <svg viewBox="0 0 323 134" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M100.762 83.1743H87.9376V55.6938H58.2587V83.1743H31.511L72.3653 2.56485H40.8544L0 83.1743V110.288H58.2587V130.807H87.9376V110.288H100.762V83.1743Z"/>
            <path
                d="M160.317 133.372C193.477 133.372 212.53 106.258 212.53 66.686C212.53 27.1141 193.477 0 160.317 0C127.157 0 108.104 27.1141 108.104 66.686C108.104 106.258 127.157 133.372 160.317 133.372ZM160.317 104.792C144.928 104.792 137.417 91.4185 137.417 66.686C137.417 41.9536 144.928 28.5797 160.317 28.5797C175.706 28.5797 183.218 41.9536 183.218 66.686C183.218 91.4185 175.706 104.792 160.317 104.792Z"/>
            <path
                d="M322.431 83.1743H309.607V55.6938H279.928V83.1743H253.18L294.034 2.56485H262.523L221.669 83.1743V110.288H279.928V130.807H309.607V110.288H322.431V83.1743Z"/>
        </svg>
    )
}

export default NotFound;