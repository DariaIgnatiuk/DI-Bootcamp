const fs = require("fs");

const write = (file, data) => {
    fs.writeFile(file, data, 'utf-8', (err) =>{
        if(err) return console.log(err)})
}


const read = (file) => {
    fs.readFile(file, 'utf-8', (err, data) =>{
        if(err){
            console.log(err);
            return
        } 
        write('destination.txt',data)
    })
}



read('source.txt')
