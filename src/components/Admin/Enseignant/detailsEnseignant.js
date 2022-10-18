import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admin from "../Admin"


class enseignantDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enseignant: {}
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:4000/enseignant/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          enseignant: res.data
        })
      })
      .catch(err => {
        console.log("Error");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:4000/enseignant/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error ");
      })
  };


  render() {

    const enseignant = this.state.enseignant;
    let enseignantItem = <div>
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
            <td>{ enseignant.nom }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Prenom</td>
            <td>{ enseignant.prenom }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Email</td>
            <td>{ enseignant.email }</td>
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
                  <h5>{ enseignant.nom } {enseignant.prenom}</h5>
                  <small></small>
              </div>
          </div>
          <div class="text-center">
              <button>
                <Link to={`/modifier-enseignant/${enseignant._id}`} className="btn btn-outline-info btn-lg btn-block">
                  Modifier enseignant
                </Link>
              </button>
          </div>
          <div class="Bannir">
            <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,enseignant._id)}>Bannir l'enseignant</button><br />
          </div>
      </div>
             
  </main>
  </div>
  </div>
    );
  }
}

export default enseignantDetails;