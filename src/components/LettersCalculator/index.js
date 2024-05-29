// Write your code here.
import {Component} from 'react'

import './index.css'

class LetterCalculator extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const countLength = searchInput.length

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="input" className="text">
              Enter the phrase
            </label>
            <input
              type="text"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              id="input"
              className="inputStyle"
              placeholder="Enter the phrase"
            />
            <div className="count-container">
              <p className="count">
                No.of letters: {countLength > 0 ? countLength : 0}
              </p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LetterCalculator
