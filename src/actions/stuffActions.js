import * as types from './actionTypes'

url = () => {
	return 'www.url.com'
}

export receiveStuff = json => {
	return {type: types.RECEIVE_STUFF, stuff: json.stuff}
}

export fetchStuff = () => {
	return dispatch => {
		return fetch(url(), {
			method: 'GET',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'x-api-key', apiKey,
				'Accept': 'application/json'
			}
		})
		.then(response => response.json())
		.then(json => dispatch(receiveStuff(json)))
	}
}