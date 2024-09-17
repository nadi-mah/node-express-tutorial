const authorized = (req, res, next) => {
    const { user } = req.query
    if (user === 'nadia') {
        req.user = { name: 'nadia', id: 1 }
        next()
    }else{
        res.status(401).send('Unauthorized')
    }

}

module.exports = authorized