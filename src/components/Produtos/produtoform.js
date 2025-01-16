import React, { useState } from 'react';
import { createProduto } from '../../api/produtosapi';
import axios from 'axios';

const ProdutoForm = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const handleImageChange = (event) => {
    setImages(event.target.files); // Armazena as imagens selecionadas
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Criar FormData para enviar dados incluindo arquivos
    const formData = new FormData();
    formData.append('produto[nome]', nome);
    formData.append('produto[descricao]', descricao);
    formData.append('produto[preco]', preco);
    formData.append('produto[estoque]', estoque);

    // Adicionar as imagens ao FormData
    for (let i = 0; i < images.length; i++) {
      formData.append('produto[images][]', images[i]);
    }

    try {
      await createProduto(formData); 
      alert('Produto registrado com sucesso!');
    } catch (error) {
      setError('Erro ao registrar produto');
    }
  };

  return (
    <div>
      <h1>Cadastrar Produto</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Descrição:</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Preço:</label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Estoque:</label>
          <input
            type="number"
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Imagens:</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            required
          />
        </div>

        <button type="submit">Registrar Produto</button>
      </form>
    </div>
  );
};

export default ProdutoForm;
