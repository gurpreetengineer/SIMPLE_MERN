exports.getUser = (req, res, next) => {
  res.status(200).json({
    msg: 'Here is the user list'
  })
}

exports.addUser = (req, res, next) => {
  res.status(200).json({
    msg: 'User Added'
  })
}
exports.updateUser = (req, res, next) => {
  res.status(200).json({
    msg: 'Updated User'
  })
}
exports.deleteUser = (req, res, next) => {
  const userId = req.params.id
  res.status(200).json({
    msg: 'User Deleted Successfully',
    userId
  })
}

