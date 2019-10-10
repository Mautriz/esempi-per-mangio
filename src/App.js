import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Where from './Pages/Where';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dove-siamo" component={Where} />
            </Switch>
        </div>
    );
}

export default App;
