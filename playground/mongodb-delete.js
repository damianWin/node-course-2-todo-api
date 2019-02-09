
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //    console.log(result); 
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c588ad04005114d302ad0ce')}).then((result) => {
        console.log(result);
    });

    // client.close();
});