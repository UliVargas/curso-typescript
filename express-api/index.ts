import express from 'express'
const app = express()

app.get('/', (req, res) => {
	res.status(401).json({
		ok: false,
		msg: 'No hay token en la petición!!'
	})
})

app.listen(3001, () => {
	console.log('Escuchando en puerto 3001')
})