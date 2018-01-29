//START SETUP
const express = require('express')
const logger = require("morgan")
const bodyParser = require('body-parser');

//Create instance of app
const app = express()

//Serve js and html in ejs
app.set('view engine', 'ejs')

//Ability to send static files
app.use(express.static('views'))
app.set('views', __dirname + '/views');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'))
// END SETUP


app.get('/', (req,res) => res.render('index.ejs', {name:"danny"}))
app.get('/isprime', (req,res) => res.render('isprime.ejs'))
app.get('/danny', (req,res) => res.send("Hello Danny!"))
app.get('/eric', (req,res) => res.send("Hello Eric!"))

app.get('/isprime/:num', (req,res) =>{
  let mynumber = req.params.num
  var isPrime = true
  for(var i = 2; i <= mynumber/2; i++){
    if(mynumber % i == 0){
      isPrime = false;
      break;
    }
  }
  res.render('primeresult.ejs', {number: mynumber, isPrime:isPrime})
} )


app.post('/uppercase', (req, res) => {
  let word = req.body.word
  console.log(word)
  let newWord = word.toUpperCase()
  res.send(newWord)
})

app.post('/isprime', (req, res) => {
    let mynumber = req.body.mynumber
    var isPrime = true
    for(var i = 2; i <= mynumber/2; i++){
      if(mynumber % i == 0){
        isPrime = false;
        break;
      }
    }
    res.render('primeresult.ejs', {number: mynumber, isPrime:isPrime})
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))
