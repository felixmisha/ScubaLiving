import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import Appheader from './HeaderApp'
import Appfooter from './FooterApp'
import Apphome from './HomeApp'
import Appshop from './ShopApp'
import Apptravel from './TravelApp'
import Appcourse from './CourseApp'
import Appcontact from './ContactApp'
import Appabout from './AboutApp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="Scuba-wrapper">
        <Appheader />
        <Route exact path="/" Component={Apphome} />
        <Route path="/shop" Component={Appshop} />
        <Route path="/travel" Component={Apptravel} />
        <Route path="/course" Component={Appcourse} />
        <Route path="/contact" Component={Appcontact} />
        <Route path="/about" Component={Appabout} />
        <Appfooter />
      </div>
      </BrowserRouter>
    );
  }
} 

export default App;
