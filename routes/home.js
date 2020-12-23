let express = require('express')
let router = express.Router()

router.get('/', async function (req, res, next) {
    let data = {
        title: 'CYF Language Exchange'
    }

    res.render('index.njk', data)
})

module.exports = router