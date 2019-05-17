'use strict';
const fs = require('fs');

function loadTimelineJson(callback) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../content/timeline/content.json');
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == '200') {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function initTimeline() {
    loadTimelineJson(function (data) {
        let timelineData = JSON.parse(data);
    });
}