import { add, updateId, deleteId } from "../crud"
import React from 'react';
import { useId } from "react";


 import { useFormik } from 'formik';

 

 export const ShopAdd = () => {

    const url = "http://localhost:3000/Shops";
    

   // Note that we have to initialize ALL of fields with values. These

   // could come from props, but since we don’t want to prefill this form,

   // we just use an empty string. If we don’t do this, React will yell

   // at us.

   
   let id = useId();

   const formik = useFormik({

     initialValues: {
                    nameShop: '',
                    adressShop: '',
                    email: '',
                    telephone: '',
                    city: '',
                    zip: '',
                    photo: ''
                    },

     onSubmit: values => {
        const newValue = {
            "id": id,
            ...values};
        console.log(newValue);    

        add(newValue,url);
        
     },

   });

   return (

     <form className="form" onSubmit={formik.handleSubmit}>

       <label  className="item" htmlFor="nameShop">Nazwa sklepu</label>
       <input className="item" 
            id="nameShop"
            name="nameShop"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.nameShop}
       />

       <label  className="item" htmlFor="adressShop">Adres</label>
       <input className="item"
            id="adressShop"
            name="adressShop"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.adressShop}
       />


        <label className="item" htmlFor="telephone">Telefon</label>
        <input className="item" 
            id="telephone"
            name="telephone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.telephone}
        />

       <label className="item" htmlFor="email">Email</label>
       <input className="item" 
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
       />

        <label className="item" htmlFor="city">Miasto</label>
        <input className="item" 
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
        />

        <label className="item" htmlFor="zip">Kod pocztowy</label>
        <input className="item" 
            id="zip"
            name="zip"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.zip}
        />

        <label className="item" htmlFor="photo">Zdjęcie</label>
        <input className="item" 
            id="photo"
            name="photo"
            type="file"
            onChange={formik.handleChange}
            value={formik.values.photo}
        />

       <button className="item" type="submit">Submit</button>

     </form>

   );

 };