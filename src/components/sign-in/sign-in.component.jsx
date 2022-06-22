import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password:''  
           }
    }
    handleChange= e =>{
        const {value , name} = e.target;
        this.setState( {[name]: value})
    }
    handleSubmit = e =>{
        e.preventDefault();
        this.setState({email:'',password:''});
    }
    render() { 
        return ( 
            <div className="sign-in">
               <h2>I already have an account</h2>
               <span>Signin with your email and password</span> 
               <form onSubmit={this.handleSubmit}>
                    <FormInput label='Email' type="email" name="email" value={this.state.email} id="" handleChange={this.handleChange} required/>
                    <FormInput label='Password' type="password" name="password" value={this.state.password} id="" handleChange={this.handleChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit"> Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
                    </div>
               </form>
            </div>
         );
    }
}
 
export default SignIn;