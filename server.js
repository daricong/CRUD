const express = require('express')
const app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



var RES = require('./res');



app.post('/create', async function (req, res) {

    try {


        let query = `Insert into user SET ?`;
        var data = await RES.query_action(query, {
            'first_name': req.body.firstname,
            'last_name': req.body.lastname,
            'class_name': req.body.classname,
            'birthday': req.body.birthday
        });
        console.log(data);

        res.send(`Insert Successfully`);


    }
    catch (err) {
        console.log(err);
        res.send(`err`, err);
    }
});


app.get('/getdata', async function (req, res) {
    try {
        let query = `Select * from user`;
        var data = await RES.query(query);
        res.send(data);
    }
    catch (err) {
        res.send(`err`, err);
        console.log(err);
    }
})


app.post('/update', async function (req, res) {
    try {
        let query = `UPDATE user SET? where id='${req.body.id}'`;
        var data = await RES.query_action(query, {
            'first_name': req.body.firstname,
            'last_name': req.body.lastname,
            'class_name': req.body.classname,
            'birthday': req.body.birthday
        });
        console.log(data);
        res.send('Successfully updated');
    }
    catch (err) {

        res.send(`err`, err);
        console.log(err);
    }
})

app.delete('/delete', async function (req, res) {
    try {
        let query = `DELETE from user where id='${req.body.id}'`;
        var data = await RES.query(query);
        console.log(data);
        res.send('User deleted');
    }
    catch (err) {

        res.send(`err`, err);
        console.log(err);
    }
})




app.listen(3000);