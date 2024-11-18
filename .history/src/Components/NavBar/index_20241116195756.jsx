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
                <li>
                    <NavLink
                    to='/'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/electronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/furnitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    
                        correo@gmail.com
                    
                </li>
                <li>
                    <NavLink
                    to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/my-account'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='/signin'>
                        Sig In
                    </NavLink>
                </li>
                <li>
                carrito
                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar;