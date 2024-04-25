const fs = require('fs');

const getData = async () => {

    let osmType = "R";
    let osmid = "1903516";
    let city = "hanoi";
    const response = await fetch(`https://nominatim.openstreetmap.org/details.php?osmtype=${osmType}&osmid=${osmid}&polygon_geojson=1&format=json`);
    const data = await response.json();
    const coordinates = data.geometry.coordinates[0].map(coordinate => [coordinate[1], coordinate[0]]);
    const jsonData = JSON.stringify(coordinates, null, 2);

    const jsonFilePath = `${city}_coordinates.json`;

    fs.writeFile(jsonFilePath, jsonData, (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
            return;
        }
        console.log('JSON file has been saved.');
    });
}

getData();