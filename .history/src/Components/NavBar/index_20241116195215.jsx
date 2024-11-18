import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <NavLink
                    to='/'>
                        Sho
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}