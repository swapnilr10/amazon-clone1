import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';

function Login() {
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {       
                history.push('/') 
        })
        .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //it will successfully create a new user with email and password
            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className = 'login'>
            <div className = 'login_logoContainer'>
            <Link to = '/'>
              <img 
                className = 'login_logo'
                src = "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
            </Link>
            <p className = 'login_logoIn'>.in</p>
            </div>

            <div className = 'login_container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input type = "text" 
                      value = {email} 
                      onChange = {e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type = "text"
                      value = {password} 
                      onChange = {e => setPassword(e.target.value)}
                    />

                    <button type = 'submit' onClick = {signIn} className = 'login_button'>Sign-In</button>

                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                    <a className = 'login_condition' href = "#">Need Help?</a>
                </form>
            </div>
            <div>
                <h5 className = 'login_text'>New to Amazon?</h5>
                <button className = 'login_buttonRegister' onClick = {register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;
