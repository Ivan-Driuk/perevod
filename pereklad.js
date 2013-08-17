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
    res.render('ch2.ejs', {
        title: "Переклад",
        heading: "Конструктор",
        something: "Тут щось про конструктор",
        layout: false
    });
});

app.get('/ch3', function(req, res) {
    res.render('ch3.ejs', {
        title: "Переклад",
        heading: "Модуль",
        something: "Щось про модуль",
        layout: false
    });
});

app.get('/ch4', function(req, res) {
    res.render('ch4.ejs', {
        title: "Переклад",
        heading: "Синглтон",
        something: "мабуть найзнаменітіший патерн всіх часів та народів",
        layout: false
    });
});

var port = process.env.PORT || 5000;
app.listen(process.env.PORT, process.env.IP/*port, function() {
	console.log("Listening on " + port);
}*/);