import { useState } from 'react';
import {Navbar} from './components/NavBar.js';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import ItemDetailContainer from './components/itemDetailContainer.js';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      <Switch> 
        <Route exact path="/">
        <ItemListContainer/>
        </Route>
        <Route path="/detail/:id">
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
      </div>
  );
}

export default App;
