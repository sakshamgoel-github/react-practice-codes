import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css"
const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* //* The link component is better than 'a' tag because it doesn't refresh the page  */}
            <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink> 
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/product">Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
