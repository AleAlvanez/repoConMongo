const isAuthenticated = require('../middlewares/isAuthenticated')

module.exports = async (app) => {

    app.get('/resource', async(req,res) => {
        res.render('resource')
        
    })
}