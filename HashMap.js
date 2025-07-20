import client from "./client.js";

async function init(){
    await client.hSet('folder1:folder2:Our_HashMap',{
        model:'1234',
        brand:'Hello',
    });

    await client.hDel('folder1:folder2:Our_HashMap','firstname:1')
    const res=await client.hGet('folder1:folder2:Our_HashMap', 'model');
    console.log(res);
}

init();