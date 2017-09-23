import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignupFormPersonal from './SignupFormPersonal'

describe('SignupFormPersonal renders as expected', () => {
  it('should render as expected', () => {
    const component = shallow(
      <SignupFormPersonal
        title=''
        name=''
        surname=''
        handleOnChange= {jest.fn()}
        handleNext= {jest.fn()} />
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
