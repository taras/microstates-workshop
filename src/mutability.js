const { assign } = Object

export default function() {
  console.log('hello there')

  let v1 = {
    a: {},
    b: { c: { d: {} } }
  }

  let v2 = assign({}, v1)

  console.log('v1:', v1)
  console.log('v2:', v2)
}
