const express = require('express')
const app = express()

//body req is json!
app.use(express.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/oi', function (req, res) {
  res.send('Olá, mundo!')
})

//list of characters
const itens = ['Rick Sanchez', 'Morty Smith', 'Summer Smith']

//doing a CRUD
//Endpoint Read All -> [GET] /itens
app.get('/itens', function (req, res) {
  res.send(itens)
})

//Endpoint Read By Id -> [GET] /itens/:id
app.get('/itens/:id', function (req, res) {
  const id = req.params.id
  const item = itens[id - 1] //for a better user experience, 1 = 0 :) 
  res.send(item)
})

//Endpoint Create -> [POST] /itens
app.post('/itens', function (req, res) {
  const item = req.body
  itens.push(item.nome)
  res.send('Item inserido com sucesso')
})


app.listen(3000)