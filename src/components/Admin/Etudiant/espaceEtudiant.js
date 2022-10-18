import React ,{props} from 'react'
import { useHistory } from "react-router-dom";
import './espaceEtudiant.css'
import {removeUserSession } from '../../../Utils/common';



function EspaceEtudiant(props) {

  let history = useHistory();
  
  
  
  const handleLogout = () => {
    removeUserSession();
    history.push("/"); // whichever component you want it to route to
  }
  
  return(

    <div class="etud">
      <div class="navbar">
        <nav>
          <span class="logo">Espace Etudiant</span>
          <ul>
            <li>
              <a href="connexion.html">Profile</a>
              <input type="button" onClick={handleLogout} value="Déconnexion" />
            </li>
          </ul>
        </nav>
      </div>
      
      <div id="contenu">
          <form action="#">
            <br></br><br></br><br></br>
            <p><i>Complétez le formulaire. Les champs marqué par </i><em>*</em> sont <em>obligatoires</em></p>
            
          </form>
       </div>
       <footer>

       </footer>
    </div>
  )
};
  

export default EspaceEtudiant