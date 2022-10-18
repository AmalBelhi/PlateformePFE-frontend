import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom'

import './App.css';

import Admin from './components/Admin/Admin';
import LoginAdmin from './components/loginAdmin/login';
import LoginEnsEtud from './components/loginEnsEtud/login';

import Etudiant from './components/Admin/Etudiant/espaceEtudiant';
import Enseignant from './components/Admin/Enseignant/espaceEnseignant';

import listeEtudiant from './components/Admin/Etudiant/listeEtudiants';
import ajouterEtudiant from './components/Admin/Etudiant/ajouterEtudiant';
import modifierEtudiant from './components/Admin/Etudiant/modifierEtudiant';
import detailsEtudiant from './components/Admin/Etudiant/detailsEtudiant';

import listeEnseignant from './components/Admin/Enseignant/listeEnseignants';
import ajouterEnseignant from './components/Admin/Enseignant/ajouterEnseignant';
import modifierEnseignant from './components/Admin/Enseignant/modifierEnseignant';
import detailsEnseignant from './components/Admin/Enseignant/detailsEnseignant';

import listeProjets from './components/Admin/Projet/listeProjets';
import detailsProjet from './components/Admin/Projet/detailsProjet';

import anneesUniv from './components/Admin/AnneeUniv/anneesUniversitaire';
import ajouterAnnee from './components/Admin/AnneeUniv/ajouterAnnee';
import modifierAnnee from './components/Admin/AnneeUniv/modifierAnnee';
import detailsAnnee from './components/Admin/AnneeUniv/detailsAnnee';

class App extends Component {
  render() {
    return (
      
      <Router>
        <Switch>
        <Route exact path="/" component={LoginEnsEtud} />
          <Route exact path="/Espace-Admin" component={Admin} />
          <Route exact path="/Espace-Etudiant" component={Etudiant} />
          <Route exact path="/Espace-Enseignant" component={Enseignant} />

          <Route exact path="/LoginAdmin" component={LoginAdmin} />

          <Route exact path="/ajouter-etudiant"  component={ajouterEtudiant} />
          <Route exact path="/liste-etudiant"  component={listeEtudiant} />

            
          <Route exact path="/modifier-etudiant/:id"  component={modifierEtudiant} />
          
          <Route exact path="/etudiant-details/:id"  component={detailsEtudiant} />

          <Route exact path="/ajouter-enseignant"  component={ajouterEnseignant} />
          
          <Route exact path="/liste-enseignant"  component={listeEnseignant} />

          <Route exact path="/modifier-enseignant/:id"  component={modifierEnseignant} />
          
          <Route exact path="/details-enseignant/:id"  component={detailsEnseignant} />


          <Route exact path="/liste-Projets"  component={listeProjets} />
          
          <Route exact path="/details-Projet/:id"  component={detailsProjet} />

          
          <Route exact path="/ajouter-annee"  component={ajouterAnnee} />
          
          <Route exact path="/liste-annees"  component={anneesUniv} />

          <Route exact path="/modifier-annee/:id"  component={modifierAnnee} />
          
          <Route exact path="/details-annee/:id"  component={detailsAnnee} />

          
        </Switch>
      </Router>
    );
  }
}

export default App;
