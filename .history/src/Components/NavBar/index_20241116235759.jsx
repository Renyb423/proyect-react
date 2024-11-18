import { NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <>
      <nav className="flex justify-between items-center z-10 fixed w-full py-5 px-8 text-sm font-light">
        <ul className="flex justify-between items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/">ShopReny</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/clothes"
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/electronics"
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/furnitures"
            >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/toys"
            >
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/others"
            >
              Others
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-between items-center gap-3">
          <li>correo@gmail.com</li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/my-orders"
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/my-account"
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/signin"
            >
              Sig In
            </NavLink>
          </li>
          <li>carrito</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
