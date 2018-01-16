import React from 'react'
import { specs, describe, it } from 'storybook-addon-specifications'
import expect from 'expect'
import Model from '../src/model'
import microstate from 'microstates'

export default function ModelTests() {
  specs(() =>
    describe('Model', function() {
      describe('empty form', function() {
        let ms = microstate(Model)
        it('has empty username field', function() {
          expect(ms.state.username).toBeFalsy()
        })
      })
    })
  )

  return <h2>Model Tests</h2>
}
