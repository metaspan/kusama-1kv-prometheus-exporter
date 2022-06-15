// const promBundle = require("express-prom-bundle");
import express from 'express'
const app = express()
import ValidatorExporter from './validator-exporter.js'

const PORT = 3000

const config ={
	url: 'https://kusama.w3f.community/candidates',
	token: 'KSM',
    interval: 60 * 1000
}
let worker = new ValidatorExporter.ValidatorExporter(config)

app.get('/', (req, res) => {
	res.send('nothing to see here... try /metrics/&lt;stash&gt;')
})

app.get('/metrics/:stash', async (req, res) => {
    console.debug(req.params)
    if (!req.params.stash) {
    res.status(500).json({error: 'did you mean /metrics/<stash>'})
    }
    try {
        let data = await worker.query(req.params.stash)
        res.set("Content-Type","text/plain; version=0.0.4")
        res.send(data)
    } catch (err) {
        res.status(500).send(err)
    }
})

app.listen(PORT, (err) => {
    if (err) console.log("Error in server setup")
    console.log(`Server listening on http://localhost:${PORT}`)
})
