import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignupFormResults from './SignupFormResults'

describe('SignupFormResident renders as expected', () => {
  it('should render as expected', () => {
    const component = shallow(
      <SignupFormResults
        title='Mr'
        name='David'
        surname='Perez'
        gender='Male'
        resident='Yes' />
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
