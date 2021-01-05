let express = require('express')
let router = express.Router()

router.get('/', async function (req, res, next) {
    let data = {
        title: 'Find a language partner'
    }

    res.render('languagepartners.njk', data)
})

module.exports = router