//opens .env file
// require("dotenv").config();
import dotEnv from 'dotenv'
import mongodb from 'mongodb';
import { MongoClient, ServerApiVersion } from 'mongodb'

dotEnv.config();

//assign variables + uri encode
let user = encodeURIComponent(process.env.USERNAME);
let pass = encodeURIComponent(process.env.PASS);

export function db_connect(user, pass){
    
    
    //const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = `mongodb+srv://${user}:${pass}@volunteerportal.zv9kfyo.mongodb.net/?retryWrites=true&w=majority`
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
    });

    async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch(err){console.log(err)}
    // finally {
    //     // Ensures that the client will close when you finish/error
    //     await client.close();
    // }
    } 
    run().catch(console.dir);
}

//Uncomment to test
//db_connect(user, pass)