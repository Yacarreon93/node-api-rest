'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const Product = require('./models/product')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.get('/hello', (req, res) => {
// 	res.send({ message: 'Hello World!' });
// })

// app.get('/hello/:name', (req, res) => {
// 	res.send({ message: `Hello ${req.params.name}` });
// })

app.get('/api/products', (req, res) => {

	res.status(200).send({ products: [] })

})

app.get('/api/product/:productId', (req, res) => {



})

app.post('/api/product', (req, res) => {

	console.log('POST /api/product')
	console.log(req.body)

	let product = new Product()
	product.name = req.body.name
	product.picture = req.body.picture
	product.price = req.body.price
	product.category = req.body.category
	product.description = req.body.description

	product.save((err, productStored) => {

		if (err) {

			console.log(`Saving product ERROR: ${err}`)

		} else {

			res.status(200).send({ message: "The product was received", product: productStored })
			
		}

	})

})

app.put('/api/product/:productId', (req, res) => {


	
})

app.delete('/api/product/:productId', (req, res) => {


	
})

mongoose.connect('mongodb://localhost:27017/e-commerce', (err, res) => {

	if (err) {

		console.log(`Connection ERROR: ${err}`)

	}

	console.log("Connection to database stablished!")
	
	app.listen(port, () => {

		console.log(`API REST runs on http://localhost:${port}`)

	})

})
