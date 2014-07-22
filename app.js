var express = require('express'),
	bodyParser = require('body-parser'),
	app = express();

var articles = [];

app.use(bodyParser.urlencoded());


app.set('view engine', 'ejs');

//homepage

app.get('/', function(req, res){
  res.render('site/index');
});

//articles
app.get('/articles', function(req, res){
	// res.send('articles')
  res.render("articles/index", {articles: articles});
});

app.get('/articles/new', function(re, res) {
	res.send('new article')
	// res.render("articles/new");
});

app.get('/articles/:id', function(req, res) {
	// res.send("new id")

	var index = req.params.id;
	var book = articles[index];
	res.render("articles/show", {article: article})
})

app.post('/articles', function(req, res) {
	console.log(req.body.article);
	books.push(req.body.article);
	console.log("thanks dude!")
	res.redirect('/articles/');
});

app.listen(3000);