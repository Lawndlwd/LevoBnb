export default function(context, inject) {
	const APPLICATION_ID = '3LWUG0HA7L'
	const API_KEY = '1cd64085e2f8f1d343257c7f760f44a8'
	const headers = {
		'X-Algolia-API-Key': `${API_KEY}`,
		'X-Algolia-Application-Id': `${APPLICATION_ID}`,
	}
	inject('dataApi', {
		getHome,
		getReviewsByHomeId,
		getUserByHomeId
	})
	async function getHome(homeId) {
		try {
			return unWarp(
				await fetch(
					`https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/homes/${homeId}`,
					{ headers }
				)
			)
		} catch (error) {
			return getErrorResponse(error)
		}
	}
	async function getReviewsByHomeId(homeId) {
		try {
			return unWarp(
				await fetch(
					`https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/reviews/query`,
					{
						headers,
						method: 'POST',
						body: JSON.stringify({
							filters: `homeId:${homeId}`,
							hitsPerPage: 3,
							attributesToHighlight: [],
						}),
					}
				)
			)
		} catch (error) {
			return getErrorResponse(error)
		}
	}
	async function getUserByHomeId(homeId) {
		try {
			return unWarp(
				await fetch(
					`https://${APPLICATION_ID}-dsn.algolia.net/1/indexes/users/query`,
					{
						headers,
						method: 'POST',
						body: JSON.stringify({
							filters: `homeId:${homeId}`,
							attributesToHighlight: [],
						}),
					}
				)
			)
		} catch (error) {
			return getErrorResponse(error)
		}
	}
	async function unWarp(response) {
		const json = await response.json()
		const { ok, status, statusText } = response
		return { json, ok, status, statusText }
	}
	async function getErrorResponse(error) {
		return {
			ok: false,
			status: 500,
			statusText: error.message,
			json: {},
		}
	}
}
