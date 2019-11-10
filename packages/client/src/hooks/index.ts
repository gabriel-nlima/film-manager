import { useEffect, useRef, useReducer } from 'react'
import { send } from '../api'
import { ReqStatus, Status, StatusAction } from '../Types'

export function useInterval(callback: any, delay: number) {
	const savedCallback = useRef<any>()

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current()
		}
		if (delay !== null) {
			let id = setInterval(tick, delay)
			return () => clearInterval(id)
		}
	}, [delay])
}

export const statusReducer = (state: Status, action: StatusAction): Status => {
	switch (action.type) {
		case ReqStatus.START:
			return {
				...state,
				isLoading: true,
				isError: false,
				errMsg: '',
			}
		case ReqStatus.SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: false,
				errMsg: '',
				data: action.payload,
			}
		case ReqStatus.FAILURE:
			return {
				...state,
				isLoading: false,
				isError: true,
				errMsg: action.errMsg,
			}
		default:
			return state
	}
}

export const useAxios = (
	method: 'GET' | 'POST' | 'PUT' | 'DELETE',
	url: string,
	payload?: any
) => {
	const [state, dispatch] = useReducer(statusReducer, {
		isLoading: false,
		isError: false,
		errMsg: '',
		data: [],
	})

	useEffect(() => {
		let didCancel = false
		const runRequest = async () => {
			dispatch({ type: ReqStatus.START })
			const [data, errMsg] = await send(method, url, payload)
			if (!didCancel && data) {
				dispatch({ type: ReqStatus.SUCCESS, payload: data })
			} else if (errMsg) {
				if (!didCancel) {
					dispatch({ type: ReqStatus.FAILURE, errMsg })
				}
			}
		}

		runRequest()
		return () => {
			didCancel = true
		}
	}, [method, url, payload])
	return state
}
