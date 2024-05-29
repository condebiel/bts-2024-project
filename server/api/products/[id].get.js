import productsDB from '~/server/data/products-db'

// http://localhost:3000/api/products/12
export default defineEventHandler(async (event) => {
	const productId = parseInt(event.context.params.id)
	console.info(`GET /products/${productId}`)

	// get product filtered by id
	return productsDB.filter(product => {
			if (product.id === productId) {
				return product
			}
		})
})