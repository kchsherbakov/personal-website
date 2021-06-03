import React, {Component} from "react";
import {Parallax} from "react-scroll-parallax";

class AboutSection extends Component {
    render() {
        return (
            <section id="about-section" className="about">
                <div className="about__padding __padding">
                    <div className="about__heading">
                        <h2 className="about__title __title-font">About</h2>
                    </div>
                    <div id="about-section-bio" className="about__bio">
                        <h2 className="about__pre-phrase __title-font">
                            Technology <i className="__accent-font">enthusiast</i>
                            <br/>
                            and coffee <i className="__accent-font">lover</i>.
                        </h2>
                        <p className="about__text">
                            Hello! I am Konstantin, a Software Engineer with over two years of experience in Frontend,
                            Backend, Desktop and
                            Mobile development. Actively developing skills in the System Architecture to be able to
                            design complex, highly loaded, scalable, failsafe systems.
                        </p>
                        <p className="about__text">
                            Professional, creative, flexible. Possessing a good team spirit, deadline oriented and
                            having the ability to organize and present complex solutions clearly and accurately.
                        </p>
                    </div>
                    <Parallax y={[20, -100]}>
                        <div className="about__skills about__skills-padding skills">
                            <div className="skills__pre-phrase __title-font">
                                <h2>
                                    Things I
                                    <br/>
                                    know how to do,
                                    <br/>
                                    <i className="__accent-font">well</i>.
                                </h2>
                            </div>
                            <div className="skills__container row">
                                <div className="skills__frontend col-12 col-sm-6">
                                    <h3 className="skills__title skills__title_color_white skills__title_size_m __title-font">
                                        Front end
                                    </h3>
                                    <p className="skills__text">
                                        HTML
                                        <br/>
                                        CSS
                                        <br/>
                                        JS
                                    </p>
                                </div>
                                <div className="skills__backend col-12 col-sm-6">
                                    <h3 className="skills__title skills__title_color_white skills__title_size_m __title-font">
                                        Back end
                                    </h3>
                                    <p className="skills__text">
                                        C#
                                        <br/>
                                        Go
                                        <br/>
                                        Php
                                    </p>
                                </div>
                                <div className="skills__mobile col-12 col-sm-6">
                                    <h3 className="skills__title skills__title_color_white skills__title_size_m __title-font">
                                        Mobile
                                    </h3>
                                    <p className="skills__text">
                                        React Native
                                        <br/>
                                        iOS (Swift)
                                        <br/>
                                        Android (Java)
                                    </p>
                                </div>
                                <div className="skills__desktop col-12 col-sm-6">
                                    <h3 className="skills__title skills__title_color_white skills__title_size_m __title-font">
                                        Desktop
                                    </h3>
                                    <p className="skills__text">
                                        WPF
                                        <br/>
                                        UWP
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </div>
            </section>
        )
    }
}

export {AboutSection}