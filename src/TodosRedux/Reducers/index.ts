import { combineReducers } from 'redux'
import todos from './todos'
import { StoreTodo } from './todos'
import visibilityFilter, { StoreVisibilityFilter } from './visibilityFilter'

// Store 类型定义

export namespace Store {
    export type Todo = StoreTodo
    export type VisibilityFilter = StoreVisibilityFilter
    export type All = {
        todos: Array<StoreTodo>,
        visibilityFilter: string,
    }
}

const todoApp = combineReducers<Store.All>({
    todos,
    visibilityFilter
})

export default todoApp
