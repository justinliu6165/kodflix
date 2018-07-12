const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const databaseUrl = process.env[`DB_URL_${process.env.NODE_ENV}`] || process.env.DB_URL_PRD;
const databaseName = databaseUrl.substr(databaseUrl.lastIndexOf('kodflix'));
//const url = "mongodb://kodflix:kodflix@localhost:27017/kodflix";
//process.env.NODE_ENV will be either 'PRD' or 'DEV'
//process.env.DB_URL_DEV or process.env.DB_URL_PRD
//process.env[`DB_URL_${process.env.NODE_ENV}`]
function connect() {
  console.log(databaseUrl)
  return new Promise((resolve, reject) => { 
    MongoClient.connect(databaseUrl,{ useNewUrlParser: true }, function (err, db) {
      if (err) reject (err);
      const dbo = db.db(databaseName);
      resolve(dbo)
    }); 
  });
}

module.exports = connect;



