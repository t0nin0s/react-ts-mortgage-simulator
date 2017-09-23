import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignupFormResident from './SignupFormResident'

describe('SignupFormResident renders as expected', () => {
  it('should render as expected', () => {
    const component = shallow(
      <SignupFormResident
        resident=''
        handleOnChange={jest.fn()}
        handleNext={jest.fn()} />
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
