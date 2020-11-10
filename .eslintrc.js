module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true
	},
	extends: [
		'airbnb',
		'prettier/react',
		'eslint:recommended',
		'plugin:prettier/recommended',
	],
	rules: {
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.js', '.jsx'],
			},
		],
		'import/no-unresolved': 'off',
		'no-console': 0,
		'react/prop-types': 'off',
		'import/prefer-default-export': 'off'
	},
}
