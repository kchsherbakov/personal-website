import React, {Component, useContext} from "react";
import {StrapiContext} from "../Providers/StrapiProvider";
import {withTranslation} from "react-i18next";
import {Parallax} from "react-scroll-parallax";
import {withWindowDimensions} from "../../helpers/dimensions";
import {vars} from "../../vars";

class AboutSection extends Component {
    static contextType = StrapiContext;

    render() {
        const {t} = this.props;
        const {appdata, isLoading, errorLoading} = this.context;
        const parallaxDisabled = this.props.windowWidth < vars.mediaQueries.minWidth.l;

        return (
            <section id="about-section" className="about">
                <div className="about__padding __padding">
                    <div className="about__heading">
                        <h2 className="about__title __title-font">{t('about.title')}</h2>
                    </div>
                    <div className="about__bio">
                        <h2 className="about__pre-phrase __title-font"
                            dangerouslySetInnerHTML={{__html: t('about.who_am_i_1')}}/>
                        <p className="about__text"
                           dangerouslySetInnerHTML={{__html: appdata.aboutMeFull}}/>
                    </div>
                    <Parallax y={[20, -80]} disabled={parallaxDisabled}>
                        <div className="about__skills about__skills-padding skills">
                            <div className="skills__pre-phrase __title-font">
                                <h2 dangerouslySetInnerHTML={{__html: t('about.things_i_know')}}/>
                            </div>
                            <div className="skills__container row">
                                {
                                    isLoading || errorLoading !== null
                                        ? 'Data loading...'
                                        : (appdata.aboutTech.map((t, i) => {
                                            return (
                                                <SkillsCategory key={i} title={t.title} values={t.values}/>
                                            )
                                        }))
                                }
                            </div>
                        </div>
                    </Parallax>
                </div>
            </section>
        )
    }
}

const SkillsCategory = ({title, values}) => {
    return (
        <div className="skills__frontend col-12 col-sm-6">
            <h3 className="skills__title skills__title_color_white skills__title_size_m __title-font">
                {title}
            </h3>
            {
                values.map((v, i) => {
                    return (
                        <span key={i} className="skills__text">
                            {v}
                        </span>
                    )
                })
            }
        </div>
    )
}

export default withTranslation()(withWindowDimensions(AboutSection));