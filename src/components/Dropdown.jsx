import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ item }) => {
    if (!item) {
        return null; // Ou affichez un message d'erreur, une valeur par défaut, etc.
    }

    return (
        <div className="dropdown">
            <div className="dropdown_description">
                <p>Description</p>
                <span>{item.description}</span>
            </div>
            <div className="dropdown_equipments">
                <p>Equipments:</p>
                <ul>
                    {item.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    item: PropTypes.shape({
        description: PropTypes.string.isRequired,
        equipments: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default Dropdown;