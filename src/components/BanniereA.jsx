import banniere from "../assets/images/banniere.jpg";

const BanniereA = () => {
    return (
        <div className="banniere">
            <img src={banniere} alt="banniere" />
            <h1>Chez vous, <span className="responsive-text">partout et ailleurs</span></h1>
        </div> 
    )
}

export default BanniereA;