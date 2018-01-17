import React from 'react'

import { storiesOf } from '@storybook/react'
import { specs } from 'storybook-addon-specifications'

import 'foundation-sites/dist/css/foundation.css'
import '../src/LoginForm.css'

import ModelTests from './model.test'
import ReactLoginForm from '../src/react/LoginForm'
import immutable from '../src/immutability'

let stories = storiesOf('React', module)

stories.add('Introduction', () => (
  <section>
    <h1>Microstates</h1>
    <h2>Predictable State Transitions for Composable Immutable Data</h2>

    {immutable()}
  </section>
))

stories.add('Model', function() {
  specs(() => ModelTests())

  return <h2>Model Tests</h2>
})

stories.add('Login Form', function() {
  return <ReactLoginForm />
})
