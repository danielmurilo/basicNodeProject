const express = require('express')
const { MongoClient } = require('mongodb')
const DB_URL = 'mongodb://localhost:27017'
const DB_NAME = 'ocean-data-base-09-02-2023'

async function main() {

  //conectando banco de dados
  console.log('Conectando Banco de Dados...')
  const client = await MongoClient.connect(DB_URL)
  const db = client.db(DB_NAME)
  const collection = db.collection('characters')
  console.log('Banco de Dados conectado com sucesso!')

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
  app.get('/itens', async function (req, res) {
    const documentos = await collection.find().toArray()
    res.send(documentos)
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

}

main()