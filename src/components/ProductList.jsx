const ProductList = ({ productos, setProductoEnEdicion, setProductos }) => {
  const handleEliminar = (id) => {
    const confirmacion = window.confirm('¿Estás seguro que querés eliminar este producto?');
    if (confirmacion) {
      const nuevaLista = productos.filter((prod) => prod.id !== id);
      setProductos(nuevaLista);
    }
  };

  const handleEditar = (producto) => {
    setProductoEnEdicion(producto);
    window.scrollTo(0, 0); // opcional: sube al formulario
  };

  return (
    <div>
      <h2>Lista de Productos</h2>

      {productos.length === 0 ? (
        <p>No hay productos cargados.</p>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <strong>{producto.descripcion}</strong> (ID: {producto.id})<br />
              Precio unitario: ${producto.precioUnitario}<br />
              Descuento: {producto.descuento}%<br />
              <strong>Precio con descuento: ${producto.precioConDescuento}</strong><br />
              Stock: {producto.stock} unidades<br />
              <button onClick={() => handleEditar(producto)}>Editar</button>
              <button onClick={() => handleEliminar(producto.id)}>Eliminar</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
