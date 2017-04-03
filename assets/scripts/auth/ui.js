'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}

const signInSucess = (data) => {
  console.log('sign in success ran . data is :', data)
  store.user = data.user
}

const signInFailure = (error) => {
  console.error('sign in success failed . error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSucess,
  signInFailure
}
