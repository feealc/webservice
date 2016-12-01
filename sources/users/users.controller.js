import Users from './users.model.js'

const privateFields = '-password -__v'

module.exports = {
  list,
  get,
  disable,
  create,
}

function list (req, res) {
  // console.log(req.query) // recebe os parametros recebidos atraves da url
  // Users.find({}, function(err, users) {
  //   res.json(users)
  // })

  Users
    .find({active: {$ne: false}}, privateFields)
    .then(users => res.json(users))
    .catch()
}

function get (req, res) {
  Users
    .findById(req.params.id, privateFields)
    .then(user => res.json(user))
}

function disable (req, res) {
  Users
    .findByIdAndUpdate(req.params.id, {$set: {active: false}})
    .then(res.json({message: 'deleted'}))
    // .findByIdAndDelete(req,params.id)
}

function create (req, res) {
  console.log(req.body)

  const user = new Users(req.body)

  user
    .save()
    .then(() => res.status(200).json({message: 'created'}))
    .catch((err) => {
      console.log(err)
      res.status(400).json({message: 'error on created user'})
    })
}









