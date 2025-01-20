import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProdutosLista = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/produtos')  
      .then((response) => {
        setProdutos(response.data);  
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
            {produto.images && produto.images.length > 0 ? (
              produto.images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Imagem do produto ${produto.nome}`} 
                  style={{ width: '200px', height: 'auto', margin: '10px 0' }} 
                />
              ))
            ) : (
              <p>Sem imagens disponíveis</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProdutosLista;
