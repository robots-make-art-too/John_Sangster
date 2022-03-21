window.onload = () => { // On the loading of the page
     let places = staticLoadPlaces(); // Creates a variable "places"
     renderPlaces(places); // Calls the renderPlaces() function with places passed as a parameter
};

function staticLoadPlaces() {
    return [ // Returns an array
        {
            name: 'MyModel', // Sets variable "name" equal to 'MyModel'
            location: { // Sets location (with variables lat and lng) to parameters "your-latitude" and "your-longitude"
                lat: <your-latitude>,
                lng: <your-longitude>,
            }
        },
    ];
}

function renderPlaces(places) { // Accepts a parameter "places"
    let scene = document.querySelector('a-scene'); // Creates a variable "scene" and sets the value to "a-scene" from the HTML document

    places.forEach((place) => { // Goes through each "place" in "places"
        let latitude = place.location.lat; // Creates a variable "latitude" and sets it to the value "lat" of the attribute "location" of the parameter "place"
        let longitude = place.location.lng; // Creates a variable "longitude" and sets it to the value "lng" of the attribute "location" of the parameter "place"

        let model = document.createElement('a-entity'); // Creates a variable "model" and sets it to the value "a-entity" from the HTML document
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`); // Sets the "gps-entity-place" attribute of "model" to describe the latitude and longitude ("latitude" and "longitude" variables)
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf'); // Sets the "gltf-model" attribute of "model" to the stored "scene.gltf" file 
        model.setAttribute('rotation', '0 180 0'); // Sets the "rotation" attribute of "model" to 3 angle measures (0 deg, 180 deg, 0 deg)
        model.setAttribute('animation-mixer', ''); // Sets the "animation-mixer" attribute of "model" to nothing (an empty string)
        model.setAttribute('scale', '0.5 0.5 0.5'); // Sets the "scale" attribute of "model" to 3 dimensions (0.5x, 0.5x, 0.5x)

        model.addEventListener('loaded', () => { // Adds an event listener to "model", listens for "loaded" event
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')) // Triggers the "gps-entity-place-loaded" event
        });

        scene.appendChild(model); // Appends "model" as a child to "scene"
    });
}