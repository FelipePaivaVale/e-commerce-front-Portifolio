import './App.css';
import ProdutosLista from './components/Produtos/ProdutosLista';
import ProdutoForm from  './components/Produtos/produtoform';
const App = () => {
  return (
    <div>
      <ProdutosLista />
      <ProdutoForm />
    </div>
  );
};

export default App;