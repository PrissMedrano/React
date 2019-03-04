import React, { Component } from 'react';

class UserOutput extends Component {

  render() {
    return (
      <div>
       <p>Hola {this.props.userName}!</p>
       <p>Adios {this.props.userName}!</p>
      </div>
    );
  }
}

export default UserOutput;