import { NavLink } from "react-router-dom";

const NavBar = () => {

    let activeStyle =  {
        
    }

    return(
        <>
        <nav className="flex justify-between items-center z-10 fixed w-full py-5 px-8 text-sm font-light">
            <ul className="flex justify-between items-center gap-3">
                <li className="font-semibold text-lg">
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
            <ul className="flex justify-between items-center gap-3">
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