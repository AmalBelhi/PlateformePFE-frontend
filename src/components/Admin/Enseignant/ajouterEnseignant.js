import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admin from "../Admin"


class CreateEns extends Component {
  constructor(props) {
    super(props)
    this.onChangeProfName = this.onChangeProfName.bind(this);
    this.onChangeProfLastName = this.onChangeProfLastName.bind(this);
    this.onChangeProfEmail = this.onChangeProfEmail.bind(this);
    this.onChangeProfPassword = this.onChangeProfPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      nom: '',
      prenom:'',
      email: '',
      password:''
    }
  }
  
 
  onChangeProfName(e) {
    this.setState({ nom: e.target.value })
  }
  onChangeProfLastName(e) {
    this.setState({prenom: e.target.value });
  };
  onChangeProfEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeProfPassword(e){
    this.setState({ password : e.target.value });
  };

  onSubmit(e) {
    e.preventDefault()
    const data = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      password: this.state.password,
      
    };
    axios
    .post('http://localhost:4000/enseignant', data)
      .then(res => {
        this.setState({
         
          nom:'',
          prenom:'',
          email:'',
          password:''
        })
        this.props.history.push('/liste-enseignant');
      })
      .catch(err => {
        console.log("Error !");
      })
  }
  

  render() {
    return (
      <div>
            <Admin/>
            <div class="main-content">
              
                <div class="container">
                  <div class="title">Ajouter Enseignant</div>
                    <div class="content">
                      <form onSubmit={this.onSubmit}>
                        <div class="user-details">
                          
                          <div class="input-box">
                            <span class="details">Nom</span>
                              <input
                                type='text'
                                placeholder='nom'
                                name='nom'
                                className='form-control'
                                value={this.state.nom}
                                onChange={this.onChangeProfName}
                              />
                          </div>
                          <div class="input-box">
                            <span class="details">Prenom</span>
                            <input
                              type='text'
                              placeholder='prenom'
                              name='prenom'
                              className='form-control'
                              value={this.state.prenom}
                              onChange={this.onChangeProfLastName}
                            />
                          </div>
                          <div class="input-box">
                            <span class="details">Email</span>
                            <input
                              type='text'
                              placeholder='Email'
                              name='email'
                              className='form-control'
                              value={this.state.email}
                              onChange={this.onChangeProfEmail}
                            />
                          </div>
                          <div class="input-box">
                            <span class="details">Mot de Passe</span>
                            <input
                              type='text'
                              placeholder='Mot de Passe'
                              name='paswword'
                              className='form-control'
                              value={this.state.password}
                              onChange={this.onChangeProfPassword}
                            />
                          </div>                          
                        </div>
                        <div class="button">
                          <input type="submit" value="Valider" />
                          
                        </div>
                      </form>
                    </div>
                  </div>
                </div> 
             
            </div>
    );
  }
}

export default CreateEns;