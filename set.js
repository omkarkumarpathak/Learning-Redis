import client from "./client.js";

async function init(){

    await client.sAdd('bikes:racing:frame','omkar');
    const res=await client.sRem('bikes:racing:frame','omkar:1');
    console.log(res);

}

init();