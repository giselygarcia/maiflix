import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['teste']);
  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor: '#000',
  }
  const [nomeDaCategoria, setNomeDaCategoria] = useState('valoresIniciais');
    return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form style={{background: nomeDaCategoria}}onSubmit={function handleSubmit(infosDoEvento){
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          nomeDaCategoria
        ]);
      }}>
      <div>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={function funcaoHandler(infosDoEvento) {
              setNomeDaCategoria(infosDoEvento.target.value);
            }}
          />
        </label>
      </div>

      <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value={nomeDaCategoria}
            onChange={function funcaoHandler(infosDoEvento) {
              setNomeDaCategoria(infosDoEvento.target.value);
            }}
          />
        </label>
        </div>
        <div>
        <label>
          Cor:
          <input
            type="color"
            value={nomeDaCategoria}
            onChange={function funcaoHandler(infosDoEvento) {
              setNomeDaCategoria(infosDoEvento.target.value);
            }}
          />
        </label>

        </div>
        

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key ={`${categoria}${indice}`}>
              {categoria}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;