const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const databaseName = "e-com";

async function dbConnect() {
  let result = await client.connect();
  db = result.db(databaseName);
  return db.collection("products");
  // let response = await collection.find({}).toArray();
  // console.log(response);
}

//dbConnect();
//console.warn(dbConnect())

// dbConnect().then((resp)=>{
//     console.warn(resp.find().toArray())
// })

// single data
// dbConnect().then((resp)=>{
//     console.warn(resp.find({name:"glaxy40"}).toArray().then((data)=>{
//         console.warn(data)
//     }))
// })

// dbConnect().then((resp)=>{
//     console.warn(resp.find().toArray().then((data)=>{
//         console.warn(data)
//     }))
// })

// const main = () => {
//   console.log("main function callled");
// };
// main();

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.warn(data);
};
main();
