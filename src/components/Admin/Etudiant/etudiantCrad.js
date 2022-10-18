import React from 'react';
import { Link } from 'react-router-dom';

const studentCard = (props) => {
    const  etudiant  = props.etudiant;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    <Link to={`/etudiant-details/${etudiant._id}`}>
                        { etudiant.nom }
                    </Link>
                </h2>
                <h3>{etudiant.prenom}</h3>
                <p>{etudiant.email}</p>
            </div>
        </div>
    )
};

export default studentCard;