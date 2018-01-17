import * as MS from 'microstates'

export default class LoginModel {
  email = MS.String
  password = MS.String

  get isValid() {
    return this.isValidEmail && this.password !== ''
  }

  get isValidEmail() {
    return this.email !== '' && this.email.indexOf('@') !== -1
  }
}
