import { add, updateId, deleteId } from "../crud"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const ProfilId = ()=> {

    let { id } = useParams();
    console.log(id);
    const[profil, setProfil] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/Profiles/${id}`)
        .then(res => {
          const person = res.data;
          setProfil(person);
        })
      }
    , []);
    console.log(profil);
    



    return(
        <>
        <h1>Profil osoby</h1>
        <p>Id: {profil.id}</p>
        <p>Imię: {profil.firstName}</p>
        <p>Nazwisko: {profil.lastName}</p>
        <p>Email: {profil.email}</p>
        </>
    )
}
export default ProfilId;