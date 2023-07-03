import { useContext, useEffect } from 'react';
import { MyContext } from './MyContext';


export default function useLogger(name) {

    const { log, setLog } = useContext(MyContext);

    useEffect(()=>{
      setLog(prev => [...prev, {
        action: name,
        datatime: new Date()
      }])
    },[]);

}