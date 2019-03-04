import React, { Component } from 'react';

class UserInput extends Component {

  render() {
    return (
      <div>
        <label>
          <br/> Input: <input type="text" name="name" onChange = {this.props.change}></input>
        </label>
      </div>
    );
  }
}

export default UserInput;