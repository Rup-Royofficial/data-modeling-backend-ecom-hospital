import express from 'express'

const app = express()
const port = process.send.PORT || 3000

app.get('/', (req,res) => {
    res.send('hi')
})

app.listen(port, () => {
    res.listen(`localhost:${port}`)
})