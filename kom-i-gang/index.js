//referanse til html-elementer
const buttons = document.querySelector("#buttons");

mapboxgl.accessToken = 'pk.eyJ1IjoidGlib29oIiwiYSI6ImNrNTNsdjlwcDA0azAza3FoNG1sYjczZHoifQ.NQR1PS5TSTOP7Hwrh4mioQ';

const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 18,
center:[-157.824025, 21.395902]
});

const addMarker =() => {
    const marker = new mapboxgl.Marker( {draggable: true } );
    marker.setLngLat([-157.824025, 21.395902]);
    marker.addTo(map);

    marker.on("dragend", () => {
        const pos = marker.getLngLat();
        console.log(pos);
        addMarker();
    } )
}
addMarker();
buttons.onclick = (evt) => {
    const stil =evt.target.dataset.stil;
    map.setStyle("mapbox://styles/mapbox/"+stil);
   
}