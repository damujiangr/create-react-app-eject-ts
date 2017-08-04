import * as Redux from 'redux'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../Actions'
import Link from '../Components/Link'
import { Store } from '../Reducers/index'

export type OwnProps = {
  filter: string
}

export type ConnectedState = {
  active: boolean
}

export type ConnectedDispatch = {
  onClick: () => void
}

const mapStateToProps = (state: Store.All, ownProps: OwnProps): ConnectedState => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch: Redux.Dispatch<Store.VisibilityFilter>, ownProps: OwnProps): ConnectedDispatch =>
    ({
      onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
      }
})

const FilterLink: React.ComponentClass<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
