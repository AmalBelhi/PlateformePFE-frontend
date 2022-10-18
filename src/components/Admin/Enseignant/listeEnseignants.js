import React , { Component } from "react"
import "./enseignantForm.css"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom'

import ajouterEnseignant from './ajouterEnseignant';
import modifierEnseignant from './modifierEnseignant';
import Admin from "../Admin"
import axios from 'axios';



class ProfList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        enseignants: []
      };
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:4000/enseignant/')
        .then(res => {
          this.setState({
            enseignants: res.data
          })
        })
        .catch(err =>{
          console.log('Error');
        })
    };
  
  
    render() {
      const enseignants = this.state.enseignants;
      console.log("PrintBook: " + enseignants);
      let enseignantList;
  
      if(!enseignants) {
       console.log( "there is no Prof record!");
      } 
  
      return (

         <div><Admin/>
          <div class="main-content">
            
              
              <main>
                  
                  <h2 class="dash-title">Liste des enseignants </h2>
                
                  <div class="text-center">
                    <button><Link to={`/ajouter-enseignant/`}>Ajouter enseignant</Link></button>
                  </div>
                  <section class="recent">
                      <div class="activity-grid">
                          <div class="activity-card">
                              
                              
                              <div class="table-responsive">
                                  <table>
                                      <thead>
                                          <tr>
                                              <th>Nom et Prénom</th>
                                              <th>Email</th>
                                              <th>Projet</th>
                                              <th>Etudiants</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                      {enseignants.map(enseignant =>
                                          <tr>
                                              <td>{enseignant.nom} {enseignant.prenom}</td>
                                              <td>{enseignant.email}</td>
                                              <td>{enseignant.nom}</td>
                                              <td>{enseignant.nom}</td>
                                              <td>
                                                <Link to={`/modifier-enseignant/${enseignant._id}`}>Modifier</Link><br></br>
                                                <Link to={`/details-enseignant/${enseignant._id}`}>détails</Link>
                                              </td>
                                          </tr>
                                        )}
                                        
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                        
                      </div>
                  </section>
                  
              </main>
              
          </div>
        
                                        </div>

      );
    }
  }
  
  export default ProfList;