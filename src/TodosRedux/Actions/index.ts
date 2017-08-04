/**
 * Action Creators
 */

import { StoreTodo } from '../Reducers/todos'
import { StoreVisibilityFilter } from '../Reducers/visibilityFilter'

export namespace Action {
  export type AddTodo = {type: 'ADD_TODO'} & StoreTodo
  export type SetVisibilityFilter = { type: 'SET_VISIBILITY_FILTER' } & StoreVisibilityFilter
  export type ToggleTodo = { type: 'TOGGLE_TODO', id: number }
}

let nextTodoId = 0
export const addTodo = (text: string): Action.AddTodo => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter: string): Action.SetVisibilityFilter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id: number): Action.ToggleTodo => ({
  type: 'TOGGLE_TODO',
  id
})
