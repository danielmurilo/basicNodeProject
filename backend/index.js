const express = require('express')
const { MongoClient, ObjectId } = require('mongodb')
//const DB_URL = 'mongodb://localhost:27017'
const cors = require('cors')
const DB_URL = 'mongodb+srv://danielmurilo:1mXwoxTEF3jhmDgG@cluster0.miypfcw.mongodb.net'
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

  //allow cors!
  app.use(cors())

  app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.get('/oi', function (req, res) {
    res.send('Olá, mundo!')
  })

  //doing a CRUD
  //Endpoint Read All -> [GET] /itens
  app.get('/itens', async function (req, res) {
    const documentos = await collection.find().toArray()
    res.send(documentos)
  })

  //Endpoint Read By Id -> [GET] /itens/:id
  app.get('/itens/:id', async function (req, res) {
    const id = req.params.id
    const item = await collection.findOne({ _id: new ObjectId(id) })
    res.send(item)
  })

  //Endpoint findByName -> [GET] /itens/name/:name
  app.get('/itens/name/:name', async function (req, res) {
    const name = req.params.name
    const item = await collection.findOne({ 'nome': name })
    res.send(item)
  })

  //Endpoint Create -> [POST] /itens
  app.post('/itens', async function (req, res) {
    const item = req.body
    await collection.insertOne(item)
    res.send(item)
  })

  //Endpoint Update -> [PUT] /itens/:id
  app.put('/itens/:id', async function (req, res) {
    const id = req.params.id
    const body = req.body
    await collection.updateOne({ _id: new ObjectId(id) },{ $set: body })
    res.send(body)
  })

  //Endpoint Delete -> [DELETE] /itens/:id
  app.delete('/itens/:id', async function (req, res) {
    const id = req.params.id
    await collection.deleteOne({ _id: new ObjectId(id) })
    res.send('registro excluído com sucesso!')
  })

  app.listen(3000)

}

main()
