import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import ModelTests from './model.test'

storiesOf('Microstates', module)
  .add('Introduction', () => (
    <section>
      <h1>Microstates</h1>
      <h2>Predictable State Transitions for Composable Immutable Data</h2>
    </section>
  ))
  .add('Model', ModelTests)
