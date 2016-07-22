'use strict'
const fs=require('fs');

function Entry(entry){
    this.id=entry.id;
    this.path=entry.path;
    this.child=entry.child;
    this.parent=entry.parent;
    this.type=entry.type;
}
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

