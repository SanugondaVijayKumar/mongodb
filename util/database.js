const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

let _db;

const mongoConnect=(callback)=>{
  MongoClient.connect('mongodb+srv://vijaysanugonda:3b0U8J6BVJoyyqpu@cluster0.ho2bocm.mongodb.net/shop?retryWrites=true&w=majority')
  .then(client=>{
    console.log('mongodb connected!');
    _db=client.db();
    callback();
  })
  .catch(err=>{
    console.log(err);
    throw err;
  });
};

const getDb=()=>{
  if(_db){
    return _db;
  }
  throw 'No Database found';
};

exports.mongoConnect=mongoConnect;
exports.getDb=getDb;

