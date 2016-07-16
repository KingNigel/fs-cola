'use strict'
const fs=require('fs');
let dirObj={}
let dir=(path)=>{
    fs.stat(path, (err, stats)=>{
        if(err){
            throw new Error("路径不正确！");
        }
        if(!stats.isDirectory()){
            
           // throw new Error("路径不是一个文件夹！");
            //dirObj
        }
       fs.readdir(path,()=>{

       })


    })
}

module.exports=dir;

