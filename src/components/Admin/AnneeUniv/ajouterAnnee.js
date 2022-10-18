import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Admin from "../Admin"


class CreateAnnee extends Component {
  constructor(props) {
    super(props)
    this.onChangeAnneeaa = this.onChangeAnneeaa.bind(this);
    this.onChangeAnneedateDepot = this.onChangeAnneedateDepot.bind(this);
    this.onChangeAnneedateFermeture = this.onChangeAnneedateFermeture.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      aa: '',
      dateDepot:'',
      dateFermeture: '',
    }
  }
  
  onChangeAnneeaa(e) {
    this.setState({ aa: e.target.value })
  }
  onChangeAnneedateDepot(e) {
    this.setState({dateDepot: e.target.value });
  };
  onChangeAnneedateFermeture(e) {
    this.setState({ dateFermeture: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const data = {
      aa: this.state.aa,
      dateDepot: this.state.dateDepot,
      dateFermeture: this.state.dateFermeture,
    };

    axios
    .post('http://localhost:4000/annee', data)
      .then(res => {
        this.setState({
          aa: res.data.aa,
          dateDepot: res.data.dateDepot,
          dateFermeture: res.data.dateFermeture,
        })
        this.props.history.push('/liste-annees');
      })
      .catch(err => {
        console.log("Error !");
      })
  }
  

  render() {
    return (
      <div>
            <Admin/>
            <div class="main-content">
              
                <div class="container">
                  <div class="title">Ajouter Enseignant</div>
                    <div class="content">
                      <form onSubmit={this.onSubmit}>
                        <div class="user-details">
                        <div class="input-box">
                            <span class="details">Année Universiatre</span>
                              <input
                                type='text'
                                placeholder='annéée'
                                name='aa'
                                className='form-control'
                                value={this.state.aa}
                                onChange={this.onChangeAnneeaa}
                              />
                          </div>
                          <div class="input-box">
                            <span class="details">Date de depot</span>
                            <input
                              type='text'
                              placeholder='date de depot'
                              name='dateDepot'
                              className='form-control'
                              value={this.state.dateDepotdate}
                              onChange={this.onChangeAnneedateDepot}
                            />
                          </div>
                          <div class="input-box">
                            <span class="details">Date fermeture</span>
                            <input
                              type='text'
                              placeholder='date fermeture'
                              name='dateFermeture'
                              className='form-control'
                              value={this.state.dateFermeture}
                              onChange={this.onChangeAnneedateFermeture}
                            />
                          </div>                          
                        </div>
                        <div class="button">
                          <input type="submit" value="Valider" />
                          
                        </div>
                      </form>
                    </div>
                  </div>
                </div> 
             
            </div>
    );
  }
}

export default CreateAnnee;