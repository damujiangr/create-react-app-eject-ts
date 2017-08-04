import * as React from 'react'

import { OwnProps, ConnectedState, ConnectedDispatch } from '../Containers/FilterLink'

class Link extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, {}> {
  render() {
    const { active, children, onClick } = this.props

    if (active) {
      return <span>{children}</span>
    }
    return (
      // eslint-disable-next-line
      <a href="#"
        onClick={e => {
          e.preventDefault()
          onClick()
        }}
      >
        {children}
      </a>
    )
  }
}

export default Link
