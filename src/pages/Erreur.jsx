import { NavLink } from "react-router-dom";

const Erreur = () => {
    return (
        <div className="page_erreur">
            <div className="numero">
                <h2>404</h2>
            </div>
            <div className="erreur">
                <h3>
                    Oups! La page que vous demandez n'existe pas.
                </h3>
            </div>
            <div className="retour">
                <NavLink to ="/">
                  <p>Retourner sur la page d'acceuil</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Erreur;