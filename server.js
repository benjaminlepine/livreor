// Includes
var express = require('express');

// Initialisation de express dans 'app'
var app = express();

app.set('view engine','ejs');
app.use(express.static('public'));
app.get('/', (request, response) => {
    response.render('pages/index', {test:'salut'})
});

app.post('/', (request, response)=>{
    console.log(request.body)
})

// Declaration du port d'écoute
app.listen(8080)


