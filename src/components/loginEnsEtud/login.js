import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession ,getUser, isAuth } from '../../Utils/common';

import './login.css'




function Login(props) {

  
  
  const [Ensloading, setEnsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  //const emailEns = useFormEnsInput('');
  //const passwordEns = useFormEnsInput('');
  const [emailEns, setemailEns ] = useState('')
    const [passwordEns, setpasswordEns] = useState('')
  const [error, setError] = useState(null);
  
 
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:4000/etudiant/login', { email: email.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
     
      props.history.push('/Espace-Etudiant');
        
    
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  const EnshandleLogin = () => {
    setError(null);
    setEnsLoading(true);
    axios.post('http://localhost:4000/enseignant/login', { email: email.value, password: password.value }).then(response => {
      setEnsLoading(false);
      setUserSession(response.data.token, response.data.user);
     
      props.history.push('/Espace-Enseignant');
        
    
    }).catch(error => {
      setEnsLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
 
  return (
     <div className='Login-component'>
      <div class="login">
        
        <div class="title">Etudiant</div>
          <form>
          <div class="field">
              <input type="text" {...email} autoComplete="new-password" />
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
         
            <div class="title">Enseignant</div>
            <form>
            <div class="field">
                <input type="text" {...emailEns} autoComplete="new-password" />
                <label>Nom d'utilisateur</label>
            </div>
            <div class="field">
                <input type="password" {...passwordEns} autoComplete="new-password" />
                <label>Mot de passe</label>
            </div>
            <div class="field">
                {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br /> 
                <input type="submit" value={Ensloading ? 'Loading...' : 'Login'} onClick={EnshandleLogin} disabled={Ensloading} /><br />
            </div>
            </form>
          
      </div>
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

const useFormEnsInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const EnshandleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: EnshandleChange
  }
}
 
export default Login;