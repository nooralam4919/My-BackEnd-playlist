const fs = require('fs');

// fs.writeFile("massage.txt","noorala",(err)=>{
//     if(err) throw err;
//     console.log("The file was saved!");
// })

fs.readFile('massage.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})