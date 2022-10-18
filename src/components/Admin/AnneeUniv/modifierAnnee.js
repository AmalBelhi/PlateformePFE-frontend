import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Admin from "../Admin"


class UpdateAnnee extends Component {
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
  
  componentDidMount() {
    axios
    .get('http://localhost:4000/enseignant/'+this.props.match.params.id)
      .then(res => {
        this.setState({
          aa: res.data.aa,
          dateDepot: res.data.dateDepot,
          dateFermeture: res.data.dateFermeture,
          
        })
      })
      .catch(err => {
        console.log("Error");
      })
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
    .put('http://localhost:4000/annee/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/details-annee/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in Update!");
      })
  }
  
  render() {
    return (
          <div>
            <Admin/>
            <div class="main-content">
              
                <div class="container">
                  <div class="title">Modifier l'Année Universitaire</div>
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
                              type='date'
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
                              type='date'
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

export default UpdateAnnee;