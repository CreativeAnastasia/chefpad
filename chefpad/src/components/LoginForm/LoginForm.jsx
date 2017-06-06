import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let self = this;
    userService.login(self.state)
      .then(()=> {
        self.props.handleLogin();
        self.props.history.push('/choose');
      })
      .catch(err => alert('Invalid credentials!'));
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-default">
            <header className="panel-heading text-center">Log In</header>
            <div className="panel-body">
              <form className="form" onSubmit={this.handleSubmit} >

                <div className="row">
                  <div className="form-group col-xs-12">
                      <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
                    </div>
                </div>

                 <div className="row">
                  <div className="form-group col-xs-12">
                      <input type="password" className="form-control" placeholder="Password" value={this.state.pw} onChange={(e) => this.handleChange('pw', e)} />
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-xs-12">
                      <button className="btn btn-success btn-block">Log In</button>
                    </div>
                  </div>
                      <Link to='/'>Cancel</Link>

              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default LoginForm;
