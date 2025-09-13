import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
            end             //make link active with NavLink
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
                 //make link active 
          >
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
