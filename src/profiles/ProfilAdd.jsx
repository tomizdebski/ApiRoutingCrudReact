import { add, updateId, deleteId } from "../crud"
import React from 'react';
import { useId } from "react";
import "./ProfilAdd.css"

 import { useFormik } from 'formik';

 

 export const ProfilAdd = () => {

    const url = "http://localhost:4000/Profiles"
    

   // Note that we have to initialize ALL of fields with values. These

   // could come from props, but since we don’t want to prefill this form,

   // we just use an empty string. If we don’t do this, React will yell

   // at us.

   
   let id = useId();

   const formik = useFormik({

     initialValues: {

       firstName: '',

       lastName: '',

       email: '',

     },

     onSubmit: values => {
        const newValue = {
            "id": id,
            ...values};

        
        add(newValue,url);
        

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

 

       <button className="item" type="submit">Submit</button>

     </form>

   );

 };