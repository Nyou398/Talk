import React from 'react'
import '../css/Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from '../firebase'
import logo from '../image/logo.png'

function Login() {
    const signIn = () => {

        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt="talk logo" />
            </div>
            <Button onClick={signIn}>Connexion</Button>
        </div>
    )
}

export default Login