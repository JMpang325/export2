var geolib= require('./geolib')
var geo = require ('spherical-geometry-js')

var bankAccount =require ("./bank account/data")
console.log(bankAccount)
bankAccount.moneyIn(1000)
console.log(bankAccount)
bankAccount.moneyOut(200)
console.log(bankAccount)
