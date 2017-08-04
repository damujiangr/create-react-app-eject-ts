import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { addTodo } from '../Actions'
import { Store } from '../Reducers'

type OwnProps = {}

type ConnectDispatch = {
  add: (n: string) => void;
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<Array<Store.Todo>>): ConnectDispatch => ({
  add: (value: string) => dispatch(addTodo(value))
})

class AddTodoComponent extends React.Component<ConnectDispatch & OwnProps, {}> {
  render() {
      const { add } = this.props
      let input: HTMLInputElement
      return (
          <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                add(input.value)
                input.value = ''}}>
              <input ref={(node: HTMLInputElement) => {
                  input = node
              }}/>
              <button type="submit">
                Add Todo
              </button>
            </form>
          </div>
      )
  }
}
const AddTodo: React.ComponentClass<OwnProps> = connect(null, mapDispatchToProps)(AddTodoComponent)

export default AddTodo
