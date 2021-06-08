const redis = require('redis');
const {promisify} = require('util');
const config = require('../config');

const redisClient = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    // password: config.redis.password
});

redisClient.selectAsync = promisify(redisClient.select).bind(redisClient);
redisClient.saddAsync = promisify(redisClient.sadd).bind(redisClient);
redisClient.sremAsync = promisify(redisClient.srem).bind(redisClient);
redisClient.sinterAsync = promisify(redisClient.sinter).bind(redisClient);
redisClient.delAsync = promisify(redisClient.del).bind(redisClient);

module.exports = redisClient;
