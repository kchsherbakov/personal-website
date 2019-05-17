function loadTimelineJson(callback) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './content/timeline/content.json');
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == '200') {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function initTimeline() {
    loadTimelineJson(async function (data) {
        let timelineData = JSON.parse(data);
        let parentBlock = document.getElementById('timeline-feed').innerHTML;
        let cards = '';

        // Load templates
        let positionCard = await fetch('./components/timeline/position.html')
            .then(response => response.text());
        for (let i = 0; i < timelineData.length; i++) {
            let d = timelineData[i];
            if (d["type"] == 'position') {
                cards += positionCard.replace(/{{type}}/g, d['type'])
                    .replace(/{{start_date}}/g,
                        Date.now().toLocaleDateString('en-en', {
                            month: 'short',
                            year: 'numeric'
                        }))
                    .replace(/{{end_date}}/g, d['end_date'])
                    .replace(/{{title}}/g, d['title'])
                    .replace(/{{org_logo}}/g, d['org_logo'])
                    .replace(/{{org_logo_alt_name}}/g, d['org_logo_alt_name'])
                    .replace(/{{org_name}}/g, d['org_name'])
                    .replace(/{{org_link}}/g, d['org_link'])
                    .replace(/{{description}}/g, d['description'])
            }
        }

        // Add content to the page
        document.getElementById('timeline-feed').innerHTML = cards;
    });
}