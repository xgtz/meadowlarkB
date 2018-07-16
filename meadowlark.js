var express = require('express');
var app = express();
// 设置handlebars 视图引擎
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.set('port',process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    console.log('main home');
    res.render('home');
});
app.get('/about',function(req,res){
    res.render('about');
});
// 定制404 页面
app.use(function(req,res){
    res.status(404);
    res.render('404');
});
// 定制500错误
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'),function(){
    console.log('Express Started on http://localhost:'+
    app.get('port')+'; press Ctrl - C to terminae');
});