var express = require("express")
var BP = require("body-parser")
app = express()

var port = 3000


app.use(BP.urlencoded({
    extended: true
}))

app.use(BP.json())

var root = '/public'

app.use(express.static(__dirname + root))

app.get("/test", function(request, res) {
    var param = request.query.username
    console.log('Get requested by ' + param)
    res.send('Thank you for requesting our Get Service')
})

app.post('/test', function(req, res) {
    console.log(req.body)
    var data = req.body
    console.log('Post requested here is the data :' + data)
    res.send('Thank you for requesting out POST service')
})

app.get("/calculator", function(req, res) {
    var n1 = parseInt(req.query.n1)
    var n2 = parseInt(req.query.n2)
    var sum = n1 + n2
    console.log("n1 is: " + n1)
    console.log("n2 is: " + n2)
    console.log("Total number is: " + sum)
    res.end()
})

//URL = http://127.0.0.1:3000/calculator?n1=4&n2=6

app.post('/calculator', function(req, res) {
    var n3 = parseInt(req.body.n1)
    var n4 = parseInt(req.body.n2)
    var sum1 = n3 + n4
    console.log("Total number is: " + sum1)
    res.end()
})

app.listen(port)
console.log("Listening" + port)