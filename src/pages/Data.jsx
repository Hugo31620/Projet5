import React from 'react';
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Slideshow from "../components/Carrousel";
import Erreur from "../pages/Erreur";

const logementId = (id) => {
    return data.find((data) => data.id === id);
}

const Data = () => {
    const { id } = useParams();
    const item = logementId(id);

    if (!item) {
        return <Erreur />;
    }

    return (
        <div className="logement">
            <Slideshow pictures={item.pictures} />
            <div className="div1">
                <h2>{item.title}</h2>
                <div className="host">
                    <p className="name">{item.host.name}</p>
                    <img src={item.host.picture} alt={item.host.name} />
                </div>
            </div>
            <h3 className="location">{item.location}</h3>
            <div className="div2">
                <div className="tags">
                    {item.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
                <p className="rating">{item.rating}</p>
            </div>
            <div className="div3">
                <div className="dropdown">
                    <p>Description</p>
                    <span>{item.description}</span>
                </div>
                <div className="equipments">
                    <p>Equipments:</p>
                    <ul>
                        {item.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Data;