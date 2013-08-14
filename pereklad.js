var express = require("express");
var app = express();
app.use(express.logger());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index.ejs', {
		title: "Переклад",
		heading: "Книга про джаваскрипт",
		something: "Оце вирішив перекласти книгу по патернах джаваскрипт.",
		layout: false
	});
});

app.get('/ch1', function(req, res) {
    res.render('ch1.ejs', {
        title: "Переклад",
        heading: "Що таке патерн",
        something: "Використати ангулар та монго поки не вистачило розуму, на превеликий жаль, тому буду просто відображати сторінки глав",
        layout: false
    });
});

app.get('/ch2', function(req, res) {
    res.render('ch1.ejs', {
        title: "Переклад",
        heading: "Патерни",
        something: "Нарешті доходимо до саміх патернів",
        layout: false
    });
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});