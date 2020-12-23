let express = require('express')
let router = express.Router()

router.get('/', async function (req, res, next) {
    let data = {
        title: 'Language Resources'
    }

    res.render('resources.njk', data)
})

module.exports = router