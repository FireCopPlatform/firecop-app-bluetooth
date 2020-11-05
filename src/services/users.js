import gql from 'graphql-tag'

// getters
export const GET_USERS = gql`
	query {
		users {
			id
			name
		}
	}
`

// setters
export const CREATE_USER = gql`
	mutation($data: UserCreateInput!) {
		createUser(data: $data) {
			id
			name
		}
	}
`
