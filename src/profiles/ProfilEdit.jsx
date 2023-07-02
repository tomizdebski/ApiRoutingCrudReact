import { add, updateId, deleteId } from "../crud"
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';



export const ProfilEdit = ()=> {


    let { id } = useParams();

    const url = `http://localhost:3000/Profiles/`;

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
   
        onSubmit: values => {
           updateId(values,id,url);
        },
   
      });

    return(
        <>
        <h1>formularz edycji</h1>
        <p>{id}</p>

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
        </>
    )
}