import React, {Component} from "react";
import {HelloSection} from "./HelloSection";

class Content extends Component {
    render() {
        return (
            <div className="content">
                <div className="content__container">
                    <HelloSection {...this.props}/>
                </div>
            </div>
        )
    }
}

export {Content}