import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }

  handleChange = (field, e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [field]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let self = this;
    userService.signup(this.state)
      .then(() => {
        this.props.handleSignup();
        self.props.history.push('/choose');
      })
      // invalid user data
      .catch(err => self.props.updateMessage(err.message));
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-4 col-md-offset-4">
          <div className="panel panel-primary">
            <header className="panel-heading text-center">Sign Up</header>
            <div className="panel-body">
              <form className="form" onSubmit={this.handleSubmit} >

                <div className="row">
                  <div className="form-group col-xs-12">
                      <input type="text" className="form-control" placeholder="Name" value={this.state.name} onChange={(e) => this.handleChange('name', e)} />
                    </div>
                </div>

                <div className="row">
                  <div className="form-group col-xs-12">
                      <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={(e) => this.handleChange('email', e)} />
                    </div>
                </div>

                 <div className="row">
                  <div className="form-group col-xs-12">
                      <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.handleChange('password', e)} />
                    </div>
                  </div>

                <div className="row">
                  <div className="form-group col-xs-12">
                      <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} onChange={(e) => this.handleChange('passwordConf', e)}/>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-xs-12">
                      <button className="btn btn-primary btn-block" disabled={this.isFormInvalid()}>Sign Up</button>
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

export default SignupForm;
