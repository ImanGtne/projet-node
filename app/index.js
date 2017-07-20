const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

//const IndexCtrl = rgit equire('./controllers/IndexCtrl');

const LoginCtrl = require('./controllers/LoginCtrl');
const config = {
    name: "Bibi"
};

const port = 3000;
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.send(`Hello World inconnu!`));

// Sans vue
app.use(express.static(path.join(__dirname, '..', 'public')));
//     res.send(`Hello World ${name}!`);
// });

//const indexCtrl = new IndexCtrl(config);


//app.get('/:name?', indexCtrl.index.bind(indexCtrl));
app.get('/registration', (req, res) => {});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/generator', (req, res) => {
    res.render('generator');
});
app.get('/download', (req, res) => {});
app.post('/postRegistration', (req, res) => {});
app.post('/postLogin', (req, res) => {});
app.post('/postGenerator', (req, res) => {});

// Avec une vue
app.get('/:name?', (req, res) => {
    const name = req.params.name || 'inconnu';
    res.render('index', {
        name
    });
});
//app.post('/auth', indexCtrl.auth.bind(indexCtrl));


app.listen(port, () => console.log(`Connection ready on : ${port}`));