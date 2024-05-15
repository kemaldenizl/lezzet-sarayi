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
import StaffLayout from "./pages/staff/StaffLayout";
import ManageOrder from "./pages/staff/pages/ManageOrder";
import Profile from "./pages/staff/pages/Profile"
import ManageStream from "./pages/staff/pages/ManageStream"
import ManageUsers from "./pages/admin/pages/ManageUsers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/admin" element={<AdminLayout/>}>
        <Route index={true} element={<QRAdminPage/>}/>
        <Route path="graphics" element={<Graph/>}/>
        <Route path="manageOrders" element={<ManageOrder/>}/>
        <Route path="createMenu" element={<CreateMenu/>} />
        <Route path="profile" element={<Profile />}/>
        <Route path="manageUser" element={<ManageUsers />}/>
        <Route path="manageStream" element = {<ManageStream />} />
      </Route>
      <Route path="/staff" element={<StaffLayout/>}>
        <Route index={true} element={<ManageOrder />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="manageStream" element = {<ManageStream />} />
      </Route>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/authentication" element={<Authentication/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}

export default App;
