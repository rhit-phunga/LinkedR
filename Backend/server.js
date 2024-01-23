const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors())

//Do not push with credentials
const connection = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "",
})

app.get('/', (re,res) => {
    return res.json("from backend side");
})

//connection
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
    }
  
    console.log('Connected to MySQL database with id ' + connection.threadId);
  
    // Execute a query
    const queryString = 'SELECT * FROM [User]';
  
    connection.query(queryString, (err, results) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        return;
      }

    // Process the results
    console.log('Query results:', results);

    // Close the connection
    connection.end((err) => {
      if (err) {
        console.error('Error closing MySQL connection: ' + err.stack);
        return;
      }

      console.log('MySQL connection closed.');
    });
  });
});

app.get('/users', (req, res)=> {
    const sql = "SELECT * from [Users]";
    connection.query =(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.listen(8801, ()=> {
    console.log("listening from port 8801");
})