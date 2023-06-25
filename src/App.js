import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./Navigation";


function App() {

  return (
    <BrowserRouter>
     <Navigation/>
      <Routes>
        <Route element={<div>Page 1</div>} path="" />
        
          <Route path="profiles">
            <Route index element={<div>Profiles</div>}/> 
            <Route path=":id" element={<h1>id</h1>}/>
            <Route path=":id/edit" element={<h1>id</h1>}/>
            <Route path=":add" element={<h1>add</h1>}/>
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