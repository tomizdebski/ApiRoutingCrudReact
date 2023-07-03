
import React from 'react';
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import axios from "axios";
import { useId } from "react";
import "./ProfilAdd.css"
import { useFormik } from 'formik';

 

 const Login = () => {

    const url = "http://localhost:3000/Profiles";

    const { log, setLog } = useContext(MyContext);

    useEffect(()=>{
      setLog(prev => [...prev, {
        action: `mount component login `,
        datatime: new Date()
      }])
    },[]);


    
    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(res => {
          setUsers(res.data);
        })
      }
    , []);


   const formik = useFormik({

     initialValues: {

       email: '',

       password: '',


     },

     onSubmit: values => {
        console.log("uzytkownicy",users);
        console.log("dane logowania", values);  
        users.map(el => {
          if(el.email === values.email && el.password === values.password){
            console.log("zostałeś zalogowany");
            setLog(prev => [...prev, {
              action: `logowanie `,
              datatime: new Date()
            }])
          }else {
            setLog(prev => [...prev, {
              action: `logowanie - nieudana próba `,
              datatime: new Date()
            }])
            console.log("niestety nie zostałeś zalogowany")};
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

 export default Login;