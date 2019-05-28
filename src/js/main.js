const IMAGE_PATH_PREFIX = './img/';
const ENUM_DATE_TYPE_YEAR = 0;
const ENUM_DATE_TYPE_MONTH = 1;
const ENUM_DATE_TYPE_MONTH_AND_YEAR = 2;

const ENUM_CARD_TYPE_POSITION = 'position';
const ENUM_CARD_TYPE_EDUCATION = 'education';
const ENUM_CARD_TYPE_MILESTONE = 'milestone';

const VIEWPORT_WIDTH_MEDIUM = 768;
const VIEW_PORT_WIDTH_LARGE = 992;

// Global events
document.getElementById('menu-toggle').addEventListener('click', function () {
    let page = document.getElementsByClassName('page-home')[0];
    page.classList.toggle('menu_open');
});

document.getElementsByClassName('menu__nav')[0].addEventListener('click', function () {
    let page = document.getElementsByClassName('page-home')[0];
    page.classList.remove('menu_open');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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
});

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

        // document.getElementById('hello-section').style.cssText =
        //     `transform: matrix(1, 0, 0, 1, 0, ${introSectionTransformVal / 12})`;
        // document.getElementById('greetings-section').style.cssText =
        //     `transform: matrix(1, 0, 0, 1, 0, ${introSectionTransformVal / 12})`;
        document.getElementById('scroller').style.cssText =
            `transform: matrix(1, 0, 0, 1, 0, ${introSectionTransformVal})`;

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
            `transform: matrix(1, 0, 0, 1, 0, ${aboutSectionTransformVal / 2})`;
    }

    // endregion About scroll event

    // region Experience section scroll event

    // Tablets and desktops only
    if (Math.max(document.documentElement.clientWidth, window.innerWidth || 0) >= VIEW_PORT_WIDTH_LARGE) {
        let experienceSectionOffsetTop = getElementOffsetTop('experience-section');
        let experienceSectionHeight = document.getElementById('experience-section')
            .getBoundingClientRect().height;

        if (scrollYDelta > 0) {
            if (currentScrollYVal > experienceSectionOffsetTop
                && currentScrollYVal < (experienceSectionOffsetTop + experienceSectionHeight)) {
                experienceSectionTransformVal -= scrollYDelta;
            }
        } else {
            if (experienceSectionTransformVal < 0)
                experienceSectionTransformVal += -scrollYDelta;
            else
                experienceSectionTransformVal = 0;
        }

        document.getElementById('bg-scroll-text').style.cssText =
            `transform: rotate(-45deg) translate(${-experienceSectionTransformVal / 8}px, 
            ${experienceSectionTransformVal / 8}px)`;
    }

    // endregion Experience section scroll event

    // region Scroll-to-Top button

    if (window.scrollY > viewportHeight)
        document.getElementById('scroll-to-top-icon').style.bottom =
            `${document.getElementsByClassName('borders__top')[0].getBoundingClientRect().height - 10}px`;
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

async function initTimeline() {
    // Debug only settings
    let fetchHeaders = new Headers();
    fetchHeaders.append('pragma', 'no-cache');
    fetchHeaders.append('cache-control', 'no-cache');

    let fetchInit = {
        method: 'GET',
        headers: fetchHeaders,
    };

    // Load json data file and sort object by start date property
    let jsonContent = await fetch('./content/timeline/content.json', fetchInit)
        .then(response => response.text());
    let timelineData = JSON.parse(jsonContent).sort(function (d1, d2) {
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
                d['date_diff'] = years > 1 ? `${years} years` : `${years} year`;
                d['date_diff'] += months > 1 ? `, ${months} months` : `, ${months} month`;
            } else {
                d['date_diff'] = months > 1 ? `${months} months` : `${months} month`;
            }
        } else if (d['date_show_type'] === 'y') {
            let years = calcDateDiff(d['start_date'], d['end_date'], ENUM_DATE_TYPE_YEAR);
            d['date_diff'] = years > 1 ? `${years} years` : `${years} year`;
        } else {
            let months = calcDateDiff(d['start_date'], d['end_date'], ENUM_DATE_TYPE_MONTH);
            d['date_diff'] = d['date_diff'] = months > 1 ? `${months} months` : `${months} month`;
        }

        // Replace template data
        cardTemplateContent.innerHTML = cardTemplateContent.innerHTML.replace(/{{type}}/g, d['type'])
            .replace(/{{start_date}}/g,
                formatDate(d['start_date'], d['date_show_type'], 'en-en'))
            .replace(/{{end_date}}/g,
                formatDate(d['end_date'], d['date_show_type'], 'en-en'))
            .replace(/{{date_diff}}/g, d['date_diff'])
            .replace(/{{title}}/g, d['title'])
            // Organization logo will be set later
            .replace(/{{org_logo_alt_name}}/g, d['org_logo_alt_name'])
            .replace(/{{org_name}}/g, d['org_name'])
            .replace(/{{org_link}}/g, d['org_link'])
            .replace(/{{description}}/g, d['description']);

        // Replace image placeholder with organization logo
        cardTemplateContent.querySelector('div.timeline__item div.timeline-item__logo img')
            .setAttribute('src', IMAGE_PATH_PREFIX + d['org_logo']);

        // Assign ID
        let idValue = `timeline-item-${i}`;
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