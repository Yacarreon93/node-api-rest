'use restrict'

const Product = require('../models/product')

function getProduct(req, res) {

	let productId = req.params.productId

	Product.findById(productId, (err, product) => {

		if (err) return res.status(500).send({ message: `Saving product ERROR => ${err}` })

		if (!product) return res.status(404).send({ message: `The product doesn't exist` })

		return res.status(200).send({ product })

	})
}

function getProducts(req, res) {

	Product.find({}, (err, products) => {

		if(err) return res.status(500).send({ message: `Saving product ERROR => ${err}` })

		if (!products) return res.status(404).send({ message: `There is no products` })

		res.status(200).send({ products })

	})
}

function saveProduct(req, res) {

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
}

function updateProduct(req, res) {
	
	let productId = req.params.productId
	let update = req.body

	Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {

		if (err) res.status(500).send({ message: `Updating product ERROR => ${err}` })

		res.status(200).send({ product: productUpdated })

	})
}

function deleteProduct(req, res) {

	let productId = req.params.productId

	Product.findById(productId, (err, product) => {

		if (err) res.status(500).send({ message: `Deleting product ERROR => ${err}` })

		if (!product) res.status(404).send({ message: `The product doesn't exist` })

		product.remove(err => {

			if(err) res.status(500).send({ message: `Deleting product ERROR => ${err}` })

			res.status(200).send({ message: 'The product has been deleted' })

		})
		
	})
}

module.exports = {
	getProduct,
	getProducts,
	saveProduct,
	updateProduct,
	deleteProduct
}