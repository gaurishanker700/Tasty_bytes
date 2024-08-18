

import Login from './Authentication/Login';
import Register from './Authentication/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminMaster from './Admin/Layout/AdminMaster';
import AdminDashboard from './Admin/AdminDashboard';
import { useState } from 'react';
import Contacts from './Components/Contacts-page';
import CardPage from './Components/Card-page';
import Error from './Components/Error';
import Create_user from './Admin/Pages/Create_user/Create_user';
import Addproduct from './Admin/Pages/product/Add_product';
import Tab from './Components/Tab';
import Crousel from './Components/Crousel';
import ManageUser from './Admin/Pages/Create_user/Manage_user';
import ManageProduct from './Admin/Pages/product/Productlist';
import ManageReview from './Admin/Pages/ManageReview';
import ManageContact from './Admin/Pages/ManageContacts';
import UpdateUser from './Admin/Pages/Create_user/Updateuser';
import Updateproduct from './Admin/Pages/product/Update_product';
import AdminHeader from './Admin/Layout/AdminHeader';

function App() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="App">
      <Router>
  <Routes>
     <Route path="/" element={<Login />} /> 
    <Route path="/admin" element={<AdminMaster isActive={isActive} setIsActive={setIsActive} />}>
      <Route path="/admin" element={<AdminDashboard isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/card-page" element={<CardPage isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/create-user" element={<Create_user isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/create-product" element={<Addproduct isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/tab" element={<Tab isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/crousel" element={<Crousel isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/update-product/:_id" element={<Updateproduct isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/manage-user" element={<ManageUser isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/manage-product" element={<ManageProduct isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/manage-review" element={<ManageReview isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/manage-contact" element={<ManageContact isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/error" element={<Error isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/contact" element={<Contacts isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="/admin/update-user/:_id" element={<UpdateUser isActive={isActive} setIsActive={setIsActive} />} />
      {/* <Route path="contact" element={<Contacts isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="update-user/:_id" element={<UpdateUser isActive={isActive} setIsActive={setIsActive} />} /> 
      <Route path="add-testimonial" element={<Addtestimonial isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="testimonial-list" element={<Testimoniallist isActive={isActive} setIsActive={setIsActive} />} />
      <Route path="update-testimonial/:_id" element={<Updatetestimonial isActive={isActive} setIsActive={setIsActive} />} /> */}
    </Route>
  </Routes>
</Router>


    
    </div>
  );
}

export default App;
