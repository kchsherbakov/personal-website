import React, {Component} from "react";

class Contacts extends Component {
    render() {
        return (
            <section id="contacts-section" className="contacts d-flex flex-column justify-content-center">
                <div className="contacts__padding __padding">
                    <div className="contacts__heading">
                        <h2 className="contacts__title __title-font">Contacts</h2>
                    </div>
                    <div className="contacts__content">
                        <h1 className="contacts__hello-text __title-font">Get In Touch</h1>
                        <p className="contacts__text">
                            Although I'm not currently looking for freelance opportunities, my inbox is always open.
                            Whether
                            for a potential project or just to say hi, I'll try my best to answer your email!
                        </p>
                        <a className="contacts__say-hello-button" href="mailto:k.chsherbakov@outlook.com">
                            Say Hello
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export {Contacts}