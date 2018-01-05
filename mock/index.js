const express = require('express')
const app = express()
const device = require('./device')

/* 为app添加中间件处理跨域请求 */
app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.set('Access-Control-Allow-Headers', 'Login-Token, Content-Type')
  next()
})

app.use('/device', device)

app.listen('8090')
console.log('http://localhost:8090')
