module.exports = (req, res, next) {
    //here we use express-validator
    req
        .checkBody('name', 'Please, tell me your name!')
        .notEmpty() //here we need to validate another issues, like a numeric for example
    req
        .checkBody('email', 'Please, tell me your email!')
        .notEmpty()
        .isEmail()
    req
        .checkBody('password', 'Please, enter a valid password!')
        .notEmpty()      
        
    let errors = req.validationErrors()

    if (!errors) {
        return next()
    }

    return res.redirect('/users/add')
}