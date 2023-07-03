import { useState, React, lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyContext, ModalContext } from "./MyContext";
import  Navigation  from "./navigation/Navigation";
const ProfilAdd = lazy(() => import('./profiles/ProfilAdd'));
const ProfilEdit = lazy(() => import('./profiles/ProfilEdit'));
const ProfilId = lazy(() => import('./profiles/ProfilId'));
const Profiles = lazy(() => import('./profiles/Profiles'));
const Login = lazy(() => import('./profiles/Login'));
const Shops = lazy(() => import('./shops/Shops'));
const ShopId = lazy(() => import('./shops/ShopId'));
const ShopAdd = lazy(() => import('./shops/ShopAdd'));
const ShopEdit = lazy(() => import('./shops/ShopEdit'));
const Modal = lazy(() => import('./modalLog/Modal'));


function App() {

  const [log, setLog] = useState([]);

  const [modal, setModal] = useState(false);

  

  console.log("context = ", log);



  return (
    <>
    <MyContext.Provider value={{ log, setLog }}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation/>
            <Routes>
                <Route element={<div>Page 1</div>} path="" />
                <Route element={<Login/>} path="login" />
                <Route path="profiles">
                  <Route index element={<Profiles/>}/> 
                  <Route path=":id" element={<ProfilId/>}/>
                  <Route path=":id/edit" element={<ModalContext.Provider value={{ modal, setModal }}><ProfilEdit/></ModalContext.Provider>}/> 
                  <Route path="add" element={<ProfilAdd/>}/>
                </Route>
                <Route path="shops">
                  <Route index element={<Shops/>} />
                  <Route path=":id" element={<ShopId/>} />
                  <Route path="add" element={<ShopAdd/>} />
                  <Route path=":id/edit" element={<ShopEdit/>} />
                </Route>
                <Route element={<div>404</div>} path="*"/>
            </Routes>
            <Modal/>
        </Suspense>
      </BrowserRouter>
    </MyContext.Provider>
    </>

  );
}

export default App;
/**
 * [query] = useQueryParams()
 * query.get("name")
 * localhost:3000/profiles?name=jakub&secondname=szach
 */