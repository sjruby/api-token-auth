'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

  api.signIn(data)
    .then(ui.signInSucess)
    .catch(ui.signInFailure)
}

const onSignout = function (event) {
  event.preventDefault()
  console.log('sign out buttons is working')

  api.signOut()
    .then(ui.signOutSucess)
    .catch(ui.signOutFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignout)
}

module.exports = {
  addHandlers
}
