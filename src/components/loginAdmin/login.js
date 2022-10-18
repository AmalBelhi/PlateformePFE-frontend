import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession ,getUser, isAuth } from '../../Utils/common';

import './login.css'




function Login(props) {

  

  const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
 
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/Admin/login', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
     
      props.history.push('/Espace-Admin');
        
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
 
  return (
    
        <div class="login">
        <div class="title">Connexion</div>
        <form>
        <div class="field">
            <input type="text" {...username} autoComplete="new-password" />
            <label>Nom d'utilisateur</label>
        </div>
        <div class="field">
            <input type="password" {...password} autoComplete="new-password" />
            <label>Mot de passe</label>
        </div>
        <div class="field">
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </div>
        </form>
    </div>
    
  );
}
 
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}
 
export default Login;