import React, {Component} from "react";
import {ParallaxBanner} from "react-scroll-parallax";
import HelloSection from "./HelloSection";
import AboutSection from "./AboutSection";
import Contacts from "./ContactsSection";
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
        <ParallaxBanner layers={[
            {
                image: '/img/landscape-mountains.jpg',
                amount: 0.3,
            }
        ]}
        />
    )
}

export {Content}