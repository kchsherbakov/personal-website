import React, {Component, Fragment} from "react";
import styled from "styled-components";
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import {
    dateToMonthAndYearOnly,
    getDatesDifferencesVerbose
} from "../../helpers/dateUtils";
import * as ReactDOM from "react-dom";
import {Parallax} from "react-scroll-parallax";

const experienceTypes = {
    position: "position",
    education: "education",
    milestone: "milestone",
}

class ExperienceSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timelineData: [],
            timelineComponents: [],
        }
    }

    async componentDidMount() {
        await this.loadExperience()
    }

    async loadExperience() {
        try {
            const response = await axios.get(`http://localhost:1338/experiences?_locale=${this.props.lang}`);
            const data = response.data.sort(function (d1, d2) {
                return new Date(d2['starDate']) - new Date(d1['startDate']);
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

            this.setState({
                timelineData: data,
                timelineComponents: components,
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        const {t} = this.props;

        return (
            <section id="experience-section" className="experience">
                <div className="experience__padding __padding">
                    <div className="experience__heading">
                        <h2 className="experience__title __title-font">Experience</h2>
                    </div>
                    <div id="experience__container" className="experience__container d-xl-flex flex-xl-row">
                        <Parallax className="experience__bg-scroll-container d-xl-flex flex-xl-column" y={[-20, 120]}>
                            <h2 id="experience-pre-phrase" className="experience__pre-phrase __title-font">
                                Developer who focuses
                                <br/>
                                on writing <i className="__accent-font">clean</i> and <i
                                className="__accent-font">efficient</i>
                                <br/>
                                code.
                            </h2>
                            <Parallax className="experience__bg-scroll d-xl-flex justify-content-center" x={['-100px','100px']} y={['100px', '-100px']}>
                                <p className="__title-font">XP</p>
                            </Parallax>
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
                                             src="/img/timeline-education-icon.svg" alt="Education"/>
                                        <p className="timeline-item__legend-text">
                                            {t('experience.education')}
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src="/img/timeline-position-icon.svg" alt="Position"/>
                                        <p className="timeline-item__legend-text">
                                            {t('experience.position')}
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src="/img/timeline-opensource-icon.svg" alt="Open source"/>
                                        <p className="timeline-item__legend-text">
                                            {t('experience.open_source')}
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src="/img/timeline-app-or-feature-icon.svg" alt="App or Feature"/>
                                        <p className="timeline-item__legend-text">
                                            {t('experience.app_or_feature')}
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src="/img/timeline-milestone-icon.svg" alt="Open source"/>
                                        <p className="timeline-item__legend-text">
                                            {t('experience.milestone')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {
                                this.state.timelineComponents.map((component, index) => (
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
    let url = '/img/image-placeholder.svg'; // placeholder
    if (logo) {
        url = `http://localhost:1338${logo.url}`
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
                       className={`timeline-item__description timeline-item__description_size_full ${this.state.showFull ? '' : '__hidden'}`}>
                        {this.props.description}
                    </p>
                    <p className={`timeline-item__description timeline-item__description_size_truncated ${!this.state.showFull ? '' : '__hidden'}`}>
                        {this.props.description}
                    </p>
                </div>
                <label htmlFor={this.state.id} className="timeline-item__expander-label"
                       style={labelStyles} data-less="Less" data-more="Read more"/>
            </Fragment>
        )
    }
}

const Position = ({data, props}) => {
    return (
        <div className="timeline__item timeline__item_type_position timeline-item">
            <div className="timeline-item__header">
                <span className="timeline-item__type-name">{props.t('experience.position')}</span>
                <span className="timeline-item__date">
                    {dateToMonthAndYearOnly(data.startDate, props.lang)}
                    <RightArrow/>
                    {!data.endDate ? 'present' : dateToMonthAndYearOnly(data.endDate, props.lang)}
                </span>
                <span className="timeline-item__date-diff">
                    ({getDatesDifferencesVerbose(data.startDate, data.endDate, props.t)})
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
                    <CollapsibleDescription description={data.description}/>
                </div>
            </div>
        </div>
    )
}

const Education = ({data, props}) => {
    return (
        <div className="timeline__item timeline__item_type_education timeline-item">
            <div className="timeline-item__header">
                <span className="timeline-item__type-name">{props.t('experience.education')}</span>
                <span className="timeline-item__date">
                    {dateToMonthAndYearOnly(data.startDate, props.lang)}
                    <RightArrow/>
                    {!data.endDate ? 'present' : dateToMonthAndYearOnly(data.endDate, props.lang)}
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
                    <CollapsibleDescription description={data.description}/>
                </div>
            </div>
        </div>
    )
}

const Milestone = ({data, props}) => {
    return (
        <div className="timeline__item timeline__item_type_milestone timeline-item">
            <div className="timeline-item__header">
                <span className="timeline-item__type-name">{props.t('experience.milestone')}</span>
                <span className="timeline-item__date">{dateToMonthAndYearOnly(data.startDate, props.lang)}</span>
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
                    <CollapsibleDescription description={data.description}/>
                </div>
            </div>
        </div>
    )
}

export {ExperienceSection}