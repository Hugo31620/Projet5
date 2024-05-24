import React, { useState } from 'react';

const Collapse = () => {
    const [isFiabiliteOpen, setFiabiliteOpen] = useState(false);
    const [isRespectOpen, setRespectOpen] = useState(false);
    const [isServiceOpen, setServiceOpen] = useState(false);
    const [isSecuriteOpen, setSecuriteOpen] = useState(false);

    const toggleFiabilite = () => {
        setFiabiliteOpen(!isFiabiliteOpen);
    };

    const toggleRespect = () => {
        setRespectOpen(!isRespectOpen);
    };

    const toggleService = () => {
        setServiceOpen(!isServiceOpen);
    };

    const toggleSecurite = () => {
        setSecuriteOpen(!isSecuriteOpen);
    };

    return (
        <div className="collapse">
            <div className="fiabilite">
                <p onClick={toggleFiabilite}>Fiabilité <span className={isFiabiliteOpen ? "arrow open" : "arrow"}></span></p>
                {isFiabiliteOpen && (
                    <span>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</span>
                )}
            </div>
            <div className="respect">
                <p onClick={toggleRespect}>Respect <span className={isRespectOpen ? "arrow open" : "arrow"}></span></p>
                {isRespectOpen && (
                    <span>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</span>
                )}
            </div>
            <div className="service">
                <p onClick={toggleService}>Service <span className={isServiceOpen ? "arrow open" : "arrow"}></span></p>
                {isServiceOpen && (
                    <span>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</span>
                )}
            </div>
            <div className="securite">
                <p onClick={toggleSecurite}>Sécurité <span className={isSecuriteOpen ? "arrow open" : "arrow"}></span></p>
                {isSecuriteOpen && (
                    <span>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</span>
                )}
            </div>
        </div> 
    );
}

export default Collapse;