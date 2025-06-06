import { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Searchbar from './components/Searchbar';

function App() {
  const [productos, setProductos] = useState([]);
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    console.log('🛒 Lista actualizada:', productos);
  }, [productos]);

  const agregarProducto = useCallback((nuevo) => {
    setProductos(prev => [...prev, nuevo]);
  }, []);

  const eliminarProducto = useCallback((id) => {
    const confirmacion = window.confirm("¿Eliminar este producto?");
    if (confirmacion) {
      setProductos(prev => prev.filter(p => p.id !== id));
    }
  }, []);

  const productosFiltrados = useMemo(() => {
    return productos.filter((prod) =>
      prod.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
      prod.id.toString().includes(busqueda)
    );
  }, [productos, busqueda]);

  return (
    <div>
      <h1>Gestor de productos</h1>

      <Searchbar onSearch={setBusqueda} />

      <ProductForm
        agregarProducto={agregarProducto}
        productoEnEdicion={productoEnEdicion}
        setProductoEnEdicion={setProductoEnEdicion}
        productos={productos}
        setProductos={setProductos}
      />

      <ProductList
        productos={productosFiltrados}
        setProductoEnEdicion={setProductoEnEdicion}
        setProductos={setProductos}
        eliminarProducto={eliminarProducto}
      />
    </div>
  );
}

export default App;