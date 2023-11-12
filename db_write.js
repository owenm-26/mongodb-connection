//opens .env file
import {db_connect} from './db_conn.js'
import dotEnv from 'dotenv'
import mongodb from 'mongodb';
import { MongoClient, ServerApiVersion } from 'mongodb'
dotEnv.config();

//assign variables + uri encode
let user = encodeURIComponent(process.env.USERNAME);
let pass = encodeURIComponent(process.env.PASS);

// database and collection code goes here
// const db = client.db("sample_guides");
// const coll = db.collection("comets");

db_connect(user, pass)