import './App.css';
import ProdutosLista from './pages/Produtos/ProdutosLista';
import ProdutoForm from  './pages/Produtos/produtoform';

const App = () => {
  return (
    <div>
      <ProdutosLista />
      <ProdutoForm />
    </div>
  );
};

export default App;