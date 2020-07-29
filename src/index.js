import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/Categoria';
const Pagina404 = () => (<div>Página 404</div>)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path ="/cadastro/video" component= {CadastroVideo}/> 
      <Route path="/" component={App} exact/>
      <Route path ="/cadastro/categoria" component= {CadastroCategoria}/> 
      <Route component = {()=> (<div> página 404</div>)} />
    </Switch>
  </BrowserRouter>,
document.getElementById('root')
);