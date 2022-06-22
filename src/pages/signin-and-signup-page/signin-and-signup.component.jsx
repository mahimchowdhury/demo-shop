import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './signin-and-signup.style.scss';

const SignInAndSignUpPage = () => {
    return ( 
        <div className="signin-and-signup">Sign In
            <SignIn />
        </div>
     );
}
 
export default SignInAndSignUpPage;