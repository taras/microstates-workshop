import { Component, createElement } from 'react'
import microstate from 'microstates'
import { map } from 'funcadelic'
import hoistStatics from 'hoist-non-react-statics'

/**
 * Connect function creates a wrapper around a React Component. This wrapper
 * manages the microstate and ensuring that invoked transitions re-render the
 * wrapped component.
 *
 * @param {Microstate} Model
 * @param {ReactComponent} WrappedComponent
 */
export default function connect(Model, WrappedComponent) {
  class Connect extends Component {
    constructor(props, context) {
      super(props, context)

      /**
       * Create microstate with initial state. This is what the users will see when
       * the app first loads.
       */
      this.microstate = microstate(Model, {
        ...props
      })
    }

    /**
     * Actions are transitions that are wrapped with code that'll cause the component to rerender.
     */
    get actions() {
      return map(
        transition => (...args) => {
          this.microstate = transition(...args)
          this.forceUpdate()
        },
        this.microstate
      )
    }

    render() {
      return createElement(WrappedComponent, {
        model: this.microstate.state,
        actions: this.actions,
        ...this.props
      })
    }
  }

  Connect.WrappedComponent = WrappedComponent

  return hoistStatics(Connect, WrappedComponent)
}
