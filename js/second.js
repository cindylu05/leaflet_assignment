let mymap = L.map('cheapmap').setView([38.536, -95.743], 4.40);

L.tileLayer('https://api.mapbox.com/styles/v1/cindylu05/cjp0etide06pj2spbaoqm6582/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHlsdTA1IiwiYSI6ImNqcDBkcXVuczAwMmkzd3BhN202a2NzdjQifQ.mnHvWLTtVmroqrwCTeVsgQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(mymap);

for (let i=0; i<places.length; i++) {
  L.marker([places[i].latitude, places[i].longitude]).bindPopup('<h3>' + places[i].location + '</h3>' + '<p>' + '<b>' + 'Number' + ' ' + places[i].number + ':' + '</b>' + ' ' + places[i].livingExpenses + '</p>').addTo(mymap);
}
