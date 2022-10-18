import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admin from "../Admin"


class anneeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annee: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:4000/annee/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          annee: res.data
        })
      })
      .catch(err => {
        console.log("Error");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:4000/annee/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error ");
      })
  };


  render() {

    const annee = this.state.annee;
    let anneeItem = <div>
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
            <td>{ annee.aa }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>date depot</td>
            <td>{ annee.dateDepot }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Date fermeture</td>
            <td>{ annee.dateFermeture }</td>
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
                  <h5>{ annee.aa}</h5>
                  <small></small>
              </div>
          </div>
          <div class="text-center">
              <button>
                <Link to={`/modifier-annee/${annee._id}`} className="btn btn-outline-info btn-lg btn-block">
                  Modifier l'Année Universitaire
                </Link>
              </button>
          </div>
          
      </div>
             
  </main>
  </div>
  </div>
    );
  }
}

export default anneeDetails;