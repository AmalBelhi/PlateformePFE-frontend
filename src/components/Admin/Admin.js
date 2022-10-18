import React , {props , FC, ReactElement, useEffect, useState}from 'react';
import {removeUserSession } from '../../Utils/common';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from 'react-router-dom'

import "./Admin.css"

import Home from './Admin';


function Admin(props) {
  

  let history = useHistory();

  
  
  const handleLogout = () => {
    removeUserSession();
    history.push("/LoginAdmin"); // whichever component you want it to route to
  }
  
  

  return (
   
    <div>
    <div class="sidebar">
      <div class="sidebar-header">
          <h3 class="brand"> 
          
              <span>Espace Admin</span>
          </h3> 
          <label for="sidebar-toggle" class="ti-menu-alt"></label>
      </div>
      <div class="sidebar-menu">
          <nav>
            
            <ul>
          <li>
              <NavLink to="/Espace-Admin" activeClassName="active"
              isActive={(_, { pathname }) =>
                  pathname.match("/Espace-Admin") || pathname === "/"
                }
              >
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/liste-annees" activeClassName="active">
                Année Universitaire
              </NavLink>
            </li>
            <li>
              <NavLink to="/liste-Etudiant" activeClassName="active">
                Etudiants
              </NavLink>
            </li>
            <li>
              <NavLink to="/liste-Enseignant" activeClassName="active">
                Enseignants
              </NavLink>
            </li>
            <li>
              <NavLink to="/liste-Projets" activeClassName="active">
                Projets
              </NavLink>
            </li>
          </ul>
           
          </nav>
      </div>
    </div>
      
      <div class="main-content">
      <header>
            <div class="search-wrapper">
                <span class="ti-search"></span>
                <input type="search" placeholder="Rechercher" />
            </div>
            
            <div class="social-icons">
                <span class="ti-bell"><FontAwesomeIcon icon="FaRegUserCircle" /></span>
                <span class="ti-comment"></span>
                <div></div>
            </div>
            <div >
              
              <input type="button" onClick={handleLogout} value="Déconnexion" />
            </div>
            
        </header>
      </div>
  </div>
  );
 
}

export default Admin