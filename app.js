var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

var articles = [];

app.use(bodyParser.urlencoded());


app.set('view engine', 'ejs');

//STATIC PAGES
app.get('/', function(req, res) {
	res.render('site/about');
});

app.get('/contact', function(req, res) {
	res.render('site/contact');
});

app.get('/about', function(req, res) {
	res.render('site/about');
});

//NEW ARTICLE CREATOR

app.get('/articles/new', function(req, res){
  res.render("articles/new");
});

app.get('/articles', function(req, res) {
	res.send(articles);
})

app.get('/articles/:id', function(req, res) {
	var index = req.params.id;
	var article = articles[index];
	res.render("articles/show", {article: article})
});

app.post('/articles', function(req, res) {
	console.log(req.body.articles);
	articles.push(req.body.article);
	console.log(articles)
	res.redirect('/articles');
});

app.listen(3000, function() {
	console.log("Crazy times on localhost:3000")
});