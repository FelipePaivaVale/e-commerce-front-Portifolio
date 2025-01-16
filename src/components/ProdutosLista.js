// src/components/ProductsList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsList = () => {
  const [produtos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/produtos')  
      .then((response) => {
        setProducts(response.data);  
        setLoading(false);          
      })
      .catch((err) => {
        setError('Erro ao carregar produtos');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>Preço: R${produto.preco}</p>
            <p>Estoque: {produto.estoque}</p>
            {/* Aqui você pode adicionar lógica para exibir as imagens, se necessário */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
