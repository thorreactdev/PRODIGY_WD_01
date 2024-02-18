const mysql = require('mysql2');
const db = mysql.createConnection({
    
});

const connection = async()=>{
    try {
        await db.connect((err)=>{
            if(!err){
                console.log("Database Connected");
            }else{
                console.log("Connection Failed");
            }

        })
        
    } catch (error) {
        console.log(error);
    }

};

module.exports ={
    db: db.promise(), connection
}
