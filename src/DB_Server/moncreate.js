var MongoClient = require('mongodb').MongoClient;

const client = new MongoClient("mongodb+srv://s1010606:wWJLH1Nlt7HdLh9y@cluster0.sfsk2g1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

(async () => { 
  // Connect to the db
  await client.connect();
  const database  = client.db("Breakfast_Shop");
  const Person = database.collection("menu_items");
  await Person.insertOne({ id: 111111111,account:'a14333683', password:'123123',name:'SW',email :'test@gmail.com',phone:'0912345678',created_at:'DATETIME',line_id:'sw14333683',google_account:'14333683'});

  await client.close(); // 關閉連線
})()
    .catch(err => console.error(err));


