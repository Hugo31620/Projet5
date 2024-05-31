import React, { useState } from 'react';
import PropTypes from 'prop-types';
import arrow from '../assets/images/arrow_open.png';

const Dropdown = ({ item }) => {
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

    const handleDescriptionToggle = () => {
        setIsDescriptionOpen(!isDescriptionOpen);
    };

    const handleEquipmentsToggle = () => {
        setIsEquipmentsOpen(!isEquipmentsOpen);
    };

    if (!item) {
        return null;
    }

    return (
        <div className="dropdown">
            <div className='dropdown_description'>
                <div className="dropdown_top" onClick={handleDescriptionToggle}>
                    <p>Description</p>
                    <img
                        src={arrow}
                        alt="Toggle arrow"
                        className={`fleche ${isDescriptionOpen ? 'rotate' : ''}`}
                    />
                </div>
                <div>
                    {isDescriptionOpen && (
                        <div className="dropdown_bot">
                            <p>{item.description}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='dropdown_equipments'>
                <div className="dropdown_top" onClick={handleEquipmentsToggle}>
                    <p>Equipments</p>
                    <img
                        src={arrow}
                        alt="Toggle arrow"
                        className={`fleche ${isEquipmentsOpen ? 'rotate' : ''}`}
                    />
                </div>
                <div>
                    {isEquipmentsOpen && (
                        <div className="dropdown_bot">
                            <div className="dropdown_equipments_liste">
                                <ul>
                                    {item.equipments.map((equipment, index) => (
                                        <li key={index}>{equipment}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    item: PropTypes.shape({
        description: PropTypes.string.isRequired,
        equipments: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default Dropdown;