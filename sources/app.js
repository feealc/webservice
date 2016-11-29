import express from 'express'

const server = express()
const port = process.env.PORT || 3000

server.get('/users', function (req, res) {
  // res.send('ok')
  // res.status(204).send('ok')
  const users = [
    {name: 'Darlan'},
    {name: 'Carla'},
  ]
  res.json(users)
})

server.listen(port, () => console.log(`localhost:${port}`))

