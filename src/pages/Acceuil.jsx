import BanniereA from "../components/BanniereA.jsx";
import Cards from "../components/Cards.jsx";
import data from "../data/data.json";

const Acceuil = () => {
    return (
        <div className="acceuil">
            <div className="section1">
                <BanniereA />
            </div>
            <div className="section2">
                <Cards data={data}/>
            </div>
        </div>
    )
}

export default Acceuil;