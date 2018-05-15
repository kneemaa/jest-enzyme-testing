import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Login from '../Login'

describe('Login Component', () => {

	it('should render without an error', () => {
		expect(shallow(<Login />).exists(<form className='login'></form>)).toBe(true)
	})
})