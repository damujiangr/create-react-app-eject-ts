import * as React from 'react'
import FilterLink from '../Containers/FilterLink'

class Footer extends React.Component {
  render() {
    return (
      <p>
        Show:
        <FilterLink filter="SHOW_ALL">
          All
        </FilterLink>
        <span> - </span>
        <FilterLink filter="SHOW_ACTIVE">
          Active
        </FilterLink>
        <span> - </span>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
        </FilterLink>
      </p>
    )
  }
}

export default Footer
