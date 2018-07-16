var express = require('express');
var app = express();

app.set('port',process.env.PORT || 3000);

// 定制404 页面
app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
// 定制500错误
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'),function(){
    console.log('Express Started on http://localhost:'+
    app.get('port')+'; press Ctrl - C to terminae');
});