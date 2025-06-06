const ProductList = ({ productos, setProductoEnEdicion, eliminarProducto }) => {
  const handleEditar = (producto) => {
    setProductoEnEdicion(producto);
    window.scrollTo(0, 0);
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
              <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
