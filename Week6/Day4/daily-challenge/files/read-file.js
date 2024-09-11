import fs from "fs";

export const read = (file) => {
    fs.readFile(file, 'utf-8', (err, data) =>{
        if(err){
            console.log(err);
        } 
        console.log(data);
        
    })
}

