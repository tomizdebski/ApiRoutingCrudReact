import { add, updateId, deleteId } from "../crud"
import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { useId } from "react";
import "./ProfilAdd.css"
import { useFormik } from 'formik';

 

 export const Login = () => {

    const url = "http://localhost:3000/Profiles"
    

    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(res => {
          setUsers(res.data);
        })
      }
    , []);

    console.log(users);

   const formik = useFormik({

     initialValues: {

       email: '',

       password: '',


     },

     onSubmit: values => {
        console.log("uzytkownicy",users);
        console.log("zalogowany", values);  
        users.map(el => {
          if(el.email === values.email && el.password === values.password){
            console.log("zostałeś zalogowany");
          }else console.log("niestety nie zostałeś zalogowany");
        });
     },

   });

   return (

     <form className="form" onSubmit={formik.handleSubmit}>

       <label  className="item" htmlFor="email">Email</label>

       <input className="item" 

         id="email"

         name="email"

         type="email"

         onChange={formik.handleChange}

         value={formik.values.name}

       />

 

       <label  className="item" htmlFor="password">Hasło</label>

       <input className="item"

         id="password"

         name="password"

         type="password"

         onChange={formik.handleChange}

         value={formik.values.lastName}

       />

       <button className="item" type="submit">Zaloguj</button>

     </form>

   );

 };