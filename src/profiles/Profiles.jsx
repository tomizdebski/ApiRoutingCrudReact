import { redirect, Link, useNavigate } from "react-router-dom";
import { add, updateId, deleteId } from "../crud"
import axios from "axios"
import { useState, useEffect, useContext } from "react";
import { MyContext } from '../MyContext';
import "./Profiles.css"
//import { Img } from "@chakra-ui/react";


const Profiles = ()=> {


    const[profiles, setProfiles] = useState([]);
    const navigate = useNavigate();

    const { log, setLog } = useContext(MyContext);

    useEffect(()=>{
      setLog(prev => [...prev, {
        action: `mount component Profiles `,
        datatime: new Date()
      }])
    },[]);

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
        <div onClick={(e)=> {
            console.log(e.target.innerText);
            setLog(prev => [...prev, {
            action: `click element ${e.target.innerText} `,
            datatime: new Date()
          }])}}>
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
        </div>
        
    )
}
export default Profiles;