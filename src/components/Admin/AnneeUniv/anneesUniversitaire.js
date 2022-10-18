import React , { Component } from "react"
import "./anneeForm.css"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom'

import ajouterAnnee from './ajouterAnnee';
import modifierAnnee from './modifierAnnee';
import Admin from "../Admin"
import axios from 'axios';



class AnneeList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        annees: []
      };
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:4000/annee/')
        .then(res => {
          this.setState({
            annees: res.data
          })
        })
        .catch(err =>{
          console.log('Error');
        })
    };
  
  
    render() {
      const annees = this.state.annees;
      console.log("PrintBook: " + annees);
      let anneesList;
  
      if(!annees) {
       console.log( "there is no Prof record!");
      } 
  
      return (

         <div><Admin/>
          <div class="main-content">
            
              
              <main>
                  
                  <h2 class="dash-title">Liste des Années Universitaire </h2>
                
                  <div class="text-center">
                    <button><Link to={`/ajouter-annee/`}>Ajouter une Année universitaire</Link></button>
                  </div>
                  <section class="recent">
                      <div class="activity-grid">
                          <div class="activity-card">
                              
                              
                              <div class="table-responsive">
                                  <table>
                                      <thead>
                                          <tr>
                                              <th>Année Universitaire</th>
                                              <th>Date depot</th>
                                              <th>date fermeture de depot</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                      {annees.map(annee =>
                                          <tr>
                                              <td>{annee.aa}</td>
                                              <td>{annee.dateDepot}</td>
                                              <td>{annee.dateFermeture}</td>
                                              <td>
                                                <Link to={`/modifier-annee/${annee._id}`}>Modifier</Link><br></br>
                                                <Link to={`/details-annee/${annee._id}`}>détails</Link>
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
  
  export default AnneeList;