const redis = require('ioredis');
const {promisify} = require('util');
const config = require('../config');

const redisClient = new redis.Cluster({
    host: config.redis.host,
    port: config.redis.port,
    // password: config.redis.password
});

redisClient.saddAsync = promisify(redisClient.sadd).bind(redisClient);
redisClient.sremAsync = promisify(redisClient.srem).bind(redisClient);
redisClient.sinterAsync = promisify(redisClient.sinter).bind(redisClient);
redisClient.delAsync = promisify(redisClient.del).bind(redisClient);
redisClient.hmsetAsync = promisify(redisClient.hmset).bind(redisClient);
redisClient.hmgetAsync = promisify(redisClient.hmget).bind(redisClient);
redisClient.hgetallAsync = promisify(redisClient.hgetall).bind(redisClient);
redisClient.hgetAsync = promisify(redisClient.hget).bind(redisClient);
redisClient.hsetAsync = promisify(redisClient.hset).bind(redisClient);

module.exports = redisClient;
