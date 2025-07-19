import redis from 'redis'
const client = redis.createClient();
client.on("error", (err) => console.log("Redis Error:", err));

await client.connect();

export default client;
