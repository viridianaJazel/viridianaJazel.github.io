import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

import style from './main.scss';
library.add(fas, far, fab)

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/user')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div className="container">
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <FontAwesomeIcon icon={{ prefix: 'far', iconName: 'smile-beam' }} />
      </div>
    );
  }
}
