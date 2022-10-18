import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admin from "../Admin"


class projetDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projet: {} ,
      etudiant: ""
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:4000/Projets/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          projet: res.data,
          etudiant: res.data
        })
      })
      .catch(err => {
        console.log("Error from ProjectDetails");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:4000/Projets/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ProjectDetails_deleteClick");
      })
  };


  render() {

    const projet = this.state.projet;
    const etudiant = this.state.etudiant
    let projetItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Nom</td>
            <td>{ projet.nom }</td>
          </tr>
         
        </tbody>
      </table>
    </div>

    return (
      <div>
      <Admin />
      <div class="main-content">
      <main>
      <div class="bday-card">
          <div class="bday-flex">
              <div class="bday-img"></div>
              <div class="bday-info">
                  <h5>{ projet.nom }</h5>
                  <h5>{ projet.societe }</h5>
                  <h5>{ projet.descriptionSociete }</h5>
                  <h5>Réaliser Par :{etudiant.nom}</h5>
                  <small></small>
              </div>
          </div>
          
          
      </div>
             
  </main>
  </div>
  </div>
    );
  }
}

export default projetDetails;