import React from 'react';
import {Link} from "react-router-dom";
function Header() {

    return (
        <div className="navbar bg-primary">
            <div className="flex-1">
                <Link to="/"><a className="btn btn-ghost normal-case text-xl">Template react</a></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/tools">Outil</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Header;