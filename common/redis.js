let config = require('../config')

let redis = require("redis");
rdb = redis.createClient();
rdb.select(config.redis.db);
module.exports = rdb;