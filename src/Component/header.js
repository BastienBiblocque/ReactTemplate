import React from 'react';
import {Link} from "react-router-dom";
import Mascotte from "../Image/Mascotte.png";
function Header() {

    return (
        <div className="navbar bg-primary">
            <div>
                <img src={Mascotte} className="h-20 pl-4" />
            </div>
            <div className="flex-1">
                <Link to="/"><a className="btn btn-ghost normal-case text-xl">Ouistiti Calcul</a></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/historique">Historique</Link></li>
                </ul>
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/stats">Statistiques</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;