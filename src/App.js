import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./navigation/Navigation";
import {ProfilAdd} from "./profiles/ProfilAdd";
import { ProfilEdit } from "./profiles/ProfilEdit";
import { ProfilId } from "./profiles/ProfilId";
import { Profiles } from "./profiles/Profiles";
import { Login } from "./profiles/Login";
import { Shops } from "./shops/Shops";
import {ShopId} from "./shops/ShopId";
import {ShopAdd} from "./shops/ShopAdd";
import {ShopEdit} from "./shops/ShopEdit";




function App() {

  return (
    <BrowserRouter>
     <Navigation/>
      <Routes>
          <Route element={<div>Page 1</div>} path="" />

          <Route element={<Login/>} path="login" />
        
          <Route path="profiles">
            <Route index element={<Profiles/>}/> 
            <Route path=":id" element={<ProfilId/>}/>
            <Route path=":id/edit" element={<ProfilEdit/>}/> {/** useParams */}
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
    </BrowserRouter>
  );
}

export default App;
/**
 * [query] = useQueryParams()
 * query.get("name")
 * localhost:3000/profiles?name=jakub&secondname=szach
 */