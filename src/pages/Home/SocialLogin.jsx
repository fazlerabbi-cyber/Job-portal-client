import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { NavLink } from 'react-router-dom';

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
            
        })
        .catch(error => {
            console.log(error.message);
            
        })
    }
    return (
        <div className='m-4'>
              <div className="divider">OR</div>
 <NavLink to='/'>
 <button onClick={handleGoogleSignIn} className='btn btn-primary'>Google</button>
 </NavLink>
        </div>
    );
};

export default SocialLogin;