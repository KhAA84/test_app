const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./server/db.json');
const db = low(adapter);

db.defaults({users: []})
  .write()


module.exports = db;