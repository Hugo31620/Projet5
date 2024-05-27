import React from 'react';
import PropTypes from 'prop-types';
import rating_active from "../assets/images/star-active.png";
import rating_inactive from "../assets/images/star-inactive.png";

const Rating = ({ item }) => {
    if (!item) {
        return null; // Ou affichez un message d'erreur, une valeur par défaut, etc.
    }

    const maxRating = 5;
    const stars = [];

    for (let i = 0; i < maxRating; i++) {
        if (i < item.rating) {
            stars.push(<img key={i} src={rating_active} alt="active star" className="star" />);
        } else {
            stars.push(<img key={i} src={rating_inactive} alt="inactive star" className="star" />);
        }
    }

    return (
        <div className="div2">
            <div className="tags">
                {item.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
            <div className="rating">
                {stars}
            </div>
        </div>
    );
}

Rating.propTypes = {
    item: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default Rating;