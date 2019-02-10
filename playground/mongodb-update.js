
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c58bbf331e9251ed0602d6d')
    }, {
        $set: {
            name: 'Damián' 
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false 
    }).then((result) => {
        console.log(result)
    });

    // client.close();
});