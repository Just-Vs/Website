const express = require('express')
const app = express()
const passport = required('passport')

const users = []
const bcrypt = require('bcrypt')
const = initializePassport = require('./passport-config')

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res)=> {
  res.render('index.ejs', {numb:'5'})
})

app.get('/login', (req, res)=> {
  res.render('login.ejs', {numb:'5'})
})

app.post('/login', (req, res) => {

})

app.get('/register', (req, res)=> {
  res.render('register.ejs', {numb:'5'})
})

app.post('/register', async (req, res) => {
  //req.body.name
  try {
    const hashedPassword = await bcrypt.has(req.body.password, 10)
    user.push({
      id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
  console.log(users)
})
app.listen(3000)
