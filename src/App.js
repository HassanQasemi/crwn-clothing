import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Route, Switch,Link} from 'react-router-dom';
import shopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (

    <div>
        <Header/>

        <Switch>
            <Route exact={true} path ='/' component ={HomePage} />
            <Route path = '/shop' component={shopPage}/>
        </Switch>
      
    </div>
  );
}

export default App;
