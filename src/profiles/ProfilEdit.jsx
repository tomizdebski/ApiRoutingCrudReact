import { updateId } from "../crud"
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import { MyContext, ModalContext } from '../MyContext';



const ProfilEdit = ()=> {


    let { id } = useParams();

    const url = `http://localhost:3000/Profiles/`;

    const { log, setLog } = useContext(MyContext);

    const {modal, setModal} = useContext(ModalContext);

    useEffect(()=>{
      setLog(prev => [...prev, {
        action: `mount component profilEdit `,
        datatime: new Date()
      }])
    },[]);

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
   
        onSubmit: values => {
            
           saveProfil(values,id,url);
           setModal(true);
           setLog(prev => [...prev, {
            action: `edit profile ${id} `,
            datatime: new Date()
          }])
        },
      });

      const saveProfil = (values, id, url) => {
        if(modal){
            updateId(values,id,url);
        }
      }


      const modalHtml = ()=> {
        return(
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={()=> setModal(false)} className="close">&times;</span>
                    <h1>Czy na pewno chcesz dokonać zmian </h1>
                    <button onClick={() => setModal(true)}>Tak</button>
                    <button onClick={() => setModal(false)}>Nie</button>
                </div>
            </div>
        );
    }

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
                    {modal?modalHtml():null}
            </form>
            
        </>
    )
}
export default ProfilEdit;