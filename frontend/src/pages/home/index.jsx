import React, { Component } from 'react'
import NavBar from '../../components/navBar'
import Hero from '../../components/hero'
import ListVehicle from "../../components/listVehicle";
import Footer from "../../components/footer";

 class Home extends Component {
  render() {
    return (
      <div>
 
        <NavBar/>
        <Hero/>
        <ListVehicle/>
          <Footer/>

      </div>
    )
  }
}
export default Home