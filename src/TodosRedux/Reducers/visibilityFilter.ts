import { Action } from '../Actions'

export type StoreVisibilityFilter = {
    filter: string,
}

const visibilityFilter = (state = 'SHOW_ALL', action: Action.SetVisibilityFilter): string => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter