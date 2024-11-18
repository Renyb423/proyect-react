import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <nav>
            <ul>
                <li>
                    <NavLink
                    to='/'>
                        ShopReny
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}