// Modules and Globals
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// Controllers & Routes
app.use('/places/', require('./controllers/places'))

// Route to Home Page
app.get('/', (req, res) => {
    res.render('home')
})

// Wildcard Route
app.get('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT)




// require('dotenv').config()
// const express = require('express')
// const app = express()

// //Express Settings
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())
// app.use('/places', require('./controllers/places'))
// app.use(express.static('public'))

// //Controllers & Routes
// app.get('/', (req, res) => {
//     //name of jsx page 'home.jsx'
//     res.render('home')
//   })
  
// app.get('*', (req, res) => {
//     //name of jsx page 'error404.jsx;
//     res.render('error404')
//   })
  
//   // GET /places
// app.get('/', (req, res) => {
//     res.render('./places/index')
//   })
  

// app.listen(process.env.PORT)
