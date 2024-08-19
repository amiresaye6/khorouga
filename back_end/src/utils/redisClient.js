const redis = require('redis');

const redisClient = redis.createClient();

(async () => {
    redisClient.on("error", (err) => {
        console.error("Redis client error:", err);
    });

    redisClient.on("ready", () => {
        console.log("Redis client is ready");
    });

    await redisClient.connect();
})();

module.exports = redisClient;
