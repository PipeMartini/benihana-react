import { useState } from 'react';
import { Container } from './components/ItemListContainer';
import {Navbar} from './components/NavBar.js';
import Contador from './components/contador.js';
import ItemList from './components/itemList.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [container, setContainer] = useState('Ecommerce')
  const handleContainer = () => setContainer('Benihana Ecomerce')
  return (
    <div className="App">
        <Navbar/>
        <Container className="centrar" greeting={container} onTitle={handleContainer}/>
        <ItemList />
        <Contador />
      </div>
  );
}

export default App;
