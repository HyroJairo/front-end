const express=require('express')
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');

// create a connection variable with the required details
var con =  mysql.createConnection({
    host: 'lol-stat-database.clkvfbp0ta4r.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'SomethingGreat22',
    database: 'leagueDB'
});

// make to connection to the database
con.connect(function(err) {
    if (err) throw err;
});

app.get('/', (req, res)=> {
    res.json('OK');
    console.log('sigh');
    con.query("select * from champions;", function(err, res, fields) {
        if(err) throw err;
        console.log(res);
    });
    res.json('Form received')
})

app.listen(3000, ()=> {
    console.log('Port 3000')
})
