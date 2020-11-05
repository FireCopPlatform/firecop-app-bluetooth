import gql from 'graphql-tag'

// getters
export const GET_USER = gql`
	mutation login($email: String!, $password: String!) {
		login (email: $email, password: $password) {
			token
		}
	}
`

// setters
export const CREATE_USER = gql`
	mutation signup($email: String!, $password: String!, $name: String!) {
		signup (email: $email, password: $password, name: $name) {
			user {
				id name email
			}
			token
		}
	}
`
