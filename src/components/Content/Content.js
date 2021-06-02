import React, {Component} from "react";
import {HelloSection} from "./HelloSection";
import {Parallax} from "react-scroll-parallax";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="content__container">
                    <HelloSection {...this.props}/>
                    <ParallaxImage/>
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