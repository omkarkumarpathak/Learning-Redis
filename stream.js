import client from "./client.js";

async function init() {
    await client.xAdd("mystream", "*", {
        name: "Omkar",
        msg: "Hello from Redis stream",
    });
    
    const messages=await client.xRange('mystream','-','+');
    console.log(messages);

}

init();
