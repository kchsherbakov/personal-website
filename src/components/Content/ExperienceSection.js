import React, {Component} from "react";

class ExperienceSection extends Component {
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
                            <!-- region Timeline card templates -->
                            <!-- region Tag template -->
                            <template id="card-tag-template">
                                <span className="timeline-item__tag"/>
                            </template>
                            <!-- endregion Tag template -->
                            <!-- region Position card -->
                            <template id="position-card-template">
                                <div className="timeline__item timeline__item_type_position timeline-item">
                                    <div className="timeline-item__header">
                                        <span className="timeline-item__type-name">{{type}}</span>
                                        <span className="timeline-item__date">{{start_date}} → {{end_date}}</span>
                                        <span className="timeline-item__date-diff">({{date_diff}})</span>
                                    </div>
                                    <div className="timeline-item__content row">
                                        <div className="timeline-item__logo col-3">
                                            <img src="/img/image-placeholder.svg" alt="{{org_logo_alt_name}}"/>
                                        </div>
                                        <div className="timeline-item__text col-9">
                                            <div className="timeline-item__title">
                                        <span>
                                            {{title}}
                                            <a className="timeline-item__text_type_link" href="{{org_link}}">
                                                {{org_name}}
                                            </a>
                                        </span>
                                            </div>
                                            <div className="timeline-item__tags-container"/>
                                            <input className="timeline-item__expander" type="checkbox"/>
                                            <div className="timeline-item__paragraph">
                                                <p className="timeline-item__description timeline-item__description_size_full">
                                                    {{description}}
                                                </p>
                                                <p className=" timeline-item__description timeline-item__description_size_truncated">
                                                    {{description}}
                                                </p>
                                            </div>
                                            <label className="timeline-item__expander-label"
                                                   data-less="Less" data-more="Read more"/>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <!-- endregion Position card -->
                            <!-- region Education card -->
                            <template id="education-card-template">
                                <div className="timeline__item timeline__item_type_education timeline-item">
                                    <div className="timeline-item__header">
                                        <span className="timeline-item__type-name">{{type}}</span>
                                        <span className="timeline-item__date">{{start_date}} → {{end_date}}</span>
                                    </div>
                                    <div className="timeline-item__content row">
                                        <div className="timeline-item__logo col-12">
                                            <img src="/img/image-placeholder.svg" alt="{{org_logo_alt_name}}"/>
                                        </div>
                                        <div className="timeline-item__text col-12">
                                            <div className="timeline-item__title">
                                        <span>{{title}},
                                            <a className="timeline-item__text_type_link" href="{{org_link}}">
                                                {{org_name}}
                                            </a>
                                        </span>
                                            </div>
                                            <div className="timeline-item__tags-container"></div>
                                            <input className="timeline-item__expander" type="checkbox"/>
                                            <div className="timeline-item__paragraph">
                                                <p className="timeline-item__description timeline-item__description_size_full">
                                                    {{description}}
                                                </p>
                                                <p className=" timeline-item__description timeline-item__description_size_truncated">
                                                    {{description}}
                                                </p>
                                            </div>
                                            <label className="timeline-item__expander-label"
                                                   data-less="Less" data-more="Read more"/>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <!-- endregion Education card -->
                            <!-- region Milestone card-->
                            <template id="milestone-card-template">
                                <div className="timeline__item timeline__item_type_milestone timeline-item">
                                    <div className="timeline-item__header">
                                        <span className="timeline-item__type-name">{{type}}</span>
                                        <span className="timeline-item__date">{{start_date}}</span>
                                    </div>
                                    <div className="timeline-item__content row">
                                        <div className="timeline-item__logo col-12">
                                            <img src="/img/image-placeholder.svg" alt="{{org_logo_alt_name}}"/>
                                        </div>
                                        <div className="timeline-item__text col-12">
                                            <div className="timeline-item__title">
                                        <span>{{title}},
                                            <a className="timeline-item__text_type_link" href="{{org_link}}">
                                                {{org_name}}
                                            </a>
                                        </span>
                                            </div>
                                            <div className="timeline-item__tags-container"/>
                                            <input className="timeline-item__expander" type="checkbox"/>
                                            <div className="timeline-item__paragraph">
                                                <p className="timeline-item__description timeline-item__description_size_full">
                                                    {{description}}
                                                </p>
                                                <p className=" timeline-item__description timeline-item__description_size_truncated">
                                                    {{description}}
                                                </p>
                                            </div>
                                            <label className="timeline-item__expander-label" data-less="Less"
                                                   data-more="Read more"/>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <!-- endregion Milestone card -->
                            <!-- endregion Timeline card templates -->
                            <div className="timeline__line"></div>
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
                            <!-- Dynamic content inserted here -->
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export {ExperienceSection}