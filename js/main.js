window.addEventListener('load', () => {
    const camera = document.querySelector('[camera]');
    const marker = document.querySelector('a-marker');
    let check;
    let isFound;

    marker.addEventListener('markerFound', (e) => {
        isFound = true;

        let cameraPosition = camera.object3D.position;
        let markerPosition = marker.object3D.position;
        let distance = cameraPosition.distanceTo(markerPosition)

        check = setInterval(() => {
            cameraPosition = camera.object3D.position;
            markerPosition = marker.object3D.position;
            distance = cameraPosition.distanceTo(markerPosition)

            console.log("Distance from marker:", marker.id, " is: ", distance);
        }, 3000);
    });

    marker.addEventListener('markerLost', (e) => {
        isFound = false;
        clearInterval(check);
    })
});
