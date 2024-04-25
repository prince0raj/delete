const fs = require('fs');
const csvParser = require('csv-parser');
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: 'Koo803202@',
    database: 'OutletData'
}).promise();

const batchSize = 1000; // Number of records per batch to fetch from CSV
let count = 0;
let dataBatch = [];

async function insertBatch(batch) {
    try {
        const values = batch.map((row) => [
            row.placeId,
            row.address,
            row.category,
            row.phone,
            row.latitude,
            row.longitude,
            row.status,
            row.type,
            row.googleUrl,
            row.storeName,
            row.ratingText,
            row.stars ? row.stars : null,
            row.numberOfReviews ? row.numberOfReviews : null
        ]);
        await pool.query('INSERT INTO outletByCity (placeId, address, category, phone, latitude, longitude, status, type, googleUrl, storeName, ratingText, stars, numberOfReviews) VALUES ?', [values]);
    } catch (error) {
        console.error('Error inserting batch:', error);
    }
}

// Read data from CSV file
fs.createReadStream('hanoi_output.csv')
    .pipe(csvParser())
    .on('data', (row) => {
        dataBatch.push(row);
        count++;
        if (count % batchSize === 0) {
            insertBatch(dataBatch);
            console.log(`Inserted ${batchSize} records. Total: ${count}`);
            dataBatch = []; // Reset data batch
        }
    })
    .on('end', async () => {
        if (dataBatch.length > 0) {
            await insertBatch(dataBatch);
            console.log(`Inserted ${dataBatch.length} records. Total: ${count} from end`);
        }
        console.log('CSV file processing complete');
        pool.end((err) => {
            if (err) {
                console.error('Error closing pool:', err);
            } else {
                console.log('Pool closed');
            }
        });
    })
    .on('error', (error) => {
        console.error('Error parsing CSV file:', error);
        pool.end((err) => {
            if (err) {
                console.error('Error closing pool:', err);
            } else {
                console.log('Pool closed');
            }
        });
    });
