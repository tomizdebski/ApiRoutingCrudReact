import { Link } from "react-router-dom";
import "./Navigation.css"

export const Navigation = () => {


  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/shops">Shops</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
  }