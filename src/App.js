import {BrowserRouter,Routes,Route} from 'react-router-dom'

import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer.js";
import Navbar from "./components/Navbar/Navbar.js";
import CartPage from "./components/pages/CartPage/CartPage.js";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function App() {
  return (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route	path='/' element={<ItemListContainer greeting={'hola'} titulo={'titulo de app'}/>}/>
				<Route	path='/detalle'	element={<ItemDetailContainer/>}/>
				
				<Route	path='/carrito'	element={<CartPage/>}/>
			</Routes>
		</BrowserRouter>
  );
}

export default App;
