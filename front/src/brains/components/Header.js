import { Component } from 'react'

export class Header extends Component {
  render () {
    return (
      <div className='header'>
        <h1 className='header__title'>Shimomuh&lsquo;s Brain</h1>
        <div className='header__selectBox'>
          <label>Language</label>
          <div className='__selectBox'>
            <select>
              <option value='en'>English</option>
              <option value='ja'>日本語</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}
