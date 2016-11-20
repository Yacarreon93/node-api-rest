'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/hello', (req, res) => {

	res.send({ message: 'Hello World!' });

})

app.get('/hello/:name', (req, res) => {

	res.send({ message: `Hello ${req.params.name}` });

})


app.listen(port, () => {

	console.log(`API REST runs on http://localhost:${port}`)

})