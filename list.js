import client from "./client.js";


async function init(){

    await client.lPop("out_list",'Hello Bro');
    await client.lPush("out_list",'2');
    
    const listItems = await client.lRange('out_list', 0, -1);

    console.log(listItems);
}


init();