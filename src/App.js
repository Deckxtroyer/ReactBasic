import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Home from './screen/Home';
import Detail from './screen/Detail';


const App = () => {
    return(
        <BrowserRouter>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/detail">Detail</Link></li>
            </ul>

            <Switch>
                <Route path="/detail/:id"><Detail /></Route>
                <Route path="/"><Home/></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;