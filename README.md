# Instructions for Execution

To start the execution, follow these steps:

1. Use the command `npm install` to ensure you have installed all the dependencies.

2. Replace the path of the "addressArray" with the new array list for the city. This array should be stored in the `./src/StoreAddress` directory.

3. Create a new folder for the city based on the zip code or post office, etc.

4. Replace the path required for `addressArray` with the new location.

5. Ensure to set the start and end points based on the size of the `addressArray`. It's advisable to scrape data in batches, such as 100 locations at a time, rather than all at once.

6. Use the command `npm start`.

## Execution Example

```bash
npm start



## Folder Structure

PUB-SCRAP/
│
├── main.js
├── utils.js
├── src/
│   ├── StoreAddress/
│   │   ├── pincode1.js
│   │   ├── pincode2.js
│   │   └── ...
│   ├── crawlerGoogleMap.js
│   ├── convertJSONintoCSV.js
│   ├── checkPointsByBoundary.js
│   └── calculateTileID.js
└── README.md




