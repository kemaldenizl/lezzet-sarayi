import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AdminLayout from "./pages/admin/AdminLayout";
import Menu from "./pages/Menu";
import Authentication from "./pages/Authentication";
import Error from "./pages/Error";
import QRAdminPage from "./pages/admin/pages/QRAdminPage";
import User from "./pages/admin/pages/User";
import Graph from "./pages/admin/pages/Graph";
import CreateMenu from "./pages/admin/pages/CreateMenu";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route index={true} element={<QRAdminPage/>}/>
        <Route path="graphics" element={<Graph/>}/>
        <Route path="usermanage" element={<User/>}/>
        <Route path="createMenu" element={<CreateMenu/>} />
      </Route>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/authentication" element={<Authentication/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
