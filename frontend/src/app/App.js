import React from "react";
import Home from "../pages/home";
import Dashboard from "../pages/admin/dashboard";
import NotFound from '../pages/session/notFound'
import { Route, Routes } from "react-router-dom";
import VehicleManage from "../pages/admin/VehicleManage";
import AddNewVehicle from "../components/AddVehicle";
import LoginAdmin from "../pages/session/login/adminLogin";
import LoginDriver from "../pages/session/login/driverLogin";
import VehicleType from "../pages/admin/vehicleType";
import VehicleRates from "../pages/admin/vehicleRate";
import DriverManage from "../pages/admin/driverManage";




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
                  <Route path="vehicleRates" element={<VehicleRates/>}/>
                  <Route path="vehicleType" element={<VehicleType/>}/>
                <Route path="drivermanage" element={<DriverManage/>}/>
                  {/* <Route path="employeemanage" element={<EmployeeManage/>}/>
                  <Route path="customermanage" element={<CustomerManage/>}/>*/}
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
