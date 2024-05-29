function prettifyJson(json) {
	return JSON.stringify(json, null, 2)
}

export default defineEventHandler(async (event) => {
  const response = await $fetch('https://api.chucknorris.io/jokes/random')

  console.log('✅ response:', prettifyJson(response))

  if (response) {
    return response
  } else {
    throw createError({
      statusCode: 404,
      name: 'NotFoundError',
      message: 'Todo not found',
      statusMessage: 'Not Found',
    })
  }
})
