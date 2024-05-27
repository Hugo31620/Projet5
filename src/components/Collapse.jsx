import React, { useState } from 'react';
import arrowOpen from '../assets/images/arrow_open.png';
import arrowClose from '../assets/images/arrow_close.png';

const sections = [
  {
    title: "Fiabilité",
    content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  }
];

const Collapse = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const handleToggle = (index) => {
    setActiveIndices(prevIndices => 
      prevIndices.includes(index)
        ? prevIndices.filter(i => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div className='collapse'>
      {sections.map((section, index) => (
        <div className='collapse_ind' key={index}>
          <div className='collapse_ind_txt' onClick={() => handleToggle(index)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <h3>{section.title}</h3>
            <img
              src={activeIndices.includes(index) ? arrowClose : arrowOpen}
              alt="Toggle arrow"
              style={{ marginLeft: '10px' }}
            />
          </div>
          {activeIndices.includes(index) && (
            <p>{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Collapse;