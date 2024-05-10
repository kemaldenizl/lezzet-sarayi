import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Menu from "./pages/Menu";
import Authentication from "./pages/Authentication";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/authentication" element={<Authentication/>}/>
    </Routes>
  );
}

export default App;
