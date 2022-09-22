var express = require('express');
var path = require('path');
var http = require('http');
var indexRouter = require('./routes/index');
var User = require('./routes/user');
var cors = require('cors');

var app = express();
const server = http.createServer(app);

app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use('/images', express.static(path.join(__dirname, 'public/images')));
// app.use('/data', express.static(path.join(__dirname, '/data/')));

// app.use('/', indexRouter);
app.use('/', indexRouter);
app.use('/User', User);


// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

app.set('port', process.env.PORT || 3022);
server.listen(app.get('port'),
  function () {
    console.log("Express server listening on port " + app.get('port'));
  });
module.exports = app;
