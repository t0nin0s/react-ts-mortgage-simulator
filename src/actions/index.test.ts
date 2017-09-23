import * as actions from './index'
import { actionTypes } from './actionTypes'

describe('actions', () => {
  it('should create an action to goToNext', () => {
    const expectedAction = {
      type: actionTypes.NEXT_CARD
    }
    expect(actions.goToNext()).toEqual(expectedAction)
  })

  it('should create an action to updateField', () => {
    let input = { value: 'Mr', id: 'title' }
    const expectedAction = {
      type: actionTypes.UPDATE_FIELD,
      input
    }
    expect(actions.updateField(input)).toEqual(expectedAction)
  })
})
