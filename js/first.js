let map = L.map('barcamap').setView([41.397, 2.157], 13.00);

L.tileLayer('https://api.mapbox.com/styles/v1/cindylu05/cjp0etide06pj2spbaoqm6582/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiY2luZHlsdTA1IiwiYSI6ImNqcDBkcXVuczAwMmkzd3BhN202a2NzdjQifQ.mnHvWLTtVmroqrwCTeVsgQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

let marker1 = L.marker([41.414493, 2.152700]).addTo(map);
let marker2 = L.marker([41.378694, 2.120789]).addTo(map);
let marker3 = L.marker([41.381619, 2.172840]).addTo(map);
let marker4 = L.marker([41.403670, 2.174367]).addTo(map);

marker1.bindPopup("<b>Park Guell</b><br>Outdoors architecture exhibit featuring the designs of legendary Spanish artist Antoni Gaudi.").openPopup();
marker2.bindPopup("<b>Camp Nou</b><br>Europe's largest football stadium, home to notable football club FC Barcelona.");
marker3.bindPopup("<b>La Rambla</b><br>Street running through the center of the city popular for shopping.");
marker4.bindPopup("<b>La Sagrada Familia</b><br>Roman Catholic basilica infamous for its never-ending construction.");
