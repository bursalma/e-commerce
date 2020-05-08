import React from "react";
import "./SignIn.scss";

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { auth, signInWithGoogle } from '../../firebase/firebase';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
        await auth.signInWithEmailAndPassword(email, password);

        this.setState({ 
            email: '', 
            password: ''
        });
    } catch (error) {
        console.error(error);
    }
  }

  handleChange = event => {
      const { name, value } = event.target;

      this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="SignIn">
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput 
                name="email" 
                type="email" 
                value={this.state.email} 
                handleChange={this.handleChange}
                label='Email'
                required 
            />
            <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label='Password'
                required
            />
            <div className='buttons'>
              <Button type='submit'> Sign In </Button>
              <Button 
                type='button'
                onClick={signInWithGoogle}
                isGoogleSignIn
              >
                Sign in with Google
              </Button>
            </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
