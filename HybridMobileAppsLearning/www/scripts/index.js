// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);  

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        var capturePhotoButton = document.querySelector("#capturePhoto");
        capturePhotoButton.addEventListener("click", capturePhoto, false);

        var getPhotoFromLibButton = document.querySelector("#getPhotoFromLib");
        getPhotoFromLibButton.addEventListener("click", getPhoto, false);

        var geoLocationCurrentPositionButton = document.querySelector("#geoLocationCurrentPosition");
        geoLocationCurrentPositionButton.addEventListener("click", getCurrentPosition, false);

    };


    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();

// onSuccess Geolocation
//
function onGeoSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: ' + position.coords.latitude + '<br />' +
                        'Longitude: ' + position.coords.longitude + '<br />' +
                        'Altitude: ' + position.coords.altitude + '<br />' +
                        'Accuracy: ' + position.coords.accuracy + '<br />' +
                        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                        'Heading: ' + position.coords.heading + '<br />' +
                        'Speed: ' + position.coords.speed + '<br />' +
                        'Timestamp: ' + position.timestamp + '<br />';
}

// onError Callback receives a PositionError object
//
function onGeoError(error) {
    alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
}

function getCurrentPosition() {   
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
};

function onPhotoDataSuccess(imageURI) {
    console.log(imageURI); console.log("***********************log message test anil");
    var cameraImage = document.getElementById('image');
    cameraImage.style.display = 'block';
    cameraImage.src = imageURI;
};

function onPhotoURISuccess(imageURI) {
    console.log(imageURI);
    var galleryImage = document.getElementById('image');
    galleryImage.style.display = 'block';
    galleryImage.src = imageURI;
};

function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 100,
        targetWidth: 600,
        targetHeight: 600,
        destinationType: Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum: true
    });
};
function getPhoto() {
    // Retrieve image file location from specified source    
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 100,
        targetWidth: 600,
        targetHeight: 600,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    });
};

function onFail(message) {
    alert('Failed because: ' + message);
};