const IMAGE_PATH_PREFIX = './img/';
const ENUM_DATE_TYPE_YEAR = 0;
const ENUM_DATE_TYPE_MONTH = 1;
const ENUM_DATE_TYPE_MONTH_AND_YEAR = 2;

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

    let jsonContent = await fetch('./content/timeline/content.json', fetchInit)
        .then(response => response.text());
    let timelineData = JSON.parse(jsonContent);
    let parentBlock = document.getElementById('timeline-feed');

    // Templates
    let cardTagTemplate = document.getElementById('card-tag-template');
    let positionCardTemplate = document.getElementById('position-card-template');
    let educationCardTemplate = document.getElementById('education-card-template');

    for (let i = 0; i < timelineData.length; i++) {
        let cardTemplateContent;
        let d = timelineData[i];

        if (d['type'] === 'position') {
            cardTemplateContent = document.importNode(positionCardTemplate.content, true)
                .querySelector(('div.timeline__item'));
        } else if (d['type'] === 'education') {
            cardTemplateContent = document.importNode(educationCardTemplate.content, true)
                .querySelector(('div.timeline__item'));
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
            .replace(/{{org_logo}}/g, IMAGE_PATH_PREFIX + d['org_logo'])
            .replace(/{{org_logo_alt_name}}/g, d['org_logo_alt_name'])
            .replace(/{{org_name}}/g, d['org_name'])
            .replace(/{{org_link}}/g, d['org_link'])
            .replace(/{{description}}/g, d['description']);

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