const fs = require("fs");

const read = (file) => {
    fs.readFile(file, 'utf-8', (err, data) =>{
        if(err) return console.log(err)
       console.log(data); 
    })
}


const write = (file, data) => {
    fs.writeFile(file, data, 'utf-8', (err) =>{
        if(err) return console.log(err)})
}

module.exports = {
    read,
    write
}

// write('Hello World.txt', 'Hello World !!')
// write('Buy World.txt', 'Buy World !!')
