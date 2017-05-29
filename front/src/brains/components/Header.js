import { Component } from 'react'

export class Header extends Component {
  render () {
    return (
      <div className='header'>
        <h1 className='header__title'>Shimomuh's Brain</h1>
        <div className='header__langSelectBox'>
          <label>Language</label>
          <select
            className='header__langSelectBox'>
            <option value='en'>English</option>
            <option value='ja'>日本語</option>
          </select>
        </div>
      </div>
    )
  }
}
