module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: ['react-native-classname-to-style',
		[
			'module:react-native-dotenv',
			{
				moduleName: '@env',
				path: '.env',
				blacklist: null,
				whiteist: null,
				safe: false,
				allowUndefined: true
			}
		],
		[
			'react-native-platform-specific-extensions',
			{
				extensions: ['scss', 'sass'],
			},
		],
		[
			"module-resolver",
			{
				root: ["./"],
				alias: {
					src: "./src"
				},
			},
		],
	],
}
