import productsDB from '~/server/data/products-db'

// http://localhost:3000/api/products
export default defineEventHandler(async (event) => {
	// it's user auth?
	// select from DB

	// get all products
	return {
		products: productsDB
	}
})