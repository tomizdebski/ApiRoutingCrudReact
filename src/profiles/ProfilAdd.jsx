import { add, } from "../crud"
import React from 'react';
import { useContext, useEffect } from 'react';
import { MyContext } from '../MyContext';
import { useId } from "react";
import "./ProfilAdd.css"
import { useFormik } from 'formik';

 

 const ProfilAdd = () => {

    const url = "http://localhost:3000/Profiles";
    let id = useId();

    const { log, setLog } = useContext(MyContext);

    useEffect(()=>{
      setLog(prev => [...prev, {
        action: `mount component profilAdd `,
        datatime: new Date()
      }])
    },[]);

   const formik = useFormik({
     initialValues: {
       firstName: '',
       lastName: '',
       email: '',
       password: '',
     },
     onSubmit: values => {
        const newValue = {
            "id": id,
            ...values};
        add(newValue,url);
        setLog(prev => [...prev, {
          action: `add profile ${newValue.id} `,
          datatime: new Date()
        }])
     },

   });

   return (

     <form className="form" onSubmit={formik.handleSubmit}>

       <label  className="item" htmlFor="firstName">First Name</label>
       <input className="item" 
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />

 

       <label  className="item" htmlFor="lastName">Last Name</label>
       <input className="item"
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />

 

       <label className="item" htmlFor="email">Email Address</label>
       <input className="item" 
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />

       <label className="item" htmlFor="password">Password</label>
       <input className="item" 
         id="password"
         name="password"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.password}
       />



 

       <button className="item" type="submit">Submit</button>

     </form>

   );

 };
 export default ProfilAdd;