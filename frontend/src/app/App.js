import React from "react";
import Home from "../pages/home";
import Dashboard from "../pages/dashboard";
import NotFound from '../pages/session/notFound'
import { Route, Routes } from "react-router-dom";
import VehicleManage from "../pages/VehicleManage";
import AddNewVehicle from "../components/AddVehicle";
import LoginAdmin from "../pages/session/login/userLogin";
import LoginDriver from "../pages/session/login/driverLogin";
import AddNewCustomer from "../pages/Create New User";



function App() {
  return (

      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="admin">
              <Route index element={<LoginAdmin />} />
              <Route path="dashboard">
                  <Route index element={<Dashboard />} />
                  <Route path="vehicleManage" element={<VehicleManage />} />
                  <Route path="test" element={<AddNewVehicle />} />
              </Route>
          </Route>

          <Route path="driver">
              <Route index element={<LoginDriver />} />
              <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
      </Routes>

  );
}

export default App;
