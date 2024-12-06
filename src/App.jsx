import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/Login";
import short from 'short-uuid'



const hash = short.uuid()

console.log(hash);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/:id/:correo`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
