import React, { useState, useCallback } from 'react';

const Searchbar = ({ onSearch }) => {
  const [termino, setTermino] = useState('');

  const handleChange = useCallback((e) => {
    const valor = e.target.value;
    setTermino(valor);
    onSearch(valor); // Actualiza el estado de búsqueda en App
  }, [onSearch]);

  return (
    <input
      type="text"
      placeholder="Buscar por ID o descripción"
      value={termino}
      onChange={handleChange}
      style={{
        padding: '8px',
        width: '100%',
        marginBottom: '1rem',
        borderRadius: '4px',
        border: '1px solid #ccc'
      }}
    />
  );
};

export default Searchbar;