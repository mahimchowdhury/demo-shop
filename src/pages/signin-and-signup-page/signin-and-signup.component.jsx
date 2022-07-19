import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/signup.components';
import './signin-and-signup.style.scss';

const SignInAndSignUpPage = () => {
    return ( 
        <div className="signin-and-signup">
            <SignIn />
            <SignUp />
        </div>
     );
}
 
export default SignInAndSignUpPage;