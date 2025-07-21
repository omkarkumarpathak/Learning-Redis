import client from "./client.js";

async function init() {

    await client.xAdd('mystream', '*', 'temp',3);
            
    const messages=await client.xRange('mystream','-','+');
    console.log(messages);


   const response = await client.xRead(
  {
    key: 'mystream',
    id: '0' // start from beginning
  },
  {
    COUNT: 2,
    BLOCK: 5000
  }
);
    const lenght=await client.xLen('myStream');
    // console.log(lenght);
    // console.log(response);

}

init();
