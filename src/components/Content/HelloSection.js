import React, {Component} from "react";
import {withTranslation} from "react-i18next";
import {StrapiContext} from "../Providers/StrapiProvider";
import {withWindowDimensions} from "../../helpers/dimensions";

class HelloSection extends Component {
    static contextType = StrapiContext;

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            helloVisible: true,
            scrollVisible: true,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.props.showHello();
            this.setState({
                scrollVisible: false
            });
        } else {
            this.props.hideHello();
            this.setState({
                scrollVisible: true,
            })
        }

        // Hide intro sections, otherwise 'hello' and 'greetings'
        // sections will overlay other content
        const {windowHeight} = this.props;
        if (window.scrollY > 1.8 * windowHeight) {
            this.setState({
                helloVisible: false,
            });
        } else {
            this.setState({
                helloVisible: true
            });
        }
    }

    render() {
        const {t, i18n} = this.props;
        const {appdata} = this.context;

        return (
            <div className="intro">
                <section className={`intro__hello hello ${this.state.helloVisible ? '' : '__invisible'} `}>
                    <div className="hello__padding __padding">
                        {i18n.language === 'ru' ? <HelloTextRu/> : <HelloTextEn/>}
                        <div className="hello__page-color"/>
                        <span
                            className={`hello__scroll-text __console-font ${this.state.scrollVisible ? '' : 'hello__scroll-text_hidden'}`}>
                        <img src="/img/left-arrow-white-icon.svg" alt="Scroll down"/>
                            {t('scroll')}
                    </span>
                    </div>
                </section>
                <section className={`intro__greetings greetings ${this.state.helloVisible ? '' : '__invisible'}`}>
                    <div className="greetings__padding __padding">
                        <p className="greetings__text __console-font">
                            {t('index.hello')}
                        </p>
                        <p className="greetings__text_size_l greetings__text_color_black greetings__text_weight_bold greetings__text __title-font">
                            {t('index.name')}
                        </p>
                        <p className="greetings__text_size_l greetings__text_weight_bold greetings__text __title-font">
                            {t('index.what_i_do')}
                        </p>
                        <p className="greetings__text __console-font">
                            {appdata.aboutMeShort}
                        </p>
                    </div>
                </section>
                <div id="scroller" className="intro__scroller"/>
            </div>
        )
    }
}

const HelloTextEn = () => {
    const helloStyles = {
        'strokeDashoffset': '2e-05',
        strokeDasharray: 'none',
    }
    const dotStyles = {
        backfaceVisibility: 'hidden',
        zIndex: 0,
    }

    return (
        <h1 className="hello__text">
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="343"
                 viewBox="0 0 428.83 343.87">
                <g id="hello_h">
                    <line className="line" x1="21.5" y1="0.01" x2="21.5" y2="152.01"
                          style={helloStyles}/>
                    <line className="line" x1="21.5" y1="74.01" x2="103.17" y2="74.01"
                          style={helloStyles}/>
                    <line className="line" x1="103.17" y1="0.01" x2="103.17" y2="152.01"
                          style={helloStyles}/>
                </g>
                <g id="hello_e">
                    <line className="line" x1="168.17" y1="0.01" x2="168.17" y2="152.01"
                          style={helloStyles}/>
                    <line className="line" x1="168.17" y1="19.5" x2="245.83" y2="19.5"
                          style={helloStyles}/>
                    <line className="line" x1="168.17" y1="76.01" x2="240.83" y2="76.01"
                          style={helloStyles}/>
                    <line className="line" x1="168.17" y1="131.5" x2="245.83" y2="131.5"
                          style={helloStyles}/>
                </g>
                <g id="hello_l1">
                    <line className="line" x1="21.5" y1="186.68" x2="21.5" y2="338.68"
                          style={helloStyles}/>
                    <line className="line" x1="21.5" y1="318.17" x2="94.17" y2="318.17"
                          style={helloStyles}/>
                </g>
                <g id="hello_l2">
                    <line className="line" x1="128.5" y1="186.68" x2="128.5" y2="338.68"
                          style={helloStyles}/>
                    <line className="line" x1="128.5" y1="318.17" x2="201.17" y2="318.17"
                          style={helloStyles}/>
                </g>
                <g id="hello_o">
                    <circle className="line" cx="283.51" cy="262.69" r="60.68"
                            style={helloStyles}/>
                </g>
                <g className="dot">
                    <circle cx="403.17" cy="316.01" r="25.67"
                            transform="matrix(1,0,0,1,0,0)"
                            style={dotStyles}/>
                </g>
            </svg>
        </h1>
    )
}

const HelloTextRu = () => {
    return (
        <h1 className="hello__text">
            <svg width="99" height="75" viewBox="0 0 101 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.5 0H0V35H8V7.7H18.5V35H26.5V0Z" fill="black"/>
                <path
                    d="M44.25 0H31V35H39V24H44.25C51.15 24 56.5 18.65 56.5 12C56.5 5.35 51.15 0 44.25 0ZM44.25 16.5H39V7.5H44.25C46.7 7.5 48.5 9.45 48.5 12C48.5 14.55 46.7 16.5 44.25 16.5Z"
                    fill="black"/>
                <path d="M79.5 35H87.5V0H81.5L68 19V0H60V35H66L79.5 16V35Z" fill="black"/>
                <path
                    d="M21.7 56.85C23.6 55.2 24.75 52.9 24.75 50C24.75 43.95 19.8 40 13.7 40H0V75H14.7C20.95 75 26 70.95 26 64.75C26 61.2 24.3 58.5 21.7 56.85ZM13.7 47.5C15.55 47.5 16.75 48.8 16.75 50.6C16.75 52.4 15.5 53.7 13.7 53.7H8V47.5H13.7ZM14.7 67.5H8V60.8H14.7C16.7 60.8 18 62.2 18 64.15C18 66.1 16.7 67.5 14.7 67.5Z"
                    fill="black"/>
                <path d="M39 67.3V61.1H51.5V53.5H39V47.7H52.75V40H31V75H53V67.3H39Z" fill="black"/>
                <path d="M84 40H58V47.7H67V75H75V47.7H84V40Z" fill="black"/>
                <path className="dot"
                    d="M95 75C98.2842 75 101 72.2842 101 69C101 65.7158 98.2842 63 95 63C91.7158 63 89 65.7158 89 69C89 72.2842 91.7158 75 95 75Z"
                    fill="#1E7FC6"/>
            </svg>
        </h1>
    )
}

export default withTranslation()(withWindowDimensions(HelloSection))