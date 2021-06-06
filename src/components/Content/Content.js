import React, {Component} from "react";
import HelloSection from "./HelloSection";
import {Parallax} from "react-scroll-parallax";
import AboutSection from "./AboutSection";
import {Contacts} from "./ContactsSection";
import ExperienceSection from "./ExperienceSection";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="content__container">
                    <HelloSection showHello={this.props.showHello}
                                  hideHello={this.props.hideHello}/>
                    <ParallaxImage/>
                    <AboutSection/>
                    <ExperienceSection {...this.props}/>
                    <Contacts/>
                </div>
            </div>
        )
    }
}

const ParallaxImage = () => {
    return (
        <Parallax className="image-section-parallax" y={[-20, 20]} disabled={true}>
            <div className="image-section-parallax__bgimage"/>
        </Parallax>
    )
}

export {Content}