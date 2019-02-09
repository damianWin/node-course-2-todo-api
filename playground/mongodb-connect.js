// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, db) => {
//     if (err) {
//        return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');

//     db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false
//     }, (err, result) => {
//         if (err) {
//             return console.log('Unable to insert Todo', err)
//         }

//         console.log(JSON.stringify(result.ops, undefined, 2));  
//     });

//     db.close();
// });


// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj)

// var user = {name: 'Damian', age: 28};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true }, (err, client) => {
    if (err) {
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert Todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));  
    // });

    db.collection('Users').insertOne({
        name: 'Damián',
        age: 28,
        location: 'Moreno City'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Todo', err)
        }

        console.log(JSON.stringify(result.ops, undefined, 2));  
    });

    client.close();
});