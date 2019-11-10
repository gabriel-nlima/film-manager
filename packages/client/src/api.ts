import axios from 'axios'

const instance = axios.create()

instance.interceptors.request.use(async (config) => {
	const token = localStorage.getItem('filmmanagertoken')
	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}
	return config
})

export async function send(
	method: 'GET' | 'POST' | 'PUT' | 'DELETE',
	url: string,
	payload?: any
): Promise<[any, undefined] | [undefined, string]> {
	try {
		const res = await instance({ method, url, data: payload })
		return [res.data, undefined]
	} catch (error) {
		let msg = 'Erro inesperado.'
		if (error.response) {
			msg = error.response.data
		} else if (error.request) {
			msg = error.request.statusText.length && error.request.statusText
		} else {
			msg = error.message
		}

		return [undefined, msg]
	}
}

export default instance
