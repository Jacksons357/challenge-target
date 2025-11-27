import { app } from './app'

const port = Number(process.env.PORT) || 3333

app
	.listen({
		port,
		host: '0.0.0.0',
	})
	.then(() => {
		app.log.info(`Server is running on port ${port}`)
		app.log.info(
			`Swagger documentation available at http://localhost:${port}/docs`,
		)
	})
