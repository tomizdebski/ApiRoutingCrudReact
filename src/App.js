import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./navigation/Navigation";
import {ProfilAdd} from "./profiles/ProfilAdd";
import { ProfilEdit } from "./profiles/ProfilEdit";
import { ProfilId } from "./profiles/ProfilId";
import { Profiles } from "./profiles/Profiles";


function App() {

  return (
    <BrowserRouter>
     <Navigation/>
      <Routes>
        <Route element={<div>Page 1</div>} path="" />
        
          <Route path="profiles">
            <Route index element={<Profiles/>}/> 
            <Route path=":id" element={<ProfilId/>}/>
            <Route path=":id/edit" element={<ProfilEdit/>}/> {/** useParams */}
            <Route path="add" element={<ProfilAdd/>}/>
          </Route>

          <Route path="shops">
            <Route index element={<div>shops</div>} />
            <Route path=":id" element={<h1>shops id</h1>} />
            <Route path="add" element={<h1>add shops</h1>} />
            <Route path=":id/edit" element={<h1>edit shops</h1>} />
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