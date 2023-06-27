import { add, updateId, deleteId } from "../crud"
import axios from "axios"
import { useState, useEffect } from "react";
import "./Profiles.css"
import { Img } from "@chakra-ui/react";


export const Profiles = ()=> {


    const[profiles, setProfiles] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/Profiles`)
        .then(res => {
          const persons = res.data;
          setProfiles(persons);
        })
      }
    , []);
    console.log(profiles)

    return(
        <>
            <h1>Wszystkie profile</h1>
            <div className="container-profil">
            {profiles?.map(el => {
                return(
                    <div className="profile">
                        <h1>{el.name}</h1>
                        <h2>{el.email}</h2>
                    </div>
                )
            })}
            </div>
        </>
        
    )
}