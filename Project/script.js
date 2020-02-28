var mapOfHalfPictureID = {
    1: { "left": "about-left", "right": "about-right" },
    2: { "left": "current-left", "right": "current-right" },
    3: { "left": "archive-left", "right": "archive-right" },
    4: { "left": "contact-left", "right": "contact-right" },
}

var mapOfManipulationAndClassName = {
    "enter": { "left": "image-left-after", "right": "image-right-after" },
    "leave": { "left": "image-left-before", "right": "image-right-before" }
}

function interactWithSection(nummber, action) {
    document.getElementById(mapOfHalfPictureID[nummber]["left"]).className = mapOfManipulationAndClassName[action]["left"];
    document.getElementById(mapOfHalfPictureID[nummber]["right"]).className = mapOfManipulationAndClassName[action]["right"];
}
