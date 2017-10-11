function checkForMarker() {
    if(document.querySelector('a-marker').object3D.visible == true) {
        // console.log('!!! MARKER VISIBLE');
    } else {
        // console.log('xxxx marker not visible');
    }
}

window.addEventListener('load', 
    function() { 
        setInterval(checkForMarker, 50);
        console.log(document.getElementById('camera'));
}, false);