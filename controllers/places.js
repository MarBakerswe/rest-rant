const router = require('express').Router()

//New Page
router.get('/new', (req, res) => {
  res.render('places/new')
})

//Homepage Index
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/restaurant1.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/restaurant2.jpg'
      }]
      
      res.render('places/index', { places })

})

module.exports = router
