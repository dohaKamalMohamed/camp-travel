const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


require('./app/startup/db')();
require('./app/startup/routes')(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname,'./dist')));
// app.use('/',express.static(path.join(__dirname,'./dist'))); 

// app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname,'dist','index.html'));
//     });


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`connected the port : ${port}`));

