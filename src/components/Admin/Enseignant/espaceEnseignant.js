import React from 'react'
import './espaceEnseignant.css'

function espaceEtudiant() {
  return(

    <div class="etud">
      <div class="navbar">
        <nav>
          <span class="logo">Espace Enseignant</span>
          <ul>
            <li>
            
              <a href="connexion.html">Changer compte</a>
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
  

export default espaceEtudiant