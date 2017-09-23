import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignupFormGender from './SignupFormGender'

describe('SignupFormGender renders as expected', () => {
  it('should render as expected', () => {
    const component = shallow(
      <SignupFormGender
        gender=''
        handleOnChange={jest.fn()}
        handleNext={jest.fn()} />
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
