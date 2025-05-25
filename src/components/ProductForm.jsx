import {useState, useEffect} from 'react'

const ProductForm = ({ agregarProducto, productoEnEdicion, setProductoEnEdicion, productos, setProductos }) => {
  const [formData, setFormData] = useState({
    id: '',
    descripcion: '',
    precioUnitario: '',
    descuento: '',
    stock: ''
  });

  // Cargar los datos al formulario si se está editando
  useEffect(() => {
    if (productoEnEdicion) {
      setFormData({
        id: productoEnEdicion.id,
        descripcion: productoEnEdicion.descripcion,
        precioUnitario: productoEnEdicion.precioUnitario,
        descuento: productoEnEdicion.descuento,
        stock: productoEnEdicion.stock
      });
    }
  }, [productoEnEdicion]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const precioConDescuento =
      parseFloat(formData.precioUnitario) * (1 - parseFloat(formData.descuento) / 100);

    const nuevoProducto = {
      ...formData,
      id: parseInt(formData.id),
      precioUnitario: parseFloat(formData.precioUnitario),
      descuento: parseFloat(formData.descuento),
      stock: parseInt(formData.stock),
      precioConDescuento: parseFloat(precioConDescuento.toFixed(2))
    };

    if (productoEnEdicion) {
      // Editar producto existente
      const nuevaLista = productos.map((prod) =>
        prod.id === productoEnEdicion.id ? nuevoProducto : prod
      );
      setProductos(nuevaLista);
      setProductoEnEdicion(null);
    } else {
      // Agregar nuevo producto
      agregarProducto(nuevoProducto);
    }

    // Limpiar formulario
    setFormData({
      id: '',
      descripcion: '',
      precioUnitario: '',
      descuento: '',
      stock: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{productoEnEdicion ? 'Editar Producto' : 'Agregar Producto'}</h2>

      <input
        type="number"
        name="id"
        placeholder="ID"
        value={formData.id}
        onChange={handleChange}
        required
        disabled={!!productoEnEdicion}
      />
      <input
        type="text"
        name="descripcion"
        placeholder="Descripción"
        value={formData.descripcion}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="precioUnitario"
        placeholder="Precio unitario"
        value={formData.precioUnitario}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="descuento"
        placeholder="Descuento (%)"
        value={formData.descuento}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {productoEnEdicion ? 'Guardar cambios' : 'Agregar producto'}
      </button>
    </form>
  );
};

export default ProductForm;