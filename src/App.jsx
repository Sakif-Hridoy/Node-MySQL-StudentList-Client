import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Create from "./Create";
import Read from "./Read";
import Edit from "./Edit";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/read/:id" element={<Read></Read>}></Route>
        <Route path="/edit/:id" element={<Edit></Edit>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
