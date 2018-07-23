const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const databaseUrl = process.env[`DB_URL_${process.env.NODE_ENV}`];
const databaseName = databaseUrl.substr(databaseUrl.lastIndexOf('kodflix'));

function connect() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(databaseUrl, { useNewUrlParser: true }, function (err, db) {
      if (err) reject(err);
      const dbo = db.db(databaseName);
      resolve(dbo)
    });
  });
}

module.exports = connect;



