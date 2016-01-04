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
        //test push2 to GIT

        var capturePhotoButton = document.querySelector("#capturePhoto");
        capturePhotoButton.addEventListener("click", capturePhoto, false);

        var getPhotoFromLibButton = document.querySelector("#getPhotoFromLib");
        getPhotoFromLibButton.addEventListener("click", getPhoto, false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

    };


    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();


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