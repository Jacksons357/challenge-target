require('dotenv').config()

module.exports = {
	development: {
		dialect: 'mssql',
		host: process.env.DB_HOST,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		port: process.env.DB_PORT,
		logging: false,
		dialectOptions: {
			options: {
				encrypt: false,
			},
		},
	},
}
