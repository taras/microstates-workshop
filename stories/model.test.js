import React from 'react'
import { specs, describe, it } from 'storybook-addon-specifications'
import expect from 'expect'
import Model from '../src/model'
import microstate from 'microstates'

export default () =>
  describe('Model', function() {
    let ms = microstate(Model)
    it('has an empty email field', function() {
      expect(ms.state.email).toEqual('')
    })
    it('has an empty password field', function() {
      expect(ms.state.password).toEqual('')
    })
    it('is invalid when email and password are empty', function() {
      expect(ms.state.isValid).toEqual(false)
    })

    let msFilled = microstate(Model, { email: 'hello@world.com', password: '********' })
    it('is valid when email and password are not empty', function() {
      expect(msFilled.state.isValid).toEqual(true)
    })

    let incorrectEmail = microstate(Model, {
      email: 'hello',
      password: '******'
    })
    it('has isValidEmail false when email does not have @', function() {
      expect(incorrectEmail.state.isValidEmail).toEqual(false)
    })
    it('is invalid when email has no @', function() {
      expect(incorrectEmail.state.isValid).toEqual(false)
    })

    it('makes the form valid when email address has an @', function() {
      let afterInput = incorrectEmail.email.set('hello@world.com')
      expect(afterInput.state.email).toEqual('hello@world.com')
      expect(afterInput.state.isValid).toEqual(true)
    })
  })
