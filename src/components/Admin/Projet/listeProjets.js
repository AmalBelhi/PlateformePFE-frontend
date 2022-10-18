import React , { Component } from "react"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
  } from 'react-router-dom'


import Admin from "../Admin"
import axios from 'axios';



class ProjectsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        projets: []
      };
    }
  
    componentDidMount() {
      axios
        .get('http://localhost:4000/Projets/')
        .then(res => {
          this.setState({
            projets: res.data
          })
        })
        .catch(err =>{
          console.log('Error');
        })
    };
  
  
    render() {
      const projets = this.state.projets;
      console.log("PrintBook: " + projets);
      let projetList;
  
      if(!projets) {
       console.log( "there is no project record!");
      } 
  
      return (

         <div><Admin/>
          <div class="main-content">
            
              
              <main>
                  
                  <h2 class="dash-title">Liste des Projets </h2>
                
                  
                  <section class="recent">
                      <div class="activity-grid">
                          <div class="activity-card">
                              
                              
                              <div class="table-responsive">
                                  <table>
                                      <thead>
                                          <tr>
                                              <th>Nom du Projet</th>
                                              <th>Société</th>
                                              <th>Nom de l'etudiant</th>
                                              <th>Encadrer Par</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                      {projets.map(projet =>
                                          <tr>
                                              <td>{projet.nom}</td>
                                              <td>{projet.societe}</td>
                                              <td>{projet.etudiant}</td>
                                              <td>{projet.societe}</td>
                                              <td>
                                               <Link to={`/details-Projet/${projet._id}`}>détails</Link>
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
  
  export default ProjectsList;