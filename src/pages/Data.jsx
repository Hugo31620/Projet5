import React from 'react';
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import Slideshow from "../components/Caroussel";
import Erreur from "../pages/Erreur";
import RatingHost from "../components/RatingHost";
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

    return (
        <div className="logement">
            <Slideshow pictures={item.pictures} />
            <div className='logement_1et2'>
                <div className="div1">
                    <h2>{item.title}</h2>
                    <h3 className="location">{item.location}</h3>
                    <div className="tags">
                        {item.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <RatingHost item={item} />
            </div>
            <Dropdown item={item} />
        </div>
    );
};

export default Data;