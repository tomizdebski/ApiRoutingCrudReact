import { useContext, useEffect } from 'react';
import { MyContext } from '../MyContext';
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {

  const { log, setLog } = useContext(MyContext);

  useEffect(()=>{
    setLog(prev => [...prev, {
      action: `mount component navigation `,
      datatime: new Date()
    }])
  },[]);

  return (
    <header>
      <nav>
        <ul onClick={(e)=> setLog(prev => [...prev, {
                                  action: `click link ${e.target} `,
                                  datatime: new Date()
                                }])}>
          <li ><Link to="/">Home</Link></li>
          <li ><Link to="/profiles">Profiles</Link></li>
          <li ><Link to="/shops">Shops</Link></li>
          <li ><Link to="/profiles/add">Zarejestruj</Link></li>
          <li ><Link to="login">Zaloguj</Link></li>
        </ul>
      </nav>
    </header>
  );
  }
  export default Navigation;