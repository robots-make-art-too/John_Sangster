window.onload = () => { // On the loading of the page
  render(); // Calls the render() function
};

const models = [ // Initializes an array "models"
  {
    url: './assets/myModel/scene.gltf', // Sets variable "url" equal to the the url of the "scene.gltf" model
    scale: '0.5 0.5 0.5', // Sets variable "scale" to three axes (x, y, z) of scale at 0.5x scale for each axis
    rotation: '0 225 0' // Sets variable "rotation" to three degree measures (x, y, z) of rotation (0 deg, 225 deg, 0 deg)
  },
];

let modelIndex = 0; // Creates a variable "modelIndex" and sets it to 0
const setModel = (model, entity) => { // Creates a variable "setModel" based on the passed parameters "model" and "entity"
  if (model.position) { // Checks if the parameter "model" has an attribute "position"
    entity.setAttribute('position', model.position); // Sets the attribute "position" of the parameter "entity" to the position described in "model"
  }

  entity.setAttribute('gltf-model', model.url); // Sets the attribute "model" of the parameter "entity" to the (previously created link to model file) link described in "model"
};

function render() { // Called in 2nd line
  const scene = document.querySelector('a-scene'); // Creates a variable "scene" and sets it to the value "a-scene" (reference) from the HTML document

  navigator.geolocation.getCurrentPosition(function (position) { // Sets the attribute "geolocation" of the navigator to the current position described by "position"
    const latitude = position.coords.latitude; // Creates a variable "latitude" and sets it to the latitude of the current position 
    const longitude = position.coords.longitude; // Creates a varialbe "longitude" and sets it to the longitude of the current position

    const model = document.createElement('a-entity'); // Creates a variable "model" and sets it to the value of the newly initialized element "a-entity" in the HTML document
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`); // Sets the attribute "gps-entity-place" of the model to the latitude and longitude found in lines 26/27

    setModel(models[modelIndex], model); // Accesses "setModel()" from line 14 and passes the model (using the index "modelIndex" in the array "models") and the model "model" as parameters

    model.setAttribute('animation-mixer', ''); // Sets the attribute "animation-mixer" of "model" to nothing (an empty string)

    scene.appendChild(model); // Appends the model "model" as a child of the scene
  });
}

/*
The scale and rotation of a model are described in the array "models" (initialized on line 5). 

The scale is described in models[n].scale, for any integer n where 0 < n < models.length
The scale is described using a string containing 3 elements, each describing the scale of a model in the X, Y, or Z dimensions respectively, where a scale of 1 is the unedited scale
The scale can be changed either on initialization, by changing the scale that the model is initialized with (eg. scale: "0.5 1.0 0.5") or by accessing the scale of the model (models[n].scale) at a later point and changing it directly (following the same XYZ format as initialization)

The rotation is described in models[n].rotation, for any integer n where 0 < n < models.length
The rotation is described using a string containing 3 elements, each describing the rotation of a model in the X, Y, or Z axes respectively, in degrees
The rotation can be changed either on initialization, by changing the rotation that the model is initialized with (eg. rotation: "90 180 135") or by accessing the rotation of the model (models[n].rotation) at a later point and changing it directly (following the same XYZ format as initialization)\

To add more models would require adding lines of code below line 10
For example:

const models = [ 
  {
    url: './assets/myModel/scene.gltf', 
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0' 
  },
  {
    url: '.assets/myModel/a_different_model.gltf',
    scale: '1.2 1.2 1.6',
    rotation: '90 35 50'
  },
];

This is because "models[]" contains a list of all models in the scene and their attributes, and is accessed by the "render()" function to display models

To add event listeners would require adding lines of code below line 29, using the addEventListener() function
This is shown in script.js
The event listeners would be initialized to listen to a certain event (model.addEventListener("event_name")) and trigger some process when that event is called
*/