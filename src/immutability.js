import microstate, * as MS from 'microstates'

export default function() {
  class Address {
    streetNumber = MS.Number
    street = MS.String
    city = MS.String
  }

  class Person {
    name = MS.String
    address = Address
  }

  let p = microstate(Person, { name: 'Taras', address: { city: 'Toronto' } })
}
