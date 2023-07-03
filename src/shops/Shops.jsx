import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Shops.css"
import useLogger from "../useLogger";


const Shops = ()=> {

    const[shops, setShops] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/Shops`)
        .then(res => {
          setShops(res.data);
        })
      }
    , []);

    console.log(shops);

    return(
        <>
        <h1>Sklepy</h1>
        <Link className="button-add" to="/shops/add">Dodaj Sklep</Link>
        {shops?.map(el => {
                return(
                    <div key={el.id} className="profile">
                        <h3>{el.nameShop}</h3>
                        <p>Adres: {el.adressShop}</p>
                        <p>Email: {el.email}</p>
                        <p>Telefon: {el.telephone}</p>
                        <p>Miasto: {el.city}</p>
                        <p>Kod pocztowy: {el.zip}</p>
                        <>Zdjęcie {el.photo}</>
                        
                    </div>
                )
            })}
        </>
    )
}

export default Shops;




 