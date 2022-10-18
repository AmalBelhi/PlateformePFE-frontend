import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admin from "../Admin"


class CreateStudent extends Component {
  constructor(props) {
    super(props)
    this.onChangeStudentCin = this.onChangeStudentCin.bind(this);
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentLastName = this.onChangeStudentLastName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentPassword = this.onChangeStudentPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      cin: '',
      nom: '',
      prenom:'',
      email: '',
      password:''
    }
  }
  
  onChangeStudentCin (e) {
    this.setState({ cin : e.target.value });
  };
  onChangeStudentName(e) {
    this.setState({ nom: e.target.value })
  }
  onChangeStudentLastName(e) {
    this.setState({prenom: e.target.value });
  };
  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }
  onChangeStudentPassword(e){
    this.setState({ password : e.target.value });
  };

  onSubmit(e) {
    e.preventDefault()
    const data = {
      nom: this.state.nom,
      prenom: this.state.prenom,
      email: this.state.email,
      password: this.state.password,
      cin: this.state.cin
    };
    axios
    .post('http://localhost:4000/etudiant/addStudent', data)
      .then(res => {
        this.setState({
          cin: '',
          nom:'',
          prenom:'',
          email:'',
          password:''
        })
        this.props.history.push('/liste-etudiant');
      })
      .catch(err => {
        console.log("Error in CreateStudent!");
      })
  }
  

  render() {
    return (
      <div>
            <Admin/>
            <div class="main-content">
              
                <div class="container">
                  <div class="title">Ajouter étudiant</div>
                    <div class="content">
                      <form onSubmit={this.onSubmit}>
                        <div class="user-details">
                          <div class="input-box">
                            <span class="details">CIN</span>
                            <input
                              type='text'
                              placeholder='CIN'
                              name='cin'
                              className='form-control'
                              value={this.state.cin}
                              onChange={this.onChangeStudentCin}
                            />
                          </div>
                          <div class="input-box">
                            <span class="details">Nom</span>
                              <input
                                type='text'
                                placeholder='nom'
                                name='nom'
                                className='form-control'
                                value={this.state.nom}
                                onChange={this.onChangeStudentName}
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
                              onChange={this.onChangeStudentLastName}
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
                              onChange={this.onChangeStudentEmail}
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
                              onChange={this.onChangeStudentPassword}
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

export default CreateStudent;