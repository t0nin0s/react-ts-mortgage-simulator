import { formData } from './formData'
import { formState } from './formState'
import { actionTypes } from '../actions/actionTypes'

describe("The formActions reducer", () => {
  
  it("should return step + 1 when NEXT_CARD action is matched", () => {
    const previousState = {
      step: 2, title: '', name: '', surname: '', gender: '', ukResident: ''
    }
    const expectedState = {
      step: 3, title: '', name: '', surname: '', gender: '', ukResident: ''
    }
    const state = formState(previousState, {type: actionTypes.NEXT_CARD})
    expect(state).toEqual(expectedState)
  })

  it("should return new state when UPDATE_FIELD action is matched", () => {
    const previousState = {
      step: 2, title: '', name: '', surname: '', gender: '', ukResident: ''
    }
    const expectedState = {
      step: 2, title: 'Mr', name: '', surname: '', gender: '', ukResident: ''
    }
    const input = { id: 'title', value: 'Mr' }
    const state = formData(previousState, {input: input, type: actionTypes.UPDATE_FIELD})
    expect(state).toEqual(expectedState)
  })

  it("should return new state when UPDATE_FIELD action is matched", () => {
    const previousState = {
      step: 2, title: '', name: '', surname: '', gender: '', ukResident: ''
    }
    const expectedState = {
      step: 2, title: '', name: 'David', surname: '', gender: '', ukResident: ''
    }
    const input = { id: 'name', value: 'David' }
    const state = formData(previousState, {input: input, type: actionTypes.UPDATE_FIELD})
    expect(state).toEqual(expectedState)
  })
})
