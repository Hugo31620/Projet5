import React from 'react';
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Slideshow from "../components/Carrousel";
import Erreur from "../pages/Erreur";
import Rating from "../components/Rating";
import Dropdown from '../components/Dropdown';

const logementId = (id) => {
    return data.find((data) => data.id === id);
}

const Data = () => {
    const { id } = useParams();
    const item = logementId(id);

    if (!item) {
        return <Erreur />;
    }

    const someItem = {
        rating: 4,
        tags: ["tag1", "tag2"]
    };

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
            <Rating item={someItem} />
            <Dropdown item={item} />
        </div>
    );
};

export default Data;