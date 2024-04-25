const fs = require('fs');

const jsonFilePath = "business_data.json";
const jsonDataSync = fs.readFileSync(jsonFilePath, 'utf8');
const jsonData = JSON.parse(jsonDataSync);
let data = Array.from(jsonData);

let count = 0;
data.forEach(single => {
    Object.values(single).forEach((value, idx) => {
        count += value.length;
    })
})

console.log(count);