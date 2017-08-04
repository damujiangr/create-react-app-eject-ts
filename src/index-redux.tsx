import * as React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './TodosRedux/Components/App'
import reducer from './TodosRedux/Reducers'

const store = createStore(reducer)

// 查看state的变化
console.log(store.getState())
store.subscribe(() =>
    console.log(store.getState())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
