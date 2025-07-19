const client=require('./client');


async function init(){ 
    await client.set("name:1", "Omkar pathak")
    const result=await client.get("name:1");
    console.log(result);
}


init();
