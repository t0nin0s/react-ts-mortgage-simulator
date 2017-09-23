import * as React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Button from './Button'

describe('SignupFormPersonal renders as expected', () => {
  it('should render as expected', () => {
    const component = shallow(
      <Button
        id='idComp'
        color='color'
        icon='icon'
        value='value'
        text='text'
        handleOnChange={jest.fn()}
      />
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})
