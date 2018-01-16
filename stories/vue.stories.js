import Vue from 'vue'

import { storiesOf } from '@storybook/vue'
import LoginForm from '../src/vue/LoginForm.vue'

import 'foundation-sites/dist/css/foundation.css'
import '../src/LoginForm.css'

let stories = storiesOf('Vue', module).add('Login Form', () => LoginForm)
