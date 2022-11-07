import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

class Home1 extends Component {
  constructor() {
    super();

    this.state = {
      nextUsername: '',
      username: 'default user'
    };
  }

  updateUsername(e) {
    this.setState({
      nextUsername: e.target.value
    })
  }

  setUsername() {
    this.setState({
      username: this.state.nextUsername
    })
  }

  render() {
    const { username } = this.state;
    const { t } = this.props;

    return (
      <div className='body'>
        {/* <p>Welcome, {username}</p> */}
        <p>{t('welcome', { username: username })}</p>

        <div>
          <label>{t('change-username')}</label>
          <input type='text' onChange={this.updateUsername.bind(this)} />
          <button onClick={this.setUsername.bind(this)}>{t('submit')}</button>
        </div>

        <p>Click <Link to='/page2'>here</Link> to go to page 2, {username}</p>
      </div>
    );
  }
}

export default withTranslation()(Home1);
