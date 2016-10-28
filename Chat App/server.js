
var express = require('express')
    , app = express()
    , cors = require('cors')
    , port = process.env.PORT || 8005
    , bodyParser = require('body-parser')

app.use(bodyParser());
app.use(cors());
app.use(express.static('./app'));
app.get('/demo', function (req, res) {
    console.log(req.url);
});

app.listen(port, function () {
    console.log('server started at' + port);
});