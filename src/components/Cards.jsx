import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
    return (
        data.map((item) => (
            <Link to={`/data/${item.id}`} className="cards" key={item.id}>
                <img src={item.cover} alt={item.title} />
                <h2>{item.title}</h2>
            </Link>
        ))
    );
};

Cards.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            cover: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Cards;