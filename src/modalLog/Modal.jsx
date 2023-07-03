import './Modal.css';
import { useContext, useState } from 'react';
import { MyContext } from '../MyContext';



const Modal = ()=> {

    const[open, setOpen] = useState(false);

    const { log, setLog } = useContext(MyContext);

    const modal = (el, index)=> {
        return(
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={()=> setOpen(false)} className="close">&times;</span>
                    <h1>Operacja nr {index}</h1>
                    <p>Typ operacji: {el.action}</p>
                    <p>Czas zdarzenia: {el.datatime.toString()}
                    </p>
                </div>
            </div>
        );
    }

    return(
        <div>
            <ul className="list">
            {log.map((el,index)=>{
                return(
                    <li key={index} className="list-li">
                        <p>{index} -- {el.action}</p>
                        <button id="myBtn" onClick={()=> setOpen(true)}>Open Log</button>
                        {open?modal(el, index):null}
                    </li>
                )
            })}
            </ul>
            
            
        </div>
    )
};

export default Modal;