import React, {Component} from "react";
import styled from "styled-components";
import axios from 'axios';
import {
    dateToMonthAndYearOnly,
    getDatesDifferencesVerbose
} from "../../helpers/dateUtils";

const experienceTypes = {
    position: "position",
    education: "education",
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
            const data = response.data;

            let components = [];
            data.forEach(d => {
                switch (d.type) {
                    case experienceTypes.position:
                        components.push(<Position data={d} props={this.props}/>)
                        break;
                    case experienceTypes.education:
                        components.push(<Education data={d}/>)
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
        return (
            <section id="experience-section" className="experience">
                <div className="experience__padding __padding">
                    <div className="experience__heading">
                        <h2 className="experience__title __title-font">Experience</h2>
                    </div>
                    <div id="experience__container" className="experience__container d-xl-flex flex-xl-row">
                        <div className="experience__bg-scroll-container d-xl-flex flex-xl-column">
                            <h2 id="experience-pre-phrase" className="experience__pre-phrase __title-font">
                                Developer who focuses
                                <br/>
                                on writing <i className="__accent-font">clean</i> and <i
                                className="__accent-font">efficient</i>
                                <br/>
                                code.
                            </h2>
                            <div id="experience-bg-scroll"
                                 className="experience__bg-scroll d-xl-flex justify-content-center">
                                <p id="bg-scroll-text" className="__title-font">XP</p>
                            </div>
                        </div>
                        <div id="timeline-feed" className="experience__timeline-feed timeline">
                            <div className="timeline__line"/>
                            <div className="timeline__item timeline__item_type_legend timeline-item">
                                <div className="timeline-item__header">
                                    Legend
                                </div>
                                <div className="timeline-item__content row">
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src="/img/timeline-education-icon.svg" alt="Education"/>
                                        <p className="timeline-item__legend-text">
                                            Education
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src="/img/timeline-position-icon.svg" alt="Position"/>
                                        <p className="timeline-item__legend-text">
                                            Position
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src="/img/timeline-opensource-icon.svg" alt="Open source"/>
                                        <p className="timeline-item__legend-text">
                                            Open source
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src="/img/timeline-app-or-feature-icon.svg" alt="App or Feature"/>
                                        <p className="timeline-item__legend-text">
                                            App or Feature
                                        </p>
                                    </div>
                                    <div className="timeline-item__legend-icon col-4">
                                        <img className="timeline-item__legend-icon-image"
                                             src="/img/timeline-milestone-icon.svg" alt="Open source"/>
                                        <p className="timeline-item__legend-text">
                                            Milestone
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
                tags.map(tag => {
                    return <span className="timeline-item__tag">{tag}</span>
                })
            }
        </div>
    )
}

const Position = ({data, props}) => {
    return (
        <div className="timeline__item timeline__item_type_position timeline-item">
            <div className="timeline-item__header">
                <span className="timeline-item__type-name">{data.type}</span>
                <span className="timeline-item__date">
                    {dateToMonthAndYearOnly(data.startDate, props.lang)}
                    <RightArrow/>
                    {!data.endDate ? 'present' : dateToMonthAndYearOnly(data.endDate, props.lang)}</span>
                <span
                    className="timeline-item__date-diff"> ({getDatesDifferencesVerbose(data.startDate, data.endDate, props.t)})</span>
            </div>
            <div className="timeline-item__content row">
                <div className="timeline-item__logo col-3">
                    <img src="/img/image-placeholder.svg" alt="{{org_logo_alt_name}}"/>
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
                    <input className="timeline-item__expander" type="checkbox"/>
                    <div className="timeline-item__paragraph">
                        <p className="timeline-item__description timeline-item__description_size_full">
                            {data.description}
                        </p>
                        <p className=" timeline-item__description timeline-item__description_size_truncated">
                            {data.description}
                        </p>
                    </div>
                    <label className="timeline-item__expander-label"
                           data-less="Less" data-more="Read more"/>
                </div>
            </div>
        </div>
    )
}

const Education = ({data}) => {
    return (
        <div className="timeline__item timeline__item_type_education timeline-item">
            <div className="timeline-item__header">
                <span className="timeline-item__type-name">{data.type}</span>
                <span className="timeline-item__date">{data.startDate} {data.endDate}</span>
            </div>
            <div className="timeline-item__content row">
                <div className="timeline-item__logo col-12">
                    <img src="/img/image-placeholder.svg" alt={data.title}/>
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
                    <div className="timeline-item__tags-container"/>
                    <input className="timeline-item__expander" type="checkbox"/>
                    <div className="timeline-item__paragraph">
                        <p className="timeline-item__description timeline-item__description_size_full">
                            {data.description}
                        </p>
                        <p className=" timeline-item__description timeline-item__description_size_truncated">
                            {data.description}
                        </p>
                    </div>
                    <label className="timeline-item__expander-label" data-less="Less" data-more="Read more"/>
                </div>
            </div>
        </div>
    )
}

const Milestone = ({data}) => {
    return (
        <div className="timeline__item timeline__item_type_milestone timeline-item">
            <div className="timeline-item__header">
                <span className="timeline-item__type-name">{data.type}</span>
                <span className="timeline-item__date">{data.startDate}</span>
            </div>
            <div className="timeline-item__content row">
                <div className="timeline-item__logo col-12">
                    <img src="/img/image-placeholder.svg" alt={data.title}/>
                </div>
                <div className="timeline-item__text col-12">
                    <div className="timeline-item__title">
                        <span>{data.title},
                            <a className="timeline-item__text_type_link" href={data.orgLink}>
                                {data.orgName}
                            </a>
                        </span>
                    </div>
                    <div className="timeline-item__tags-container"/>
                    <input className="timeline-item__expander" type="checkbox"/>
                    <div className="timeline-item__paragraph">
                        <p className="timeline-item__description timeline-item__description_size_full">
                            {data.description}
                        </p>
                        <p className=" timeline-item__description timeline-item__description_size_truncated">
                            {data.description}
                        </p>
                    </div>
                    <label className="timeline-item__expander-label" data-less="Less"
                           data-more="Read more"/>
                </div>
            </div>
        </div>
    )
}

export {ExperienceSection}