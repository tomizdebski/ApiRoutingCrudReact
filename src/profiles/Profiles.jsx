import { redirect, Link, useNavigate } from "react-router-dom";
import { add, updateId, deleteId } from "../crud"
import axios from "axios"
import { useState, useEffect } from "react";
import "./Profiles.css"
//import { Img } from "@chakra-ui/react";


export const Profiles = ()=> {


    const[profiles, setProfiles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/Profiles`)
        .then(res => {
          const persons = res.data;
          setProfiles(persons);
        })
      }
    , []);
    console.log(profiles);

    const handleClickDesc = (id)=> {
        console.log(id);
        navigate(`/Profiles/${id}`);
    };

    const handleClickEdit = (id)=> {
        console.log(id);
        navigate(`/Profiles/${id}/edit`);
    };




    return(
        <>
            <h1>Wszystkie profile</h1>
            <div className="container-profil">
            {profiles?.map(el => {
                return(

                    
                    <div key={el.id} className="profile">
                        <h1>{el.firstName}</h1>
                        <h2>{el.email}</h2>
                        <button onClick={()=>handleClickDesc(el.id)}>Szczegóły</button>
                        <button onClick={()=>handleClickEdit(el.id)}>Edytuj</button>
                    </div>
                    
                )
            })}
            </div>
        </>
        
    )
}