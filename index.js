'use strict'

const mongoose = require('mongoose')

const app = require('./app')

const config = require('./config')

mongoose.connect(config.db, (err, res) => {

	if (err) {

		console.log(`Connection ERROR: ${err}`)

	}

	console.log("Connection to database stablished!")
	
	app.listen(config.port, () => {

		console.log(`API REST runs on http://localhost:${config.port}`)

	})

})
