module.exports = (app) => {
    app.user('/', require('./routes/main'))
}