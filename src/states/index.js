import {atom} from 'recoil'

export const userTokenState = atom({
	key: 'userToken',
	default: null,
})
export const userNameState = atom({
	key: 'userName',
	default: null,
})
export const isLoggedInState = atom({
	key: 'isLoggedIn',
	default: false,
})
