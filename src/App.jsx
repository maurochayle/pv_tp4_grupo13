import { useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
import Searchbar from './components/Searchbar'

function App() {
  const [productos, setProductos] = useState([]); //se usa para mostrar productos en ProductList, filtrar en SearchBar editar/eliminar
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);
 //se vuelve null cuando terminamos de editar o cancelar la edición
  const [busqueda, setBusqueda] = useState(''); //ingresa valor a buscar, se usa en SearchBar ProductList
  //Con estas 3 variables cubrimos lo que pide el tp, cargar productos nuevos, editarlos, buscarlos, borrarlos

  return (
   <div>
      <h1>Gestor de productos</h1>
      <Searchbar/>
      <ProductForm
        agregarProducto={(nuevo) => setProductos([...productos, nuevo])}
        productoEnEdicion={productoEnEdicion}
        setProductoEnEdicion={setProductoEnEdicion}
        productos={productos}
        setProductos={setProductos}
        />

      <ProductList 
        productos={productos}
        setProductoEnEdicion={setProductoEnEdicion}
        setProductos={setProductos}
      />

   </div>

  )
}

export default App
