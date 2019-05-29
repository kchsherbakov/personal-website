const IMAGE_PATH_PREFIX = './img/';
const ENUM_DATE_TYPE_YEAR = 0;
const ENUM_DATE_TYPE_MONTH = 1;
const ENUM_DATE_TYPE_MONTH_AND_YEAR = 2;

const ENUM_CARD_TYPE_POSITION = 'position';
const ENUM_CARD_TYPE_EDUCATION = 'education';
const ENUM_CARD_TYPE_MILESTONE = 'milestone';

const VIEWPORT_WIDTH_MEDIUM = 768;
const VIEW_PORT_WIDTH_LARGE = 992;


// Run user agent check to interrupt experience on unsupported browsers
let checkClientsUserAgent;
(checkClientsUserAgent = function () {
    if (getClientBrowserInfo().name === 'Internet Explorer') {
        let popup = document.getElementsByClassName('popup')[0];
        popup.classList.toggle('__hidden');
        popup.style.cssText = 'transform: translate(0,0);';
    }
})();


// Fire loadTimelineContent function (cross-browser fix)
window.addEventListener('load', loadTimelineContent, false);

document.getElementById('menu-toggle').addEventListener('click', function () {
    let page = document.getElementsByClassName('page-home')[0];
    page.classList.toggle('menu_open');
});

document.getElementsByClassName('menu__nav')[0].addEventListener('click', function () {
    let page = document.getElementsByClassName('page-home')[0];
    page.classList.remove('menu_open');
});

let anchors = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', function (e) {
        e.preventDefault();

        let topBorderHeight = document.getElementsByClassName('borders__top')[0];
        let scrollTopVal = window.scrollY + document.querySelector(this.getAttribute('href'))
            .getBoundingClientRect().top - topBorderHeight.getBoundingClientRect().height;
        window.scrollTo({
            top: scrollTopVal,
            left: 0,
            behavior: 'smooth'
        });
    });
}

let lastScrollYVal = 0;
let introSectionTransformVal = 0;
let aboutSectionTransformVal = 0;
let experienceSectionTransformVal = 0;
window.addEventListener('scroll', function () {
    let page = document.getElementsByClassName('page-home')[0];
    let helloSectionScrollIcon = document.getElementById('hello-section-scroll-icon');

    let viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    let currentScrollYVal = window.scrollY;
    let scrollYDelta = currentScrollYVal - lastScrollYVal;
    let scrollStep = 40;
    lastScrollYVal = currentScrollYVal;

    // region Hello section

    if (window.scrollY > 50) {
        page.classList.add('hello_visible');
        helloSectionScrollIcon.classList.add('hello__scroll-text_hidden');
    } else {
        page.classList.remove('hello_visible');
        helloSectionScrollIcon.classList.remove('hello__scroll-text_hidden');
    }

    // endregion

    // region Intro section scroll event

    // Tablets and desktops only
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= VIEWPORT_WIDTH_MEDIUM) {
        if (scrollYDelta > 0) {
            if (currentScrollYVal > viewportHeight) {
                if (introSectionTransformVal - scrollYDelta <= -viewportHeight
                    || introSectionTransformVal - scrollStep <= -viewportHeight)
                    introSectionTransformVal = -viewportHeight;
            } else {
                introSectionTransformVal -= scrollYDelta;
            }
        } else {
            if (currentScrollYVal > viewportHeight) {
                if (introSectionTransformVal + -scrollYDelta >= 0
                    || introSectionTransformVal - scrollStep >= 0)
                    introSectionTransformVal = 0;
            } else {
                introSectionTransformVal += -scrollYDelta;
            }
        }

        document.getElementById('scroller').style.cssText =
            '-webkit-transform: matrix(1, 0, 0, 1, 0,' + introSectionTransformVal + ');' +
            '-moz-transform: matrix(1, 0, 0, 1, 0,' + introSectionTransformVal + ');' +
            '-ms-transform: matrix(1, 0, 0, 1, 0,' + introSectionTransformVal + ');' +
            '-o-transform: matrix(1, 0, 0, 1, 0,' + introSectionTransformVal + ');' +
            'transform: matrix(1, 0, 0, 1, 0,' + introSectionTransformVal + ');';


        // Hide intro sections, otherwise 'hello' and 'greetings'
        // sections will overlay other content
        let helloSection = document.getElementById('hello-section');
        let greetingsSection = document.getElementById('greetings-section');
        if (currentScrollYVal > 2 * viewportHeight) {
            helloSection.classList.add('__hidden');
            greetingsSection.style.setProperty('display', 'none', 'important');
        } else {
            helloSection.classList.remove('__hidden');
            greetingsSection.style.setProperty('display', 'flex', 'important');
        }
    }

    // endregion Intro section scroll event

    // region About scroll event

    // Tablets and desktops only
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= VIEW_PORT_WIDTH_LARGE) {
        let aboutSectionOffsetTop = getElementOffsetTop('about-section') - 250;
        let aboutSectionHeight = document.getElementById('about-section').getBoundingClientRect().height;

        if (scrollYDelta > 0) {
            if (currentScrollYVal > aboutSectionOffsetTop
                && currentScrollYVal < (aboutSectionOffsetTop + aboutSectionHeight)) {
                aboutSectionTransformVal -= scrollYDelta;
            }
        } else {
            if (aboutSectionTransformVal < 0)
                aboutSectionTransformVal += -scrollYDelta;
            else
                aboutSectionTransformVal = 0;
        }

        document.getElementById('skills-container').style.cssText =
            '-webkit-transform: matrix(1, 0, 0, 1, 0,' + aboutSectionTransformVal / 2 + ');' +
            '-moz-transform: matrix(1, 0, 0, 1, 0,' + aboutSectionTransformVal / 2 + ');' +
            '-ms-transform: matrix(1, 0, 0, 1, 0,' + aboutSectionTransformVal / 2 + ');' +
            '-o-transform: matrix(1, 0, 0, 1, 0,' + aboutSectionTransformVal / 2 + ');' +
            'transform: matrix(1, 0, 0, 1, 0,' + aboutSectionTransformVal / 2 + ');';

    }

    // endregion About scroll event

    // region Experience section scroll event

    // Tablets and desktops only
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= VIEW_PORT_WIDTH_LARGE) {
        let experienceContainerOffsetTop = getElementOffsetTop('experience__container');
        let experienceContainerHeight = document.getElementsByClassName('experience__container')[0]
            .getBoundingClientRect().height;

        let prephraseHeight = document.getElementById('experience-pre-phrase').getBoundingClientRect().height;
        let bgScrollDivHeight = document.getElementById('experience-bg-scroll').getBoundingClientRect().height;

        if (scrollYDelta > 0) {
            let topAnchor = experienceContainerOffsetTop + experienceContainerHeight - prephraseHeight
                - bgScrollDivHeight - 46.480;
            if (currentScrollYVal > experienceContainerOffsetTop && currentScrollYVal < topAnchor) {
                experienceSectionTransformVal -= scrollYDelta;
            }
        } else {
            let bottomAnchor = experienceContainerOffsetTop + experienceContainerHeight - prephraseHeight
                - bgScrollDivHeight - 100;
            if (currentScrollYVal < bottomAnchor) {
                if (experienceSectionTransformVal < 0)
                    experienceSectionTransformVal += -scrollYDelta;
                else
                    experienceSectionTransformVal = 0;
            }
        }

        document.getElementById('experience-pre-phrase').style.cssText =
            '-webkit-transform: translate(0,' + -experienceSectionTransformVal + 'px);' +
            '-moz-transform:translate(0,' + -experienceSectionTransformVal + 'px);' +
            '-ms-transform: translate(0,' + -experienceSectionTransformVal + 'px);' +
            '-o-transform: translate(0,' + -experienceSectionTransformVal + 'px);' +
            'transform: translate(0,' + -experienceSectionTransformVal + 'px);';
        document.getElementById('experience-bg-scroll').style.cssText =
            '-webkit-transform: translate(0,' + -experienceSectionTransformVal + 'px);' +
            '-moz-transform:translate(0,' + -experienceSectionTransformVal + 'px);' +
            '-ms-transform: translate(0,' + -experienceSectionTransformVal + 'px);' +
            '-o-transform: translate(0,' + -experienceSectionTransformVal + 'px);' +
            'transform: translate(0,' + -experienceSectionTransformVal + 'px);';

        document.getElementById('bg-scroll-text').style.cssText =
            '-webkit-transform: rotate(-45deg) translate(' + -experienceSectionTransformVal / 8 + 'px,' + experienceSectionTransformVal / 8 + 'px);' +
            '-moz-transform: rotate(-45deg) translate(' + -experienceSectionTransformVal / 8 + 'px,' + experienceSectionTransformVal / 8 + 'px);' +
            '-ms-transform: rotate(-45deg) translate(' + -experienceSectionTransformVal / 8 + 'px,' + experienceSectionTransformVal / 8 + 'px);' +
            '-o-transform: rotate(-45deg) translate(' + -experienceSectionTransformVal / 8 + 'px,' + experienceSectionTransformVal / 8 + 'px);' +
            'transform: rotate(-45deg) translate(' + -experienceSectionTransformVal / 8 + 'px,' + experienceSectionTransformVal / 8 + 'px);';
    }

    // endregion Experience section scroll event

    // region Scroll-to-Top button

    if (window.scrollY > viewportHeight)
        document.getElementById('scroll-to-top-icon').style.bottom =
            document.getElementsByClassName('borders__top')[0].getBoundingClientRect().height - 10 + 'px';
    else
        document.getElementById('scroll-to-top-icon').style.bottom = '-100px';

    // endregion Scroll-to-Top button

});

function getElementOffsetTop(elementId) {
    return window.scrollY + document.getElementById(elementId).getBoundingClientRect().top;
}

function formatDate(date, type, locale) {
    let dt = new Date(date);

    if (type === ENUM_DATE_TYPE_YEAR) {
        return dt.toLocaleDateString(locale, {
            year: 'numeric'
        });
    } else if (type === ENUM_DATE_TYPE_MONTH) {
        return dt.toLocaleDateString(locale, {
            year: 'numeric'
        });
    } else if (type === ENUM_DATE_TYPE_MONTH_AND_YEAR) {
        return dt.toLocaleDateString(locale, {
            month: 'short',
            year: 'numeric'
        });
    }
}

function calcDateDiff(startDate, endDate, returnInterval) {
    let sd = new Date(startDate);
    let ed = new Date(endDate);
    let diffDate = new Date(ed.getTime() - sd.getTime());

    if (returnInterval === ENUM_DATE_TYPE_YEAR) {
        // Calc year difference
        return diffDate.getFullYear() - 1970;
    } else if (returnInterval === ENUM_DATE_TYPE_MONTH) {
        // Includes last month to the count
        return diffDate.getMonth() + 1;
    }
}

function loadTimelineContent() {
    let httpRequest = new XMLHttpRequest();
    let url = window.location.pathname.indexOf('ru') > -1 ?
        './content/timeline/content-ru.json'
        : './content/timeline/content-en.json';
    httpRequest.open('GET', url);
    httpRequest.setRequestHeader('cache-control', 'public, max-age=31536000');

    // Load json data file and sort object by start date property
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status >= 200) {
                initTimeline(httpRequest.responseText);
            } else {
                alert('An error occurred while loading data. Please, reload the page');
            }
        }
    };

    httpRequest.send();
}

function initTimeline(response) {
    let locale = window.location.pathname.indexOf('ru') > -1 ? 'ru-ru' : 'en-en';
    let timelineData = JSON.parse(response).sort(function (d1, d2) {
        return new Date(d2['start_date']) - new Date(d1['start_date']);
    });

    let parentBlock = document.getElementById('timeline-feed');

    // Templates
    let cardTagTemplate = document.getElementById('card-tag-template');
    let positionCardTemplate = document.getElementById('position-card-template');
    let educationCardTemplate = document.getElementById('education-card-template');
    let milestoneCardTemplate = document.getElementById('milestone-card-template');

    for (let i = 0; i < timelineData.length; i++) {
        let cardTemplateContent;
        let d = timelineData[i];

        // Need to check for content of the template element, since IE does not support templates
        if (d['type'] === ENUM_CARD_TYPE_POSITION) {
            cardTemplateContent = document.importNode(positionCardTemplate.content, true)
                .querySelector('div.timeline__item');
        } else if (d['type'] === ENUM_CARD_TYPE_EDUCATION) {
            cardTemplateContent = document.importNode(educationCardTemplate.content, true)
                .querySelector('div.timeline__item');
        } else if (d['type'] === ENUM_CARD_TYPE_MILESTONE) {
            cardTemplateContent = document.importNode(milestoneCardTemplate.content, true)
                .querySelector('div.timeline__item');
        }

        // Preformatting
        if (d['end_date'] === '') {
            d['end_date'] = Date.now();
        }

        if (d['date_show_type'] === ENUM_DATE_TYPE_MONTH_AND_YEAR) {
            let years = calcDateDiff(d['start_date'], d['end_date'], ENUM_DATE_TYPE_YEAR);
            let months = calcDateDiff(d['start_date'], d['end_date'], ENUM_DATE_TYPE_MONTH);

            if (years >= 1) {
                // Language formats
                d['date_diff'] = years + ' ' + localeStringEndings(locale, ENUM_DATE_TYPE_YEAR, years);
                d['date_diff'] += months + ' ' + localeStringEndings(locale, ENUM_DATE_TYPE_MONTH, months);
            } else {
                d['date_diff'] = months + ' ' + localeStringEndings(locale, ENUM_DATE_TYPE_MONTH, months);
            }
        } else if (d['date_show_type'] === 'y') {
            let years = calcDateDiff(d["start_date"], d["end_date"], ENUM_DATE_TYPE_YEAR);
            d['date_diff'] = years + ' ' + localeStringEndings(locale, ENUM_DATE_TYPE_YEAR, years);
        } else {
            let months = calcDateDiff(d['start_date'], d['end_date'], ENUM_DATE_TYPE_MONTH);
            d['date_diff'] = d['date_diff'] =
                months + ' ' + localeStringEndings(locale, ENUM_DATE_TYPE_MONTH, months);
        }

        // Replace template data
        cardTemplateContent.innerHTML = cardTemplateContent.innerHTML
            .replace(/{{type}}/g, d['type_display_name'])
            .replace(/{{start_date}}/g,
                formatDate(d['start_date'], d['date_show_type'], locale))
            .replace(/{{end_date}}/g,
                formatDate(d['end_date'], d['date_show_type'], locale))
            .replace(/{{date_diff}}/g, d['date_diff'])
            .replace(/{{title}}/g, d['title'])
            // Organization logo will be set later
            .replace(/{{org_logo_alt_name}}/g, d['org_logo_alt_name'])
            .replace(/{{org_name}}/g, d['org_name'])
            .replace(/{{org_link}}/g, d['org_link'])
            .replace(/{{description}}/g, d['description']);

        // Replace image placeholder with organization logo
        if (d['org_logo'] !== '')
            cardTemplateContent.querySelector('div.timeline__item div.timeline-item__logo img')
                .setAttribute('src', IMAGE_PATH_PREFIX + d['org_logo']);

        // Assign ID
        let idValue = 'timeline-item-' + i;
        cardTemplateContent.querySelector('input.timeline-item__expander')
            .setAttribute('id', idValue);
        cardTemplateContent.querySelector('label.timeline-item__expander-label')
            .setAttribute('for', idValue);

        // Add tags
        let tagsContainer = cardTemplateContent.querySelector('div.timeline-item__tags-container');
        for (let j = 0; j < d['tags'].length; j++) {
            let tag = d['tags'][j];
            let content = document.importNode(cardTagTemplate.content, true);
            let span = content.querySelector('span');
            span.textContent = tag;

            tagsContainer.appendChild(span);
        }

        // Append card
        parentBlock.appendChild(cardTemplateContent);
    }
}

function localeStringEndings(locale, interval, count) {
    if (locale.indexOf('ru') > -1) {
        let cases = [2, 0, 1, 1, 1, 2];
        if (interval === ENUM_DATE_TYPE_YEAR) {
            let yearTitles = ['год', 'года', 'лет'];
            return yearTitles[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]];
        } else if (interval === ENUM_DATE_TYPE_MONTH) {
            let monthTitles = ['месяц', 'месяца', 'месяцев'];
            return monthTitles[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[(count % 10 < 5) ? count % 10 : 5]];
        }
    } else if (locale.indexOf('en') > -1) {
        if (interval === ENUM_DATE_TYPE_YEAR) {
            if (count > 1)
                return 'years';
            else
                return 'year';
        } else if (interval === ENUM_DATE_TYPE_MONTH) {
            if (count > 1)
                return 'months';
            else
                return 'month';
        }
    }
}

function getClientBrowserInfo() {
    let userAgent = navigator.userAgent,
        match = userAgent.match(/(opera|chrome|crios|safari|ucbrowser|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
        result = {},
        tem;

    if (/trident/i.test(match[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
        result.name = "Internet Explorer";
    } else if (match[1] === "Chrome") {
        tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);

        if (tem && tem[1]) {
            result.name = tem[0].indexOf("Edge") === 0 ? "Edge" : "Opera";
        }
    }
    if (!result.name) {
        tem = userAgent.match(/version\/(\d+)/i); // iOS support
        result.name = match[0].replace(/\/.*/, "");

        if (result.name.indexOf("MSIE") === 0) {
            result.name = "Internet Explorer";
        }
        if (userAgent.match("CriOS")) {
            result.name = "Chrome";
        }

    }
    if (tem && tem.length) {
        match[match.length - 1] = tem[tem.length - 1];
    }

    result.version = Number(match[match.length - 1]);

    return result;
}