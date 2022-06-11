import React, {Component, Fragment} from "react";
import styled from "styled-components";
import {withTranslation} from "react-i18next";
import {v4 as uuidv4} from 'uuid';
import {
    dateToMonthAndYearOnly,
    getDatesDifferencesVerbose
} from "../../helpers/dateUtils";
import {Parallax} from "react-scroll-parallax";
import {StrapiContext} from "../Providers/StrapiProvider";

const experienceTypes = {
    position: "position",
    education: "education",
    milestone: "milestone",
}

class ExperienceSection extends Component {
    static contextType = StrapiContext;

    mapExperienceToComponents(appdata, isLoading, errorLoading) {
        if (isLoading || errorLoading !== null)
            return [];

        const data = appdata.experiences.sort(function (d1, d2) {
            return new Date(d2['startDate']) - new Date(d1['startDate']);
        });

        let components = [];
        data.forEach(d => {
            switch (d.type) {
                case experienceTypes.position:
                    components.push(<Position data={d} props={this.props}/>);
                    break;
                case experienceTypes.education:
                    components.push(<Education data={d} props={this.props}/>);
                    break;
                case experienceTypes.milestone:
                    components.push(<Milestone data={d} props={this.props}/>);
                    break;
                default:
                    // Ignore
                    break;
            }
        })

        return components;
    }

    render() {
        const {t} = this.props;
        const {appdata, isLoading, errorLoading} = this.context;
        const timelineComponents = this.mapExperienceToComponents(appdata, isLoading, errorLoading)

        return (
            <section id="experience-section" className="experience">
                <div className="experience__padding __padding">
                    <div className="experience__heading">
                        <h2 className="experience__title __title-font">{t('experience.title')}</h2>
                    </div>
                    <div id="experience__container" className="experience__container d-xl-flex flex-xl-row">
                        <Parallax className="experience__bg-scroll-container d-xl-flex flex-xl-column" translateY={[0, 60]} speed={1}>
                            <h2 className="experience__pre-phrase __title-font"
                                dangerouslySetInnerHTML={{__html: t('experience.who_am_i_2')}}/>
                            <div className="experience__bg-scroll d-xl-flex justify-content-center">
                                <Parallax translateX={['-100px', '100px']} translateY={['100px', '-100px']}>
                                    <p className="__title-font">XP</p>
                                </Parallax>
                            </div>
                        </Parallax>
                        <div id="timeline-feed" className="experience__timeline-feed timeline">
                            <div className="timeline__line"/>
                            <div className="timeline__item timeline__item_type_legend timeline-item">
                                <div className="timeline-item__header">
                                    {t('experience.legend')}
                                </div>
                                <div className="timeline-item__content row">
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src={process.env.PUBLIC_URL + "/img/timeline-education-icon.svg"} alt="Education"/>
                                        <p className="timeline-item__legend-text">
                                            {t('experience.education')}
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src={process.env.PUBLIC_URL + "/img/timeline-position-icon.svg"} alt="Position"/>
                                        <p className="timeline-item__legend-text">
                                            {t('experience.position')}
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src={process.env.PUBLIC_URL + "/img/timeline-opensource-icon.svg"} alt="Open source"/>
                                        <p className="timeline-item__legend-text">
                                            {t('experience.open_source')}
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src={process.env.PUBLIC_URL + "/img/timeline-app-or-feature-icon.svg"} alt="App or Feature"/>
                                        <p className="timeline-item__legend-text">
                                            {t('experience.app_or_feature')}
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src={process.env.PUBLIC_URL + "/img/timeline-milestone-icon.svg"} alt="Open source"/>
                                        <p className="timeline-item__legend-text">
                                            {t('experience.milestone')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {
                                timelineComponents.map((component, index) => (
                                    <React.Fragment key={index}>
                                        {component}
                                    </React.Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const RightArrow = styled.span`
  padding-left: 5px;
  padding-right: 5px;

  &::before {
    content: '→';
  }
`;

const TagsContainer = ({tags}) => {
    return (
        <div className="timeline-item__tags-container">
            {
                tags.map((tag, index) => {
                    return <span className="timeline-item__tag" key={index}>{tag}</span>
                })
            }
        </div>
    )
}

const StrapiImage = ({logo, alt}) => {
    let url = process.env.PUBLIC_URL + '/img/image-placeholder.svg'; // placeholder
    if (logo) {
        url = `${process.env.REACT_APP_STRAPI_HOST}${logo.data.attributes.url}`
    }

    return (
        <img src={url} alt={alt}/>
    )
}


class CollapsibleDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: uuidv4(),
            showFull: true,
        }
    }

    componentDidMount() {
        const maxParagraphHeight = 108;
        const fullHeight = this.descriptionFull.clientHeight;
        if (fullHeight > maxParagraphHeight) {
            this.setState({
                showFull: false,
            })
        }
    }

    render() {
        const dataLessText = this.props.t('experience.data_less');
        const dataMoreText = this.props.t('experience.data_more');
        const labelStyles = {
            display: this.state.showFull ? "none" : "block",
        }

        return (
            <Fragment>
                <input id={this.state.id} className="timeline-item__expander" type="checkbox"/>
                <div className="timeline-item__paragraph">
                    <p ref={(descriptionFull) => {
                        this.descriptionFull = descriptionFull
                    }}
                       className={`timeline-item__description timeline-item__description_size_full ${this.state.showFull ? '' : '__hidden'}`}
                       dangerouslySetInnerHTML={{__html: this.props.description}}/>
                    <p className={`timeline-item__description timeline-item__description_size_truncated ${!this.state.showFull ? '' : '__hidden'}`}
                       dangerouslySetInnerHTML={{__html: this.props.description}}/>
                </div>
                <label htmlFor={this.state.id}
                       className="timeline-item__expander-label"
                       style={labelStyles}
                       data-less={dataLessText}
                       data-more={dataMoreText}/>
            </Fragment>
        )
    }
}

const Position = ({data, props}) => {
    const lang = props.i18n.languages[0];

    return (
        <div className="timeline__item timeline__item_type_position timeline-item">
            <div className="timeline-item__header">
                <span className="timeline-item__type-name">{props.t('experience.position')}</span>
                <span className="timeline-item__date">
                    {dateToMonthAndYearOnly(data.startDate, lang)}
                    <RightArrow/>
                    {!data.endDate ? props.t('experience.present') : dateToMonthAndYearOnly(data.endDate, lang)}
                </span>
                <span className="timeline-item__date-diff">
                    {getDatesDifferencesVerbose(data.startDate, data.endDate, props.t)}
                </span>
            </div>
            <div className="timeline-item__content row">
                <div className="timeline-item__logo col-3">
                    <StrapiImage logo={data.orgLogo} alt={data.orgName}/>
                </div>
                <div className="timeline-item__text col-9">
                    <div className="timeline-item__title">
                        <span>
                            {data.title},
                            <a className="timeline-item__text_type_link" href={data.orgLink}>
                                {data.orgName}
                            </a>
                        </span>
                    </div>
                    <TagsContainer tags={data.tags}/>
                    <CollapsibleDescription t={props.t} description={data.description}/>
                </div>
            </div>
        </div>
    )
}

const Education = ({data, props}) => {
    const lang = props.i18n.languages[0];

    return (
        <div className="timeline__item timeline__item_type_education timeline-item">
            <div className="timeline-item__header">
                <span className="timeline-item__type-name">{props.t('experience.education')}</span>
                <span className="timeline-item__date">
                    {dateToMonthAndYearOnly(data.startDate, lang)}
                    <RightArrow/>
                    {!data.endDate ? props.t('experience.present') : dateToMonthAndYearOnly(data.endDate, lang)}
                </span>
            </div>
            <div className="timeline-item__content row">
                <div className="timeline-item__logo col-12">
                    <StrapiImage logo={data.orgLogo} alt={data.orgName}/>
                </div>
                <div className="timeline-item__text col-12">
                    <div className="timeline-item__title">
                        <span>
                            {data.title},
                            <a className="timeline-item__text_type_link" href={data.orgLink}>
                                {data.orgName}
                            </a>
                        </span>
                    </div>
                    <TagsContainer tags={data.tags}/>
                    <CollapsibleDescription t={props.t} description={data.description}/>
                </div>
            </div>
        </div>
    )
}

const Milestone = ({data, props}) => {
    const lang = props.i18n.languages[0];

    return (
        <div className="timeline__item timeline__item_type_milestone timeline-item">
            <div className="timeline-item__header">
                <span className="timeline-item__type-name">{props.t('experience.milestone')}</span>
                <span
                    className="timeline-item__date">{dateToMonthAndYearOnly(data.startDate, lang)}</span>
            </div>
            <div className="timeline-item__content row">
                <div className="timeline-item__logo col-12">
                    <StrapiImage logo={data.orgLogo} alt={data.orgName}/>
                </div>
                <div className="timeline-item__text col-12">
                    <div className="timeline-item__title">
                        <span>{data.title},
                            <a className="timeline-item__text_type_link" href={data.orgLink}>
                                {data.orgName}
                            </a>
                        </span>
                    </div>
                    <TagsContainer tags={data.tags}/>
                    <CollapsibleDescription t={props.t} description={data.description}/>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(ExperienceSection)