const {db} = require('./config/db.js');

async function testConnection(){
    try {
        const data = await db.raw('select version()');
        console.log(data.rows);
    } catch (error) {
        console.log(error);
    }
}

testConnection();