const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
let dbConnection;

async function connectDB() {
    try {
        if (!dbConnection) {
            await client.connect();
            dbConnection = client.db('statesDB'); // database name
            console.log("Connected to MongoDB");
        }
        return dbConnection;
    } catch (e) {
        console.error("Could not connect to MongoDB", e);
        throw e; 
    }
}

module.exports = { connectDB };
