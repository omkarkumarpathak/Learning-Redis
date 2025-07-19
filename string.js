import client from "./client.js";

// async function init(){ 
//     await client.set("name:1", "Omkar pathak")
//     const result=await client.get("name:1");
//     console.log(result);
// }


async function init(){

    await client.lPop("out_list",'Hello Bro');
    await client.lPush("out_list",'2');
    
    const listItems = await client.lRange('out_list', 0, -1);

    console.log(listItems);
}


init();
