'use strict'

const mongoose = require('mongoose')

const app = require('./app')

const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/e-commerce', (err, res) => {

	if (err) {

		console.log(`Connection ERROR: ${err}`)

	}

	console.log("Connection to database stablished!")
	
	app.listen(port, () => {

		console.log(`API REST runs on http://localhost:${port}`)

	})

})
