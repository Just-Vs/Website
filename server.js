const express = require('express')
const app = express()

app.set('view-engine', 'ejs')
app.get('/', (req, res)=> {
  res.render('index.ejs', {numb:'5'})
})

app.get('/login', (req, res)=> {
  res.render('login.ejs', {numb:'5'})
})

app.get('/register', (req, res)=> {
  res.render('register.ejs', {numb:'5'})
})

app.post('/register', (req, res) => {
  
})
app.listen(3000)
