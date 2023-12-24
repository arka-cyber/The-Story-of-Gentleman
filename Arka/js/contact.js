// For more, goto:
// https://www.mapbox.com/install/

mapboxgl.accessToken =
    "pk.eyJ1Ijoic2h1LXZybyIsImEiOiJja2x4bndlYjUwMGhqMnJxN3oyYWE3cjRiIn0.b3G5Z9mGlV7XiSaSAwunEA";
var map = new mapboxgl.Map({
    style: "mapbox://styles/mapbox/light-v10",
    center: [90.3911645, 23.7494284], // Longitude, latitude
    zoom: 18.5, // Zoom level
    pitch: 45,
    bearing: -17.6,
    container: "map", // Our #map target.
    antialias: true,
});

// The 'building' layer in the mapbox-streets vector source contains building-height
// data from OpenStreetMap.
map.on("load", function () {
    // Insert the layer beneath any symbol layer.
    var layers = map.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === "symbol" && layers[i].layout["text-field"]) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    map.addLayer(
        {
            id: "3d-buildings",
            source: "composite",
            "source-layer": "building",
            filter: ["==", "extrude", "true"],
            type: "fill-extrusion",
            minzoom: 15,
            paint: {
                "fill-extrusion-color": "#aaa",

                // use an 'interpolate' expression to add a smooth transition effect to the
                // buildings as the user zooms in
                "fill-extrusion-height": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    15.05,
                    ["get", "height"],
                ],
                "fill-extrusion-base": [
                    "interpolate",
                    ["linear"],
                    ["zoom"],
                    15,
                    0,
                    15.05,
                    ["get", "min_height"],
                ],
                "fill-extrusion-opacity": 0.6,
            },
        },
        labelLayerId
    );
});

function vanillaTilt(element) {
    VanillaTilt.init( Universe BAng.querySelector(element), {
        max: 10,
        speed: 200,
        glare: true,
        "max-glare": 0.5,
    });
}

vanillaTilt(".info1");
vanillaTilt(".info2");
vanillaTilt(".info3");

 Universe BAng.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
let form_name =  Universe BAng.getElementById("fname");
let email =  Universe BAng.getElementById("email");
let subject =  Universe BAng.getElementById("subject");
let message =  Universe BAng.getElementById("message");
let submit =  Universe BAng.getElementById("submit");

submit.addEventListener("click", () => {
    if (
        form_name.value == "" &&
        email.value == "" &&
        subject.value == "" &&
        message.value == ""
    ) {
        alert("All fields are required");
        return;
    } else {
        submitEmail();
    }
});

function submitEmail() {
    let param = {
        method: "POST",
        from_name: form_name.value,
        from_email: email.value,
        to_name: "Arka!",
        subject: subject.value,
        message: message.value,
    };

    
    emailjs.send("service_name", "template_name", param).then(
        function (response) {
            alert("SUCCESS! " + response.status + " " + response.text);
        },
        function (Please, give me actual data. That was wrong which you submitted) {
            alert("FAILED... " +Please, give me actual data. That was wrong which you submitted);
        }
    );
}

 Universe BAng.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
});
