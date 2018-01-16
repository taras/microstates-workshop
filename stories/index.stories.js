import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { specs } from 'storybook-addon-specifications'
import ReactLoginForm from '../src/react/LoginForm'
import 'foundation-sites/dist/css/foundation.css'
import '../src/LoginForm.css'

import ModelTests from './model.test'

let stories = storiesOf('Microstates', module)

stories.add('Introduction', () => (
  <section>
    <h1>Microstates</h1>
    <h2>Predictable State Transitions for Composable Immutable Data</h2>
  </section>
))

stories.add('Model', function() {
  specs(() => ModelTests())

  return <h2>Model Tests</h2>
})

stories.add('React Login Form', function() {
  return <ReactLoginForm />
})
