const { Pool } = require('pg');

const PG_URI= 
'postgres://sivtimnz:5aV2aGfirhXxdWpXaa3hYYCyHAHtXn6y@ruby.db.elephantsql.com:5432/sivtimnz';



const pool = new Pool({
    connectionString: PG_URI,
});


module.exports ={
    query:( text, params, callback)=>{
        console.log('executed query', text);
        return pool.query(text,params,callback);
    },
}

