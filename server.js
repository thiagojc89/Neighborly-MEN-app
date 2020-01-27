require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const app = express()
const PORT = process.env.PORT





// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))


app.use(session({
	secret: process.env.SESSION_SECRET,
	resave: false, 
	saveUninitialized: false
}))







// CONTROLLERS
const authController = require('./controllers/authController')
app.use('/auth', authController)





// ROUTES
app.get('/', (req, res) => {
	res.render('home.ejs')	
})



















app.listen(PORT, () => {
	console.log('Server running on port: ' + PORT);
})