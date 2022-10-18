import React , { Component } from "react"
import "./etudiantForm.js"
import "./etudiantForm.css"
import Pagination from "react-js-pagination";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom'

import ajouterEtudiant from './ajouterEtudiant';
import editStudent from './modifierEtudiant';
import studentCard from  "./etudiantCrad"
import Admin from "../Admin"
import axios from 'axios';



class StudentsList extends Component {


    
    constructor(props) {
      super(props);
      this.state = {
        etudiants: [],
       
      };
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:4000/etudiant/')
        .then(res => {
          this.setState({
            etudiants: res.data
          })
        })
        .catch(err =>{
          console.log('Error from ShowStudentsList');
        })
    };
    
    
  
    render() {
      const etudiants = this.state.etudiants;
      console.log("PrintBook: " + etudiants);
      let etudiantList;
  
      if(!etudiants) {
       console.log( "there is no student record!");
      } 
  
      return (

         <div><Admin/>
          <div class="main-content">
            
              
              <main>
                  
                  <h2 class="dash-title">Liste des étudiants </h2>
                
                  <div class="text-center">
                    <button><Link to={`/ajouter-etudiant/`}>Ajouter etudiant</Link></button>
                  </div>
                  <section class="recent">
                      <div class="activity-grid">
                          <div class="activity-card">
                              
                              
                              <div class="table-responsive">
                                  <table>
                                      <thead>
                                          <tr>
                                              <th>CIN</th>
                                              <th>Nom et Prénom</th>
                                              <th>Email</th>
                                              <th>Projet</th>
                                              <th>Encadrants</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                      {etudiants.map(etudiant =>
                                          <tr>
                                              <td>{etudiant.cin}</td>
                                              <td>{etudiant.nom} {etudiant.prenom}</td>
                                              <td>{etudiant.email}</td>
                                              <td>{etudiant.prenom}</td>
                                              <td>{etudiant.nom}</td>
                                              <td>
                                                <Link to={`/modifier-etudiant/${etudiant._id}`}>Modifier</Link><br></br>
                                                <Link to={`/etudiant-details/${etudiant._id}`}>détails</Link>
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
  
  export default StudentsList;