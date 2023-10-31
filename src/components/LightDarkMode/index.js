// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  onChange = () => {
    this.setState(prev => ({mode: !prev.mode}))
  }

  render() {
    const {mode} = this.state
    const buttonText = mode ? 'Light Mode' : 'Dark Mode'
    const modeChange = mode ? 'dark-container' : 'light-container'

    return (
      <div className="bg-container">
        <div className={modeChange}>
          <h1>Click to change mode</h1>
          <button onClick={this.onChange} className="button" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
